<script lang="ts">
	import Button from '$lib/components/Button.svelte';
	import Card from '$lib/components/Card.svelte';
</script>

<svelte:head>
	<title>FAWUS World Fellowship Program | Harvard Ultrasound Training</title>
	<meta
		name="description"
		content="Join the FAWUS World Fellowship Program for world-class ultrasound training and Harvard Medical School accreditation. Applications open for international physicians."
	/>
</svelte:head>

<!-- Hero Section -->
<section
	class="relative bg-gradient-to-r from-primary to-primary-light text-white section-padding min-h-[90vh] flex items-center"
>
	<div class="container-custom">
		<div class="max-w-4xl mx-auto text-center">
			<h1 class="text-5xl md:text-6xl font-bold mb-6 leading-tight">
				FAWUS World Fellowship Program
			</h1>
			<p class="text-xl md:text-2xl mb-8 text-blue-100">
				Advance Your Career with World-Class Ultrasound Training and Harvard Medical School
				Accreditation
			</p>
			<p class="text-lg mb-10 text-blue-50 max-w-2xl mx-auto">
				An exclusive opportunity for international physicians to gain expertise in Point-of-Care
				Ultrasound through intensive training with leading experts at Harvard Medical School.
			</p>
			<div class="flex flex-col sm:flex-row gap-4 justify-center">
				<Button href="/apply">Apply Now</Button>
				<Button href="/faculty" variant="secondary">
					<span class="text-white">Meet Our Faculty</span>
				</Button>
			</div>
		</div>
	</div>
</section>

<!-- Program Overview -->
<section class="section-padding bg-white">
	<div class="container-custom">
		<div class="max-w-3xl mx-auto text-center mb-16">
			<h2 class="text-4xl font-bold text-dark mb-6">About the Fellowship</h2>
			<p class="text-lg text-gray leading-relaxed">
				The FAWUS World Fellowship Program represents a groundbreaking collaboration between
				FAWUS and Harvard Medical School, designed to provide comprehensive ultrasound training
				to physicians worldwide. This intensive fellowship offers hands-on experience, expert
				mentorship, and internationally recognized certification that will transform your clinical
				practice and career trajectory.
			</p>
		</div>

		<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
			<Card icon="🎓" title="Harvard Accreditation">
				Receive official certification from Harvard Medical School, recognized globally as a mark
				of excellence in medical education.
			</Card>
			<Card icon="⏱️" title="6-12 Month Program">
				Flexible fellowship duration designed to accommodate international schedules while ensuring
				comprehensive training.
			</Card>
			<Card icon="🔬" title="500+ Training Hours">
				Extensive hands-on ultrasound training across multiple specialties including emergency,
				critical care, and cardiology.
			</Card>
			<Card icon="🌍" title="Global Network">
				Join the FAWUS international community of over 50,000 ultrasound practitioners across
				176 countries.
			</Card>
		</div>
	</div>
</section>

<!-- Key Benefits -->
<section class="section-padding bg-gray-light">
	<div class="container-custom">
		<h2 class="text-4xl font-bold text-dark text-center mb-16">Why Choose This Fellowship?</h2>
		<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
			<div class="bg-white p-8 rounded-xl shadow-md">
				<div class="text-primary text-5xl mb-4">🏥</div>
				<h3 class="text-2xl font-bold text-dark mb-4">World-Class Faculty</h3>
				<p class="text-gray">
					Learn directly from internationally recognized experts who are shaping the future of
					point-of-care ultrasound education and practice.
				</p>
			</div>

			<div class="bg-white p-8 rounded-xl shadow-md">
				<div class="text-primary text-5xl mb-4">💼</div>
				<h3 class="text-2xl font-bold text-dark mb-4">Career Advancement</h3>
				<p class="text-gray">
					Harvard certification opens doors to leadership positions, academic appointments, and
					advanced clinical roles worldwide.
				</p>
			</div>

			<div class="bg-white p-8 rounded-xl shadow-md">
				<div class="text-primary text-5xl mb-4">🔍</div>
				<h3 class="text-2xl font-bold text-dark mb-4">Comprehensive Curriculum</h3>
				<p class="text-gray">
					Master cardiac, lung, abdominal, vascular, and procedural ultrasound applications through
					structured learning and clinical rotations.
				</p>
			</div>

			<div class="bg-white p-8 rounded-xl shadow-md">
				<div class="text-primary text-5xl mb-4">🤝</div>
				<h3 class="text-2xl font-bold text-dark mb-4">International Recognition</h3>
				<p class="text-gray">
					Gain credentials that are valued by hospitals, medical institutions, and healthcare
					systems across the globe.
				</p>
			</div>

			<div class="bg-white p-8 rounded-xl shadow-md">
				<div class="text-primary text-5xl mb-4">🎯</div>
				<h3 class="text-2xl font-bold text-dark mb-4">Hands-On Experience</h3>
				<p class="text-gray">
					Practice on state-of-the-art equipment in world-renowned Harvard teaching hospitals with
					real patient scenarios.
				</p>
			</div>

			<div class="bg-white p-8 rounded-xl shadow-md">
				<div class="text-primary text-5xl mb-4">📚</div>
				<h3 class="text-2xl font-bold text-dark mb-4">Research Opportunities</h3>
				<p class="text-gray">
					Contribute to cutting-edge ultrasound research and potentially publish in leading medical
					journals during your fellowship.
				</p>
			</div>
		</div>
	</div>
