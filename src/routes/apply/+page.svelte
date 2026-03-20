<script lang="ts">
	import { enhance } from '$app/forms';
	import { onMount } from 'svelte';

	const DRAFT_KEY = 'fawus-application-fawus-v4';
	const TOTAL_STEPS = 7;

	let form = $state({
		fullName: '',
		email: '',
		countryOfResidence: '',
		isPhysician: '',
		medicalTrainingCountry: '',
		residencySpecialty: '',
		residencyInstitution: '',
		residencyDates: '',
		boardCertified: '',
		boardCertifiedDetails: '',
		currentEmployer: '',
		hopedTrainingDates: '',
		sponsorshipDescription: '',
		ultrasoundExperience: '',
		goalsMghCareer: '',
		ultrasoundInterestsAreas: '',
		winfocusMissionContribution: '',
		englishProficiency: '',
		englishExplanation: '',
		otherLanguages: '',
		consent: false
	});

	let currentStep = $state(1);
	let submitting = $state(false);
	let success = $state(false);
	let submitError = $state('');
	let stepError = $state('');
	let draftSaved = $state(false);
	let draftTimer: ReturnType<typeof setTimeout>;

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

	const englishLevels = [
		{ value: 'native', label: 'Native or bilingual English' },
		{ value: 'fluent', label: 'Fluent — full professional proficiency' },
		{ value: 'professional', label: 'Professional working proficiency' },
		{ value: 'conversational', label: 'Conversational' },
		{ value: 'limited', label: 'Limited — may need additional support' },
		{ value: 'other', label: 'Other (explain below)' }
	];

	onMount(() => {
		try {
			const saved = localStorage.getItem(DRAFT_KEY);
			if (!saved) return;
			const parsed = JSON.parse(saved) as Record<string, unknown>;
			if (parsed._v === 2 && typeof parsed.step === 'number') {
				const { _v, step, ...fields } = parsed;
				Object.assign(form, fields);
				currentStep = Math.min(TOTAL_STEPS, Math.max(1, Math.floor(step)));
			} else {
				Object.assign(form, parsed);
			}
		} catch {
			/* ignore */
		}
	});

	$effect(() => {
		const payload = {
			_v: 2 as const,
			step: currentStep,
			fullName: form.fullName,
			email: form.email,
			countryOfResidence: form.countryOfResidence,
			isPhysician: form.isPhysician,
			medicalTrainingCountry: form.medicalTrainingCountry,
			residencySpecialty: form.residencySpecialty,
			residencyInstitution: form.residencyInstitution,
			residencyDates: form.residencyDates,
			boardCertified: form.boardCertified,
			boardCertifiedDetails: form.boardCertifiedDetails,
			currentEmployer: form.currentEmployer,
			hopedTrainingDates: form.hopedTrainingDates,
			sponsorshipDescription: form.sponsorshipDescription,
			ultrasoundExperience: form.ultrasoundExperience,
			goalsMghCareer: form.goalsMghCareer,
			ultrasoundInterestsAreas: form.ultrasoundInterestsAreas,
			winfocusMissionContribution: form.winfocusMissionContribution,
			englishProficiency: form.englishProficiency,
			englishExplanation: form.englishExplanation,
			otherLanguages: form.otherLanguages,
			consent: form.consent
		};
		clearTimeout(draftTimer);
		draftTimer = setTimeout(() => {
			try {
				localStorage.setItem(DRAFT_KEY, JSON.stringify(payload));
				draftSaved = true;
				setTimeout(() => (draftSaved = false), 2000);
			} catch {
				/* ignore */
			}
		}, 600);
	});

	function validateStep(step: number): string | null {
		switch (step) {
			case 1:
				if (!form.fullName.trim()) return 'Please enter your name.';
				if (!form.email.trim()) return 'Please enter your email.';
				if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) return 'Please enter a valid email.';
				if (!form.countryOfResidence) return 'Please select your country of residence.';
				return null;
			case 2:
				if (!form.isPhysician) return 'Please indicate whether you are a physician.';
				if (!form.medicalTrainingCountry) return 'Please select the country where you received medical training.';
				return null;
			case 3:
				if (!form.residencySpecialty.trim()) return 'Please enter your residency specialty.';
				if (!form.residencyInstitution.trim()) return 'Please enter your institution of residency training.';
				if (!form.residencyDates.trim()) return 'Please enter your residency training dates.';
				if (!form.boardCertified) return 'Please indicate board certification status.';
				return null;
			case 4:
				if (!form.currentEmployer.trim()) return 'Please describe where you are currently employed.';
				if (!form.hopedTrainingDates.trim())
					return 'Please describe when you hope to train at a WINFOCUS site (dates and duration).';
				return null;
			case 5:
				if (!form.ultrasoundExperience.trim()) return 'Please describe your experience with ultrasound.';
				return null;
			case 6:
				if (!form.goalsMghCareer.trim())
					return 'Please answer question 10 (goals for a WINFOCUS Ultrasound Fellowship / your career).';
				if (!form.ultrasoundInterestsAreas.trim()) return 'Please answer question 11 (areas of interest and needs).';
				if (!form.winfocusMissionContribution.trim()) return 'Please answer question 12 (contributing to WINFOCUS).';
				if (!form.englishProficiency) return 'Please select your English proficiency.';
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
		if (currentStep < TOTAL_STEPS) currentStep++;
		window.scrollTo({ top: 0, behavior: 'smooth' });
	}

	function prevStep() {
		stepError = '';
		if (currentStep > 1) currentStep--;
		window.scrollTo({ top: 0, behavior: 'smooth' });
	}

	function goToStep(step: number) {
		if (step <= currentStep) {
			stepError = '';
			currentStep = step;
			window.scrollTo({ top: 0, behavior: 'smooth' });
		}
	}

	const stepLabels = [
		'Contact',
		'Training',
		'Residency',
		'Work & visit',
		'POCUS',
		'Goals & language',
		'Review'
	];

	const stepLabelsShort = ['1', '2', '3', '4', '5', '6', '7'];
