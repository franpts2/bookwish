<script lang="ts">
	import { onMount } from "svelte";

	const headlines = [
		"What are you up to today?",
		"What's on your nightstand?",
		"Ready for a new chapter?",
		"Which world are we visiting today?",
		"Lost in a good book yet?",
		"Where will your story go next?",
		"Found any hidden gems lately?",
		"What's your current escape?",
	];

	let randomHeadline = "";

	onMount(() => {
		randomHeadline = headlines[Math.floor(Math.random() * headlines.length)];
	});
</script>

<section
	class="relative flex min-h-90 w-full items-center overflow-hidden rounded-b-[5rem] bg-bg-secondary p-12 md:p-20 mb-16"
>
	<div class="relative z-10 flex flex-col gap-3">
		<p class="text-4xl font-medium text-primary-accent/80">Hello, reader!</p>
		<h1 class="text-5xl font-bold tracking-tight text-primary-accent">
			{randomHeadline}
		</h1>
	</div>

	<div
		class="absolute -right-5 -bottom-88 text-primary-accent/40 md:-bottom-112"
	>
		<svg
			xmlns="http://www.w3.org/2000/svg"
			fill="none"
			viewBox="0 0 24 24"
			stroke-width="0.3"
			stroke="currentColor"
			class="h-160 w-160 md:h-200 md:w-200"
		>
			<path
				stroke-linecap="round"
				stroke-linejoin="round"
				d="M12 6.042A8.967 8.967 0 0 0 6 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 0 1 6 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 0 1 6-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0 0 18 18a8.967 8.967 0 0 0-6 2.292m0-14.25v14.25"
			/>
		</svg>
	</div>
</section>
