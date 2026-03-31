<script lang="ts">
    import type { PageProps } from "./$types";
    import BookCard from "$lib/components/book-card.svelte";
    import * as Empty from "$lib/components/ui/empty/index.js";
    import SearchBooks from "$lib/components/search-books.svelte";
    import { BookOpenIcon } from "phosphor-svelte";
    import { books } from "$lib/stores";
    import Skeleton from "$lib/components/ui/skeleton/skeleton.svelte";
    import { onMount } from "svelte";

    let { data }: PageProps = $props();

    let searchQuery = $state("");
    let allBooks = $derived.by(() => {
        const filtered = $books.filter(
            (book) =>
                book.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                book.author.toLowerCase().includes(searchQuery.toLowerCase())
        );
        return filtered;
    });
    let isHydrated = $state(false);

    onMount(() => {
        isHydrated = true;
    });
</script>

<SearchBooks bind:value={searchQuery} />

{#if !isHydrated}
    <div
        class="w-full grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6"
    >
        {#each Array(15) as _}
            <div class="flex justify-center">
                <div class="w-full space-y-2">
                    <Skeleton class="w-40 h-64 rounded-lg mx-auto" />
                    <Skeleton class="h-4 w-full rounded" />
                    <Skeleton class="h-3 w-3/4 rounded mx-auto" />
                </div>
            </div>
        {/each}
    </div>
{:else if allBooks.length === 0}
    <Empty.Root>
        <Empty.Media variant="icon">
            <BookOpenIcon size={48} class="text-muted-foreground" />
        </Empty.Media>
        <Empty.Header>
            {#if searchQuery}
                <Empty.Title>No results found</Empty.Title>
                <Empty.Description
                    >Try adjusting your search terms to find books.</Empty.Description
                >
            {:else}
                <Empty.Title>No books yet</Empty.Title>
                <Empty.Description
                    >Start adding books to your collection to see them here.</Empty.Description
                >
            {/if}
        </Empty.Header>
    </Empty.Root>
{:else}
    <div
        class="w-full grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6"
    >
        {#each allBooks as book (book.name)}
            <div class="flex justify-center">
                <BookCard
                    image={book.image}
                    author={book.author}
                    name={book.name}
                    searchQuery={searchQuery}
                />
            </div>
        {/each}
    </div>
{/if}
