<script lang="ts">
	import { enhance } from '$app/forms';
	import { onMount } from 'svelte';

	const DRAFT_KEY = 'fawus-application-draft';

	// ─── All form state in one object ─────────────────────────────────────────
	// Keeping numeric fields as strings so empty inputs don't show 0.
	let form = $state({
		// Step 1
		fullName: '',
		email: '',
		phone: '',
		country: '',
		// Step 2
		currentPosition: '',
		currentInstitution: '',
		medicalSpecialty: '',
		yearsOfPractice: '',
		medicalLicense: '',
		// Step 3
		medicalSchool: '',
		graduationYear: '',
		additionalCertifications: '',
		// Step 4
		ultrasoundExperience: '',
		priorTraining: '',
		ultrasoundTypes: [] as string[],
		applicationEssay1: '',
		applicationEssay2: '',
		// Step 5
		consent: false
	});

	let currentStep = $state(1);
	let submitting = $state(false);
	let success = $state(false);
	let submitError = $state('');
	let stepError = $state('');
	let draftSaved = $state(false);
	let draftTimer: ReturnType<typeof setTimeout>;

	// ─── Static data ──────────────────────────────────────────────────────────
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
		'Anesthesiology', 'Cardiology', 'Critical Care Medicine', 'Emergency Medicine',
		'Family Medicine', 'Internal Medicine', 'Obstetrics & Gynecology', 'Pediatrics',
		'Pulmonary Medicine', 'Radiology', 'Surgery', 'Other'
	];

	const ultrasoundTypeOptions = [
		'Cardiac (Echocardiography)', 'Lung (Thoracic)', 'Abdominal', 'Vascular Access',
		'Musculoskeletal', 'Obstetric', 'Procedural Guidance', 'FAST Exam'
	];

	// ─── LocalStorage: restore on mount, save on every change ─────────────────
	onMount(() => {
		try {
			const saved = localStorage.getItem(DRAFT_KEY);
			if (saved) {
				const parsed = JSON.parse(saved);
				Object.assign(form, parsed);
			}
		} catch { /* ignore corrupt data */ }
	});

	$effect(() => {
		// Access every field so Svelte tracks them all
		const snapshot = JSON.stringify(form);
		clearTimeout(draftTimer);
		draftTimer = setTimeout(() => {
			try {
				localStorage.setItem(DRAFT_KEY, snapshot);
				draftSaved = true;
				setTimeout(() => (draftSaved = false), 2000);
			} catch { /* ignore storage errors */ }
		}, 600);
	});

	// ─── Step navigation ──────────────────────────────────────────────────────
	function validateStep(step: number): string | null {
		switch (step) {
			case 1:
				if (!form.fullName.trim()) return 'Please enter your full name.';
				if (!form.email.trim()) return 'Please enter your email address.';
				if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
					return 'Please enter a valid email address.';
				if (!form.phone.trim()) return 'Please enter your phone number.';
				if (!form.country) return 'Please select your country.';
				return null;
			case 2:
				if (!form.currentPosition.trim()) return 'Please enter your current position.';
				if (!form.currentInstitution.trim()) return 'Please enter your current institution.';
				if (!form.medicalSpecialty) return 'Please select your medical specialty.';
				if (!form.yearsOfPractice.toString().trim()) return 'Please enter years of practice.';
				if (!form.medicalLicense.trim()) return 'Please enter your medical license number.';
				return null;
			case 3:
				if (!form.medicalSchool.trim()) return 'Please enter your medical school name.';
				if (!form.graduationYear || parseInt(form.graduationYear) < 1950)
					return 'Please enter a valid graduation year (1950 or later).';
				return null;
			case 4:
				if (!form.ultrasoundExperience) return 'Please select your ultrasound experience level.';
				if (!form.applicationEssay1.trim())
					return 'Please complete Essay 1 (why you want to join).';
				if (!form.applicationEssay2.trim())
					return 'Please complete Essay 2 (career goals).';
				return null;
			default:
				return null;
		}
	}

	function nextStep() {
		const err = validateStep(currentStep);
		if (err) {
			stepError = err;
			return;
		}
		stepError = '';
		if (currentStep < 5) currentStep++;
		window.scrollTo({ top: 0, behavior: 'smooth' });
	}

	function prevStep() {
		stepError = '';
		if (currentStep > 1) currentStep--;
		window.scrollTo({ top: 0, behavior: 'smooth' });
	}

	function goToStep(step: number) {
		// Only jump backwards or to current step
		if (step <= currentStep) {
			stepError = '';
			currentStep = step;
			window.scrollTo({ top: 0, behavior: 'smooth' });
		}
	}

	function toggleUltrasoundType(type: string) {
		if (form.ultrasoundTypes.includes(type)) {
			form.ultrasoundTypes = form.ultrasoundTypes.filter((t) => t !== type);
		} else {
			form.ultrasoundTypes = [...form.ultrasoundTypes, type];
		}
	}

	const stepLabels = ['Personal Info', 'Professional', 'Education', 'Experience', 'Review'];
