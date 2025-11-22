<script lang="ts">
    import Button from '$lib/components/Button.svelte';
    import FeatureCard from '$lib/components/FeatureCard.svelte';

    
</script>

<svelte:head>
	<title>FAWUS - Fellowship in Advanced WINFOCUS Ultrasound | Global Ultrasound Education</title>
	<meta
		name="description"
		content="Become a global leader in ultrasound education with FAWUS - a year-long international fellowship starting April 1st, 2026, for experienced POCUS clinicians ready to teach, lead, and build ultrasound programs worldwide."
	/>
</svelte:head>

<!-- Hero Section -->
<section
	class="relative section-padding min-h-[85vh] flex items-center justify-center text-center text-white overflow-hidden"
	style="background: linear-gradient(135deg, #0a1628 0%, #1a3a52 50%, #00586e 100%);"
>
	<!-- network pattern overlays -->
	<div class="pointer-events-none absolute inset-0 opacity-30"
		style="background-image: linear-gradient(90deg, rgba(0,168,225,0.1) 1px, transparent 1px), linear-gradient(rgba(0,168,225,0.1) 1px, transparent 1px); background-size: 100px 100px;"
	></div>

	<div class="container-custom relative z-10">
		<div class="max-w-4xl mx-auto">
			<h1 class="text-4xl md:text-6xl font-bold mb-5 leading-tight">Become a Global Leader in<br class="hidden md:block" />Ultrasound Education</h1>
			<p class="text-lg md:text-2xl mb-8 text-blue-100 max-w-3xl mx-auto">
				A year-long international fellowship starting April 1st, 2026, designed for experienced POCUS clinicians and junior faculty ready to teach, lead, and build ultrasound programs worldwide.
			</p>
			<div class="flex flex-col sm:flex-row gap-4 justify-center">
				<Button href="/apply">Apply Now</Button>
				<a href="/FAWUS-Handbook.docx" download class="btn-secondary">
					<span class="text-white">Download Handbook</span>
				</a>
				<Button href="#contact" variant="outline"><span class="text-white">Request Info</span></Button>
			</div>
		</div>
	</div>
</section>

<!-- About (gradient like provided formatting) -->
<section class="section-padding text-white" style="background: linear-gradient(135deg, #2a5aa0 0%, #00A8E1 100%);">
	<div class="container-custom">
        <div class="max-w-4xl mx-auto text-center">
            <h2 class="text-4xl font-bold mb-6">About FAWUS</h2>
            
            <p class="text-lg leading-relaxed opacity-95 max-w-3xl mx-auto mb-4">
                The Fellowship in Advanced WINFOCUS Ultrasound (FAWUS) is a year-long international program starting April 1st, 2026, for experienced POCUS clinicians who want to grow into educators, researchers, and ultrasound leaders in their communities and beyond.
            </p>
            <p class="text-lg leading-relaxed opacity-95 max-w-3xl mx-auto">
                This program supports local ultrasound faculty development, expands access to high-quality education, decentralizes WINFOCUS leadership, and strengthens sustainable outreach worldwide.
            </p>
		</div>
	</div>
</section>

<!-- Download Program Overview in Multiple Languages -->
<section class="section-padding bg-gray-light">
	<div class="container-custom">
		<div class="max-w-4xl mx-auto text-center">
			<h2 class="text-3xl font-bold text-dark mb-4">Download Program Overview</h2>
			<p class="text-gray mb-8">Get a comprehensive 1-page overview of the FAWUS program in your preferred language</p>
			
			<div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
				<a href="/one-pagers/fawus-overview-english.html" target="_blank" class="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-2 border-transparent hover:border-secondary">
					<div class="text-4xl mb-3">🇬🇧</div>
					<h3 class="font-bold text-dark mb-2">English</h3>
					<p class="text-sm text-gray">View or download PDF</p>
				</a>
				
				<a href="/one-pagers/fawus-overview-spanish.html" target="_blank" class="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-2 border-transparent hover:border-secondary">
					<div class="text-4xl mb-3">🇪🇸</div>
					<h3 class="font-bold text-dark mb-2">Español</h3>
					<p class="text-sm text-gray">Ver o descargar PDF</p>
				</a>
				
				<a href="/one-pagers/fawus-overview-french.html" target="_blank" class="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-2 border-transparent hover:border-secondary">
					<div class="text-4xl mb-3">🇫🇷</div>
					<h3 class="font-bold text-dark mb-2">Français</h3>
					<p class="text-sm text-gray">Voir ou télécharger PDF</p>
				</a>
				
				<a href="/one-pagers/fawus-overview-arabic.html" target="_blank" class="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-2 border-transparent hover:border-secondary">
					<div class="text-4xl mb-3">🇸🇦</div>
					<h3 class="font-bold text-dark mb-2">العربية</h3>
					<p class="text-sm text-gray">عرض أو تنزيل PDF</p>
				</a>
			</div>
			
			<p class="text-sm text-gray mt-6">💡 Tip: Open the page and use your browser's "Print to PDF" feature to save a copy</p>
		</div>
	</div>
