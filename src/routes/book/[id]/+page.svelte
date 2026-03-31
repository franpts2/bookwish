<script lang="ts">
	import { page } from "$app/stores";
	import { books } from "$lib/stores";
	import { goto } from "$app/navigation";
	import ThreeDBook from "$lib/components/3d-book.svelte";
	import DeleteBookDialog from "$lib/components/delete-book-dialog.svelte";
	import { Skeleton } from "$lib/components/ui/skeleton/index.js";

	let isHydrated = $state(false);

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

	$effect(() => {
		books.subscribe((b) => {
			isHydrated = true;
		});
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
					<DeleteBookDialog bookName={selectedBook.name} onDelete={handleDeleteBook} />
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
		{:else if $page.params.id && !isHydrated}
			<!-- Loading skeleton -->
			<div class="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
				<!-- Book Cover Skeleton -->
				<div class="flex flex-col justify-center items-center gap-4">
					<Skeleton class="w-48 h-72 rounded-lg" />
					<Skeleton class="w-32 h-10 rounded-md" />
				</div>

				<!-- Book Details Skeleton -->
				<div class="lg:col-span-2 space-y-6">
					<div class="space-y-2">
						<Skeleton class="h-10 w-3/4" />
						<Skeleton class="h-6 w-1/2" />
					</div>
					<div class="space-y-2">
						<Skeleton class="h-6 w-1/4" />
						<Skeleton class="h-20 w-full" />
					</div>
				</div>
			</div>
		{:else}
			<div class="text-center py-12">
				<p class="text-muted-foreground">Book not found</p>
			</div>
		{/if}
	</div>
</div>
