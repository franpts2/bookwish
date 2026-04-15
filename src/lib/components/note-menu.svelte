<script lang="ts">
	import * as DropdownMenu from "$lib/components/ui/dropdown-menu";
	import { DotsThreeVerticalIcon } from "phosphor-svelte";

	let { noteIndex, onEdit, onDelete }: {
		noteIndex: number;
		onEdit: (index: number) => void;
		onDelete: (index: number) => void;
	} = $props();
</script>

<DropdownMenu.Root>
	<DropdownMenu.Trigger
		class="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 h-8 w-8 p-0"
		aria-label="Note menu"
	>
		<DotsThreeVerticalIcon size={18} weight="bold" />
	</DropdownMenu.Trigger>
	<DropdownMenu.Content class="mr-5">
		<DropdownMenu.Item onclick={() => onEdit(noteIndex)}>
			Edit
		</DropdownMenu.Item>
		<DropdownMenu.Item onclick={() => onDelete(noteIndex)}>
			Delete
		</DropdownMenu.Item>
	</DropdownMenu.Content>
</DropdownMenu.Root>
