import { fail, redirect } from '@sveltejs/kit';
import type { Actions } from './$types';
import { getAPI } from '$lib/api';

export const actions = {
	default: async ({ request, cookies }) => {
		const api = getAPI();

		const data = await request.formData();
		const email = data.get('email');
		const password = data.get('password');

		if (!email) {
			return fail(400, { email, emailRequired: true });
		}

		if (!password) {
			return fail(400, { email, passwordRequired: true });
		}

		let token = '';

		try {
			const res = await api.Authenticate({
				input: {
					emailPassword: {
						email: email.toString(),
						password: password.toString()
					},
					createIfNotExists: true
				}
			});
			if (!res.authenticate) {
				throw new Error('invalid response');
			}
			token = res.authenticate.token;
		} catch (err) {
			return fail(400, { email, incorrect: true });
		}

		cookies.set('authToken', token, {
			path: '/'
		});

		throw redirect(301, '/profile');
	}
} satisfies Actions;
