<script lang="ts">
	import { enhance } from '$app/forms';
	
	let submitting = $state(false);
	let success = $state(false);
	let error = $state('');
	
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
</script>

<svelte:head>
	<title>Apply Now | WINFOCUS World Fellowship Program</title>
	<meta
		name="description"
		content="Apply to the WINFOCUS World Fellowship Program. Join world-class ultrasound training at Harvard Medical School."
	/>
</svelte:head>

<!-- Hero Section -->
<section class="bg-gradient-to-r from-primary to-primary-light text-white py-16">
	<div class="container-custom text-center">
		<h1 class="text-5xl font-bold mb-4">Apply to the Fellowship</h1>
		<p class="text-xl text-blue-100 max-w-2xl mx-auto">
			Take the first step toward transforming your career with world-class ultrasound training.
		</p>
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
					Thank you for your interest in the WINFOCUS World Fellowship Program. We have received
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
	<!-- Application Form -->
	<section class="section-padding bg-gray-light">
		<div class="container-custom max-w-4xl mx-auto">
			{#if error}
				<div class="bg-red-50 border-2 border-red-500 rounded-lg p-4 mb-8">
					<p class="text-red-700 font-semibold">{error}</p>
				</div>
			{/if}

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
							error = result.data?.message || 'Failed to submit application. Please try again.';
						}
						await update();
					};
				}}
			>
				<!-- Personal Information -->
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

				<!-- Professional Background -->
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

				<!-- Education -->
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

				<!-- Ultrasound Experience -->
				<div class="mb-10">
					<h2 class="text-2xl font-bold text-dark mb-6 pb-2 border-b-2 border-primary">
						Ultrasound Experience
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
							<label class="block text-dark font-semibold mb-3">
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
					</div>
				</div>

				<!-- Application Essays -->
				<div class="mb-10">
					<h2 class="text-2xl font-bold text-dark mb-6 pb-2 border-b-2 border-primary">
						Application Statement
					</h2>
					<div class="space-y-6">
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
							I agree that the information provided is accurate and I consent to WINFOCUS and
							Harvard Medical School contacting me regarding my application. <span
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
			</form>
		</div>
	</section>
{/if}
