<script lang="ts">
	import * as Dialog from "$lib/components/ui/dialog/index.js";
	import * as Button from "$lib/components/ui/button";
	import { Textarea } from "$lib/components/ui/textarea";
	import { books } from "$lib/stores";

	let { open = $bindable(false), bookName }: {
		open?: boolean;
		bookName: string;
	} = $props();

	let noteText = $state("");

	const handleSubmit = () => {
		if (noteText.trim()) {
			books.addNote(bookName, noteText);
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
	<Dialog.Trigger
		class="focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive dark:aria-invalid:border-destructive/50 rounded-md border border-transparent bg-clip-padding text-sm font-medium focus-visible:ring-3 active:translate-y-px aria-invalid:ring-3 [&_svg:not([class*='size-'])]:size-4 group/button inline-flex shrink-0 items-center justify-center whitespace-nowrap transition-all outline-none select-none disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 h-9 gap-1.5 px-2.5 in-data-[slot=button-group]:rounded-md has-data-[icon=inline-end]:pr-2 has-data-[icon=inline-start]:pl-2 bg-primary text-primary-foreground hover:bg-primary/80"
	>
		Add note
	</Dialog.Trigger>
	<Dialog.Content>
		<Dialog.Header>
			<Dialog.Title>Add your note</Dialog.Title>
		</Dialog.Header>
		<div class="py-4">
			<Textarea
				placeholder="Enter your note..."
				bind:value={noteText}
			/>
		</div>
		<Dialog.Footer>
			<Button.Root variant="outline" onclick={handleCancel}>
				Cancel
			</Button.Root>
			<Button.Root onclick={handleSubmit}>
				Submit
			</Button.Root>
		</Dialog.Footer>
	</Dialog.Content>
</Dialog.Root>
