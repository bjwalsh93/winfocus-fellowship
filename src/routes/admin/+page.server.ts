import { fail, redirect } from '@sveltejs/kit';
import { getAllApplications, type ApplicationRow } from '$lib/server/db';
import type { Actions, PageServerLoad } from './$types';

export type AdminApplication = ApplicationRow;

export const load: PageServerLoad = async ({ cookies }) => {
	const authenticated = cookies.get('admin_auth') === 'true';
	if (!authenticated) {
		return {
			authenticated: false as const,
			applications: [] as AdminApplication[],
			adminConfigured: Boolean(process.env.ADMIN_PASSWORD?.trim())
		};
	}

	const rows = getAllApplications();
	return {
		authenticated: true as const,
		applications: rows,
		adminConfigured: true
	};
};

export const actions: Actions = {
	login: async ({ request, cookies }) => {
		const expected = process.env.ADMIN_PASSWORD?.trim();
		if (!expected) {
			return fail(503, {
				message:
					'Admin access is not configured. Set ADMIN_PASSWORD in your environment (e.g. .env locally, Vercel project settings in production).'
			});
		}

		const data = await request.formData();
		const password = data.get('password');

		if (password === expected) {
			cookies.set('admin_auth', 'true', {
				path: '/admin',
				httpOnly: true,
				secure: process.env.NODE_ENV === 'production',
				sameSite: 'strict',
				maxAge: 60 * 60 * 24 * 7 // 7 days
			});
			return { success: true };
		}

		return fail(400, { message: 'Invalid password.' });
	},

	logout: async ({ cookies }) => {
		cookies.delete('admin_auth', { path: '/admin' });
		throw redirect(303, '/admin');
	}
};
