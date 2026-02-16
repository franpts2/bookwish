<script lang="ts">
	import Button from "./Button.svelte";

	const navItems = [
		{ name: "All Books", path: "/all" },
		{ name: "Lists", path: "/lists" },
		{ name: "About", path: "/about" },
	];

	const addIcon =
		'<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6"><path stroke-linecap="round" stroke-linejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" /></svg>';
</script>

<header class="bg-bg-primary px-8 py-8">
	<div class="flex flex-row justify-between items-center">
		<div class="flex items-center gap-8">
			<a href="/" class="text-primary-accent flex flex-row gap-2 items-center justify-center">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					fill="none"
					viewBox="0 0 24 24"
					stroke-width="2.5"
					stroke="currentColor"
					class="size-7"
					><path
						stroke-linecap="round"
						stroke-linejoin="round"
						d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0 1 11.186 0Z"
					/></svg
				>
				<h1 class="text-3xl font-bold">bookwish</h1>
            </a>

			<nav class="flex gap-2">
				{#each navItems as item}
					<a
						href={item.path}
						class="px-4 py-2 rounded-lg text-text-primary hover:bg-bg-secondary hover:text-text-primary transition-colors"
					>
						{item.name}
					</a>
				{/each}
			</nav>
		</div>
		<Button iconPosition="right" icon={addIcon}>Add Book</Button>
	</div>
</header>
