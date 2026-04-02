<script lang="ts">
	import { GearIcon } from "phosphor-svelte";
	import * as DropdownMenu from "$lib/components/ui/dropdown-menu";
	import { themeStore, type Theme, themePresets } from "$lib/theme/themeStore";
	import { themes as themeColors } from "$lib/theme/themesData";

	const themes = Object.keys(themePresets) as Theme[];
	let selectedTheme = $state<Theme>($themeStore);

	$effect(() => {
		selectedTheme = $themeStore;
	});

	function handleThemeChange(theme: Theme) {
		themeStore.setTheme(theme);
		if (typeof localStorage !== "undefined") {
			localStorage.setItem("theme", theme);
		}
	}
</script>

<DropdownMenu.Root>
	<DropdownMenu.Trigger
		class="inline-flex shrink-0 items-center justify-center whitespace-nowrap rounded-md transition-colors hover:bg-muted hover:text-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 size-9"
	>
		<GearIcon size={20} />
	</DropdownMenu.Trigger>
	<DropdownMenu.Content align="end">
		<DropdownMenu.Sub>
			<DropdownMenu.SubTrigger class="[&_svg]:hidden">
				<div class="flex items-center justify-between w-full">
					<p>Theme</p>
					<div
						class="w-4 h-4 rounded-full border border-border"
						style="background-color: {themeColors[selectedTheme].primary}"
					></div>
				</div>
			</DropdownMenu.SubTrigger>
			<DropdownMenu.SubContent side="left" class="max-h-80 overflow-y-auto mt-6">
				<DropdownMenu.RadioGroup value={selectedTheme}>
					{#each themes as theme}
						<DropdownMenu.RadioItem
							value={theme}
							onSelect={() => handleThemeChange(theme)}
						>
							<div class="flex items-center gap-2 w-full">
								<div
									class="w-4 h-4 rounded-full border border-border"
									style="background-color: {themeColors[theme].primary}"
								></div>
								<span class="capitalize">{theme}</span>
							</div>
						</DropdownMenu.RadioItem>
					{/each}
				</DropdownMenu.RadioGroup>
			</DropdownMenu.SubContent>
		</DropdownMenu.Sub>
	</DropdownMenu.Content>
</DropdownMenu.Root>
