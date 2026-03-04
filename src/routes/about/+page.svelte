<script lang="ts">
	import { searchBooks, type Book } from "$lib/books";

	let query = $state("");
	let books = $state<Book[]>([]);
	let loading = $state(false);

	async function handleSearch() {
		if (!query) return;
		loading = true;
		try {
			books = await searchBooks(query);
		} catch (err) {
			console.error(err);
		} finally {
			loading = false;
		}
	}
</script>

<div class="max-w-6xl mx-auto p-6">
	<div class="flex gap-2 mb-8">
		<input
			type="text"
			bind:value={query}
			placeholder="Search for titles, authors..."
			class="flex-1 p-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 outline-none"
		/>
		<button
			onclick={handleSearch}
			class="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition"
		>
			{loading ? "Searching..." : "Search"}
		</button>
	</div>

	<div
		class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
	>
		{#each books as book}
			<div
				class="bg-white rounded-xl shadow-md overflow-hidden border border-gray-100 hover:shadow-lg transition"
			>
				<img
					src={book.volumeInfo.imageLinks?.thumbnail ||
						"https://via.placeholder.com/128x192?text=No+Cover"}
					alt={book.volumeInfo.title}
					class="w-full h-48 object-contain bg-gray-50 p-4"
				/>
				<div class="p-4">
					<h3 class="font-bold text-gray-800 line-clamp-1">
						{book.volumeInfo.title}
					</h3>
					<p class="text-sm text-gray-500 mb-2">
						{book.volumeInfo.authors?.join(", ") || "Unknown"}
					</p>
					<a
						href={book.volumeInfo.infoLink}
						target="_blank"
						class="text-blue-600 text-sm font-semibold hover:underline"
					>
						View Details →
					</a>
				</div>
			</div>
		{/each}
	</div>
</div>
