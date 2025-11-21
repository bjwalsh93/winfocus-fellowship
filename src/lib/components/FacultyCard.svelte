<script lang="ts">
	import type { FacultyMember } from '$lib/data/faculty';
	
	type Props = {
		faculty: FacultyMember;
	};
	
	let { faculty }: Props = $props();
</script>

<div class="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden h-full flex flex-col">
	<div class="aspect-[4/5] overflow-hidden bg-gray-100 flex items-center justify-center">
		<img
			src={faculty.imageUrl}
			alt={faculty.name}
			class="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-300"
		/>
	</div>
	<div class="p-8 flex-grow flex flex-col">
		<h3 class="text-2xl font-bold text-dark mb-2">{faculty.name}</h3>
		<p class="text-primary font-semibold mb-1">{faculty.title}</p>
		<p class="text-sm text-gray mb-1">{faculty.credentials}</p>
		<p class="text-sm text-gray-600 mb-6 italic">{faculty.institution}</p>
		<p class="text-gray leading-relaxed mb-6 flex-grow">{faculty.bio}</p>
		<div class="flex flex-wrap gap-2">
			{#each faculty.specialties as specialty}
				<span class="bg-blue-50 text-primary text-xs font-semibold px-3 py-1.5 rounded-full">
					{specialty}
				</span>
			{/each}
		</div>
	</div>
</div>
