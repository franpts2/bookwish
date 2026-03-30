<script lang="ts">
	import { Button } from "$lib/components/ui/button";
	import AddBookModal from "./add-book-modal.svelte";
	import { BookIcon, PlusIcon } from "phosphor-svelte";

	let modalOpen = false;

	const navItems = [
		{ name: "All Books", path: "/all" },
		{ name: "Lists", path: "/lists" },
		{ name: "About", path: "/about" },
	];
</script>

<header class="bg-background px-4 sm:px-6 md:px-8 pt-4 sm:pt-6 md:pt-8">
	<div class="flex flex-row justify-between items-center">
		<div class="flex items-center gap-2 sm:gap-4 md:gap-8">
			<a
				href="/"
				class="text-primary flex flex-row gap-1 sm:gap-2 items-center justify-center"
			>
				<BookIcon size={28} weight="fill" className="sm:size-8" />
				<h1 class="text-xl sm:text-2xl md:text-3xl font-bold">bookwish</h1>
			</a>

			<nav class="hidden md:flex gap-2">
				{#each navItems as item}
					<a
						href={item.path}
						class="px-3 md:px-4 py-2 rounded-lg text-sm md:text-base text-foreground hover:bg-muted hover:text-foreground transition-colors"
					>
						{item.name}
					</a>
				{/each}
			</nav>
		</div>
		<Button onclick={() => (modalOpen = true)}>
			<PlusIcon size={20} weight="bold" />
			Add Book
		</Button>
	</div>
</header>

<AddBookModal bind:open={modalOpen} />