</script>

<svelte:head>
	<title>Apply | WINFOCUS Emergency Ultrasound Fellowship (FAWUS)</title>
	<meta
		name="description"
		content="Application for the WINFOCUS Fellowship Program (FAWUS) for international scholars."
	/>
</svelte:head>

<!-- Hero -->
<section class="bg-gradient-to-r from-primary to-primary-light text-white py-10 md:py-14">
	<div class="container-custom text-center px-4">
		<p class="text-blue-100 text-sm md:text-base font-medium uppercase tracking-wide mb-2">
			International scholars
		</p>
		<h1 class="text-2xl md:text-4xl font-bold mb-3 md:mb-4 leading-tight">
			WINFOCUS Emergency Ultrasound Fellowship for International Scholars
		</h1>
		<p class="text-base md:text-lg text-blue-100 max-w-3xl mx-auto">
			Application for WINFOCUS Fellowship Program <span class="font-semibold">(FAWUS)</span>
		</p>
	</div>
</section>

{#if success}
	<section class="section-padding bg-white">
		<div class="container-custom max-w-2xl mx-auto text-center px-4">
			<div class="bg-green-50 border-2 border-green-500 rounded-xl p-6 md:p-10">
				<div class="text-green-500 text-5xl md:text-6xl mb-4">✓</div>
				<h2 class="text-2xl md:text-3xl font-bold text-dark mb-4">Application submitted</h2>
				<p class="text-gray text-lg mb-4">
					Thank you, <strong>{form.fullName}</strong>. We received your application and will contact you at
					<strong>{form.email}</strong> regarding next steps.
				</p>
				<a href="/" class="btn-primary inline-block mt-4">Return to homepage</a>
			</div>
		</div>
	</section>
{:else}
	<section class="section-padding bg-gray-light">
		<div class="container-custom max-w-4xl mx-auto px-3 md:px-4">
			<!-- Progress -->
			<div class="bg-white rounded-xl shadow-md px-3 py-4 md:p-6 mb-4 md:mb-6">
				<div class="flex items-center justify-between gap-0.5">
					{#each Array.from({ length: TOTAL_STEPS }, (_, i) => i + 1) as step}
						{@const i = step - 1}
						<div class="flex items-center min-w-0 flex-1 last:flex-none">
							<button
								type="button"
								onclick={() => goToStep(step)}
								class="w-7 h-7 md:w-9 md:h-9 shrink-0 rounded-full flex items-center justify-center text-[10px] md:text-xs font-bold transition-all {step ===
								currentStep
									? 'bg-primary text-white ring-2 ring-primary ring-offset-1'
									: step < currentStep
										? 'bg-green-500 text-white cursor-pointer hover:bg-green-600'
										: 'bg-gray-200 text-gray-400 cursor-default'}"
								disabled={step > currentStep}
								aria-label="Step {step}: {stepLabels[i]}"
							>
								{step < currentStep ? '✓' : step}
							</button>
							{#if step < TOTAL_STEPS}
								<div
									class="h-0.5 md:h-1 flex-1 min-w-[4px] mx-0.5 md:mx-1 max-w-full {step < currentStep
										? 'bg-green-500'
										: 'bg-gray-200'}"
								></div>
							{/if}
						</div>
					{/each}
				</div>
				<div class="flex justify-between mt-2 gap-1">
					{#each stepLabels as label, i}
						<span
							class="text-[8px] md:text-[10px] leading-tight text-center flex-1 min-w-0 truncate md:whitespace-normal {i +
								1 ===
							currentStep
								? 'text-primary font-semibold'
								: i + 1 < currentStep
									? 'text-green-600'
									: 'text-gray-400'}"
							title={label}
						>
							<span class="md:hidden">{stepLabelsShort[i]}</span>
							<span class="hidden md:inline">{label}</span>
						</span>
					{/each}
				</div>
				<div
					class="mt-2 text-right text-xs transition-opacity duration-500 {draftSaved
						? 'opacity-100 text-green-600'
						: 'opacity-0'}"
				>
					✓ Progress saved
				</div>
			</div>

			{#if stepError}
				<div class="bg-red-50 border border-red-400 rounded-lg p-4 mb-4 text-red-700 font-medium text-sm">
					{stepError}
				</div>
			{/if}
			{#if submitError}
				<div class="bg-red-50 border border-red-400 rounded-lg p-4 mb-4 text-red-700 font-medium text-sm">
					{submitError}
				</div>
			{/if}

			<form
				method="POST"
				action="?/submit"
				class="bg-white rounded-xl shadow-md p-4 md:p-8"
				use:enhance={({ formData: fd }) => {
					fd.set('fullName', form.fullName);
					fd.set('email', form.email);
					fd.set('countryOfResidence', form.countryOfResidence);
					fd.set('isPhysician', form.isPhysician);
					fd.set('medicalTrainingCountry', form.medicalTrainingCountry);
					fd.set('residencySpecialty', form.residencySpecialty);
					fd.set('residencyInstitution', form.residencyInstitution);
					fd.set('residencyDates', form.residencyDates);
					fd.set('boardCertified', form.boardCertified);
					fd.set('boardCertifiedDetails', form.boardCertifiedDetails);
					fd.set('currentEmployer', form.currentEmployer);
					fd.set('hopedTrainingDates', form.hopedTrainingDates);
					fd.set('sponsorshipDescription', form.sponsorshipDescription);
					fd.set('ultrasoundExperience', form.ultrasoundExperience);
					fd.set('goalsMghCareer', form.goalsMghCareer);
					fd.set('ultrasoundInterestsAreas', form.ultrasoundInterestsAreas);
					fd.set('winfocusMissionContribution', form.winfocusMissionContribution);
					fd.set('englishProficiency', form.englishProficiency);
					fd.set('englishExplanation', form.englishExplanation);
					fd.set('otherLanguages', form.otherLanguages);
					fd.set('consent', form.consent ? 'on' : '');

					submitting = true;
					return async ({ result, update }) => {
						submitting = false;
						if (result.type === 'success') {
							success = true;
							submitError = '';
							try {
								localStorage.removeItem(DRAFT_KEY);
							} catch {
								/* ignore */
							}
						} else if (result.type === 'failure') {
							submitError =
								(result.data as { message?: string })?.message ??
								'Submission failed. Please try again.';
						}
						await update({ reset: false });
					};
				}}
			>
				<!-- Step 1: Name, email, country -->
				{#if currentStep === 1}
					<h2 class="text-xl md:text-2xl font-bold text-dark mb-2 pb-2 border-b-2 border-primary">
						Questions 1–3
					</h2>
					<p class="text-sm text-gray-600 mb-6">Contact and location</p>
					<div class="space-y-6">
						<div>
							<label for="fullName" class="block font-semibold mb-2">1) Name <span class="text-red-500">*</span></label>
							<input
								id="fullName"
								type="text"
								bind:value={form.fullName}
								class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary"
								autocomplete="name"
							/>
						</div>
						<div>
							<label for="email" class="block font-semibold mb-2">2) Email <span class="text-red-500">*</span></label>
							<input
								id="email"
								type="email"
								bind:value={form.email}
								class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary"
								autocomplete="email"
							/>
						</div>
						<div>
							<label for="countryOfResidence" class="block font-semibold mb-2"
								>3) Country of residence <span class="text-red-500">*</span></label
							>
							<select
								id="countryOfResidence"
								bind:value={form.countryOfResidence}
								class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary"
							>
								<option value="">Select country</option>
								{#each countries as c}
									<option value={c}>{c}</option>
								{/each}
							</select>
						</div>
					</div>
				{/if}

				<!-- Step 2: Medical training -->
				{#if currentStep === 2}
					<h2 class="text-xl md:text-2xl font-bold text-dark mb-2 pb-2 border-b-2 border-primary">
						Question 4 — Medical training
					</h2>
					<div class="space-y-6">
						<div>
							<p class="font-semibold mb-3">
								4a) Are you a physician? <span class="text-red-500">*</span>
							</p>
							<div class="flex flex-wrap gap-4">
								<label class="flex items-center gap-2 cursor-pointer">
									<input type="radio" bind:group={form.isPhysician} value="yes" class="w-4 h-4 text-primary" />
									Yes
								</label>
								<label class="flex items-center gap-2 cursor-pointer">
									<input type="radio" bind:group={form.isPhysician} value="no" class="w-4 h-4 text-primary" />
									No
								</label>
							</div>
						</div>
						<div>
							<label for="medicalTrainingCountry" class="block font-semibold mb-2"
								>4b) In what country did you receive your medical training? <span class="text-red-500">*</span></label
							>
							<select
								id="medicalTrainingCountry"
								bind:value={form.medicalTrainingCountry}
								class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary"
							>
								<option value="">Select country</option>
								{#each countries as c}
									<option value={c}>{c}</option>
								{/each}
							</select>
						</div>
					</div>
				{/if}

				<!-- Step 3: Residency -->
				{#if currentStep === 3}
					<h2 class="text-xl md:text-2xl font-bold text-dark mb-2 pb-2 border-b-2 border-primary">
						Question 5 — Residency
					</h2>
					<div class="space-y-6">
						<div>
							<label for="residencySpecialty" class="block font-semibold mb-2"
								>5a) Specialty <span class="text-red-500">*</span></label
							>
							<input
								id="residencySpecialty"
								type="text"
								bind:value={form.residencySpecialty}
								class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary"
							/>
						</div>
						<div>
							<label for="residencyInstitution" class="block font-semibold mb-2"
								>5b) Institution of training <span class="text-red-500">*</span></label
							>
							<input
								id="residencyInstitution"
								type="text"
								bind:value={form.residencyInstitution}
								class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary"
							/>
						</div>
						<div>
							<label for="residencyDates" class="block font-semibold mb-2"
								>5c) Dates of training <span class="text-red-500">*</span></label
							>
							<input
								id="residencyDates"
								type="text"
								bind:value={form.residencyDates}
								placeholder="e.g. July 2018 – June 2021"
								class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary"
							/>
						</div>
						<div>
							<p class="font-semibold mb-3">
								5d) Are you board-certified in your field? <span class="text-red-500">*</span>
							</p>
							<div class="flex flex-wrap gap-4 mb-3">
								<label class="flex items-center gap-2 cursor-pointer">
									<input type="radio" bind:group={form.boardCertified} value="yes" class="w-4 h-4 text-primary" />
									Yes
								</label>
								<label class="flex items-center gap-2 cursor-pointer">
									<input type="radio" bind:group={form.boardCertified} value="no" class="w-4 h-4 text-primary" />
									No
								</label>
								<label class="flex items-center gap-2 cursor-pointer">
									<input
										type="radio"
										bind:group={form.boardCertified}
										value="in_progress"
										class="w-4 h-4 text-primary"
									/>
									In progress / eligible
								</label>
							</div>
							<label for="boardCertifiedDetails" class="block text-sm text-gray-600 mb-1"
								>Details (e.g. board name, country, expected date)</label
							>
							<textarea
								id="boardCertifiedDetails"
								bind:value={form.boardCertifiedDetails}
								rows="2"
								class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary"
								placeholder="Optional"
							></textarea>
						</div>
					</div>
				{/if}

				<!-- Step 4: Employment & visit -->
				{#if currentStep === 4}
					<h2 class="text-xl md:text-2xl font-bold text-dark mb-2 pb-2 border-b-2 border-primary">
						Questions 6–7
					</h2>
					<div class="space-y-6">
						<div>
							<label for="currentEmployer" class="block font-semibold mb-2"
								>6) Where are you currently employed? <span class="text-red-500">*</span></label
							>
							<textarea
								id="currentEmployer"
								bind:value={form.currentEmployer}
								rows="4"
								class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary"
							></textarea>
						</div>
						<div>
							<label for="hopedTrainingDates" class="block font-semibold mb-2"
								>7) When are you hoping to come train at a WINFOCUS site? Describe possible dates and duration of
								training. <span class="text-red-500">*</span></label
							>
							<textarea
								id="hopedTrainingDates"
								bind:value={form.hopedTrainingDates}
								rows="5"
								class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary"
							></textarea>
						</div>
					</div>
				{/if}

				<!-- Step 5: Sponsorship & ultrasound -->
				{#if currentStep === 5}
					<h2 class="text-xl md:text-2xl font-bold text-dark mb-2 pb-2 border-b-2 border-primary">
						Questions 8–9
					</h2>
					<div class="space-y-6">
						<div>
							<label for="sponsorshipDescription" class="block font-semibold mb-2"
								>8) Are you sponsored by any grant, institution, or government? Please describe.</label
							>
							<p class="text-sm text-gray-500 mb-2">If none, write &ldquo;None&rdquo; or &ldquo;N/A&rdquo;.</p>
							<textarea
								id="sponsorshipDescription"
								bind:value={form.sponsorshipDescription}
								rows="5"
								class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary"
							></textarea>
						</div>
						<div>
							<label for="ultrasoundExperience" class="block font-semibold mb-2"
								>9) What is your experience with ultrasound? <span class="text-red-500">*</span></label
							>
							<textarea
								id="ultrasoundExperience"
								bind:value={form.ultrasoundExperience}
								rows="8"
								class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary"
							></textarea>
						</div>
					</div>
				{/if}

				<!-- Step 6: Goals & language -->
				{#if currentStep === 6}
					<h2 class="text-xl md:text-2xl font-bold text-dark mb-2 pb-2 border-b-2 border-primary">
						Questions 10–13
					</h2>
					<div class="space-y-6">
						<div>
							<label for="goalsMghCareer" class="block font-semibold mb-2"
								>10) What are your goals of pursuing a WINFOCUS Ultrasound Fellowship? How does it help you in your
								future career? <span class="text-red-500">*</span></label
							>
							<textarea
								id="goalsMghCareer"
								bind:value={form.goalsMghCareer}
								rows="6"
								class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary"
							></textarea>
						</div>
						<div>
							<label for="ultrasoundInterestsAreas" class="block font-semibold mb-2"
								>11) There are many aspects of ultrasound training, including scanning, teaching, research, and
								administration. Please describe what you believe to be your areas of interest and needs.
								<span class="text-red-500">*</span></label
							>
							<textarea
								id="ultrasoundInterestsAreas"
								bind:value={form.ultrasoundInterestsAreas}
								rows="6"
								class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary"
							></textarea>
						</div>
						<div>
							<label for="winfocusMissionContribution" class="block font-semibold mb-2"
								>12) How do you see yourself contributing to the mission of WINFOCUS? <span class="text-red-500"
									>*</span
								></label
							>
							<textarea
								id="winfocusMissionContribution"
								bind:value={form.winfocusMissionContribution}
								rows="6"
								class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary"
							></textarea>
						</div>
						<div>
							<p class="font-semibold mb-2">
								13) English ability and other languages <span class="text-red-500">*</span>
							</p>
							<p class="text-sm text-gray-600 mb-3">
								Which best describes your ability to speak and understand English? Add any additional explanation if
								necessary.
							</p>
							<div class="space-y-2 mb-4">
								{#each englishLevels as opt}
									<label
										class="flex items-start gap-3 p-3 border rounded-lg cursor-pointer {form.englishProficiency ===
										opt.value
											? 'border-primary bg-blue-50'
											: 'border-gray-200 hover:bg-gray-50'}"
									>
										<input
											type="radio"
											bind:group={form.englishProficiency}
											value={opt.value}
											class="w-4 h-4 text-primary mt-1 shrink-0"
										/>
										<span class="text-sm">{opt.label}</span>
									</label>
								{/each}
							</div>
							<label for="englishExplanation" class="block text-sm font-medium mb-1">Additional explanation</label>
							<textarea
								id="englishExplanation"
								bind:value={form.englishExplanation}
								rows="3"
								class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary mb-4"
								placeholder="Optional (e.g. test scores, clinical experience in English)"
							></textarea>
							<label for="otherLanguages" class="block font-semibold mb-2">What other languages do you speak?</label>
							<textarea
								id="otherLanguages"
								bind:value={form.otherLanguages}
								rows="2"
								class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary"
								placeholder="List languages; if none beyond English, write &ldquo;None&rdquo;"
							></textarea>
						</div>
					</div>
				{/if}

				<!-- Step 7: Review -->
				{#if currentStep === 7}
					<h2 class="text-xl md:text-2xl font-bold text-dark mb-4 pb-2 border-b-2 border-primary">Review & submit</h2>
					<p class="text-sm text-gray-600 mb-6">
						Please confirm your answers. Use <strong>Edit</strong> to go back to a section.
					</p>

					<div class="space-y-4 text-sm">
						<div class="border rounded-lg p-4">
							<div class="flex justify-between items-start mb-2">
								<h3 class="font-semibold">1–3 · Contact</h3>
								<button type="button" class="text-primary text-sm font-medium" onclick={() => goToStep(1)}>Edit</button>
							</div>
							<p><span class="text-gray-500">Name</span> — {form.fullName || '—'}</p>
							<p><span class="text-gray-500">Email</span> — {form.email || '—'}</p>
							<p><span class="text-gray-500">Country</span> — {form.countryOfResidence || '—'}</p>
						</div>
						<div class="border rounded-lg p-4">
							<div class="flex justify-between items-start mb-2">
								<h3 class="font-semibold">4 · Medical training</h3>
								<button type="button" class="text-primary text-sm font-medium" onclick={() => goToStep(2)}>Edit</button>
							</div>
							<p><span class="text-gray-500">Physician</span> — {form.isPhysician || '—'}</p>
							<p><span class="text-gray-500">Medical training country</span> — {form.medicalTrainingCountry || '—'}</p>
						</div>
						<div class="border rounded-lg p-4">
							<div class="flex justify-between items-start mb-2">
								<h3 class="font-semibold">5 · Residency</h3>
								<button type="button" class="text-primary text-sm font-medium" onclick={() => goToStep(3)}>Edit</button>
							</div>
							<p><span class="text-gray-500">Specialty</span> — {form.residencySpecialty || '—'}</p>
							<p><span class="text-gray-500">Institution</span> — {form.residencyInstitution || '—'}</p>
							<p><span class="text-gray-500">Dates</span> — {form.residencyDates || '—'}</p>
							<p><span class="text-gray-500">Board-certified</span> — {form.boardCertified || '—'}</p>
							{#if form.boardCertifiedDetails}
								<p class="whitespace-pre-wrap mt-1">{form.boardCertifiedDetails}</p>
							{/if}
						</div>
						<div class="border rounded-lg p-4">
							<div class="flex justify-between items-start mb-2">
								<h3 class="font-semibold">6–7 · Employment & visit</h3>
								<button type="button" class="text-primary text-sm font-medium" onclick={() => goToStep(4)}>Edit</button>
							</div>
							<p class="whitespace-pre-wrap"><span class="text-gray-500">Employed</span><br />{form.currentEmployer || '—'}</p>
							<p class="whitespace-pre-wrap mt-2"><span class="text-gray-500">Training plans</span><br />{form.hopedTrainingDates || '—'}</p>
						</div>
						<div class="border rounded-lg p-4">
							<div class="flex justify-between items-start mb-2">
								<h3 class="font-semibold">8–9 · Sponsorship & ultrasound</h3>
								<button type="button" class="text-primary text-sm font-medium" onclick={() => goToStep(5)}>Edit</button>
							</div>
							<p class="whitespace-pre-wrap">{form.sponsorshipDescription || '—'}</p>
							<p class="whitespace-pre-wrap mt-2 text-gray-800">{form.ultrasoundExperience || '—'}</p>
						</div>
						<div class="border rounded-lg p-4">
							<div class="flex justify-between items-start mb-2">
								<h3 class="font-semibold">10–13 · Goals & language</h3>
								<button type="button" class="text-primary text-sm font-medium" onclick={() => goToStep(6)}>Edit</button>
							</div>
							<p class="text-gray-500 font-medium mt-2">10) WINFOCUS Fellowship goals / career</p>
							<p class="whitespace-pre-wrap">{form.goalsMghCareer || '—'}</p>
							<p class="text-gray-500 font-medium mt-2">11) Interests & needs</p>
							<p class="whitespace-pre-wrap">{form.ultrasoundInterestsAreas || '—'}</p>
							<p class="text-gray-500 font-medium mt-2">12) WINFOCUS mission</p>
							<p class="whitespace-pre-wrap">{form.winfocusMissionContribution || '—'}</p>
							<p class="text-gray-500 font-medium mt-2">13) English</p>
							<p>{form.englishProficiency || '—'}</p>
							{#if form.englishExplanation}
								<p class="whitespace-pre-wrap mt-1">{form.englishExplanation}</p>
							{/if}
							<p class="text-gray-500 font-medium mt-2">Other languages</p>
							<p>{form.otherLanguages || '—'}</p>
						</div>
					</div>

					<div class="mt-8 p-4 border rounded-lg bg-gray-50">
						<label class="flex items-start gap-3 cursor-pointer">
							<input type="checkbox" bind:checked={form.consent} class="w-5 h-5 text-primary mt-0.5 shrink-0" />
							<span class="text-sm text-gray-700">
								I confirm the information is accurate to the best of my knowledge and I consent to WINFOCUS / FAWUS
								using it to process this application. <span class="text-red-500">*</span>
							</span>
						</label>
					</div>

					<div class="text-center mt-8">
						<button
							type="submit"
							disabled={submitting || !form.consent}
							class="btn-primary disabled:opacity-50 disabled:cursor-not-allowed text-lg px-10 py-4"
						>
							{submitting ? 'Submitting…' : 'Submit application'}
						</button>
					</div>
				{/if}

				{#if currentStep < TOTAL_STEPS}
					<div class="flex justify-between items-center mt-10 pt-6 border-t border-gray-200">
						{#if currentStep > 1}
							<button
								type="button"
								onclick={prevStep}
								class="px-5 py-2.5 border border-gray-300 rounded-lg text-gray-700 font-medium hover:bg-gray-50"
							>
								← Previous
							</button>
						{:else}
							<div></div>
						{/if}
						<button type="button" onclick={nextStep} class="btn-primary px-8">Next →</button>
					</div>
				{:else}
					<div class="flex justify-start mt-6 pt-4 border-t border-gray-200">
						<button
							type="button"
							onclick={prevStep}
							class="px-5 py-2.5 border border-gray-300 rounded-lg text-gray-700 font-medium hover:bg-gray-50"
						>
							← Back
						</button>
					</div>
				{/if}
			</form>
		</div>
	</section>
{/if}
