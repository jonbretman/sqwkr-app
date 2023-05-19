import { getSdk } from '../generated/graphql';

export interface Options {
	authToken: string | undefined;
}

export function getAPI(options?: Options) {
	return getSdk(async (doc, vars) => {
		const headers = new Headers();

		if (options && options.authToken) {
			headers.set('Authorization', `Bearer ${options.authToken}`);
		}

		const res = await fetch('http://localhost:8000/app/graphql', {
			method: 'POST',
			body: JSON.stringify({
				query: doc.loc?.source.body,
				variables: vars
			}),
			headers
		});

		const json = await res.json();

		if (json.errors && json.errors.length > 0) {
			console.log('GraphQL Errors', json.errors);
			throw new Error('GraphQL error');
		}

		return json.data;
	});
}
