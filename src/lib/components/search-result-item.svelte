<script lang="ts">
	export let book: {
		id: string;
		title: string;
		author: string;
		year: number | null;
		description?: string;
		thumbnail?: string;
	};
	export let index: number;
	export let selectedIndex: number;
	export let onSelect: () => void;
</script>

<button
	on:click={() => {
		selectedIndex = index;
		onSelect();
	}}
	class={`w-full px-4 py-3 text-left border-b last:border-b-0 transition-colors flex items-start gap-4 ${
		selectedIndex === index
			? "bg-primary/20 hover:bg-primary/30"
			: "hover:bg-muted"
	}`}
>
	<!-- Cover Preview -->
	<div class="flex-shrink-0 w-12 h-16 bg-muted rounded overflow-hidden">
		{#if book.thumbnail}
			<img
				src={book.thumbnail}
				alt={book.title}
				class="w-full h-full object-cover"
			/>
		{:else}
			<div class="w-full h-full flex items-center justify-center text-xs text-muted-foreground">
				No Cover
			</div>
		{/if}
	</div>

	<!-- Book Info -->
	<div class="flex-1 min-w-0">
		<p class="font-medium text-sm truncate">{book.title}</p>
		<p class="text-xs text-muted-foreground truncate">{book.author}</p>
		<p class="text-xs text-muted-foreground mt-1">
			{book.year || "N/A"}
		</p>
	</div>
</button>
