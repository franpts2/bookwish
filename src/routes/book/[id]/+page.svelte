<script lang="ts">
	import { page } from "$app/stores";
	import { books } from "$lib/stores";
	import { goto } from "$app/navigation";
	import { slugify } from "$lib/utils";
	import ThreeDBook from "$lib/components/3d-book.svelte";
	import DeleteBookDialog from "$lib/components/dialogs/delete-book-dialog.svelte";
	import { Skeleton } from "$lib/components/ui/skeleton/index.js";
	import * as Empty from "$lib/components/ui/empty";
	import * as Button from "$lib/components/ui/button";
	import { BookIcon } from "phosphor-svelte";
    import AddNoteDialog from "$lib/components/dialogs/add-note-dialog.svelte";

	let isHydrated = $state(false);
	let currentBooks = $state<any[]>([]);

	$effect(() => {
		const unsubscribe = books.subscribe((b) => {
			currentBooks = b;
			isHydrated = true;
		});
		return unsubscribe;
	});

	let selectedBook = $derived.by(() => {
		if (!$page.params.id) return undefined;
		const slug = $page.params.id;
		return currentBooks.find((book) => slugify(book.name) === slug);
	});

	const handleDeleteBook = () => {
		if (!selectedBook) return;
		books.removeBook(selectedBook.name);
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
					<AddNoteDialog bookName={selectedBook.name} />
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

					<div class="space-y-2">
						<h2 class="text-xl font-semibold">Description</h2>
						{#if selectedBook.description}
							<p
								class="text-base text-muted-foreground leading-relaxed"
							>
								{selectedBook.description}
							</p>
						{:else}
							<p class="text-base text-muted-foreground leading-relaxed">
								This book doesn't have a description
							</p>
						{/if}
					</div>

					{#if selectedBook.notes && selectedBook.notes.length > 0}
						<div class="space-y-2">
							<h2 class="text-xl font-semibold">Notes</h2>
							<div class="space-y-2">
								{#each selectedBook.notes as note}
									<p class="text-base text-muted-foreground leading-relaxed bg-muted p-3 rounded">
										{note}
									</p>
								{/each}
							</div>
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
			<div class="flex flex-col items-center justify-center min-h-96">
				<Empty.Root class="border-0">
					<Empty.Header>
						<Empty.Media variant="icon">
							<BookIcon weight="duotone" size={40} />
						</Empty.Media>
						<Empty.Title>Book Not Found</Empty.Title>
						<Empty.Description>
							The book you're looking for doesn't exist. It might have been removed or the URL could be incorrect.
						</Empty.Description>
					</Empty.Header>

					<Empty.Content class="flex-row gap-3 items-center justify-center">
						<Button.Root href="/">Back to Home</Button.Root>
						<Button.Root variant="outline" href="/all">Browse All Books</Button.Root>
					</Empty.Content>
				</Empty.Root>
			</div>
		{/if}
	</div>
</div>
