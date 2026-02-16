<script>
	import BookCardList from "$lib/components/BookCardList.svelte";

	const sampleBooks = [
		{
			image: "/path/to/image.jpg",
			author: "Author Name",
			name: "Book Name",
		},
		{
			image: "/path/to/image.jpg",
			author: "Author Name",
			name: "Book Name",
		},
		{
			image: "/path/to/image.jpg",
			author: "Author Name",
			name: "Book Name",
		},
		{
			image: "/path/to/image.jpg",
			author: "Author Name",
			name: "Book Name",
		},
		{
			image: "/path/to/image.jpg",
			author: "Author Name",
			name: "Book Name",
		},
		{
			image: "/path/to/image.jpg",
			author: "Author Name",
			name: "Book Name",
		},
		{
			image: "/path/to/image.jpg",
			author: "Author Name",
			name: "Book Name",
		},
		{
			image: "/path/to/image.jpg",
			author: "Author Name",
			name: "Book Name",
		},
		{
			image: "/path/to/image.jpg",
			author: "Author Name",
			name: "Book Name",
		},
	];
</script>

<div>
	<div class="flex flex-row items-center justify-between">
		<h1 class="text-2xl text-primary-accent font-bold py-4">Recently Added</h1>
	</div>
	<BookCardList books={sampleBooks} />
</div>
