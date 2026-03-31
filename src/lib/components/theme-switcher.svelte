<script lang="ts">
    import { themeStore, type Theme, themePresets } from "$lib/themeStore";
    import * as Select from "$lib/components/ui/select";

    const themes = Object.keys(themePresets) as Theme[];
    let selectedTheme = $state<string>("emerald");

    function handleThemeChange(value: string | string[] | undefined) {
        const themeValue = Array.isArray(value) ? value[0] : value;
        if (themeValue && themeValue in themePresets) {
            selectedTheme = themeValue;
            themeStore.setTheme(themeValue as Theme);
        }
    }
</script>

<Select.Root
    bind:value={selectedTheme}
    onValueChange={handleThemeChange}
    type="single"
>
    <Select.Trigger class="w-40">
        <span data-slot="select-value">
            {selectedTheme
                ? selectedTheme.charAt(0).toUpperCase() + selectedTheme.slice(1)
                : "Select theme"}
        </span>
    </Select.Trigger>
    <Select.Content>
        {#each themes as theme}
            <Select.Item
                value={theme}
                label={theme.charAt(0).toUpperCase() + theme.slice(1)}
            />
        {/each}
    </Select.Content>
</Select.Root>
