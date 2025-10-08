import Airtable from 'airtable';

export interface ApplicationData {
	fullName: string;
	email: string;
	phone: string;
	country: string;
	currentPosition: string;
	currentInstitution: string;
	medicalSpecialty: string;
	yearsOfPractice: number;
	medicalLicense: string;
	medicalSchool: string;
	graduationYear: number;
	additionalCertifications: string;
	ultrasoundExperience: string;
	priorTraining: string;
	ultrasoundTypes: string[];
	applicationEssay1: string;
	applicationEssay2: string;
}

export async function submitApplication(data: ApplicationData) {
	const apiKey = process.env.AIRTABLE_API_KEY;
	const baseId = process.env.AIRTABLE_BASE_ID;

	if (!apiKey || !baseId) {
		throw new Error('Airtable configuration missing');
	}

	const base = new Airtable({ apiKey }).base(baseId);

	try {
		const record = await base('Fellowship Applications').create({
			'Full Name': data.fullName,
			Email: data.email,
			Phone: data.phone,
			Country: data.country,
			'Current Position': data.currentPosition,
			'Current Institution': data.currentInstitution,
			'Medical Specialty': data.medicalSpecialty,
			'Years of Practice': data.yearsOfPractice,
			'Medical License': data.medicalLicense,
			'Medical School': data.medicalSchool,
			'Graduation Year': data.graduationYear,
			'Additional Certifications': data.additionalCertifications,
			'Ultrasound Experience Level': data.ultrasoundExperience,
			'Prior Training': data.priorTraining,
			'Ultrasound Types': data.ultrasoundTypes,
			'Application Essay 1': data.applicationEssay1,
			'Application Essay 2': data.applicationEssay2,
			Status: 'New'
		});

		return { success: true, id: record.id };
	} catch (error) {
		console.error('Airtable submission error:', error);
		throw new Error('Failed to submit application');
	}
}
