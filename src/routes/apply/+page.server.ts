import { fail } from '@sveltejs/kit';
import { submitApplication } from '$lib/utils/airtable';
import type { Actions } from './$types';

export const actions: Actions = {
	submit: async ({ request }) => {
		const formData = await request.formData();

		// Extract form data
		const fullName = formData.get('fullName')?.toString() || '';
		const email = formData.get('email')?.toString() || '';
		const phone = formData.get('phone')?.toString() || '';
		const country = formData.get('country')?.toString() || '';
		const currentPosition = formData.get('currentPosition')?.toString() || '';
		const currentInstitution = formData.get('currentInstitution')?.toString() || '';
		const medicalSpecialty = formData.get('medicalSpecialty')?.toString() || '';
		const yearsOfPractice = parseInt(formData.get('yearsOfPractice')?.toString() || '0');
		const medicalLicense = formData.get('medicalLicense')?.toString() || '';
		const medicalSchool = formData.get('medicalSchool')?.toString() || '';
		const graduationYear = parseInt(formData.get('graduationYear')?.toString() || '0');
		const additionalCertifications = formData.get('additionalCertifications')?.toString() || '';
		const ultrasoundExperience = formData.get('ultrasoundExperience')?.toString() || '';
		const priorTraining = formData.get('priorTraining')?.toString() || '';
		const applicationEssay1 = formData.get('applicationEssay1')?.toString() || '';
		const applicationEssay2 = formData.get('applicationEssay2')?.toString() || '';

		// Get ultrasound types (multiple checkboxes)
		const ultrasoundTypes = formData.getAll('ultrasoundTypes').map((v) => v.toString());

		// Validate required fields
		if (
			!fullName ||
			!email ||
			!phone ||
			!country ||
			!currentPosition ||
			!currentInstitution ||
			!medicalSpecialty ||
			!yearsOfPractice ||
			!medicalLicense ||
			!medicalSchool ||
			!graduationYear ||
			!ultrasoundExperience ||
			!applicationEssay1 ||
			!applicationEssay2
		) {
			return fail(400, {
				message: 'Please fill in all required fields.'
			});
		}

		try {
			// Submit to Airtable (or just log if Airtable not configured)
			const airtableConfigured =
				process.env.AIRTABLE_API_KEY && process.env.AIRTABLE_BASE_ID;

			if (airtableConfigured) {
				await submitApplication({
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
			} else {
				// Log submission for development
				console.log('Application submitted (Airtable not configured):', {
					fullName,
					email,
					country,
					medicalSpecialty
				});
			}

			return { success: true };
		} catch (error) {
			console.error('Application submission error:', error);
			return fail(500, {
				message: 'An error occurred while submitting your application. Please try again.'
			});
		}
	}
};
