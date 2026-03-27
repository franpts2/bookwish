<script lang="ts">
	import * as Dialog from "$lib/components/ui/dialog";
	import * as Label from "$lib/components/ui/label";
	import { Input } from "$lib/components/ui/input";
	import { MagnifyingGlassIcon } from "phosphor-svelte";

	export let open = false;
</script>

<Dialog.Root bind:open>
	<Dialog.Portal>
		<Dialog.Overlay
			class="data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 fixed inset-0 z-50 bg-black/80"
		/>
		<Dialog.Content
			class="rounded-card-lg bg-background shadow-popover data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 outline-hidden fixed left-[50%] top-[50%] z-50 w-full max-w-[calc(100%-2rem)] translate-x-[-50%] translate-y-[-50%] border p-5 sm:max-w-[490px] md:w-full"
		>
			<Dialog.Title
				class="flex w-full items-center justify-center text-lg font-semibold tracking-tight"
			>
				Add New Book
			</Dialog.Title>
			<div class="flex flex-col items-start gap-1">
				<Label.Label for="bookTitle" class="text-sm font-medium"
					>Book Title</Label.Label
				>
				<div class="relative w-full">
					<Input id="bookTitle" placeholder="Enter book title" name="title" />
					<div
						class="text-muted-foreground absolute right-3 bottom-2 flex items-center justify-center pointer-events-none"
					>
						<MagnifyingGlassIcon size={20} weight="light" />
					</div>
				</div>
			</div>
			<div class="flex w-full justify-end">
				<Dialog.Close
					class="h-input rounded-input bg-dark text-background shadow-mini hover:bg-dark/95 focus-visible:ring-dark focus-visible:ring-offset-background focus-visible:outline-hidden inline-flex items-center justify-center px-12.5 text-[15px] font-semibold focus-visible:ring-2 focus-visible:ring-offset-2 active:scale-[0.98]"
				>
					Add Book
				</Dialog.Close>
			</div>
		</Dialog.Content>
	</Dialog.Portal>
</Dialog.Root>
