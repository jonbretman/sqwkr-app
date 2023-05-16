import { getSdk } from '../generated/graphql';

export const api = getSdk(async (doc, vars) => {
	const res = await fetch('http://localhost:8000/app/graphql', {
		method: 'POST',
		body: JSON.stringify({
			query: doc.loc?.source.body,
			variables: vars
		})
	});

	const json = await res.json();

	if (json.errors && json.errors.length > 0) {
		throw new Error('GraphQL error');
	}

	return json.data;
});
