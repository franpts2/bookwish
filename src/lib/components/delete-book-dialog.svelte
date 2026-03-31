<script lang="ts">
	import * as AlertDialog from "$lib/components/ui/alert-dialog/index.js";
	import Button from "$lib/components/ui/button/button.svelte";

	let { open = $bindable(false), bookName, onDelete }: {
		open?: boolean;
		bookName: string;
		onDelete: () => void;
	} = $props();
</script>

<AlertDialog.Root bind:open>
	<AlertDialog.Trigger>
		<Button variant="destructive">Delete Book</Button>
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