</section>

<!-- Program Highlights (cards against white, pulled from hero) -->
<section class="section-padding bg-white">
	<div class="container-custom">
        <h2 class="text-4xl font-bold text-dark text-center mb-16">Program Highlights</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
			<FeatureCard
				icon="💻"
				title="Virtual Core Curriculum"
				description="Self-paced modules via WINFOCUS Academy with comprehensive ultrasound education content."
			/>
			<FeatureCard
				icon="🔬"
				title="Clinical Ultrasound Training"
				description="Log 500+ scans with local mentor review and structured feedback sessions."
			/>
			<FeatureCard
				icon="👨‍🏫"
				title="Teaching Experience"
				description="Lead webinars, lectures, workshops, and create educational video content."
			/>
		</div>
	</div>
</section>

<!-- Who Should Apply -->
<section class="section-padding bg-white">
	<div class="container-custom">
		<div class="max-w-4xl mx-auto">
			<h2 class="text-4xl font-bold text-dark text-center mb-12">Who Should Apply?</h2>
			
			<div class="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
				<div class="space-y-6">
					<h3 class="text-2xl font-bold text-dark mb-6">This program is for:</h3>
					<div class="space-y-4">
						<div class="flex items-start space-x-3">
							<div class="text-primary text-xl font-bold">✓</div>
							<div>
								<h4 class="font-semibold text-dark">Physicians & Registrars</h4>
								<p class="text-gray text-sm">EM, IM, ICU, anesthesia, pediatrics, family medicine</p>
							</div>
						</div>
						<div class="flex items-start space-x-3">
							<div class="text-primary text-xl font-bold">✓</div>
							<div>
								<h4 class="font-semibold text-dark">POCUS-Experienced Clinicians</h4>
								<p class="text-gray text-sm">With passion for education and mentorship</p>
							</div>
						</div>
						<div class="flex items-start space-x-3">
							<div class="text-primary text-xl font-bold">✓</div>
							<div>
								<h4 class="font-semibold text-dark">Education & Outreach Leaders</h4>
								<p class="text-gray text-sm">Interested in academic growth and global impact</p>
							</div>
						</div>
						<div class="flex items-start space-x-3">
							<div class="text-primary text-xl font-bold">✓</div>
							<div>
								<h4 class="font-semibold text-dark">Supported Fellows</h4>
								<p class="text-gray text-sm">With local ultrasound faculty or institutional backing</p>
							</div>
						</div>
					</div>
				</div>
				<div class="bg-blue-50 p-6 rounded-xl border-l-4 border-primary">
					<h3 class="text-xl font-bold text-dark mb-4">Eligibility Requirements</h3>
					<ul class="space-y-2 text-gray">
						<li>• Medical degree from accredited institution</li>
						<li>• Valid medical license in home country</li>
						<li>• Basic POCUS experience and regular use in practice</li>
						<li>• Proficiency in English (spoken and written)</li>
						<li>• Commitment to educational and research deliverables</li>
						<li>• Ability to identify local mentor and support faculty</li>
						<li>• Self-funded or partially sponsored (scholarships may be available)</li>
					</ul>
				</div>
			</div>
		</div>
	</div>
</section>

<!-- Program Structure removed to match screenshot -->

<!-- Stats Bar (as band) -->
<section class="py-12" style="background: linear-gradient(to right, #00a0c6 0%, #00dcff 100%);">
	<div class="container-custom">
		<div class="grid grid-cols-2 md:grid-cols-4 gap-8 text-center text-white max-w-5xl mx-auto">
			<div>
				<div class="text-5xl font-bold mb-1">12</div>
				<div class="opacity-90">Months</div>
			</div>
			<div>
				<div class="text-5xl font-bold mb-1">500+</div>
				<div class="opacity-90">Clinical Scans</div>
			</div>
			<div>
				<div class="text-5xl font-bold mb-1">30+</div>
				<div class="opacity-90">Global Faculty</div>
			</div>
			<div>
				<div class="text-5xl font-bold mb-1">176</div>
				<div class="opacity-90">Countries</div>
			</div>
		</div>
	</div>
</section>

<!-- What You'll Get removed to match screenshot -->

<!-- Apply block removed to match screenshot (CTA handled below) -->

<!-- FAQ section omitted to match screenshot; keep nav link only -->

<!-- Contact/CTA omitted here to match screenshot (footer retains contact info) -->
