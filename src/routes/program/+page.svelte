<script lang="ts">
	import Button from '$lib/components/Button.svelte';
</script>

<svelte:head>
	<title>Program Details | FAWUS - Fellowship in Advanced WINFOCUS Ultrasound</title>
	<meta name="description" content="Complete details about the FAWUS program structure, curriculum, timeline, and requirements." />
</svelte:head>

<!-- Page Header -->
<section class="bg-gradient-to-r from-primary via-primary-light to-secondary text-white py-20">
	<div class="container-custom text-center">
		<h1 class="text-5xl font-bold mb-4">Program Details</h1>
		<p class="text-xl text-blue-100 max-w-2xl mx-auto">Everything you need to know about the FAWUS Fellowship</p>
	</div>
</section>

<!-- Program Overview -->
<section class="section-padding bg-white">
	<div class="container-custom max-w-5xl mx-auto">
		<div class="prose max-w-none">
		<h2 class="text-3xl font-bold text-dark mb-6">What is FAWUS?</h2>
		<p class="text-lg text-gray mb-8">
			The Fellowship in Advanced WINFOCUS Ultrasound (FAWUS) is a year-long international program starting April 1st, 2026, for experienced POCUS clinicians who want to grow into educators, researchers, and ultrasound leaders in their communities and beyond.
		</p>

		<div class="grid md:grid-cols-3 gap-6 mb-12">
			<div class="text-center p-6 bg-blue-50 rounded-xl">
				<div class="text-4xl font-bold text-[#00A8E1] mb-2">Apr 1, 2026</div>
				<div class="text-gray">Program Start</div>
			</div>
				<div class="text-center p-6 bg-blue-50 rounded-xl">
					<div class="text-4xl font-bold text-[#00A8E1] mb-2">Virtual</div>
					<div class="text-gray">Primarily Online</div>
				</div>
				<div class="text-center p-6 bg-blue-50 rounded-xl">
					<div class="text-4xl font-bold text-[#00A8E1] mb-2">Global</div>
					<div class="text-gray">International Program</div>
				</div>
			</div>
		</div>
	</div>
</section>

<!-- Program Structure -->
<section class="section-padding bg-gray-light">
	<div class="container-custom max-w-5xl mx-auto">
		<h2 class="text-3xl font-bold text-dark mb-8 text-center">Program Structure</h2>
		
		<div class="grid md:grid-cols-2 gap-8 mb-12">
			<div class="bg-white p-8 rounded-xl shadow-md">
			<h3 class="text-xl font-bold text-dark mb-4 flex items-center">
				<span class="text-3xl mr-3">⏱️</span> Format & Duration
			</h3>
			<ul class="space-y-3 text-gray">
				<li>• <strong>Start Date:</strong> April 1st, 2026</li>
				<li>• <strong>Length:</strong> 12 Months (Year-Long Program)</li>
				<li>• <strong>Format:</strong> Mostly virtual; clinical work at your home institution</li>
				<li>• <strong>Support:</strong> Guided by local and global WINFOCUS mentors</li>
			</ul>
			</div>

			<div class="bg-white p-8 rounded-xl shadow-md">
				<h3 class="text-xl font-bold text-dark mb-4 flex items-center">
					<span class="text-3xl mr-3">👥</span> Mentorship
				</h3>
				<ul class="space-y-3 text-gray">
					<li>• Work with local and global ultrasound mentors</li>
					<li>• Monthly mentorship sessions</li>
					<li>• QA case reviews with faculty</li>
					<li>• Weekly access to didactics at Global Partner Institutes</li>
				</ul>
			</div>
		</div>

		<!-- Core Activities -->
		<div class="bg-white p-8 rounded-xl shadow-md mb-8">
			<h3 class="text-2xl font-bold text-dark mb-6">Core Activities</h3>
			<div class="grid md:grid-cols-2 gap-6">
				<div>
					<h4 class="font-bold text-dark mb-3">Clinical Training</h4>
					<ul class="space-y-2 text-gray">
						<li>• Online coursework (WINFOCUS Academy modules)</li>
						<li>• 500+ scan logbook with breakdown by category</li>
						<li>• Rotations at Global Partner Institutes (NPIs)</li>
					</ul>
				</div>
				<div>
					<h4 class="font-bold text-dark mb-3">Teaching & Research</h4>
					<ul class="space-y-2 text-gray">
						<li>• Minimum 2 teaching sessions + 1 regional course</li>
						<li>• Create 1 educational video</li>
						<li>• Complete one academic project (case report, QI, or publication)</li>
					</ul>
				</div>
				<div>
					<h4 class="font-bold text-dark mb-3">Professional Development</h4>
					<ul class="space-y-2 text-gray">
						<li>• Faculty development (curriculum design, pedagogy)</li>
						<li>• Participation in WINFOCUS activities and QA sessions</li>
						<li>• Outreach opportunities (missions or virtual collaborations)</li>
					</ul>
				</div>
				<div>
					<h4 class="font-bold text-dark mb-3">Completion</h4>
					<ul class="space-y-2 text-gray">
						<li>• Submit scan log + research project</li>
						<li>• Final exam</li>
						<li>• Graduation ceremony at WINFOCUS Meeting</li>
					</ul>
				</div>
			</div>
		</div>
	</div>
