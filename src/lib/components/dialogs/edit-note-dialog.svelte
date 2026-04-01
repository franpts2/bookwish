<script lang="ts">
	import * as Dialog from "$lib/components/ui/dialog/index.js";
	import * as Button from "$lib/components/ui/button";
	import { Input } from "$lib/components/ui/input";
	import { books } from "$lib/stores";

	let { open = $bindable(false), bookName, noteIndex, noteText: initialNoteText }: {
		open?: boolean;
		bookName: string;
		noteIndex: number | null;
		noteText: string;
	} = $props();

	let noteText = $state("");

	$effect(() => {
		if (open) {
			noteText = initialNoteText;
		}
	});

	const handleSubmit = () => {
		if (noteText.trim() && noteIndex !== null) {
			books.editNote(bookName, noteIndex, noteText);
			noteText = "";
			open = false;
		}
	};

	const handleCancel = () => {
		noteText = "";
		open = false;
	};
</script>

<Dialog.Root bind:open>
	<Dialog.Content>
		<Dialog.Header>
			<Dialog.Title>Edit your note</Dialog.Title>
		</Dialog.Header>
		<div class="py-4">
			<Input
				placeholder="Enter your note..."
				bind:value={noteText}
			/>
		</div>
		<Dialog.Footer>
			<Button.Root variant="outline" onclick={handleCancel}>
				Cancel
			</Button.Root>
			<Button.Root onclick={handleSubmit}>
				Save
			</Button.Root>
		</Dialog.Footer>
	</Dialog.Content>
</Dialog.Root>
