<script lang="ts">
	let { image = "", author = "", name = "" } = $props();
</script>

<div
	class="w-40 sm:w-52 md:w-60 overflow-hidden rounded-lg cursor-pointer hover:shadow-lg transition-all duration-300 hover:-translate-y-2 hover:scale-[1.02]"
>
	<!-- Product Image -->
	<div class="aspect-square rounded-lg bg-muted overflow-hidden relative group">
		<img src={image} alt={name} class="w-full h-full object-cover" />
	</div>

	<!-- Product Info -->
	<div class="p-2 sm:p-3 md:p-4 space-y-1">
		<p class="text-xs sm:text-sm text-muted-foreground">{author}</p>

		<h3 class="text-sm sm:text-base font-medium text-foreground">{name}</h3>
	</div>
</div>
