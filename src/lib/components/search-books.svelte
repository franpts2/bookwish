<script lang="ts">
	import { Input } from "$lib/components/ui/input";
	import { MagnifyingGlassIcon } from "phosphor-svelte";

	let { value = $bindable("") }: { value: string } = $props();
</script>

<div class="mb-10 mx-10">
	<div class="relative">
		<MagnifyingGlassIcon
			size={20}
			class="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground pointer-events-none"
		/>
		<Input
			type="text"
			placeholder="Search books or authors..."
			bind:value
			class="pl-10"
		/>
	</div>
</div>
