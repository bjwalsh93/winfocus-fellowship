import { fail } from '@sveltejs/kit';
import { saveApplication, getApplicationByEmail } from '$lib/server/db';
import type { Actions } from './$types';

export const actions: Actions = {
	submit: async ({ request }) => {
		const fd = await request.formData();

		const str = (key: string) => fd.get(key)?.toString().trim() ?? '';
		const num = (key: string) => {
			const v = parseInt(fd.get(key)?.toString() ?? '', 10);
			return isNaN(v) ? 0 : v;
		};
		const all = (key: string) => fd.getAll(key).map((v) => v.toString());

		const fullName = str('fullName');
		const email = str('email');
		const phone = str('phone');
		const country = str('country');
		const currentPosition = str('currentPosition');
		const currentInstitution = str('currentInstitution');
		const medicalSpecialty = str('medicalSpecialty');
		const yearsOfPractice = num('yearsOfPractice');
		const medicalLicense = str('medicalLicense');
		const medicalSchool = str('medicalSchool');
		const graduationYear = num('graduationYear');
		const additionalCertifications = str('additionalCertifications');
		const ultrasoundExperience = str('ultrasoundExperience');
		const priorTraining = str('priorTraining');
		const ultrasoundTypes = all('ultrasoundTypes');
		const applicationEssay1 = str('applicationEssay1');
		const applicationEssay2 = str('applicationEssay2');
		const consent = fd.get('consent') === 'on';

		// Validate required fields with specific messages
		const missing: string[] = [];
		if (!fullName) missing.push('Full Name');
		if (!email) missing.push('Email');
		if (email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) missing.push('valid Email address');
		if (!phone) missing.push('Phone Number');
		if (!country) missing.push('Country');
		if (!currentPosition) missing.push('Current Position');
		if (!currentInstitution) missing.push('Current Institution');
		if (!medicalSpecialty) missing.push('Medical Specialty');
		if (!medicalLicense) missing.push('Medical License');
		if (!medicalSchool) missing.push('Medical School');
		if (!graduationYear) missing.push('Graduation Year');
		if (!ultrasoundExperience) missing.push('Ultrasound Experience Level');
		if (!applicationEssay1) missing.push('Essay 1 (motivation)');
		if (!applicationEssay2) missing.push('Essay 2 (career goals)');
		if (!consent) missing.push('Consent');

		if (missing.length > 0) {
			return fail(400, {
				message: `Missing required fields: ${missing.join(', ')}.`
			});
		}

		try {
			// Warn if a duplicate email is found but still allow submission
			const existing = getApplicationByEmail(email);
			if (existing) {
				console.warn(
					`Duplicate application email: ${email} (previous ID: ${existing.id}, submitted ${existing.submitted_at})`
				);
			}

			const id = saveApplication({
				fullName,
				email,
				phone,
				country,
				currentPosition,
				currentInstitution,
				medicalSpecialty,
				yearsOfPractice,
				medicalLicense,
				medicalSchool,
				graduationYear,
				additionalCertifications,
				ultrasoundExperience,
				priorTraining,
				ultrasoundTypes,
				applicationEssay1,
				applicationEssay2
			});

			console.log(`✅ Application #${id} saved — ${fullName} <${email}>`);
			return { success: true, id };
		} catch (err: unknown) {
			console.error('Application submission error:', err);
			return fail(500, {
				message: 'An unexpected error occurred while saving your application. Please try again.'
			});
		}
	}
};
