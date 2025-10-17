<script lang="ts">
	type Props = {
		icon: string;
		title: string;
		description: string;
		class?: string;
	};

	let { icon, title, description, class: className = '' }: Props = $props();
</script>

<div class="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 {className}">
    <div class="w-16 h-16 mx-auto mb-5 rounded-full bg-gradient-to-br from-secondary to-cyan-600 text-white flex items-center justify-center text-2xl">
        {icon}
    </div>
	<h3 class="text-xl font-bold text-dark mb-4 text-center">{title}</h3>
	<p class="text-gray text-center leading-relaxed">{description}</p>
</div>
