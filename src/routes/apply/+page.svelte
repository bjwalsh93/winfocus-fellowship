<script lang="ts">
	import { enhance } from '$app/forms';
	import Button from '$lib/components/Button.svelte';
	
	let submitting = $state(false);
	let success = $state(false);
	let error = $state('');
	let currentStep = $state(1);
	
	const countries = [
		'Afghanistan', 'Albania', 'Algeria', 'Argentina', 'Australia', 'Austria', 'Bangladesh',
		'Belgium', 'Brazil', 'Canada', 'Chile', 'China', 'Colombia', 'Costa Rica', 'Croatia',
		'Czech Republic', 'Denmark', 'Egypt', 'Ethiopia', 'Finland', 'France', 'Germany', 'Ghana',
		'Greece', 'Hungary', 'India', 'Indonesia', 'Iran', 'Iraq', 'Ireland', 'Israel', 'Italy',
		'Japan', 'Jordan', 'Kenya', 'Malaysia', 'Mexico', 'Morocco', 'Nepal', 'Netherlands',
		'New Zealand', 'Nigeria', 'Norway', 'Pakistan', 'Peru', 'Philippines', 'Poland', 'Portugal',
		'Romania', 'Russia', 'Saudi Arabia', 'Singapore', 'South Africa', 'South Korea', 'Spain',
		'Sri Lanka', 'Sweden', 'Switzerland', 'Taiwan', 'Thailand', 'Turkey', 'Ukraine',
		'United Arab Emirates', 'United Kingdom', 'United States', 'Vietnam', 'Other'
	];
	
	const specialties = [
		'Anesthesiology',
		'Cardiology',
		'Critical Care Medicine',
		'Emergency Medicine',
		'Family Medicine',
		'Internal Medicine',
		'Obstetrics & Gynecology',
		'Pediatrics',
		'Pulmonary Medicine',
		'Radiology',
		'Surgery',
		'Other'
	];
	
	const ultrasoundTypes = [
		'Cardiac (Echocardiography)',
		'Lung (Thoracic)',
		'Abdominal',
		'Vascular Access',
		'Musculoskeletal',
		'Obstetric',
		'Procedural Guidance',
		'FAST Exam'
	];

	const applicationChecklist = [
		'Current CV uploaded',
		'Statement of interest completed',
		'Three suggested mentors identified (1 must be local)',
		'Clinical background and POCUS experience described',
		'Commitment to educational deliverables confirmed',
		'Two letters of recommendation arranged',
		'Tuition plan and sponsorship request prepared'
	];

	function nextStep() {
		if (currentStep < 5) {
			currentStep++;
		}
	}

	function prevStep() {
		if (currentStep > 1) {
			currentStep--;
		}
	}

	function goToStep(step: number) {
		currentStep = step;
	}
</script>

<svelte:head>
	<title>Apply Now | FAWUS World Fellowship Program</title>
	<meta
		name="description"
		content="Apply to the FAWUS World Fellowship Program. Join world-class ultrasound training at Harvard Medical School."
	/>
</svelte:head>

