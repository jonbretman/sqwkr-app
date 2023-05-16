import { fail, redirect } from '@sveltejs/kit';
import type { Actions } from './$types';
import { api } from '$lib/api';

export const actions = {
	default: async ({ request, cookies }) => {
		const data = await request.formData();
		const email = data.get('email');
		const password = data.get('password');

		if (!email) {
			return fail(400, { email, emailRequired: true });
		}

		if (!password) {
			return fail(400, { email, passwordRequired: true });
		}

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

			cookies.set('authToken', res.authenticate.token, {
				path: '/'
			});

			return redirect(301, '/profile');
		} catch (err) {
			return fail(400, { email, incorrect: true });
		}
	}
} satisfies Actions;
