<script lang="ts">
	import { enhance } from '$app/forms';

	let { data } = $props();

	let submitting = $state(false);
	let error = $state('');
	let expandedId = $state<number | null>(null);

	function toggleRow(id: number) {
		expandedId = expandedId === id ? null : id;
	}
</script>

<svelte:head>
	<title>Applications | Admin</title>
	<meta name="robots" content="noindex, nofollow" />
</svelte:head>

{#if !data.authenticated}
	<!-- Login -->
	<section
		class="min-h-[calc(100vh-5rem)] flex items-center justify-center bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 py-16"
	>
		<div class="container-custom max-w-md px-4">
			<div class="bg-white rounded-2xl shadow-2xl p-8">
				<div class="text-center mb-8">
					<div
						class="w-16 h-16 mx-auto mb-4 rounded-full bg-slate-800 text-white flex items-center justify-center text-2xl"
					>
						⚙️
					</div>
					<h1 class="text-2xl font-bold text-dark mb-2">Admin</h1>
					<p class="text-gray text-sm">Application submissions (staff only)</p>
				</div>

				{#if !data.adminConfigured}
					<div class="bg-amber-50 border border-amber-300 rounded-lg p-4 mb-6 text-sm text-amber-900">
						<strong>Not configured.</strong> Add
						<code class="bg-amber-100 px-1 rounded">ADMIN_PASSWORD=…</code>
						to your <code class="bg-amber-100 px-1 rounded">.env</code> file (local) or Vercel environment
						variables (production), then restart the dev server.
					</div>
				{/if}

				{#if error}
					<div class="bg-red-50 border border-red-400 rounded-lg p-4 mb-6">
						<p class="text-red-700 text-sm font-medium text-center">{error}</p>
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
								error =
									(result.data as { message?: string })?.message ??
									'Could not sign in. Try again.';
							}
							await update();
						};
					}}
				>
					<div class="mb-6">
						<label for="password" class="block text-dark font-semibold mb-2 text-sm">
							Password
						</label>
						<input
							type="password"
							id="password"
							name="password"
							required
							autocomplete="current-password"
							class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
							placeholder="Admin password"
						/>
					</div>

					<button
						type="submit"
						disabled={submitting || !data.adminConfigured}
						class="w-full btn-primary disabled:opacity-50 disabled:cursor-not-allowed py-3"
					>
						{submitting ? 'Signing in…' : 'Sign in'}
					</button>
				</form>
			</div>
		</div>
	</section>
{:else}
	<!-- Dashboard -->
	<section class="bg-slate-900 text-white py-10 md:py-12">
		<div class="container-custom px-4 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
			<div>
				<h1 class="text-2xl md:text-3xl font-bold">Applications</h1>
				<p class="text-slate-400 text-sm mt-1">
					{data.applications.length} submission{data.applications.length === 1 ? '' : 's'} · SQLite
				</p>
			</div>
			<form method="POST" action="?/logout">
				<button
					type="submit"
					class="px-4 py-2 rounded-lg border border-slate-600 text-slate-200 hover:bg-slate-800 text-sm font-medium"
				>
					Sign out
				</button>
			</form>
		</div>
	</section>

	<section class="section-padding bg-gray-light min-h-[50vh]">
		<div class="container-custom max-w-6xl mx-auto px-3 md:px-4">
			{#if data.applications.length === 0}
				<div class="bg-white rounded-xl shadow p-10 text-center text-gray-600">
					<p class="text-lg font-medium text-dark mb-2">No applications yet</p>
					<p class="text-sm">Submissions from <a href="/apply" class="text-primary underline">/apply</a> will appear here.</p>
				</div>
			{:else}
				<!-- Mobile: cards -->
				<div class="md:hidden space-y-4">
					{#each data.applications as app}
						<div class="bg-white rounded-xl shadow-md overflow-hidden border border-gray-100">
							<button
								type="button"
								class="w-full text-left p-4 flex justify-between items-start gap-2"
								onclick={() => toggleRow(app.id)}
							>
								<div>
									<p class="font-semibold text-dark">{app.full_name}</p>
									<p class="text-sm text-gray-600">{app.email}</p>
									<p class="text-xs text-gray-400 mt-1">{app.submitted_at}</p>
								</div>
								<span class="text-primary text-sm shrink-0">{expandedId === app.id ? '▲' : '▼'}</span>
							</button>
							{#if expandedId === app.id}
								<div class="px-4 pb-4 pt-0 border-t border-gray-100 text-sm space-y-3">
									<p><span class="text-gray-500">Phone</span><br />{app.phone}</p>
									<p><span class="text-gray-500">Country</span><br />{app.country}</p>
									<p>
										<span class="text-gray-500">Professional</span><br />
										{app.current_position} · {app.current_institution}<br />
										{app.medical_specialty} · {app.years_of_practice} yrs
									</p>
									<p>
										<span class="text-gray-500">Education</span><br />
										{app.medical_school} ({app.graduation_year})
									</p>
									{#if app.ultrasound_types_list.length}
										<p>
											<span class="text-gray-500">Ultrasound types</span><br />
											{app.ultrasound_types_list.join(', ')}
										</p>
									{/if}
									<p class="text-gray-700 whitespace-pre-wrap"><strong>Essay 1</strong><br />{app.application_essay1}</p>
									<p class="text-gray-700 whitespace-pre-wrap"><strong>Essay 2</strong><br />{app.application_essay2}</p>
								</div>
							{/if}
						</div>
					{/each}
				</div>

				<!-- Desktop: table -->
				<div class="hidden md:block bg-white rounded-xl shadow-md overflow-hidden border border-gray-100">
					<div class="overflow-x-auto">
						<table class="w-full text-sm text-left">
							<thead class="bg-slate-100 text-slate-700 font-semibold border-b border-gray-200">
								<tr>
									<th class="px-4 py-3 w-16">ID</th>
									<th class="px-4 py-3">Submitted</th>
									<th class="px-4 py-3">Name</th>
									<th class="px-4 py-3">Email</th>
									<th class="px-4 py-3">Country</th>
									<th class="px-4 py-3">Specialty</th>
									<th class="px-4 py-3 w-28"></th>
								</tr>
							</thead>
							<tbody>
								{#each data.applications as app}
									<tr class="border-b border-gray-100 hover:bg-gray-50/80">
										<td class="px-4 py-3 text-gray-500">{app.id}</td>
										<td class="px-4 py-3 whitespace-nowrap text-gray-600">{app.submitted_at}</td>
										<td class="px-4 py-3 font-medium text-dark">{app.full_name}</td>
										<td class="px-4 py-3 text-primary break-all">{app.email}</td>
										<td class="px-4 py-3 text-gray-700">{app.country}</td>
										<td class="px-4 py-3 text-gray-700">{app.medical_specialty}</td>
										<td class="px-4 py-3">
											<button
												type="button"
												class="text-primary font-medium hover:underline"
												onclick={() => toggleRow(app.id)}
											>
												{expandedId === app.id ? 'Hide' : 'Details'}
											</button>
										</td>
									</tr>
									{#if expandedId === app.id}
										<tr class="bg-slate-50 border-b border-gray-200">
											<td colspan="7" class="px-4 py-4 text-sm text-gray-800">
												<div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
													<div class="space-y-2">
														<p><span class="text-gray-500 font-medium">Phone</span> {app.phone}</p>
														<p>
															<span class="text-gray-500 font-medium">License</span>
															{app.medical_license}
														</p>
														<p>
															<span class="text-gray-500 font-medium">Position</span>
															{app.current_position} — {app.current_institution}
														</p>
														<p>
															<span class="text-gray-500 font-medium">Practice</span>
															{app.years_of_practice} years
														</p>
														<p>
															<span class="text-gray-500 font-medium">School</span>
															{app.medical_school}, {app.graduation_year}
														</p>
														{#if app.additional_certifications}
															<p class="whitespace-pre-wrap">
																<span class="text-gray-500 font-medium">Certs</span>
																{app.additional_certifications}
															</p>
														{/if}
														<p>
															<span class="text-gray-500 font-medium">POCUS level</span>
															{app.ultrasound_experience}
														</p>
														{#if app.prior_training}
															<p class="whitespace-pre-wrap">
																<span class="text-gray-500 font-medium">Prior training</span>
																{app.prior_training}
															</p>
														{/if}
														{#if app.ultrasound_types_list.length}
															<p>
																<span class="text-gray-500 font-medium">Types</span>
																{app.ultrasound_types_list.join(', ')}
															</p>
														{/if}
													</div>
													<div class="space-y-4">
														<div>
															<p class="text-gray-500 font-medium mb-1">Essay 1</p>
															<p class="whitespace-pre-wrap text-gray-800 max-h-48 overflow-y-auto border border-gray-200 rounded-lg p-3 bg-white">
																{app.application_essay1}
															</p>
														</div>
														<div>
															<p class="text-gray-500 font-medium mb-1">Essay 2</p>
															<p class="whitespace-pre-wrap text-gray-800 max-h-48 overflow-y-auto border border-gray-200 rounded-lg p-3 bg-white">
																{app.application_essay2}
															</p>
														</div>
													</div>
												</div>
											</td>
										</tr>
									{/if}
								{/each}
							</tbody>
						</table>
					</div>
				</div>
			{/if}
		</div>
	</section>
{/if}
