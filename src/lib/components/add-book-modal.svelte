<script lang="ts">
	import * as Dialog from "$lib/components/ui/dialog";
	import { Input } from "$lib/components/ui/input";
	import { MagnifyingGlassIcon, CaretUp, CaretDown } from "phosphor-svelte";
	import { books } from "$lib/stores";
	import type { Book } from "$lib/books";

	export let open = false;

	interface Book {
		id: string;
		title: string;
		author: string;
		year: number | null;
		description?: string;
		thumbnail?: string;
	}

	let searchQuery = "";
	let selectedIndex = 0;
	let filtered: Book[] = [];
	let isLoading = false;
	let error: string | null = null;
	let searchTimeout: ReturnType<typeof setTimeout>;

	$: {
		if (searchQuery.length >= 3) {
			clearTimeout(searchTimeout);
			searchTimeout = setTimeout(() => {
				searchGoogleBooks(searchQuery);
			}, 300);
		} else {
			clearTimeout(searchTimeout);
			filtered = [];
		}
	}

	async function searchGoogleBooks(query: string) {
		if (!query.trim()) {
			filtered = [];
			error = null;
			return;
		}

		isLoading = true;
		error = null;
		try {
			console.log("Searching for:", query);
			const response = await fetch(
				`/api/search?q=${encodeURIComponent(query)}`,
			);
			const data = await response.json();

			console.log("API Response:", data);

			if (data.error) {
				error = data.error;
				filtered = [];
			} else if (data.items) {
				filtered = data.items
					.map((item: any) => {
						const volumeInfo = item.volumeInfo;
						return {
							id: item.id,
							title: volumeInfo.title || "Unknown Title",
							author: volumeInfo.authors?.[0] || "Unknown Author",
							year: volumeInfo.publishedDate
								? parseInt(volumeInfo.publishedDate.split("-")[0])
								: null,
							description: volumeInfo.description,
							thumbnail: volumeInfo.imageLinks?.thumbnail,
						};
					})
					.slice(0, 10);
				selectedIndex = 0;
				error = null;
			} else {
				filtered = [];
				error = null;
			}
		} catch (err) {
			console.error("Error searching books:", err);
			error = "Failed to search. Please try again.";
			filtered = [];
		} finally {
			isLoading = false;
		}
	}

	function selectBook() {
		if (filtered[selectedIndex]) {
			const book = filtered[selectedIndex];
			books.addBook({
				name: book.title,
				author: book.author,
				image: book.thumbnail || "",
				description: book.description,
			});
			searchQuery = "";
			open = false;
		}
	}
</script>

<Dialog.Root bind:open>
	<Dialog.Portal>
		<Dialog.Overlay
			class="data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 fixed inset-0 z-50 bg-black/80"
		/>
		<Dialog.Content
			class="rounded-card-lg bg-background shadow-popover data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 outline-hidden fixed left-[50%] top-[50%] z-50 w-full max-w-[calc(100%-2rem)] translate-x-[-50%] translate-y-[-50%] border p-5 sm:max-w-[490px] md:w-full flex flex-col max-h-[600px]"
		>
			<Dialog.Title
				class="flex w-full items-center justify-center text-lg font-semibold tracking-tight mb-4"
			>
				Search Books
			</Dialog.Title>

			<!-- Search Input -->
			<div class="relative w-full mb-4">
				<Input
					id="bookSearch"
					placeholder="Search book title or author..."
					bind:value={searchQuery}
					//on:keydown={handleKeyDown}
					class="pr-10"
				/>
				<div
					class="text-muted-foreground absolute right-3 top-1/2 transform -translate-y-1/2 flex items-center justify-center pointer-events-none"
				>
					{#if isLoading}
						<div class="animate-spin">
							<MagnifyingGlassIcon size={20} weight="light" />
						</div>
					{:else}
						<MagnifyingGlassIcon size={20} weight="light" />
					{/if}
				</div>
			</div>

			<!-- Results List -->
			<div class="flex-1 overflow-y-auto mb-4 border rounded-md">
				{#if error}
					<p class="p-4 text-center text-sm text-red-500">
						{error}
					</p>
				{:else if isLoading}
					<p class="p-4 text-center text-sm text-muted-foreground">
						Searching...
					</p>
				{:else if filtered.length > 0}
					<div class="space-y-0">
						{#each filtered as book, index (book.id)}
							<button
								on:click={() => {
									selectedIndex = index;
									selectBook();
								}}
								class={`w-full px-4 py-3 text-left border-b last:border-b-0 transition-colors ${
									selectedIndex === index
										? "bg-primary/20 hover:bg-primary/30"
										: "hover:bg-muted"
								}`}
							>
								<div class="flex items-start justify-between">
									<div class="flex-1">
										<p class="font-medium text-sm">{book.title}</p>
										<p class="text-xs text-muted-foreground">{book.author}</p>
									</div>
									<p class="text-xs text-muted-foreground ml-2">
										{book.year || "N/A"}
									</p>
								</div>
							</button>
						{/each}
					</div>
				{:else if searchQuery}
					<p class="p-4 text-center text-sm text-muted-foreground">
						No books found
					</p>
				{:else}
					<p class="p-4 text-center text-sm text-muted-foreground">
						Type at least 3 characters to search
					</p>
				{/if}
			</div>
		</Dialog.Content>
	</Dialog.Portal>
</Dialog.Root>