</section>

<!-- Fellowship Timeline -->
<section class="section-padding bg-white">
	<div class="container-custom max-w-5xl mx-auto">
		<h2 class="text-3xl font-bold text-dark mb-8 text-center">Fellowship Timeline</h2>
		<p class="text-center text-gray mb-12 max-w-2xl mx-auto">A month-by-month overview of your fellowship journey</p>

		<div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
			<div class="bg-blue-50 p-6 rounded-xl border-l-4 border-[#00A8E1]">
				<div class="font-bold text-lg text-dark mb-2">Month 1</div>
				<p class="text-gray">Orientation + Academy access</p>
			</div>
			<div class="bg-blue-50 p-6 rounded-xl border-l-4 border-[#00A8E1]">
				<div class="font-bold text-lg text-dark mb-2">Months 2-4</div>
				<p class="text-gray">Scanning + Didactics</p>
			</div>
			<div class="bg-blue-50 p-6 rounded-xl border-l-4 border-[#00A8E1]">
				<div class="font-bold text-lg text-dark mb-2">Month 5</div>
				<p class="text-gray">First teaching session</p>
			</div>
			<div class="bg-blue-50 p-6 rounded-xl border-l-4 border-[#00A8E1]">
				<div class="font-bold text-lg text-dark mb-2">Month 6</div>
				<p class="text-gray">Submit teaching video</p>
			</div>
			<div class="bg-blue-50 p-6 rounded-xl border-l-4 border-[#00A8E1]">
				<div class="font-bold text-lg text-dark mb-2">Months 7-8</div>
				<p class="text-gray">Research or case report draft</p>
			</div>
			<div class="bg-blue-50 p-6 rounded-xl border-l-4 border-[#00A8E1]">
				<div class="font-bold text-lg text-dark mb-2">Month 10</div>
				<p class="text-gray">Final teaching event</p>
			</div>
			<div class="bg-blue-50 p-6 rounded-xl border-l-4 border-[#00A8E1]">
				<div class="font-bold text-lg text-dark mb-2">Month 11</div>
				<p class="text-gray">Submit scan log + project</p>
			</div>
			<div class="bg-blue-50 p-6 rounded-xl border-l-4 border-[#00A8E1]">
				<div class="font-bold text-lg text-dark mb-2">Month 12</div>
				<p class="text-gray">Virtual exam + FAWUS certification</p>
			</div>
		</div>
	</div>
</section>

<!-- What Fellows Receive -->
<section class="section-padding bg-gray-light">
	<div class="container-custom max-w-5xl mx-auto">
		<h2 class="text-3xl font-bold text-dark mb-8 text-center">What Fellows Receive</h2>

		<div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
			<div class="bg-white p-6 rounded-xl shadow-md">
				<div class="text-3xl mb-3">🎓</div>
				<h3 class="font-bold text-dark mb-2">WINFOCUS Academy Access</h3>
				<p class="text-gray text-sm">Complete access to all WINFOCUS Academy modules and educational resources</p>
			</div>
			<div class="bg-white p-6 rounded-xl shadow-md">
				<div class="text-3xl mb-3">👨‍🏫</div>
				<h3 class="font-bold text-dark mb-2">Structured Mentorship</h3>
				<p class="text-gray text-sm">Personalized guidance from global ultrasound experts and local faculty</p>
			</div>
			<div class="bg-white p-6 rounded-xl shadow-md">
				<div class="text-3xl mb-3">🌐</div>
				<h3 class="font-bold text-dark mb-2">Global Faculty Network</h3>
				<p class="text-gray text-sm">Entry into the WINFOCUS educator network and alumni community</p>
			</div>
			<div class="bg-white p-6 rounded-xl shadow-md">
				<div class="text-3xl mb-3">🏆</div>
				<h3 class="font-bold text-dark mb-2">Official FAWUS Certificate</h3>
				<p class="text-gray text-sm">WINFOCUS Advanced Ultrasound Fellowship Certificate + use of FAWUS title</p>
			</div>
			<div class="bg-white p-6 rounded-xl shadow-md">
				<div class="text-3xl mb-3">🎤</div>
				<h3 class="font-bold text-dark mb-2">Presentation Opportunities</h3>
				<p class="text-gray text-sm">Present at WINFOCUS meetings and national/international conferences</p>
			</div>
			<div class="bg-white p-6 rounded-xl shadow-md">
				<div class="text-3xl mb-3">🚀</div>
				<h3 class="font-bold text-dark mb-2">Future Faculty Roles</h3>
				<p class="text-gray text-sm">Priority consideration for WINFOCUS faculty positions and leadership roles</p>
			</div>
		</div>
	</div>
