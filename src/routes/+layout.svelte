<script lang="ts">
	import "../index.css";
	import favicon from "$lib/assets/favicon.svg";
	import Header from "$lib/components/header.svelte";

	let { children } = $props();

</script>

<svelte:head>
	<link rel="icon" href={favicon} />
</svelte:head>

<div class="min-h-screen flex flex-col">
	<Header />
	<main class="flex-1 p-8">
		{@render children()}
	</main>
</div>
