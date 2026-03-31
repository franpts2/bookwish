<script lang="ts">
	import ThreeDBook from "./3d-book.svelte";

	let { image = "", author = "", name = "", index = 0 } = $props();
</script>

<a href={`/book/${index}`} class="cursor-pointer flex flex-col items-center px-5 py-2 hover:opacity-80 transition-opacity w-48">
	<ThreeDBook {image} {name} />

	<!-- Product Info -->
	<div class="space-y-1 text-center">
		<h3 class="text-sm sm:text-base font-medium text-foreground break-words">{name}</h3>
		<p class="text-xs sm:text-sm text-muted-foreground break-words">{author}</p>
	</div>
</a>