</section>

<!-- Eligibility Requirements -->
<section class="section-padding bg-white">
	<div class="container-custom max-w-5xl mx-auto">
		<h2 class="text-3xl font-bold text-dark mb-8 text-center">Eligibility Requirements</h2>

		<div class="grid md:grid-cols-2 gap-8">
			<div class="bg-blue-50 p-8 rounded-xl border-l-4 border-[#00A8E1]">
				<h3 class="font-bold text-dark mb-4">Who Should Apply?</h3>
				<ul class="space-y-3 text-gray">
					<li>• Physicians or registrars in EM, IM, ICU, anesthesia, pediatrics, family medicine</li>
					<li>• Clinicians with at least basic POCUS training and regular use in practice</li>
					<li>• Junior faculty with strong experience and interest in POCUS</li>
					<li>• Those committed to education, outreach, and ultrasound program development</li>
					<li>• Applicants who can identify 1 local mentor and 2 additional faculty for support</li>
				</ul>
			</div>

			<div class="bg-blue-50 p-8 rounded-xl border-l-4 border-[#00A8E1]">
				<h3 class="font-bold text-dark mb-4">Requirements</h3>
				<ul class="space-y-3 text-gray">
					<li>• Medical degree and valid license in home country</li>
					<li>• POCUS experience and regular use in practice</li>
					<li>• Proficiency in English (spoken and written)</li>
					<li>• Commitment to educational and research deliverables</li>
					<li>• Self-funded or partially sponsored (scholarships may be available)</li>
				</ul>
			</div>
		</div>
	</div>
</section>

<!-- Application Requirements -->
<section class="section-padding bg-gray-light">
	<div class="container-custom max-w-5xl mx-auto">
		<h2 class="text-3xl font-bold text-dark mb-8 text-center">Application Requirements</h2>

		<div class="bg-white p-8 rounded-xl shadow-md">
			<h3 class="font-bold text-dark mb-6 text-lg">Complete Application Checklist:</h3>
			<div class="grid md:grid-cols-2 gap-x-8 gap-y-4">
				<div class="flex items-start space-x-3">
					<span class="text-[#00A8E1] text-xl">✓</span>
					<span class="text-gray">Current CV</span>
				</div>
				<div class="flex items-start space-x-3">
					<span class="text-[#00A8E1] text-xl">✓</span>
					<span class="text-gray">Statement of interest</span>
				</div>
				<div class="flex items-start space-x-3">
					<span class="text-[#00A8E1] text-xl">✓</span>
					<span class="text-gray">POCUS experience summary</span>
				</div>
				<div class="flex items-start space-x-3">
					<span class="text-[#00A8E1] text-xl">✓</span>
					<span class="text-gray">Three suggested mentors (1 must be local)</span>
				</div>
				<div class="flex items-start space-x-3">
					<span class="text-[#00A8E1] text-xl">✓</span>
					<span class="text-gray">Two letters of recommendation</span>
				</div>
				<div class="flex items-start space-x-3">
					<span class="text-[#00A8E1] text-xl">✓</span>
					<span class="text-gray">Tuition plan or sponsorship confirmation</span>
				</div>
			</div>

			<div class="mt-8 text-center">
				<Button href="/apply">Start Your Application</Button>
			</div>
		</div>
	</div>
</section>

<!-- CTA -->
<section class="section-padding bg-gradient-to-r from-primary via-primary-light to-secondary text-white text-center">
	<div class="container-custom max-w-3xl mx-auto">
		<h2 class="text-3xl font-bold mb-4">Ready to Apply?</h2>
		<p class="text-xl mb-8 text-blue-100">Join the next generation of global ultrasound educators</p>
		<div class="flex flex-col sm:flex-row gap-4 justify-center">
			<Button href="/apply">Apply Now</Button>
			<Button href="/faq" variant="secondary"><span class="text-white">View FAQs</span></Button>
		</div>
	</div>
</section>
