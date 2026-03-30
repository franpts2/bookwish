<script lang="ts">
	import BookCardList from "$lib/components/book-card-list.svelte";
	import Hero from "$lib/components/hero.svelte";
	import { books } from "$lib/stores";
</script>

<div class="px-2 sm:px-3 md:px-4">
	<Hero />
	<div class="flex flex-row items-center justify-between">
		<h1
			class="text-xl sm:text-2xl md:text-3xl text-primary font-bold py-3 sm:py-4"
		>
			Recently Added
		</h1>
	</div>
	<BookCardList books={$books} />
</div>
