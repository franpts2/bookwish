<script lang="ts">
	import BookCard from "./BookCard.svelte";
	import { fade } from "svelte/transition";

	let { products = [] } = $props();

	let scrollContainer: HTMLDivElement;
	let showRightFade = $state(true);
	let showLeftFade = $state(false);

	function handleScroll() {
		if (!scrollContainer) return;

		const { scrollLeft, scrollWidth, clientWidth } = scrollContainer;
		const isAtEnd = scrollLeft + clientWidth >= scrollWidth - 10; // 10px thresh
		showRightFade = !isAtEnd;

		showLeftFade = scrollLeft > 10;
	}
</script>

<div class="relative">
	<div
		class="overflow-x-auto scrollbar-hide py-4"
		bind:this={scrollContainer}
		onscroll={handleScroll}
	>
		<div class="flex flex-row gap-6">
			{#each products as product}
				<div class="shrink-0">
					<BookCard
						image={product.image}
						author={product.author}
						name={product.name}
					/>
				</div>
			{/each}
		</div>
	</div>

	{#if showLeftFade}
		<div
			transition:fade={{ duration: 300 }}
			class="absolute left-0 top-0 bottom-0 w-24 bg-linear-to-r from-bg-primary via-bg-primary/30 to-transparent pointer-events-none"
		></div>
	{/if}

	{#if showRightFade}
		<div
			transition:fade={{ duration: 300 }}
			class="absolute right-0 top-0 bottom-0 w-24 bg-linear-to-l from-bg-primary via-bg-primary/30 to-transparent pointer-events-none"
		></div>
	{/if}
</div>
