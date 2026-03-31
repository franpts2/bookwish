<script lang="ts">
	import BookCard from "./book-card.svelte";
	import Skeleton from "$lib/components/ui/skeleton/skeleton.svelte";
	import { fade } from "svelte/transition";

	let { books = [], isHydrated = false } = $props();

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
		class="overflow-x-auto scrollbar-hide py-3 sm:py-4"
		bind:this={scrollContainer}
		onscroll={handleScroll}
	>
		<div class="flex flex-row gap-3 sm:gap-4 md:gap-6">
			{#if isHydrated && books.length > 0}
				{#each books as book, index}
					<div class="shrink-0" transition:fade={{ duration: 200 }}>
						<BookCard
							image={book.image}
							author={book.author}
							name={book.name}
							{index}
						/>
					</div>
				{/each}
			{:else}
				<!-- Skeleton loaders -->
				{#each Array(4) as _, i}
					<div class="shrink-0">
						<div class="cursor-pointer flex flex-col items-center px-5 py-2">
							<div class="mb-4">
								<Skeleton class="w-40 h-60" />
							</div>
							<div class="space-y-1 text-center">
								<Skeleton class="h-4 w-32" />
								<Skeleton class="h-3 w-24 mx-auto mt-1" />
							</div>
						</div>
					</div>
				{/each}
			{/if}
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
