<script lang="ts">
	import { page } from "$app/stores";
	import { BookIcon } from "phosphor-svelte";
	import * as Button from "$lib/components/ui/button";
	import * as Empty from "$lib/components/ui/empty";
</script>

<div class="px-2 sm:px-3 md:px-4 flex flex-col items-center justify-center min-h-full">
	<Empty.Root class="min-h-80 border-0">
		<Empty.Header>
			<Empty.Media variant="icon">
				<BookIcon weight="duotone" size={40} />
			</Empty.Media>
			<Empty.Title>
				{#if $page.status === 404}
					404 Page Not Found
				{:else}
					Oops!
				{/if}
			</Empty.Title>
			<Empty.Description>
				{#if $page.status === 404}
					The page you're looking for seems to have gone missing. It must be lost in the bookcase!
				{:else}
					Something went wrong on our end. Please try again later.
				{/if}
			</Empty.Description>
		</Empty.Header>

		<Empty.Content class="flex-row gap-3 items-center justify-center">
			<Button.Root href="/">Back to Home</Button.Root>
			<Button.Root variant="outline" href="/all">Browse All Books</Button.Root>
		</Empty.Content>
	</Empty.Root>
</div>
