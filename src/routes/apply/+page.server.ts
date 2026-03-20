import { fail } from '@sveltejs/kit';
import { saveApplication, getApplicationByEmail } from '$lib/server/db';
import type { Actions } from './$types';

export const actions: Actions = {
	submit: async ({ request }) => {
		const fd = await request.formData();
		const str = (key: string) => fd.get(key)?.toString().trim() ?? '';

		const fullName = str('fullName');
		const email = str('email');
		const countryOfResidence = str('countryOfResidence');
		const isPhysician = str('isPhysician');
		const medicalTrainingCountry = str('medicalTrainingCountry');
		const residencySpecialty = str('residencySpecialty');
		const residencyInstitution = str('residencyInstitution');
		const residencyDates = str('residencyDates');
		const boardCertified = str('boardCertified');
		const boardCertifiedDetails = str('boardCertifiedDetails');
		const currentEmployer = str('currentEmployer');
		const hopedTrainingDates = str('hopedTrainingDates');
		const sponsorshipDescription = str('sponsorshipDescription');
		const ultrasoundExperience = str('ultrasoundExperience');
		const goalsMghCareer = str('goalsMghCareer');
		const ultrasoundInterestsAreas = str('ultrasoundInterestsAreas');
		const winfocusMissionContribution = str('winfocusMissionContribution');
		const englishProficiency = str('englishProficiency');
		const englishExplanation = str('englishExplanation');
		const otherLanguages = str('otherLanguages');
		const consent = fd.get('consent') === 'on';

		const missing: string[] = [];
		if (!fullName) missing.push('Name');
		if (!email) missing.push('Email');
		if (email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) missing.push('valid Email address');
		if (!countryOfResidence) missing.push('Country of residence');
		if (!isPhysician) missing.push('Physician status (question 4a)');
		if (!medicalTrainingCountry) missing.push('Country of medical training');
		if (!residencySpecialty) missing.push('Residency specialty');
		if (!residencyInstitution) missing.push('Residency institution');
		if (!residencyDates) missing.push('Residency dates');
		if (!boardCertified) missing.push('Board certification status');
		if (!currentEmployer) missing.push('Current employer');
		if (!hopedTrainingDates) missing.push('Hoped training dates / duration');
		if (!ultrasoundExperience) missing.push('Ultrasound experience (question 9)');
		if (!goalsMghCareer) missing.push('Goals for WINFOCUS Ultrasound Fellowship / career (question 10)');
		if (!ultrasoundInterestsAreas) missing.push('Areas of interest (question 11)');
		if (!winfocusMissionContribution) missing.push('WINFOCUS mission contribution (question 12)');
		if (!englishProficiency) missing.push('English proficiency (question 13)');
		if (!consent) missing.push('Consent');

		if (missing.length > 0) {
			return fail(400, {
				message: `Missing required fields: ${missing.join(', ')}.`
			});
		}

		try {
			const existing = getApplicationByEmail(email);
			if (existing) {
				console.warn(
					`Duplicate application email: ${email} (previous ID: ${existing.id}, submitted ${existing.submitted_at})`
				);
			}

			const id = saveApplication({
				fullName,
				email,
				countryOfResidence,
				isPhysician,
				medicalTrainingCountry,
				residencySpecialty,
				residencyInstitution,
				residencyDates,
				boardCertified,
				boardCertifiedDetails,
				currentEmployer,
				hopedTrainingDates,
				sponsorshipDescription,
				ultrasoundExperience,
				goalsMghCareer,
				ultrasoundInterestsAreas,
				winfocusMissionContribution,
				englishProficiency,
				englishExplanation,
				otherLanguages
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
