<script lang="ts">
	import Skeleton from "$lib/components/ui/skeleton/skeleton.svelte";
	import { BookOpenIcon } from "phosphor-svelte";

	let { image = "", name = "", large = false, hoverEffect = false } = $props();
	let isLoading = $state(true);
</script>

<div class={`mb-4 [perspective:1200px] ${hoverEffect ? "hover:shadow-lg transition-all duration-300 hover:-translate-y-2 hover:scale-[1.02]" : ""}`}>
	<div class={`[transform-style:preserve-3d] [box-shadow:-8px_8px_16px_rgba(0,0,0,0.3),-4px_4px_8px_rgba(0,0,0,0.2)] relative ${large ? "w-48 h-72" : "w-40 h-60"}`}>
		{#if isLoading && image}
			<Skeleton class="w-full h-full absolute inset-0 z-10" />
		{/if}
		<div class="w-full h-full bg-white [transform:translateZ(30px)]">
			{#if image}
				<img
					src={image}
					alt={name}
					class="w-full h-full object-cover"
					onload={() => (isLoading = false)}
				/>
			{:else}
				<div class="w-full h-full bg-gradient-to-br from-accent/80 to-accent flex items-center justify-center">
					<BookOpenIcon size="50%" weight="light" class="text-accent-foreground/50" />
				</div>
			{/if}
		</div>
	</div>
</div>