<!-- Hero Section -->
<section class="bg-gradient-to-r from-primary to-primary-light text-white py-16">
	<div class="container-custom text-center">
		<h1 class="text-5xl font-bold mb-4">Apply to FAWUS</h1>
		<p class="text-xl text-blue-100 max-w-2xl mx-auto mb-4">
			Join the Fellowship in Advanced WINFOCUS Ultrasound and become a global leader in ultrasound education.
		</p>
		<p class="text-lg text-blue-100 max-w-2xl mx-auto mb-8">
			<strong>Program Start Date:</strong> April 1st, 2026 | <strong>Duration:</strong> 12 Months
		</p>
		<div class="bg-blue-50/20 p-6 rounded-xl max-w-2xl mx-auto">
			<h3 class="text-lg font-semibold mb-4">Application Checklist</h3>
			<div class="grid grid-cols-1 md:grid-cols-2 gap-2 text-sm text-blue-100">
				{#each applicationChecklist as item}
					<div class="flex items-center space-x-2">
						<span class="text-green-300">✓</span>
						<span>{item}</span>
					</div>
				{/each}
			</div>
		</div>
	</div>
</section>

{#if success}
	<!-- Success Message -->
	<section class="section-padding bg-white">
		<div class="container-custom max-w-2xl mx-auto text-center">
			<div class="bg-green-50 border-2 border-green-500 rounded-xl p-8">
				<div class="text-green-500 text-6xl mb-4">✓</div>
				<h2 class="text-3xl font-bold text-dark mb-4">Application Submitted Successfully!</h2>
				<p class="text-gray text-lg mb-6">
					Thank you for your interest in the FAWUS World Fellowship Program. We have received
					your application and will review it carefully.
				</p>
				<p class="text-gray mb-6">
					You will receive a confirmation email shortly at the address you provided. Our admissions
					committee will contact you within 2-3 weeks regarding the next steps.
				</p>
				<a href="/" class="btn-primary inline-block">Return to Homepage</a>
			</div>
		</div>
	</section>
{:else}
	<!-- Multi-Step Application Form -->
	<section class="section-padding bg-gray-light">
		<div class="container-custom max-w-4xl mx-auto">
			{#if error}
				<div class="bg-red-50 border-2 border-red-500 rounded-lg p-4 mb-8">
					<p class="text-red-700 font-semibold">{error}</p>
				</div>
			{/if}

			<!-- Progress Steps -->
			<div class="bg-white rounded-xl shadow-md p-6 mb-8">
				<div class="flex items-center justify-between">
					{#each [1, 2, 3, 4, 5] as step}
						<div class="flex items-center">
							<button
								onclick={() => goToStep(step)}
								class="w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold transition-all duration-200 {
									currentStep === step 
										? 'bg-primary text-white' 
										: currentStep > step 
											? 'bg-green-500 text-white' 
											: 'bg-gray-200 text-gray-600'
								}"
							>
								{step}
							</button>
							{#if step < 5}
								<div class="w-16 h-1 mx-2 {
									currentStep > step ? 'bg-green-500' : 'bg-gray-200'
								}"></div>
							{/if}
						</div>
					{/each}
				</div>
				<div class="flex justify-between mt-4 text-sm text-gray-600">
					<span>Personal Info</span>
					<span>Professional</span>
					<span>Education</span>
					<span>Experience</span>
					<span>Review</span>
				</div>
			</div>

			<form
				method="POST"
				action="?/submit"
				class="bg-white rounded-xl shadow-md p-8"
				use:enhance={() => {
					submitting = true;
					return async ({ result, update }) => {
						submitting = false;
						if (result.type === 'success') {
							success = true;
							error = '';
						} else if (result.type === 'failure') {
							error = (result.data as any)?.message || 'Failed to submit application. Please try again.';
						}
						await update();
					};
				}}
			>
				<!-- Step 1: Personal Information -->
				{#if currentStep === 1}
					<div class="mb-10">
						<h2 class="text-2xl font-bold text-dark mb-6 pb-2 border-b-2 border-primary">
							Personal Information
						</h2>
						<div class="grid grid-cols-1 md:grid-cols-2 gap-6">
							<div>
								<label for="fullName" class="block text-dark font-semibold mb-2">
									Full Name <span class="text-red-500">*</span>
								</label>
								<input
									type="text"
									id="fullName"
									name="fullName"
									required
									class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
									placeholder="Dr. John Doe"
								/>
							</div>

							<div>
								<label for="email" class="block text-dark font-semibold mb-2">
									Email Address <span class="text-red-500">*</span>
								</label>
								<input
									type="email"
									id="email"
									name="email"
									required
									class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
									placeholder="john.doe@example.com"
								/>
							</div>

							<div>
								<label for="phone" class="block text-dark font-semibold mb-2">
									Phone Number <span class="text-red-500">*</span>
								</label>
								<input
									type="tel"
									id="phone"
									name="phone"
									required
									class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
									placeholder="+1 234 567 8900"
								/>
							</div>

							<div>
								<label for="country" class="block text-dark font-semibold mb-2">
									Country of Origin <span class="text-red-500">*</span>
								</label>
								<select
									id="country"
									name="country"
									required
									class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
								>
									<option value="">Select Country</option>
									{#each countries as country}
										<option value={country}>{country}</option>
									{/each}
								</select>
							</div>
						</div>
					</div>
				{/if}

				<!-- Step 2: Professional Background -->
				{#if currentStep === 2}
					<div class="mb-10">
						<h2 class="text-2xl font-bold text-dark mb-6 pb-2 border-b-2 border-primary">
							Professional Background
						</h2>
						<div class="grid grid-cols-1 md:grid-cols-2 gap-6">
							<div>
								<label for="currentPosition" class="block text-dark font-semibold mb-2">
									Current Position/Title <span class="text-red-500">*</span>
								</label>
								<input
									type="text"
									id="currentPosition"
									name="currentPosition"
									required
									class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
									placeholder="e.g., Emergency Medicine Resident"
								/>
							</div>

							<div>
								<label for="currentInstitution" class="block text-dark font-semibold mb-2">
									Current Institution/Hospital <span class="text-red-500">*</span>
								</label>
								<input
									type="text"
									id="currentInstitution"
									name="currentInstitution"
									required
									class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
									placeholder="e.g., City General Hospital"
								/>
							</div>

							<div>
								<label for="medicalSpecialty" class="block text-dark font-semibold mb-2">
									Medical Specialty <span class="text-red-500">*</span>
								</label>
								<select
									id="medicalSpecialty"
									name="medicalSpecialty"
									required
									class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
								>
									<option value="">Select Specialty</option>
									{#each specialties as specialty}
										<option value={specialty}>{specialty}</option>
									{/each}
								</select>
							</div>

							<div>
								<label for="yearsOfPractice" class="block text-dark font-semibold mb-2">
									Years of Medical Practice <span class="text-red-500">*</span>
								</label>
								<input
									type="number"
									id="yearsOfPractice"
									name="yearsOfPractice"
									required
									min="0"
									max="50"
									class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
									placeholder="e.g., 3"
								/>
							</div>

							<div class="md:col-span-2">
								<label for="medicalLicense" class="block text-dark font-semibold mb-2">
									Medical License Number & Country <span class="text-red-500">*</span>
								</label>
								<input
									type="text"
									id="medicalLicense"
									name="medicalLicense"
									required
									class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
									placeholder="e.g., MD123456 (USA)"
								/>
							</div>
						</div>
					</div>
				{/if}

				<!-- Step 3: Education -->
				{#if currentStep === 3}
					<div class="mb-10">
						<h2 class="text-2xl font-bold text-dark mb-6 pb-2 border-b-2 border-primary">
							Education
						</h2>
						<div class="grid grid-cols-1 md:grid-cols-2 gap-6">
							<div>
								<label for="medicalSchool" class="block text-dark font-semibold mb-2">
									Medical School Name <span class="text-red-500">*</span>
								</label>
								<input
									type="text"
									id="medicalSchool"
									name="medicalSchool"
									required
									class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
									placeholder="e.g., Harvard Medical School"
								/>
							</div>

							<div>
								<label for="graduationYear" class="block text-dark font-semibold mb-2">
									Graduation Year <span class="text-red-500">*</span>
								</label>
								<input
									type="number"
									id="graduationYear"
									name="graduationYear"
									required
									min="1950"
									max="2030"
									class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
									placeholder="e.g., 2020"
								/>
							</div>

							<div class="md:col-span-2">
								<label for="additionalCertifications" class="block text-dark font-semibold mb-2">
									Additional Certifications
								</label>
								<textarea
									id="additionalCertifications"
									name="additionalCertifications"
									rows="3"
									class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
									placeholder="List any additional certifications, fellowships, or advanced training..."
								></textarea>
							</div>
						</div>
					</div>
				{/if}

				<!-- Step 4: Ultrasound Experience & Application Essays -->
				{#if currentStep === 4}
					<div class="mb-10">
						<h2 class="text-2xl font-bold text-dark mb-6 pb-2 border-b-2 border-primary">
							Ultrasound Experience & Application Essays
						</h2>
						<div class="space-y-6">
							<div>
								<label for="ultrasoundExperience" class="block text-dark font-semibold mb-2">
									Current Ultrasound Experience Level <span class="text-red-500">*</span>
								</label>
								<select
									id="ultrasoundExperience"
									name="ultrasoundExperience"
									required
									class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
								>
									<option value="">Select Level</option>
									<option value="Beginner">Beginner - Limited or no experience</option>
									<option value="Intermediate"
										>Intermediate - Regular use in clinical practice</option
									>
									<option value="Advanced">Advanced - Expert level with teaching experience</option>
								</select>
							</div>

							<div>
								<label for="priorTraining" class="block text-dark font-semibold mb-2">
									Prior Ultrasound Training/Certifications
								</label>
								<textarea
									id="priorTraining"
									name="priorTraining"
									rows="4"
									class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
									placeholder="Describe any ultrasound courses, certifications, or training you have completed..."
								></textarea>
							</div>

							<div>
								<label for="ultrasoundTypes" class="block text-dark font-semibold mb-3">
									Types of Ultrasound You Have Performed <span class="text-gray">(select all that apply)</span>
								</label>
								<div class="grid grid-cols-1 md:grid-cols-2 gap-3">
									{#each ultrasoundTypes as type}
										<label class="flex items-center space-x-3 p-3 border border-gray-300 rounded-lg hover:bg-gray-50 cursor-pointer">
											<input
												type="checkbox"
												name="ultrasoundTypes"
												value={type}
												class="w-5 h-5 text-primary focus:ring-primary"
											/>
											<span class="text-gray">{type}</span>
										</label>
									{/each}
								</div>
							</div>

							<div>
								<label for="applicationEssay1" class="block text-dark font-semibold mb-2">
									Why do you want to join this fellowship? <span class="text-red-500">*</span>
									<span class="text-gray text-sm font-normal">(500 words maximum)</span>
								</label>
								<textarea
									id="applicationEssay1"
									name="applicationEssay1"
									required
									rows="8"
									class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
									placeholder="Describe your motivation for applying, what you hope to gain, and why this fellowship is important to you..."
								></textarea>
							</div>

							<div>
								<label for="applicationEssay2" class="block text-dark font-semibold mb-2">
									How will this fellowship advance your career goals? <span class="text-red-500">*</span>
									<span class="text-gray text-sm font-normal">(300 words maximum)</span>
								</label>
								<textarea
									id="applicationEssay2"
									name="applicationEssay2"
									required
									rows="6"
									class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
									placeholder="Explain your career goals and how this fellowship will help you achieve them..."
								></textarea>
							</div>
						</div>
					</div>
				{/if}

				<!-- Step 5: Review & Submit -->
				{#if currentStep === 5}
					<div class="mb-10">
						<h2 class="text-2xl font-bold text-dark mb-6 pb-2 border-b-2 border-primary">
							Review & Submit
						</h2>
						<div class="bg-blue-50 p-6 rounded-xl mb-6">
							<h3 class="text-lg font-semibold text-dark mb-4">Application Checklist</h3>
							<div class="space-y-3">
								{#each applicationChecklist as item}
									<div class="flex items-center space-x-3">
										<input type="checkbox" class="w-5 h-5 text-primary" />
										<span class="text-gray">{item}</span>
									</div>
								{/each}
							</div>
						</div>

						<!-- Consent -->
						<div class="mb-8">
							<label class="flex items-start space-x-3 cursor-pointer">
								<input
									type="checkbox"
									name="consent"
									required
									class="w-5 h-5 text-primary focus:ring-primary mt-1"
								/>
								<span class="text-gray">
									I agree that the information provided is accurate and I consent to FAWUS and
									WINFOCUS contacting me regarding my application. <span
										class="text-red-500">*</span
									>
								</span>
							</label>
						</div>

						<!-- Submit Button -->
						<div class="text-center">
							<button
								type="submit"
								disabled={submitting}
								class="btn-primary disabled:opacity-50 disabled:cursor-not-allowed"
							>
								{submitting ? 'Submitting...' : 'Submit Application'}
							</button>
							<p class="mt-4 text-sm text-gray">
								By submitting this application, you acknowledge that all information provided is true
								and complete.
							</p>
						</div>
					</div>
				{/if}

				<!-- Navigation Buttons -->
				{#if currentStep < 5}
					<div class="flex justify-between items-center mt-8 pt-6 border-t border-gray-200">
						{#if currentStep > 1}
							<Button onclick={prevStep} variant="secondary">Previous</Button>
						{:else}
							<div></div>
						{/if}
						
						{#if currentStep < 5}
							<Button onclick={nextStep} variant="primary">Next</Button>
						{/if}
					</div>
				{/if}
			</form>
		</div>
	</section>
{/if}
