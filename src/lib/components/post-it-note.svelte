<script lang="ts">
	import NoteMenu from "./note-menu.svelte";

	interface Props {
		text: string;
		noteIndex: number;
		onEdit: (index: number) => void;
		onDelete: (index: number) => void;
	}

	let { text, noteIndex, onEdit, onDelete }: Props = $props();

	// random rotation between -3 and 3 degrees for natural post-it look
	const rotation = Math.random() * 6 - 3;
</script>

<div
	class="relative group"
	style="transform: rotate({rotation}deg);"
>
	<!-- Post-it note background with shadow -->
	<div
		class="relative bg-yellow-300 p-4 min-h-32 shadow-lg hover:shadow-xl transition-shadow"
		style="box-shadow: -2px 8px 12px rgba(0, 0, 0, 0.15), 0 0 0 1px rgba(0, 0, 0, 0.05);"
	>
		<!-- Folded corner effect -->
		<div
			class="absolute top-0 right-0 w-6 h-6 bg-yellow-400"
			style="clip-path: polygon(100% 0, 0 0, 100% 100%);"
		></div>

		<!-- Note text -->
		<p class="text-sm text-gray-800 leading-relaxed font-medium whitespace-pre-wrap pr-8">
			{text}
		</p>

		<!-- Menu button - appears on hover -->
		<div class="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity">
			<NoteMenu {noteIndex} onEdit={onEdit} onDelete={onDelete} />
		</div>
	</div>

	<!-- Subtle tape effect on top -->
	<div
		class="absolute -top-2 left-1/3 w-12 h-3 bg-white opacity-30 -rotate-12"
		style="box-shadow: inset 0 0 2px rgba(0, 0, 0, 0.1);"
	></div>
</div>

<style>
	:global(.dark) div {
		--yellow-300: #fcd34d;
		--yellow-400: #facc15;
	}
</style>
