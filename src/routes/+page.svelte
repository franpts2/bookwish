<script>
	import Button from "$lib/components/Button.svelte";
	import BookCardList from "$lib/components/BookCardList.svelte";

	const sampleProducts = [
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
	<BookCardList products={sampleProducts} />
</div>