</section>

<!-- Who Should Apply -->
<section class="section-padding bg-white">
	<div class="container-custom">
		<div class="max-w-4xl mx-auto">
			<h2 class="text-4xl font-bold text-dark text-center mb-12">Who Should Apply?</h2>

			<div class="space-y-6">
				<div class="flex items-start space-x-4">
					<div class="text-primary text-3xl font-bold">✓</div>
					<div>
						<h3 class="text-xl font-bold text-dark mb-2">Medical Residents & Fellows</h3>
						<p class="text-gray">
							Physicians completing or recently completed residency training in Emergency Medicine,
							Internal Medicine, Critical Care, Cardiology, or related specialties.
						</p>
					</div>
				</div>

				<div class="flex items-start space-x-4">
					<div class="text-primary text-3xl font-bold">✓</div>
					<div>
						<h3 class="text-xl font-bold text-dark mb-2">Early-Career Physicians</h3>
						<p class="text-gray">
							Practicing physicians seeking advanced training in point-of-care ultrasound to enhance
							their clinical capabilities and career prospects.
						</p>
					</div>
				</div>

				<div class="flex items-start space-x-4">
					<div class="text-primary text-3xl font-bold">✓</div>
					<div>
						<h3 class="text-xl font-bold text-dark mb-2">International Applicants</h3>
						<p class="text-gray">
							Medical professionals from around the world seeking internationally recognized
							credentials and access to the global FAWUS network.
						</p>
					</div>
				</div>

				<div class="flex items-start space-x-4">
					<div class="text-primary text-3xl font-bold">✓</div>
					<div>
						<h3 class="text-xl font-bold text-dark mb-2">Academic Aspirants</h3>
						<p class="text-gray">
							Physicians planning to establish or lead ultrasound programs at their home
							institutions or pursue academic medicine careers.
						</p>
					</div>
				</div>
			</div>

			<div class="mt-12 p-6 bg-blue-50 rounded-xl border-l-4 border-primary">
				<h3 class="text-xl font-bold text-dark mb-3">Eligibility Requirements</h3>
				<ul class="space-y-2 text-gray">
					<li>• Medical degree (MD, MBBS, or equivalent) from an accredited institution</li>
					<li>• Valid medical license in home country</li>
					<li>• Proficiency in English (spoken and written)</li>
					<li>• Basic ultrasound knowledge (beginner to advanced levels accepted)</li>
					<li>• Strong academic record and professional references</li>
					<li>• Commitment to advancing ultrasound practice in your community</li>
				</ul>
			</div>
		</div>
	</div>
</section>

<!-- Program Highlights -->
<section class="section-padding bg-primary text-white">
	<div class="container-custom">
		<h2 class="text-4xl font-bold text-center mb-16">Program Highlights</h2>
		<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
			<div>
				<div class="text-5xl font-bold mb-2">500+</div>
				<div class="text-xl text-blue-100">Clinical Training Hours</div>
			</div>
			<div>
				<div class="text-5xl font-bold mb-2">8</div>
				<div class="text-xl text-blue-100">Expert Faculty Members</div>
			</div>
			<div>
				<div class="text-5xl font-bold mb-2">4</div>
				<div class="text-xl text-blue-100">Harvard Teaching Hospitals</div>
			</div>
			<div>
				<div class="text-5xl font-bold mb-2">176</div>
				<div class="text-xl text-blue-100">Countries in FAWUS Network</div>
			</div>
		</div>
	</div>
</section>

<!-- Final CTA -->
<section class="section-padding bg-gray-light">
	<div class="container-custom">
		<div class="max-w-3xl mx-auto text-center">
			<h2 class="text-4xl font-bold text-dark mb-6">Ready to Transform Your Career?</h2>
			<p class="text-xl text-gray mb-8">
				Join the next cohort of world-class ultrasound practitioners. Applications are now open for
				the FAWUS World Fellowship Program.
			</p>
			<Button href="/apply">Submit Your Application</Button>
			<p class="mt-6 text-gray">
				Questions? Contact us at <a
					href="mailto:fellowship@winfocus.org"
					class="text-primary hover:underline font-semibold"
					>fellowship@winfocus.org</a
				>
			</p>
		</div>
	</div>
</section>
