<script lang="ts">
	import ThreeDBook from "./3d-book.svelte";

	let { image = "", author = "", name = "" } = $props();
</script>

<div class="cursor-pointer flex flex-col items-center px-5 py-2">
	<ThreeDBook {image} {name} />

	<!-- Product Info -->
	<div class="space-y-1 text-center">
		<h3 class="text-sm sm:text-base font-medium text-foreground line-clamp-2">{name}</h3>
		<p class="text-xs sm:text-sm text-muted-foreground line-clamp-1">{author}</p>
	</div>
</div>
