import { redirect } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';
import { getAPI } from '$lib/api';

export const load = (async ({ cookies }) => {
	const authToken = cookies.get('authToken');
	if (!authToken) {
		throw redirect(301, '/login');
	}

	const api = getAPI({
		authToken
	});

	const res = await api.MyProfile();

	return {
		profile: res.myProfile
	};
}) satisfies PageServerLoad;
