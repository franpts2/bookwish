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

<div class="relative group" style="transform: rotate({rotation}deg);">
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
        <p
            class="text-sm text-gray-800 leading-relaxed font-medium whitespace-pre-wrap pr-8"
        >
            {text}
        </p>

        <!-- Menu button -->
        <div class="absolute bottom-2 right-2">
            <NoteMenu {noteIndex} {onEdit} {onDelete} />
        </div>
    </div>
</div>

<style>
    :global(.dark) div {
        --yellow-300: #fcd34d;
        --yellow-400: #facc15;
    }
</style>
