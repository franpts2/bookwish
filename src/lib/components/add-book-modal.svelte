<script lang="ts">
	import * as Dialog from "$lib/components/ui/dialog";
	import { Input } from "$lib/components/ui/input";
	import { MagnifyingGlassIcon, SpinnerIcon } from "phosphor-svelte";
	import { books } from "$lib/stores";
	import type { SearchResult } from "$lib/books";
	import SearchResultItem from "$lib/components/search-result-item.svelte";
	import Badge from "$lib/components/ui/badge/badge.svelte";

	export let open = false;

	let searchQuery = "";
	let selectedIndex = 0;
	let filtered: SearchResult[] = [];
	let isLoading = false;
	let error: string | null = null;
	let searchTimeout: ReturnType<typeof setTimeout>;
	let resultsContainer: HTMLDivElement;

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

	$: if (resultsContainer && filtered.length > 0) {
		const selectedButton = resultsContainer.querySelectorAll("button")[selectedIndex];
		if (selectedButton) {
			selectedButton.scrollIntoView({ behavior: "smooth", block: "nearest" });
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
								? parseInt(
										volumeInfo.publishedDate.split("-")[0],
									)
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

	function handleKeyDown(e: KeyboardEvent) {
		if (filtered.length === 0) return;

		switch (e.key) {
			case "ArrowUp":
				e.preventDefault();
				selectedIndex = Math.max(0, selectedIndex - 1);
				break;
			case "ArrowDown":
				e.preventDefault();
				selectedIndex = Math.min(filtered.length - 1, selectedIndex + 1);
				break;
			case "Enter":
				e.preventDefault();
				selectBook();
				break;
			case "Escape":
				e.preventDefault();
				open = false;
				break;
		}
	}
</script>

<svelte:window on:keydown={handleKeyDown} />

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
					class="pr-10"
				/>
				<div
					class="text-muted-foreground absolute right-3 top-1/2 transform -translate-y-1/2 flex items-center justify-center pointer-events-none"
				>
					{#if isLoading}
						<SpinnerIcon
							size={20}
							class="animate-spin"
							weight="light"
						/>
					{:else}
						<MagnifyingGlassIcon size={20} weight="light" />
					{/if}
				</div>
			</div>

			<!-- Results List -->
			<div class="flex-1 overflow-y-auto mb-4 border rounded-md" bind:this={resultsContainer}>
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
							<SearchResultItem
								{book}
								{index}
								{selectedIndex}
								onSelect={selectBook}
							/>
						{/each}
					</div>
				{:else if searchQuery}
					<p class="p-4 text-center text-sm text-muted-foreground">
						No books found
					</p>
				{:else}
					<p class="p-4 text-center text-sm text-muted-foreground">
						Start typing to search
					</p>
				{/if}
			</div>

			<!-- Keyboard Instructions -->
			<div
				class="border-t pt-3 mt-2 flex items-center justify-between text-xs text-muted-foreground"
			>
				<div class="flex flex-row gap-4">
					<div class="flex gap-1 items-center">
						<Badge variant="outline">Enter</Badge>
						<span>Select</span>
					</div>
					<div class="flex gap-1 items-center">
						<Badge variant="outline">↑ ↓</Badge>
						<span>Move</span>
					</div>
				</div>
				<div class="flex gap-1 items-center">
					<Badge variant="outline">Esc</Badge>
					<span>Exit</span>
				</div>
			</div>
		</Dialog.Content>
	</Dialog.Portal>
</Dialog.Root>
