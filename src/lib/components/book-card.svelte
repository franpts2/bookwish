<script lang="ts">
	import ThreeDBook from "./3d-book.svelte";
	import { slugify, highlightText } from "$lib/utils";

	let { image = "", author = "", name = "", searchQuery = "" } = $props();

	const nameHighlights = $derived(highlightText(name, searchQuery));
	const authorHighlights = $derived(highlightText(author, searchQuery));
</script>

<a href={`/book/${slugify(name)}`} class="cursor-pointer flex flex-col items-center px-5 py-2 w-full" draggable="false">
	<ThreeDBook {image} {name} hoverEffect />

	<!-- Product Info -->
	<div class="space-y-1 text-center">
		<h3 class="text-sm sm:text-base font-medium text-foreground break-words">
			{#each nameHighlights as part}
				{#if part.highlighted}
					<mark class="bg-accent/30 text-inherit rounded px-0.5">{part.text}</mark>
				{:else}
					{part.text}
				{/if}
			{/each}
		</h3>
		<p class="text-xs sm:text-sm text-muted-foreground break-words">
			{#each authorHighlights as part}
				{#if part.highlighted}
					<mark class="bg-accent/30 text-inherit rounded px-0.5">{part.text}</mark>
				{:else}
					{part.text}
				{/if}
			{/each}
		</p>
	</div>
</a>
