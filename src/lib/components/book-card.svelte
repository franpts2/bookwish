<script lang="ts">
	import ThreeDBook from "./3d-book.svelte";
	import { slugify } from "$lib/utils";

	let { image = "", author = "", name = "" } = $props();
</script>

<a href={`/book/${slugify(name)}`} class="cursor-pointer flex flex-col items-center px-5 py-2 w-full" draggable="false">
	<ThreeDBook {image} {name} hoverEffect />

	<!-- Product Info -->
	<div class="space-y-1 text-center">
		<h3 class="text-sm sm:text-base font-medium text-foreground break-words">{name}</h3>
		<p class="text-xs sm:text-sm text-muted-foreground break-words">{author}</p>
	</div>
</a>
