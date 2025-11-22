import { fail, redirect } from '@sveltejs/kit';
import type { Actions, PageServerLoad } from './$types';

// Check if user is authenticated
export const load: PageServerLoad = async ({ cookies }) => {
	const authenticated = cookies.get('members_auth') === 'true';
	return { authenticated };
};

export const actions: Actions = {
	login: async ({ request, cookies }) => {
		const data = await request.formData();
		const password = data.get('password');

		// Get password from environment variable
		const correctPassword = process.env.MEMBERS_PASSWORD || 'fawus2025';

		if (password === correctPassword) {
			// Set authentication cookie (expires in 7 days)
			cookies.set('members_auth', 'true', {
				path: '/members',
				httpOnly: true,
				secure: process.env.NODE_ENV === 'production',
				sameSite: 'strict',
				maxAge: 60 * 60 * 24 * 7 // 7 days
			});

			return { success: true };
		}

		return fail(400, { message: 'Invalid password. Please try again.' });
	},

	logout: async ({ cookies }) => {
		cookies.delete('members_auth', { path: '/members' });
		throw redirect(303, '/members');
	}
};

