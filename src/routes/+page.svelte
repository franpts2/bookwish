<script lang="ts">
	import BookCardList from "$lib/components/book-card-list.svelte";
	import Hero from "$lib/components/hero.svelte";
	import { books, hydrateBooks } from "$lib/stores";
	import { onMount } from "svelte";
	import * as Popover from "$lib/components/ui/popover";

	let isHydrated = $state(false);
	let booksToShow = $state(10);

	onMount(() => {
		hydrateBooks();
		isHydrated = true;
	});

	const options = [5, 10, 15, 20];
</script>

<div class="px-2 sm:px-3 md:px-4">
	<Hero />
	<div class="flex flex-row items-center justify-between">
		<h1
			class="text-xl sm:text-2xl md:text-3xl text-primary font-bold py-3 sm:py-4"
		>
			Recently Added
		</h1>
		<Popover.Root>
			<Popover.Trigger class="px-3 py-1 h-9 rounded-md border border-input bg-background hover:bg-accent hover:text-accent-foreground text-sm font-medium transition-colors cursor-pointer">
				Show last {booksToShow}
			</Popover.Trigger>
			<Popover.Content class="w-40">
				<div class="flex flex-col gap-2">
					{#each options as option}
						<button
							class="text-left px-3 py-2 rounded hover:bg-accent hover:text-accent-foreground transition-colors cursor-pointer"
							onclick={() => (booksToShow = option)}
						>
							Show last {option}
						</button>
					{/each}
				</div>
			</Popover.Content>
		</Popover.Root>
	</div>
	<BookCardList books={[...$books].reverse().slice(0, booksToShow)} {isHydrated} />
</div>
