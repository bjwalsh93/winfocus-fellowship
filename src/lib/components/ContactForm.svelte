<script lang="ts">
	import { enhance } from '$app/forms';
	import Button from '$lib/components/Button.svelte';

	let submitting = $state(false);
	let success = $state(false);
	let error = $state('');

	const contactReasons = [
		'General Inquiry',
		'Application Questions',
		'Technical Support',
		'Partnership Opportunities',
		'Media/Press Inquiry',
		'Other'
	];
</script>

<div class="max-w-2xl mx-auto">
	{#if success}
		<div class="bg-green-50 border-2 border-green-500 rounded-xl p-8 text-center">
			<div class="text-green-500 text-6xl mb-4">✓</div>
			<h3 class="text-2xl font-bold text-dark mb-4">Message Sent Successfully!</h3>
			<p class="text-gray mb-6">
				Thank you for contacting us. We'll get back to you within 24 hours.
			</p>
			<Button onclick={() => { success = false; }} variant="secondary">
				Send Another Message
			</Button>
		</div>
	{:else}
		<div class="bg-white p-8 rounded-xl shadow-md">
			<h3 class="text-2xl font-bold text-dark mb-6 text-center">Contact Us</h3>
			
			{#if error}
				<div class="bg-red-50 border-2 border-red-500 rounded-lg p-4 mb-6">
					<p class="text-red-700 font-semibold">{error}</p>
				</div>
			{/if}

			<form
				method="POST"
				action="?/contact"
				use:enhance={() => {
					submitting = true;
					return async ({ result, update }) => {
						submitting = false;
						if (result.type === 'success') {
							success = true;
							error = '';
						} else if (result.type === 'failure') {
							error = (result.data as any)?.message || 'Failed to send message. Please try again.';
						}
						await update();
					};
				}}
			>
				<div class="space-y-6">
					<div class="grid grid-cols-1 md:grid-cols-2 gap-6">
						<div>
							<label for="contactName" class="block text-dark font-semibold mb-2">
								Full Name <span class="text-red-500">*</span>
							</label>
							<input
								type="text"
								id="contactName"
								name="contactName"
								required
								class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-secondary focus:border-transparent"
								placeholder="Your full name"
							/>
						</div>

						<div>
							<label for="contactEmail" class="block text-dark font-semibold mb-2">
								Email Address <span class="text-red-500">*</span>
							</label>
							<input
								type="email"
								id="contactEmail"
								name="contactEmail"
								required
								class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-secondary focus:border-transparent"
								placeholder="your.email@example.com"
							/>
						</div>
					</div>

					<div>
						<label for="contactReason" class="block text-dark font-semibold mb-2">
							Reason for Contact <span class="text-red-500">*</span>
						</label>
						<select
							id="contactReason"
							name="contactReason"
							required
							class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-secondary focus:border-transparent"
						>
							<option value="">Select a reason</option>
							{#each contactReasons as reason}
								<option value={reason}>{reason}</option>
							{/each}
						</select>
					</div>

					<div>
						<label for="contactSubject" class="block text-dark font-semibold mb-2">
							Subject <span class="text-red-500">*</span>
						</label>
						<input
							type="text"
							id="contactSubject"
							name="contactSubject"
							required
							class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-secondary focus:border-transparent"
							placeholder="Brief subject of your message"
						/>
					</div>

					<div>
						<label for="contactMessage" class="block text-dark font-semibold mb-2">
							Message <span class="text-red-500">*</span>
						</label>
						<textarea
							id="contactMessage"
							name="contactMessage"
							required
							rows="6"
							class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-secondary focus:border-transparent"
							placeholder="Please provide details about your inquiry..."
						></textarea>
					</div>

					<div class="text-center">
						<Button 
							type="submit" 
							disabled={submitting}
							class="disabled:opacity-50 disabled:cursor-not-allowed"
						>
							{submitting ? 'Sending...' : 'Send Message'}
						</Button>
						<p class="mt-4 text-sm text-gray">
							We'll respond within 24 hours during business days.
						</p>
					</div>
				</div>
			</form>
		</div>
	{/if}
</div>
