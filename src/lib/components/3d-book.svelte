<script lang="ts">
	let { image = "", name = "" } = $props();
</script>

<div class="mb-4 [perspective:1200px]">
	<div class="w-40 h-60 [transform-style:preserve-3d] [box-shadow:-8px_8px_16px_rgba(0,0,0,0.3),-4px_4px_8px_rgba(0,0,0,0.2)]">
		<div class="w-full h-full bg-white [transform:translateZ(30px)]">
			<img src={image} alt={name} class="w-full h-full object-cover" />
		</div>
	</div>
</div>
