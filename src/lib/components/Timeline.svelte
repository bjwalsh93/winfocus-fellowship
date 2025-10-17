<script lang="ts">
	type TimelineItem = {
		month: string;
		activity: string;
		description?: string;
	};

	type Props = {
		items: TimelineItem[];
		title?: string;
	};

	let { items, title = "Fellowship Timeline" }: Props = $props();
</script>

<div class="max-w-4xl mx-auto">
	<h3 class="text-2xl font-bold text-center mb-12">{title}</h3>
	<div class="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
		{#each items as item}
			<div class="bg-white/10 p-4 rounded-lg text-center hover:bg-white/20 transition-colors duration-200">
				<div class="font-bold text-lg text-white mb-2">{item.month}</div>
				<div class="text-blue-100 text-sm leading-tight">{item.activity}</div>
				{#if item.description}
					<div class="text-blue-200 text-xs mt-2 opacity-80">{item.description}</div>
				{/if}
			</div>
		{/each}
	</div>
</div>
