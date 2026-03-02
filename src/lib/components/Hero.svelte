<script lang="ts">
	import { onMount } from "svelte";

	const headlines = [
		"Ready for a new chapter?",
		"Which world are we visiting next?",
		"Lost in a good book yet?",
		"Found any hidden gems lately?",
		"What's your next escape?",
		"Building your dream library?",
		"What's next on the shopping list?",
		"Collecting tomorrow's favorites.",
		"One more book won't hurt, right?",
		"Curating your future bookshelves.",
		"Saving space for new adventures.",
		"Found a new treasure to track?",
	];

	let randomHeadline = "";

	onMount(() => {
		randomHeadline = headlines[Math.floor(Math.random() * headlines.length)];
	});
</script>

<section
	class="relative flex min-h-60 sm:min-h-80 md:min-h-90 w-full items-center overflow-hidden rounded-b-[2.5rem] sm:rounded-b-[4rem] md:rounded-b-[5rem] bg-bg-secondary p-3 sm:p-6 md:p-12 mb-8 sm:mb-12 md:mb-16"
>
	<div class="relative z-10 flex flex-col gap-2 sm:gap-3">
		<p
			class="text-2xl sm:text-3xl md:text-4xl font-medium text-primary-accent/80"
		>
			Hello, reader!
		</p>
		<h1
			class="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-primary-accent"
		>
			{randomHeadline}
		</h1>
	</div>

	<div
		class="absolute -right-8 -bottom-40 sm:-right-5 sm:-bottom-72 md:-bottom-112 text-primary-accent/40"
	>
		<svg
			xmlns="http://www.w3.org/2000/svg"
			fill="none"
			viewBox="0 0 24 24"
			stroke-width="0.3"
			stroke="currentColor"
			class="h-72 w-72 sm:h-160 sm:w-160 md:h-200 md:w-200"
		>
			<path
				stroke-linecap="round"
				stroke-linejoin="round"
				d="M12 6.042A8.967 8.967 0 0 0 6 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 0 1 6 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 0 1 6-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0 0 18 18a8.967 8.967 0 0 0-6 2.292m0-14.25v14.25"
			/>
		</svg>
	</div>
</section>
