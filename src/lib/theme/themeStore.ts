import { writable } from 'svelte/store';
import { themes } from './themesData';

export type Theme = 
	| 'neutral'
	| 'stone'
	| 'zinc'
	| 'slate'
	| 'gray'
	| 'red'
	| 'orange'
	| 'amber'
	| 'yellow'
	| 'lime'
	| 'green'
	| 'emerald'
	| 'teal'
	| 'cyan'
	| 'sky'
	| 'blue'
	| 'indigo'
	| 'violet'
	| 'purple'
	| 'fuchsia'
	| 'pink'
	| 'rose';

export const themePresets: Record<Theme, Record<string, string>> = themes as Record<Theme, Record<string, string>>;

function createThemeStore() {
	const savedTheme = typeof window !== 'undefined' 
		? (localStorage.getItem('theme') as Theme) || 'emerald'
		: 'emerald';
	
	const { subscribe, set } = writable<Theme>(savedTheme);

	return {
		subscribe,
		setTheme: (theme: Theme) => {
			set(theme);
			if (typeof window !== 'undefined') {
				localStorage.setItem('theme', theme);
				
				// Apply CSS variables
				const root = document.documentElement;
				Object.entries(themePresets[theme]).forEach(([key, value]) => {
					root.style.setProperty(`--${key}`, value);
				});
			}
		},
		initTheme: () => {
			if (typeof window !== 'undefined') {
				const root = document.documentElement;
				Object.entries(themePresets[savedTheme]).forEach(([key, value]) => {
					root.style.setProperty(`--${key}`, value);
				});
			}
		},
	};
}

export const themeStore = createThemeStore();
