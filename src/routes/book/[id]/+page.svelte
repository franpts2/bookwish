<script lang="ts">
	import { page } from "$app/stores";
	import { books } from "$lib/stores";
	import ThreeDBook from "$lib/components/3d-book.svelte";
	import { goto } from "$app/navigation";
	import Button from "$lib/components/ui/button/button.svelte";

	let selectedBook = $derived.by(() => {
		if (!$page.params.id) return undefined;
		const id = parseInt($page.params.id);
		let currentBooks: any[] = [];
		const unsubscribe = books.subscribe((b) => {
			currentBooks = b;
		});
		unsubscribe();
		return currentBooks[id];
	});

	const handleDeleteBook = () => {
		if ($page.params.id === undefined) return;
		const id = parseInt($page.params.id);
		books.removeBook(id);
		goto("/");
	};
</script>

<div class="py-8">
	<div class="px-6 sm:px-8 lg:px-12">
		{#if selectedBook}
			<div class="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
				<!-- Book Cover & Actions -->
				<div class="flex flex-col justify-center items-center gap-4">
					<ThreeDBook
						image={selectedBook.image}
						name={selectedBook.name}
						large
					/>
					<Button variant="destructive" onclick={handleDeleteBook}>
						Delete Book
					</Button>
				</div>

				<!-- Book Details -->
				<div class="lg:col-span-2 space-y-6">
					<div>
						<h1
							class="text-3xl sm:text-4xl font-bold text-foreground"
						>
							{selectedBook.name}
						</h1>
						<p class="text-lg text-muted-foreground mt-2">
							{selectedBook.author}
						</p>
					</div>

					{#if selectedBook.description}
						<div class="space-y-2">
							<h2 class="text-xl font-semibold">Description</h2>
							<p
								class="text-base text-muted-foreground leading-relaxed"
							>
								{selectedBook.description}
							</p>
						</div>
					{/if}
				</div>
			</div>
		{:else}
			<div class="text-center py-12">
				<p class="text-muted-foreground">Book not found</p>
			</div>
		{/if}
	</div>
</div>
