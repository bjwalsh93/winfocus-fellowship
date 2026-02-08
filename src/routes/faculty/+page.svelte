<script lang="ts">
	import { facultyMembers } from '$lib/data/faculty';
	
	// Separate faculty by role for better visual hierarchy
	const programDirector = facultyMembers.find((f) =>
		f.title.toLowerCase().startsWith('program director')
	);
	
	// All other faculty go in Core Faculty section
	const coreFaculty = facultyMembers.filter((f) => f !== programDirector);
	
	// Function to format bio - allow 4-5 lines without truncation
	function formatBio(bio: string): string {
		// Don't truncate - just return the full bio
		// The CSS will handle line clamping if needed, but we want full sentences
		return bio;
	}
</script>

<svelte:head>
	<title>Our Faculty | FAWUS World Fellowship Program</title>
	<meta
		name="description"
		content="Meet our world-class faculty at the FAWUS World Fellowship Program. Learn from Harvard Medical School experts in point-of-care ultrasound."
	/>
</svelte:head>

<!-- Page Header -->
<section class="bg-gradient-to-r from-primary to-primary-light text-white py-20">
	<div class="container-custom text-center">
		<h1 class="text-5xl font-bold mb-6">Meet Our Faculty</h1>
		<p class="text-xl text-blue-100 max-w-3xl mx-auto">
			Learn from internationally recognized experts who are leading the advancement of point-of-care
			ultrasound across the globe.
		</p>
	</div>
</section>

<!-- Program Director - Editorial Style -->
{#if programDirector}
	<section class="bg-white">
		<div class="container-custom max-w-[1100px]">
			<div class="grid md:grid-cols-[280px_1fr] gap-12 md:gap-16 py-16">
				<!-- Photo Section -->
				<div class="mx-auto md:mx-0">
					<img
						src={programDirector.imageUrl}
						alt={programDirector.name}
						class="w-full max-w-[280px] aspect-[3/4] object-cover object-top rounded-xl shadow-2xl"
					/>
				</div>
				
				<!-- Content Section -->
				<div class="text-dark">
					<span class="inline-block bg-[#00A8E1] text-white text-xs font-bold px-4 py-1.5 rounded-full mb-3 uppercase tracking-wider">
						Program Leadership
					</span>
					<h2 class="text-4xl md:text-5xl font-bold mb-2">{programDirector.name} <span class="inline-block" title={programDirector.country}>{programDirector.countryFlag}</span></h2>
					<p class="text-[#00A8E1] font-semibold text-xl md:text-2xl mb-2">{programDirector.title}</p>
					<p class="text-gray-600 text-sm mb-1">{programDirector.credentials}</p>
					<p class="text-gray-600 text-sm mb-5 italic">{programDirector.institution}</p>
					<p class="text-gray-700 leading-relaxed text-base mb-5">{formatBio(programDirector.bio)}</p>
					<div class="flex flex-wrap gap-2">
						{#each programDirector.specialties as specialty}
							<span class="bg-blue-50 text-blue-700 text-xs font-medium px-3.5 py-1.5 rounded-full">
								{specialty}
							</span>
						{/each}
					</div>
				</div>
			</div>
		</div>
	</section>
{/if}

<!-- Core Faculty - Editorial Style -->
{#if coreFaculty.length > 0}
	<section class="bg-gray-50">
		<div class="container-custom max-w-[1100px]">
			<div class="pt-16 pb-5 border-b-4 border-[#00A8E1] mb-10">
			<h2 class="text-3xl md:text-4xl font-bold text-dark mb-2">Global Faculty Mentors</h2>
			<p class="text-gray-600">
				Expert educators and clinicians dedicated to advancing ultrasound education worldwide
			</p>
			</div>
			
			{#each coreFaculty as faculty, index}
				<div class="grid md:grid-cols-[200px_1fr] gap-10 py-12 border-b border-gray-300 {index === coreFaculty.length - 1 ? 'border-b-0' : ''}">
					<!-- Photo -->
					<div class="mx-auto md:mx-0">
						<img
							src={faculty.imageUrl}
							alt={faculty.name}
							class="w-full max-w-[200px] aspect-[3/4] object-cover object-top rounded-lg"
						/>
					</div>
					
					<!-- Content -->
					<div>
						<h3 class="text-2xl md:text-3xl font-bold text-dark mb-2">{faculty.name} <span class="inline-block" title={faculty.country}>{faculty.countryFlag}</span></h3>
						<p class="text-[#00A8E1] font-semibold text-lg mb-2">{faculty.title}</p>
						<p class="text-sm text-gray-600 mb-1">{faculty.credentials}</p>
						<p class="text-sm text-gray-600 mb-5 italic">{faculty.institution}</p>
						<p class="text-gray-700 leading-relaxed mb-5">{formatBio(faculty.bio)}</p>
						<div class="flex flex-wrap gap-2">
							{#each faculty.specialties as specialty}
								<span class="bg-blue-50 text-blue-700 text-xs font-medium px-3.5 py-1.5 rounded-full">
									{specialty}
								</span>
							{/each}
						</div>
					</div>
				</div>
			{/each}
		</div>
	</section>
{/if}

<!-- Partner Institutions -->
<section class="bg-gray-50 py-20">
	<div class="container-custom max-w-[1100px]">
		<div class="pt-0 pb-5 border-b-4 border-[#00A8E1] mb-10">
			<h2 class="text-3xl md:text-4xl font-bold text-dark mb-2">Partner Institution</h2>
		</div>
		
		<div class="max-w-2xl mx-auto">
			<!-- WINFOCUS -->
			<div class="text-center bg-white rounded-xl p-10 shadow-md">
				<div class="bg-primary text-white text-4xl font-bold h-32 flex items-center justify-center rounded-xl mb-6">
					WINFOCUS
				</div>
				<h3 class="text-2xl font-bold text-dark mb-4">WINFOCUS</h3>
				<p class="text-gray-700 leading-relaxed">
					The World Interactive Network Focused On Critical UltraSound is the global leader in
					point-of-care ultrasound education, with a network spanning 176 countries and over 50,000
					members dedicated to advancing ultrasound practice worldwide.
				</p>
				<p class="mt-6">
					<a href="https://www.winfocus.org" target="_blank" rel="noopener noreferrer" class="text-primary hover:underline font-semibold text-lg">
						Visit WINFOCUS.org →
					</a>
				</p>
			</div>
		</div>
	</div>
</section>

<!-- CTA -->
<section class="section-padding bg-gradient-to-r from-primary to-primary-light text-white">
	<div class="container-custom text-center">
		<h2 class="text-4xl font-bold mb-6">Learn from the Best</h2>
		<p class="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
			Join our fellowship and work directly with these exceptional educators to transform your
			clinical practice.
		</p>
		<a
			href="/apply"
			class="inline-block bg-white text-primary hover:bg-gray-100 font-semibold py-3 px-8 rounded-lg transition-all duration-300 transform hover:scale-105"
		>
			Apply Now
		</a>
	</div>
</section>
