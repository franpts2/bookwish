<script>
	import BookCardList from "$lib/components/BookCardList.svelte";
	import Hero from "$lib/components/Hero.svelte";

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

<div class="px-2 sm:px-3 md:px-4">
	<Hero />
	<div class="flex flex-row items-center justify-between">
		<h1
			class="text-xl sm:text-2xl md:text-3xl text-primary font-bold py-3 sm:py-4"
		>
			Recently Added
		</h1>
	</div>
	<BookCardList books={sampleBooks} />
</div>
