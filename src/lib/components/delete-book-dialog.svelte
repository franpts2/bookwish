<script lang="ts">
	import * as AlertDialog from "$lib/components/ui/alert-dialog/index.js";

	let { open = $bindable(false), bookName, onDelete }: {
		open?: boolean;
		bookName: string;
		onDelete: () => void;
	} = $props();
</script>

<AlertDialog.Root bind:open>
	<AlertDialog.Trigger
		class="inline-flex items-center justify-center rounded-md border border-transparent bg-destructive/10 hover:bg-destructive/20 focus-visible:ring-3 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/20 text-destructive focus-visible:border-destructive/40 px-2.5 h-9 gap-1.5 text-sm font-medium focus-visible:ring-ring/50 focus-visible:border-ring active:translate-y-px transition-all outline-none select-none disabled:pointer-events-none disabled:opacity-50"
	>
		Delete Book
	</AlertDialog.Trigger>
	<AlertDialog.Content>
		<AlertDialog.Header>
			<AlertDialog.Title>Are you sure?</AlertDialog.Title>
			<AlertDialog.Description>
				This will permanently delete "{bookName}" from your collection.
			</AlertDialog.Description>
		</AlertDialog.Header>
		<AlertDialog.Footer>
			<AlertDialog.Cancel>Cancel</AlertDialog.Cancel>
			<AlertDialog.Action variant="destructive" onclick={onDelete}>
				Delete
			</AlertDialog.Action>
		</AlertDialog.Footer>
	</AlertDialog.Content>
</AlertDialog.Root>
