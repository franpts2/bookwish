<script lang="ts">
	export let variant: "primary" | "secondary" = "primary";
	export let iconPosition: "left" | "right" | "none" = "none";
	export let icon: string = "";
	export let type: "button" | "submit" | "reset" = "button";
	export let disabled: boolean = false;

	const baseClasses =
		"z-100 inline-flex items-center justify-center gap-2.5 px-4 py-2 rounded-2xl text-lg font-medium cursor-pointer transition-all duration-200 border-none whitespace-nowrap disabled:opacity-50 disabled:cursor-not-allowed";

	const variantClasses = {
		secondary:
			"bg-color-bg-primary text-white border-2 border-[var(--color-bg-secondary)] shadow-sm hover:bg-[var(--color-bg-secondary)] hover:border-[var(--color-primary-accent)] hover:shadow-md active:bg-[var(--color-bg-secondary)] active:translate-y-px",
		primary:
			"bg-gradient-to-br from-[var(--color-secondary-accent)] to-[var(--color-primary-accent)] text-white shadow-lg shadow-[var(--color-primary-accent)]/30 hover:from-[var(--color-secondary-accent)]/90 hover:to-[var(--color-primary-accent)]/90 hover:shadow-xl hover:shadow-[var(--color-primary-accent)]/40 hover:-translate-y-px active:from-[var(--color-primary-accent)] active:to-[var(--color-secondary-accent)] active:translate-y-0",
	};
</script>

<button
	class="{baseClasses} {variantClasses[variant]}"
	{type}
	{disabled}
	on:click
>
	{#if iconPosition === "left" && icon}
		<span class="inline-flex items-center justify-center text-xl"
			>{@html icon}</span
		>
	{/if}
	<span class="inline-flex items-center">
		<slot />
	</span>
	{#if iconPosition === "right" && icon}
		<span class="inline-flex items-center justify-center text-xl"
			>{@html icon}</span
		>
	{/if}
</button>
