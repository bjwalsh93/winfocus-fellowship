<script lang="ts">
	type FAQItem = {
		question: string;
		answer: string;
	};

	type Props = {
		faqs: FAQItem[];
		title?: string;
	};

	let { faqs, title = "Frequently Asked Questions" }: Props = $props();

	let expandedItems: Set<number> = $state(new Set());

	function toggleExpanded(index: number) {
		if (expandedItems.has(index)) {
			expandedItems.delete(index);
		} else {
			expandedItems.add(index);
		}
		expandedItems = new Set(expandedItems);
	}
</script>

<div class="max-w-3xl mx-auto">
	<h2 class="text-4xl font-bold text-dark text-center mb-16">{title}</h2>
	
	<div class="space-y-4">
		{#each faqs as faq, index}
			<div class="bg-white rounded-xl shadow-md overflow-hidden">
				<button
					class="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors duration-200"
					onclick={() => toggleExpanded(index)}
				>
					<h3 class="text-xl font-bold text-dark pr-4">{faq.question}</h3>
					<div class="flex-shrink-0">
						<svg
							class="w-6 h-6 text-primary transition-transform duration-200 {expandedItems.has(index) ? 'rotate-180' : ''}"
							fill="none"
							stroke="currentColor"
							viewBox="0 0 24 24"
						>
							<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
						</svg>
					</div>
				</button>
				{#if expandedItems.has(index)}
					<div class="px-6 pb-4">
						<p class="text-gray leading-relaxed">{faq.answer}</p>
					</div>
				{/if}
			</div>
		{/each}
	</div>
</div>
