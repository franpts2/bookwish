<script lang="ts">
	import "../index.css";
	import favicon from "$lib/assets/favicon.svg";
	import Header from "$lib/components/header.svelte";
	import { themeStore } from "$lib/theme/themeStore";
	import { onMount } from "svelte";

	let { children } = $props();

	onMount(() => {
		themeStore.initTheme();
	});
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
</svelte:head>

<div class="min-h-screen flex flex-col">
	<Header />
	<main class="flex-1 p-8 mt-16 sm:mt-20 md:mt-24">
		{@render children()}
	</main>
</div>
