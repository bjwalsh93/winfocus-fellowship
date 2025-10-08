<script lang="ts">
	type Props = {
		href?: string;
		variant?: 'primary' | 'secondary';
		children?: any;
		onclick?: () => void;
	};
	
	let { href, variant = 'primary', children, onclick }: Props = $props();
	
	const classes = variant === 'primary' ? 'btn-primary' : 'btn-secondary';
</script>

{#if href}
	<a {href} class={classes}>
		{@render children?.()}
	</a>
{:else}
	<button {onclick} class={classes}>
		{@render children?.()}
	</button>
{/if}
