<script lang="ts">
	import FacultyCard from '$lib/components/FacultyCard.svelte';
	import { facultyMembers } from '$lib/data/faculty';
	
	// Separate program director(s) from core faculty
	const programDirectors = facultyMembers.filter((f) =>
		f.title.toLowerCase().includes('program director')
	);
	const coreFaculty = facultyMembers.filter((f) => !f.title.toLowerCase().includes('program director'));
</script>

<svelte:head>
	<title>Our Faculty | FAWUS World Fellowship Program</title>
	<meta
		name="description"
		content="Meet our world-class faculty at the FAWUS World Fellowship Program. Learn from Harvard Medical School experts in point-of-care ultrasound."
	/>
</svelte:head>

<!-- Hero Section -->
<section class="bg-gradient-to-r from-primary to-primary-light text-white py-20">
	<div class="container-custom text-center">
		<h1 class="text-5xl font-bold mb-6">Meet Our Faculty</h1>
		<p class="text-xl text-blue-100 max-w-3xl mx-auto">
			Learn from internationally recognized experts who are leading the advancement of point-of-care
			ultrasound across the globe.
		</p>
	</div>
</section>

<!-- Program Leadership -->
<section class="section-padding bg-white">
	<div class="container-custom">
		<h2 class="text-4xl font-bold text-dark text-center mb-12">Program Leadership</h2>
		<div class="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
			{#each programDirectors as director}
				<FacultyCard faculty={director} />
			{/each}
		</div>
	</div>
</section>

<!-- Core Faculty -->
<section class="section-padding bg-gray-light">
	<div class="container-custom">
		<h2 class="text-4xl font-bold text-dark text-center mb-12">Core Faculty</h2>
		<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
			{#each coreFaculty as faculty}
				<FacultyCard {faculty} />
			{/each}
		</div>
	</div>
</section>

<!-- Partner Institutions -->
<section class="section-padding bg-white">
	<div class="container-custom">
		<h2 class="text-4xl font-bold text-dark text-center mb-12">Partner Institutions</h2>
		<div class="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl mx-auto">
			<!-- WINFOCUS -->
			<div class="text-center">
				<div class="bg-primary text-white text-4xl font-bold h-32 flex items-center justify-center rounded-xl mb-6">
					WINFOCUS
				</div>
				<h3 class="text-2xl font-bold text-dark mb-4">WINFOCUS</h3>
				<p class="text-gray leading-relaxed">
					The World Interactive Network Focused On Critical UltraSound is the global leader in
					point-of-care ultrasound education, with a network spanning 176 countries and over 50,000
					members dedicated to advancing ultrasound practice worldwide.
				</p>
				<p class="mt-4">
					<a href="https://www.winfocus.org" target="_blank" rel="noopener noreferrer" class="text-primary hover:underline font-semibold">
						Visit WINFOCUS.org →
					</a>
				</p>
			</div>

			<!-- Harvard Medical School -->
			<div class="text-center">
				<div class="bg-[#A51C30] text-white text-4xl font-bold h-32 flex items-center justify-center rounded-xl mb-6">
					HARVARD
				</div>
				<h3 class="text-2xl font-bold text-dark mb-4">Harvard Medical School</h3>
				<p class="text-gray leading-relaxed">
					One of the world's most prestigious medical institutions, Harvard Medical School has been
					educating physicians and healthcare leaders for over 200 years. Our fellowship provides
					access to Harvard's teaching hospitals and world-renowned faculty.
				</p>
			</div>
		</div>

		<div class="mt-16 max-w-3xl mx-auto text-center">
			<h3 class="text-2xl font-bold text-dark mb-4">A Unique Partnership</h3>
			<p class="text-gray leading-relaxed">
			This fellowship represents an unprecedented collaboration between WINFOCUS's global network
			and Harvard's academic excellence. Fellows benefit from the best of both worlds:
			international perspective and Ivy League credentials that open doors to opportunities
			worldwide.
			</p>
		</div>
	</div>
</section>

<!-- CTA -->
<section class="section-padding bg-primary text-white">
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
