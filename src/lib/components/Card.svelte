<script lang="ts">
	type Props = {
		title?: string;
		icon?: string;
		children?: any;
	};
	
	let { title, icon, children }: Props = $props();
</script>

<div class="card">
	{#if icon}
		<div class="text-4xl mb-4">{icon}</div>
	{/if}
	{#if title}
		<h3 class="text-xl font-bold text-dark mb-3">{title}</h3>
	{/if}
	<div class="text-gray">
		{@render children?.()}
	</div>
</div>
