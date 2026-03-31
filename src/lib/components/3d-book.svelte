<script lang="ts">
	let { image = "", name = "" } = $props();
	let isLoading = $state(true);
</script>

<style>
	@keyframes shimmer {
		0% {
			background-position: -1000px 0;
		}
		100% {
			background-position: 1000px 0;
		}
	}

	.shimmer {
		background: linear-gradient(
			to right,
			rgba(255, 255, 255, 0.2) 0%,
			rgba(255, 255, 255, 0.4) 20%,
			rgba(255, 255, 255, 0.2) 40%,
			rgba(255, 255, 255, 0.2) 100%
		);
		background-size: 1000px 100%;
		animation: shimmer 2s infinite;
	}
</style>

<div class="mb-4 [perspective:1200px]">
	<div class="w-40 h-60 [transform-style:preserve-3d] [box-shadow:-8px_8px_16px_rgba(0,0,0,0.3),-4px_4px_8px_rgba(0,0,0,0.2)] relative">
		{#if isLoading}
			<div class="w-full h-full shimmer absolute inset-0 z-10"></div>
		{/if}
		<div class="w-full h-full bg-white [transform:translateZ(30px)]">
			<img
				src={image}
				alt={name}
				class="w-full h-full object-cover"
				onload={() => (isLoading = false)}
			/>
		</div>
	</div>
</div>
