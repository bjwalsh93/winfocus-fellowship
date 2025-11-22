<script lang="ts">
	import { enhance } from '$app/forms';
	import Button from '$lib/components/Button.svelte';

	let { data } = $props();
	let submitting = $state(false);
	let error = $state('');

	const resources = [
		{
			title: 'Fellowship Handbook',
			description: 'Complete program guide and requirements',
			icon: '📚',
			type: 'PDF'
		},
		{
			title: 'Curriculum Materials',
			description: 'Monthly didactic content and learning objectives',
			icon: '📖',
			type: 'Folder'
		},
		{
			title: 'Scan Log Template',
			description: 'Template for tracking your 500+ scans',
			icon: '📊',
			type: 'Excel'
		},
		{
			title: 'Meeting Recordings',
			description: 'Archived webinars and mentorship sessions',
			icon: '🎥',
			type: 'Folder'
		},
		{
			title: 'Research Guidelines',
			description: 'Templates and guidance for academic projects',
			icon: '🔬',
			type: 'PDF'
		},
		{
			title: 'Teaching Resources',
			description: 'Presentation templates and teaching guides',
			icon: '👨‍🏫',
			type: 'Folder'
		}
	];
</script>

<svelte:head>
	<title>Members Portal | FAWUS Fellowship</title>
	<meta name="description" content="Access exclusive resources for FAWUS fellows and faculty" />
	<meta name="robots" content="noindex, nofollow" />
</svelte:head>

{#if !data.authenticated}
	<!-- Login Section -->
	<section class="min-h-screen flex items-center justify-center bg-gradient-to-br from-primary via-primary-light to-secondary py-20">
		<div class="container-custom max-w-md">
			<div class="bg-white rounded-2xl shadow-2xl p-8">
				<div class="text-center mb-8">
					<div class="w-20 h-20 mx-auto mb-4 rounded-full bg-gradient-to-br from-secondary to-cyan-600 text-white flex items-center justify-center text-4xl">
						🔒
					</div>
					<h1 class="text-3xl font-bold text-dark mb-2">Members Portal</h1>
					<p class="text-gray">Access exclusive fellowship resources</p>
				</div>

				{#if error}
					<div class="bg-red-50 border-2 border-red-500 rounded-lg p-4 mb-6">
						<p class="text-red-700 font-semibold text-center">{error}</p>
					</div>
				{/if}

				<form
					method="POST"
					action="?/login"
					use:enhance={() => {
						submitting = true;
						error = '';
						return async ({ result, update }) => {
							submitting = false;
							if (result.type === 'failure') {
								error = (result.data as any)?.message || 'Invalid password. Please try again.';
							}
							await update();
						};
					}}
				>
					<div class="mb-6">
						<label for="password" class="block text-dark font-semibold mb-2">
							Access Password
						</label>
						<input
							type="password"
							id="password"
							name="password"
							required
							class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-secondary focus:border-transparent"
							placeholder="Enter members password"
						/>
					</div>

					<Button type="submit" disabled={submitting} class="w-full">
						{submitting ? 'Verifying...' : 'Access Portal'}
					</Button>
				</form>

				<div class="mt-6 pt-6 border-t border-gray-200 text-center">
					<p class="text-sm text-gray">
						Don't have access? Contact <a href="mailto:fellowship@winfocus.org" class="text-secondary hover:underline font-semibold">fellowship@winfocus.org</a>
					</p>
				</div>
			</div>
		</div>
	</section>
{:else}
	<!-- Members Dashboard -->
	<section class="bg-gradient-to-r from-primary to-primary-light text-white py-16">
		<div class="container-custom">
			<h1 class="text-4xl md:text-5xl font-bold mb-4">Welcome to the Members Portal</h1>
			<p class="text-xl text-blue-100 max-w-3xl">
				Access exclusive fellowship resources, curriculum materials, and program documents.
			</p>
		</div>
	</section>

	<!-- Resources Section -->
	<section class="section-padding bg-gray-light">
		<div class="container-custom max-w-6xl">
			<!-- Google Drive Integration Notice -->
			<div class="bg-gradient-to-r from-blue-50 to-cyan-50 border-2 border-secondary rounded-xl p-8 mb-12 text-center">
				<div class="text-5xl mb-4">📁</div>
				<h2 class="text-2xl font-bold text-dark mb-3">Access Full Resource Library</h2>
				<p class="text-gray mb-6 max-w-2xl mx-auto">
					All fellowship documents, recordings, and materials are stored in our secure Google Drive. Click below to access the complete resource library.
				</p>
				<a
					href="https://drive.google.com/drive/folders/YOUR_FOLDER_ID"
					target="_blank"
					rel="noopener noreferrer"
					class="inline-flex items-center gap-3 bg-primary hover:bg-primary-light text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
				>
					<span>Open Google Drive Portal</span>
					<span class="text-2xl">→</span>
				</a>
				<p class="text-sm text-gray mt-4">
					💡 Tip: Bookmark this link for quick access
				</p>
			</div>

			<!-- Quick Links to Resources -->
			<h3 class="text-2xl font-bold text-dark mb-8 text-center">Available Resources</h3>
			<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
				{#each resources as resource}
					<div class="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 p-6 border-2 border-transparent hover:border-secondary">
						<div class="flex items-start gap-4">
							<div class="text-4xl">{resource.icon}</div>
							<div class="flex-1">
								<div class="flex items-center gap-2 mb-2">
									<h4 class="font-bold text-dark">{resource.title}</h4>
									<span class="text-xs bg-blue-100 text-primary px-2 py-1 rounded-full font-semibold">
										{resource.type}
									</span>
								</div>
								<p class="text-sm text-gray">{resource.description}</p>
							</div>
						</div>
					</div>
				{/each}
			</div>

			<!-- Additional Info -->
			<div class="mt-12 bg-white rounded-xl shadow-md p-8">
				<h3 class="text-xl font-bold text-dark mb-4">📌 Important Information</h3>
				<ul class="space-y-3 text-gray">
					<li class="flex items-start">
						<span class="text-secondary mr-3 mt-1">•</span>
						<span>All resources are confidential and for FAWUS fellows and faculty only</span>
					</li>
					<li class="flex items-start">
						<span class="text-secondary mr-3 mt-1">•</span>
						<span>New materials are added regularly - check back often</span>
					</li>
					<li class="flex items-start">
						<span class="text-secondary mr-3 mt-1">•</span>
						<span>If you have trouble accessing any files, contact the program director</span>
					</li>
					<li class="flex items-start">
						<span class="text-secondary mr-3 mt-1">•</span>
						<span>Please do not share access credentials or download links externally</span>
					</li>
				</ul>
			</div>

			<!-- Logout Button -->
			<div class="mt-8 text-center">
				<form method="POST" action="?/logout">
					<button
						type="submit"
						class="text-gray hover:text-dark font-semibold underline"
					>
						Logout from Members Portal
					</button>
				</form>
			</div>
		</div>
	</section>
{/if}

