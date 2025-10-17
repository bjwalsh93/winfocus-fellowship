<script lang="ts">
	type Props = {
		href?: string;
		variant?: 'primary' | 'secondary' | 'outline';
		children?: any;
		onclick?: (event: MouseEvent) => void;
		class?: string;
		type?: 'button' | 'submit' | 'reset';
		disabled?: boolean;
	};
	
	let { href, variant = 'primary', children, onclick, class: className = '', type = 'button', disabled = false }: Props = $props();
	
	const baseClasses = variant === 'primary' ? 'btn-primary' : variant === 'secondary' ? 'btn-secondary' : 'btn-outline';
	const classes = `${baseClasses} ${className}`;
</script>

{#if href}
	<a {href} class={classes}>
		{@render children?.()}
	</a>
{:else}
	<button {onclick} {type} {disabled} class={classes}>
		{@render children?.()}
	</button>
{/if}
