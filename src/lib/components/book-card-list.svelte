<script lang="ts">
	import BookCard from "./book-card.svelte";
	import Skeleton from "$lib/components/ui/skeleton/skeleton.svelte";
	import * as Empty from "$lib/components/ui/empty/index.js";
	import { BookOpenIcon } from "phosphor-svelte";
	import { fade } from "svelte/transition";

	let { books = [], isHydrated = false } = $props();

	let scrollContainer: HTMLButtonElement;
	let showRightFade = $state(true);
	let showLeftFade = $state(false);
	let isDragging = $state(false);
	let dragStartX = 0;
	let scrollLeftStart = 0;

	function handleScroll() {
		if (!scrollContainer) return;

		const { scrollLeft, scrollWidth, clientWidth } = scrollContainer;
		const isAtEnd = scrollLeft + clientWidth >= scrollWidth - 10; // 10px thresh
		showRightFade = !isAtEnd;

		showLeftFade = scrollLeft > 10;
	}

	function handleMouseDown(e: MouseEvent) {
		isDragging = true;
		dragStartX = e.clientX;
		scrollLeftStart = scrollContainer.scrollLeft;
	}

	function handleMouseMove(e: MouseEvent) {
		if (!isDragging) return;

		const dragDistance = e.clientX - dragStartX;
		scrollContainer.scrollLeft = scrollLeftStart - dragDistance;
	}

	function handleMouseUp() {
		isDragging = false;
	}

	function handleKeyDown(e: KeyboardEvent) {
		const scrollAmount = 100;
		
		if (e.key === "ArrowLeft") {
			e.preventDefault();
			scrollContainer.scrollLeft -= scrollAmount;
		} else if (e.key === "ArrowRight") {
			e.preventDefault();
			scrollContainer.scrollLeft += scrollAmount;
		}
	}
</script>

<div class="relative">
	<button
		type="button"
		class="overflow-x-auto scrollbar-hide py-3 sm:py-4 w-full text-left bg-transparent border-none p-0"
		class:cursor-grabbing={isDragging}
		class:cursor-grab={!isDragging}
		aria-label="Scrollable books carousel"
		bind:this={scrollContainer}
		onscroll={handleScroll}
		onmousedown={handleMouseDown}
		onmousemove={handleMouseMove}
		onmouseup={handleMouseUp}
		onmouseleave={handleMouseUp}
		onkeydown={handleKeyDown}
	>
		<div class="flex flex-row gap-3 sm:gap-4 md:gap-6">
			{#if !isHydrated}
				<!-- Skeleton loaders -->
				{#each Array(7) as _, i}
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
			{:else if books.length > 0}
				{#each books as book, index}
					<div class="shrink-0" transition:fade={{ duration: 200 }}>
						<BookCard
							image={book.image}
							author={book.author}
							name={book.name}
						/>
					</div>
				{/each}
			{:else}
				<!-- Empty state -->
				<Empty.Root class="w-full cursor-default">
					<Empty.Media variant="icon">
						<BookOpenIcon size={48} class="text-muted-foreground" />
					</Empty.Media>
					<Empty.Content>
						<Empty.Title>No books yet</Empty.Title>
						<Empty.Description>
							Start adding books to your collection
						</Empty.Description>
					</Empty.Content>
				</Empty.Root>
			{/if}
		</div>
	</button>

	{#if showLeftFade}
		<div
			transition:fade={{ duration: 300 }}
			class="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-background via-background/30 to-transparent pointer-events-none"
		></div>
	{/if}

	{#if showRightFade}
		<div
			transition:fade={{ duration: 300 }}
			class="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-background via-background/30 to-transparent pointer-events-none"
		></div>
	{/if}
</div>