</script>

<svelte:head>
	<title>Apply Now | FAWUS World Fellowship Program</title>
	<meta
		name="description"
		content="Apply to the FAWUS World Fellowship Program. Join world-class ultrasound training at Harvard Medical School."
	/>
</svelte:head>

<!-- Hero -->
<section class="bg-gradient-to-r from-primary to-primary-light text-white py-10 md:py-16">
	<div class="container-custom text-center px-4">
		<h1 class="text-3xl md:text-5xl font-bold mb-3 md:mb-4">Apply to FAWUS</h1>
		<p class="text-base md:text-xl text-blue-100 max-w-2xl mx-auto mb-3">
			Join the Fellowship in Advanced WINFOCUS Ultrasound and become a global leader in ultrasound
			education.
		</p>
		<p class="text-sm md:text-lg text-blue-100 max-w-2xl mx-auto">
			<strong>Program Start:</strong> April 1, 2026 &nbsp;&middot;&nbsp;
			<strong>Duration:</strong> 12 Months
		</p>
	</div>
</section>

{#if success}
	<!-- ── Success screen ──────────────────────────────────────────────────── -->
	<section class="section-padding bg-white">
		<div class="container-custom max-w-2xl mx-auto text-center">
			<div class="bg-green-50 border-2 border-green-500 rounded-xl p-6 md:p-10">
				<div class="text-green-500 text-6xl mb-4">✓</div>
				<h2 class="text-3xl font-bold text-dark mb-4">Application Submitted!</h2>
				<p class="text-gray text-lg mb-4">
					Thank you, <strong>{form.fullName}</strong>. Your application has been received and saved.
					Our admissions committee will contact you at <strong>{form.email}</strong> within 2–3
					weeks.
				</p>
				<a href="/" class="btn-primary inline-block mt-4">Return to Homepage</a>
			</div>
		</div>
	</section>
{:else}
	<!-- ── Multi-step form ─────────────────────────────────────────────────── -->
	<section class="section-padding bg-gray-light">
		<div class="container-custom max-w-4xl mx-auto px-3 md:px-4">

			<!-- Progress indicator -->
			<div class="bg-white rounded-xl shadow-md px-4 py-4 md:p-6 mb-4 md:mb-6">
				<!-- Step circles + connectors -->
				<div class="flex items-center justify-between">
					{#each [1, 2, 3, 4, 5] as step}
						<div class="flex items-center">
							<button
								type="button"
								onclick={() => goToStep(step)}
								class="w-8 h-8 md:w-10 md:h-10 rounded-full flex items-center justify-center text-xs md:text-sm font-bold shrink-0 transition-all duration-200 {step ===
								currentStep
									? 'bg-primary text-white ring-2 ring-primary ring-offset-1'
									: step < currentStep
										? 'bg-green-500 text-white cursor-pointer hover:bg-green-600'
										: 'bg-gray-200 text-gray-400 cursor-default'}"
								disabled={step > currentStep}
								aria-label="Go to step {step}: {stepLabels[step - 1]}"
							>
								{step < currentStep ? '✓' : step}
							</button>
							{#if step < 5}
								<div
									class="h-1 mx-1 md:mx-2 flex-1 min-w-[16px] md:min-w-[40px] max-w-[40px] md:max-w-[80px] transition-all duration-300 {step <
									currentStep
										? 'bg-green-500'
										: 'bg-gray-200'}"
								></div>
							{/if}
						</div>
					{/each}
				</div>

				<!-- Step labels: abbreviated on mobile, full on md+ -->
				<div class="flex justify-between mt-2 md:mt-3">
					{#each stepLabels as label, i}
						<span
							class="text-[9px] md:text-xs leading-tight text-center transition-colors w-10 md:w-auto {i +
								1 ===
							currentStep
								? 'text-primary font-semibold'
								: i + 1 < currentStep
									? 'text-green-600'
									: 'text-gray-400'}"
						>
							<!-- Short label on mobile -->
							<span class="md:hidden">{label.split(' ')[0]}</span>
							<!-- Full label on desktop -->
							<span class="hidden md:inline">{label}</span>
						</span>
					{/each}
				</div>

				<!-- Draft saved indicator -->
				<div
					class="mt-2 text-right text-xs transition-opacity duration-500 {draftSaved
						? 'opacity-100 text-green-600'
						: 'opacity-0'}"
				>
					✓ Progress saved
				</div>
			</div>

			<!-- Step-level error banner -->
			{#if stepError}
				<div class="bg-red-50 border border-red-400 rounded-lg p-4 mb-4 text-red-700 font-medium">
					{stepError}
				</div>
			{/if}

			<!-- Submit-level error banner -->
			{#if submitError}
				<div class="bg-red-50 border border-red-400 rounded-lg p-4 mb-4 text-red-700 font-medium">
					{submitError}
				</div>
			{/if}

			<!--
				The form only needs to POST on step 5 (submit).
				use:enhance intercepts the submit and injects all $state into
				FormData so that fields hidden by {#if} are still included.
			-->
			<form
				method="POST"
				action="?/submit"
				class="bg-white rounded-xl shadow-md p-4 md:p-8"
				use:enhance={({ formData: fd }) => {
					// Inject every field from state — this is the core fix for the
					// multi-step form. DOM fields may be hidden by {#if}, so we
					// build the payload ourselves from $state.
					fd.set('fullName', form.fullName);
					fd.set('email', form.email);
					fd.set('phone', form.phone);
					fd.set('country', form.country);
					fd.set('currentPosition', form.currentPosition);
					fd.set('currentInstitution', form.currentInstitution);
					fd.set('medicalSpecialty', form.medicalSpecialty);
					fd.set('yearsOfPractice', form.yearsOfPractice);
					fd.set('medicalLicense', form.medicalLicense);
					fd.set('medicalSchool', form.medicalSchool);
					fd.set('graduationYear', form.graduationYear);
					fd.set('additionalCertifications', form.additionalCertifications);
					fd.set('ultrasoundExperience', form.ultrasoundExperience);
					fd.set('priorTraining', form.priorTraining);
					fd.delete('ultrasoundTypes');
					form.ultrasoundTypes.forEach((t) => fd.append('ultrasoundTypes', t));
					fd.set('applicationEssay1', form.applicationEssay1);
					fd.set('applicationEssay2', form.applicationEssay2);
					fd.set('consent', form.consent ? 'on' : '');

					submitting = true;
					return async ({ result, update }) => {
						submitting = false;
						if (result.type === 'success') {
							success = true;
							submitError = '';
							try {
								localStorage.removeItem(DRAFT_KEY);
							} catch { /* ignore */ }
						} else if (result.type === 'failure') {
							submitError =
								(result.data as { message?: string })?.message ??
								'Submission failed. Please try again.';
						}
						await update({ reset: false });
					};
				}}
			>
				<!-- ── Step 1: Personal Information ──────────────────────────────── -->
				{#if currentStep === 1}
					<h2 class="text-xl md:text-2xl font-bold text-dark mb-5 md:mb-6 pb-2 border-b-2 border-primary">
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
								bind:value={form.fullName}
								class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
								placeholder="Dr. Jane Smith"
							/>
						</div>

						<div>
							<label for="email" class="block text-dark font-semibold mb-2">
								Email Address <span class="text-red-500">*</span>
							</label>
							<input
								type="email"
								id="email"
								bind:value={form.email}
								class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
								placeholder="jane.smith@example.com"
							/>
						</div>

						<div>
							<label for="phone" class="block text-dark font-semibold mb-2">
								Phone Number <span class="text-red-500">*</span>
							</label>
							<input
								type="tel"
								id="phone"
								bind:value={form.phone}
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
								bind:value={form.country}
								class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
							>
								<option value="">Select Country</option>
								{#each countries as c}
									<option value={c}>{c}</option>
								{/each}
							</select>
						</div>
					</div>
				{/if}

				<!-- ── Step 2: Professional Background ───────────────────────────── -->
				{#if currentStep === 2}
					<h2 class="text-xl md:text-2xl font-bold text-dark mb-5 md:mb-6 pb-2 border-b-2 border-primary">
						Professional Background
					</h2>
					<div class="grid grid-cols-1 md:grid-cols-2 gap-6">
						<div>
							<label for="currentPosition" class="block text-dark font-semibold mb-2">
								Current Position / Title <span class="text-red-500">*</span>
							</label>
							<input
								type="text"
								id="currentPosition"
								bind:value={form.currentPosition}
								class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
								placeholder="e.g., Emergency Medicine Physician"
							/>
						</div>

						<div>
							<label for="currentInstitution" class="block text-dark font-semibold mb-2">
								Current Institution / Hospital <span class="text-red-500">*</span>
							</label>
							<input
								type="text"
								id="currentInstitution"
								bind:value={form.currentInstitution}
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
								bind:value={form.medicalSpecialty}
								class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
							>
								<option value="">Select Specialty</option>
								{#each specialties as s}
									<option value={s}>{s}</option>
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
								bind:value={form.yearsOfPractice}
								min="0"
								max="60"
								class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
								placeholder="e.g., 5"
							/>
						</div>

						<div class="md:col-span-2">
							<label for="medicalLicense" class="block text-dark font-semibold mb-2">
								Medical License Number &amp; Country <span class="text-red-500">*</span>
							</label>
							<input
								type="text"
								id="medicalLicense"
								bind:value={form.medicalLicense}
								class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
								placeholder="e.g., MD123456 (USA)"
							/>
						</div>
					</div>
				{/if}

				<!-- ── Step 3: Education ──────────────────────────────────────────── -->
				{#if currentStep === 3}
					<h2 class="text-xl md:text-2xl font-bold text-dark mb-5 md:mb-6 pb-2 border-b-2 border-primary">
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
								bind:value={form.medicalSchool}
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
								bind:value={form.graduationYear}
								min="1950"
								max="2030"
								class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
								placeholder="e.g., 2018"
							/>
						</div>

						<div class="md:col-span-2">
							<label for="additionalCertifications" class="block text-dark font-semibold mb-2">
								Additional Certifications
								<span class="text-gray-400 font-normal text-sm">(optional)</span>
							</label>
							<textarea
								id="additionalCertifications"
								bind:value={form.additionalCertifications}
								rows="3"
								class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
								placeholder="List any additional certifications, fellowships, or advanced training..."
							></textarea>
						</div>
					</div>
				{/if}

				<!-- ── Step 4: Ultrasound Experience & Essays ─────────────────────── -->
				{#if currentStep === 4}
					<h2 class="text-xl md:text-2xl font-bold text-dark mb-5 md:mb-6 pb-2 border-b-2 border-primary">
						Ultrasound Experience &amp; Application Essays
					</h2>
					<div class="space-y-6">
						<div>
							<label for="ultrasoundExperience" class="block text-dark font-semibold mb-2">
								Current Ultrasound Experience Level <span class="text-red-500">*</span>
							</label>
							<select
								id="ultrasoundExperience"
								bind:value={form.ultrasoundExperience}
								class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
							>
								<option value="">Select Level</option>
								<option value="Beginner">Beginner — Limited or no experience</option>
								<option value="Intermediate">Intermediate — Regular use in clinical practice</option>
								<option value="Advanced">Advanced — Expert level with teaching experience</option>
							</select>
						</div>

						<div>
							<label for="priorTraining" class="block text-dark font-semibold mb-2">
								Prior Ultrasound Training / Certifications
								<span class="text-gray-400 font-normal text-sm">(optional)</span>
							</label>
							<textarea
								id="priorTraining"
								bind:value={form.priorTraining}
								rows="4"
								class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
								placeholder="Describe any ultrasound courses, certifications, or training you have completed..."
							></textarea>
						</div>

						<div>
							<p class="block text-dark font-semibold mb-3">
								Types of Ultrasound You Have Performed
								<span class="text-gray-400 font-normal text-sm">(select all that apply)</span>
							</p>
							<div class="grid grid-cols-1 md:grid-cols-2 gap-3">
								{#each ultrasoundTypeOptions as type}
									<label
										class="flex items-center space-x-3 p-3 border rounded-lg cursor-pointer transition-colors {form.ultrasoundTypes.includes(
											type
										)
											? 'border-primary bg-blue-50'
											: 'border-gray-300 hover:bg-gray-50'}"
									>
										<input
											type="checkbox"
											checked={form.ultrasoundTypes.includes(type)}
											onchange={() => toggleUltrasoundType(type)}
											class="w-5 h-5 text-primary focus:ring-primary"
										/>
										<span class="text-gray-700">{type}</span>
									</label>
								{/each}
							</div>
						</div>

						<div>
							<label for="applicationEssay1" class="block text-dark font-semibold mb-2">
								Why do you want to join this fellowship? <span class="text-red-500">*</span>
								<span class="text-gray-400 font-normal text-sm">(500 words max)</span>
							</label>
							<textarea
								id="applicationEssay1"
								bind:value={form.applicationEssay1}
								rows="8"
								class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
								placeholder="Describe your motivation for applying, what you hope to gain, and why this fellowship is important to you..."
							></textarea>
							<p class="text-right text-xs text-gray-400 mt-1">
								{form.applicationEssay1.trim().split(/\s+/).filter(Boolean).length} words
							</p>
						</div>

						<div>
							<label for="applicationEssay2" class="block text-dark font-semibold mb-2">
								How will this fellowship advance your career goals? <span class="text-red-500">*</span>
								<span class="text-gray-400 font-normal text-sm">(300 words max)</span>
							</label>
							<textarea
								id="applicationEssay2"
								bind:value={form.applicationEssay2}
								rows="6"
								class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
								placeholder="Explain your career goals and how this fellowship will help you achieve them..."
							></textarea>
							<p class="text-right text-xs text-gray-400 mt-1">
								{form.applicationEssay2.trim().split(/\s+/).filter(Boolean).length} words
							</p>
						</div>
					</div>
				{/if}

				<!-- ── Step 5: Review & Submit ────────────────────────────────────── -->
				{#if currentStep === 5}
					<h2 class="text-xl md:text-2xl font-bold text-dark mb-5 md:mb-6 pb-2 border-b-2 border-primary">
						Review &amp; Submit
					</h2>
					<p class="text-gray-500 text-sm mb-6">
						Please review your application before submitting. Click <strong>Edit</strong> on any
						section to go back and make changes.
					</p>

					<div class="space-y-4 mb-8">
						<!-- Personal Info review -->
						<div class="border border-gray-200 rounded-lg overflow-hidden">
							<div class="bg-gray-50 px-4 py-3 flex justify-between items-center">
								<h3 class="font-semibold text-dark">Personal Information</h3>
								<button
									type="button"
									onclick={() => goToStep(1)}
									class="text-primary text-sm hover:underline font-medium">Edit</button
								>
							</div>
							<div class="p-4 grid grid-cols-2 gap-x-6 gap-y-3 text-sm">
								<div>
									<p class="text-gray-500 text-xs">Full Name</p>
									<p class="font-medium text-dark">{form.fullName || '—'}</p>
								</div>
								<div>
									<p class="text-gray-500 text-xs">Email</p>
									<p class="font-medium text-dark">{form.email || '—'}</p>
								</div>
								<div>
									<p class="text-gray-500 text-xs">Phone</p>
									<p class="font-medium text-dark">{form.phone || '—'}</p>
								</div>
								<div>
									<p class="text-gray-500 text-xs">Country</p>
									<p class="font-medium text-dark">{form.country || '—'}</p>
								</div>
							</div>
						</div>

						<!-- Professional review -->
						<div class="border border-gray-200 rounded-lg overflow-hidden">
							<div class="bg-gray-50 px-4 py-3 flex justify-between items-center">
								<h3 class="font-semibold text-dark">Professional Background</h3>
								<button
									type="button"
									onclick={() => goToStep(2)}
									class="text-primary text-sm hover:underline font-medium">Edit</button
								>
							</div>
							<div class="p-4 grid grid-cols-2 gap-x-6 gap-y-3 text-sm">
								<div>
									<p class="text-gray-500 text-xs">Position</p>
									<p class="font-medium text-dark">{form.currentPosition || '—'}</p>
								</div>
								<div>
									<p class="text-gray-500 text-xs">Institution</p>
									<p class="font-medium text-dark">{form.currentInstitution || '—'}</p>
								</div>
								<div>
									<p class="text-gray-500 text-xs">Specialty</p>
									<p class="font-medium text-dark">{form.medicalSpecialty || '—'}</p>
								</div>
								<div>
									<p class="text-gray-500 text-xs">Years of Practice</p>
									<p class="font-medium text-dark">
										{form.yearsOfPractice !== '' ? form.yearsOfPractice : '—'}
									</p>
								</div>
								<div class="col-span-2">
									<p class="text-gray-500 text-xs">Medical License</p>
									<p class="font-medium text-dark">{form.medicalLicense || '—'}</p>
								</div>
							</div>
						</div>

						<!-- Education review -->
						<div class="border border-gray-200 rounded-lg overflow-hidden">
							<div class="bg-gray-50 px-4 py-3 flex justify-between items-center">
								<h3 class="font-semibold text-dark">Education</h3>
								<button
									type="button"
									onclick={() => goToStep(3)}
									class="text-primary text-sm hover:underline font-medium">Edit</button
								>
							</div>
							<div class="p-4 grid grid-cols-2 gap-x-6 gap-y-3 text-sm">
								<div>
									<p class="text-gray-500 text-xs">Medical School</p>
									<p class="font-medium text-dark">{form.medicalSchool || '—'}</p>
								</div>
								<div>
									<p class="text-gray-500 text-xs">Graduation Year</p>
									<p class="font-medium text-dark">{form.graduationYear || '—'}</p>
								</div>
								{#if form.additionalCertifications}
									<div class="col-span-2">
										<p class="text-gray-500 text-xs">Additional Certifications</p>
										<p class="font-medium text-dark">{form.additionalCertifications}</p>
									</div>
								{/if}
							</div>
						</div>

						<!-- Experience review -->
						<div class="border border-gray-200 rounded-lg overflow-hidden">
							<div class="bg-gray-50 px-4 py-3 flex justify-between items-center">
								<h3 class="font-semibold text-dark">Ultrasound Experience</h3>
								<button
									type="button"
									onclick={() => goToStep(4)}
									class="text-primary text-sm hover:underline font-medium">Edit</button
								>
							</div>
							<div class="p-4 space-y-3 text-sm">
								<div>
									<p class="text-gray-500 text-xs">Experience Level</p>
									<p class="font-medium text-dark">{form.ultrasoundExperience || '—'}</p>
								</div>
								{#if form.ultrasoundTypes.length > 0}
									<div>
										<p class="text-gray-500 text-xs">Types Performed</p>
										<div class="flex flex-wrap gap-1 mt-1">
											{#each form.ultrasoundTypes as type}
												<span
													class="bg-blue-100 text-primary text-xs px-2 py-1 rounded-full"
													>{type}</span
												>
											{/each}
										</div>
									</div>
								{/if}
								<div>
									<p class="text-gray-500 text-xs">
										Essay 1 — {form.applicationEssay1.trim().split(/\s+/).filter(Boolean).length} words
									</p>
									<p class="font-medium text-dark line-clamp-2 text-gray-700">
										{form.applicationEssay1 || '—'}
									</p>
								</div>
								<div>
									<p class="text-gray-500 text-xs">
										Essay 2 — {form.applicationEssay2.trim().split(/\s+/).filter(Boolean).length} words
									</p>
									<p class="font-medium text-dark line-clamp-2 text-gray-700">
										{form.applicationEssay2 || '—'}
									</p>
								</div>
							</div>
						</div>
					</div>

					<!-- Consent -->
					<div class="mb-8 p-4 border border-gray-200 rounded-lg bg-gray-50">
						<label class="flex items-start space-x-3 cursor-pointer">
							<input
								type="checkbox"
								bind:checked={form.consent}
								class="w-5 h-5 text-primary focus:ring-primary mt-0.5 shrink-0"
							/>
							<span class="text-gray-700 text-sm">
								I confirm that the information provided is accurate and complete. I consent to FAWUS
								and WINFOCUS contacting me regarding my application and using this information for
								program administration purposes. <span class="text-red-500">*</span>
							</span>
						</label>
					</div>

					<!-- Submit -->
					<div class="text-center">
						<button
							type="submit"
							disabled={submitting || !form.consent}
							class="btn-primary disabled:opacity-50 disabled:cursor-not-allowed text-lg px-10 py-4"
						>
							{#if submitting}
								<span class="inline-flex items-center gap-2">
									<svg class="animate-spin h-5 w-5" viewBox="0 0 24 24" fill="none">
										<circle
											class="opacity-25"
											cx="12"
											cy="12"
											r="10"
											stroke="currentColor"
											stroke-width="4"
										></circle>
										<path
											class="opacity-75"
											fill="currentColor"
											d="M4 12a8 8 0 018-8v8z"
										></path>
									</svg>
									Submitting...
								</span>
							{:else}
								Submit Application
							{/if}
						</button>
						<p class="mt-3 text-xs text-gray-400">
							Your application will be saved securely. You will be contacted within 2–3 weeks.
						</p>
					</div>
				{/if}

				<!-- Navigation buttons (all steps except review) -->
				{#if currentStep < 5}
					<div class="flex justify-between items-center mt-10 pt-6 border-t border-gray-200">
						{#if currentStep > 1}
							<button
								type="button"
								onclick={prevStep}
								class="px-6 py-2.5 border border-gray-300 rounded-lg text-gray-700 font-medium hover:bg-gray-50 transition-colors"
							>
								← Previous
							</button>
						{:else}
							<div></div>
						{/if}

						<button
							type="button"
							onclick={nextStep}
							class="btn-primary px-8"
						>
							Next →
						</button>
					</div>
				{:else}
					<!-- Back button on review step -->
					<div class="flex justify-start mt-6 pt-4 border-t border-gray-200">
						<button
							type="button"
							onclick={prevStep}
							class="px-6 py-2.5 border border-gray-300 rounded-lg text-gray-700 font-medium hover:bg-gray-50 transition-colors"
						>
							← Back to Experience
						</button>
					</div>
				{/if}
			</form>
		</div>
	</section>
{/if}
