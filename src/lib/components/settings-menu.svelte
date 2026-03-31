<script lang="ts">
	import { GearIcon } from "phosphor-svelte";
	import { Button } from "$lib/components/ui/button";
	import * as DropdownMenu from "$lib/components/ui/dropdown-menu";
	import { themeStore, type Theme, themePresets } from "$lib/theme/themeStore";

	const themes = Object.keys(themePresets) as Theme[];
	let selectedTheme = $state<string>($themeStore);

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
	<DropdownMenu.Trigger class="p-0">
		<Button variant="ghost" size="icon">
			<GearIcon size={30} />
		</Button>
	</DropdownMenu.Trigger>
	<DropdownMenu.Content align="end">
		<DropdownMenu.Sub>
			<DropdownMenu.SubTrigger class="[&_svg]:hidden">
				<span>Theme</span>
			</DropdownMenu.SubTrigger>
			<DropdownMenu.SubContent side="left">
				<DropdownMenu.RadioGroup value={selectedTheme}>
					{#each themes as theme}
						<DropdownMenu.RadioItem
							value={theme}
							onSelect={() => handleThemeChange(theme)}
						>
							<span class="capitalize">{theme}</span>
						</DropdownMenu.RadioItem>
					{/each}
				</DropdownMenu.RadioGroup>
			</DropdownMenu.SubContent>
		</DropdownMenu.Sub>
	</DropdownMenu.Content>
</DropdownMenu.Root>
