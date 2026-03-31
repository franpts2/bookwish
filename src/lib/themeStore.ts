import { writable } from 'svelte/store';

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

export const themePresets: Record<Theme, Record<string, string>> = {
	neutral: {
		primary: 'oklch(0.501 0.011 360)',
		'primary-foreground': 'oklch(0.986 0.001 0)',
		secondary: 'oklch(0.909 0.005 360)',
		'secondary-foreground': 'oklch(0.501 0.011 360)',
		accent: 'oklch(0.731 0.009 360)',
		'accent-foreground': 'oklch(0.986 0.001 0)',
	},
	stone: {
		primary: 'oklch(0.493 0.01 360)',
		'primary-foreground': 'oklch(0.986 0.001 0)',
		secondary: 'oklch(0.909 0.005 360)',
		'secondary-foreground': 'oklch(0.493 0.01 360)',
		accent: 'oklch(0.731 0.009 360)',
		'accent-foreground': 'oklch(0.986 0.001 0)',
	},
	zinc: {
		primary: 'oklch(0.453 0.006 360)',
		'primary-foreground': 'oklch(0.986 0.001 0)',
		secondary: 'oklch(0.908 0.004 360)',
		'secondary-foreground': 'oklch(0.453 0.006 360)',
		accent: 'oklch(0.724 0.006 360)',
		'accent-foreground': 'oklch(0.986 0.001 0)',
	},
	slate: {
		primary: 'oklch(0.457 0.006 360)',
		'primary-foreground': 'oklch(0.986 0.001 0)',
		secondary: 'oklch(0.908 0.004 360)',
		'secondary-foreground': 'oklch(0.457 0.006 360)',
		accent: 'oklch(0.727 0.006 360)',
		'accent-foreground': 'oklch(0.986 0.001 0)',
	},
	gray: {
		primary: 'oklch(0.499 0.007 360)',
		'primary-foreground': 'oklch(0.986 0.001 0)',
		secondary: 'oklch(0.909 0.004 360)',
		'secondary-foreground': 'oklch(0.499 0.007 360)',
		accent: 'oklch(0.729 0.007 360)',
		'accent-foreground': 'oklch(0.986 0.001 0)',
	},
	red: {
		primary: 'oklch(0.557 0.194 29.23)',
		'primary-foreground': 'oklch(0.986 0.001 0)',
		secondary: 'oklch(0.633 0.108 28.78)',
		'secondary-foreground': 'oklch(0.986 0.001 0)',
		accent: 'oklch(0.61 0.157 28.75)',
		'accent-foreground': 'oklch(0.986 0.001 0)',
	},
	orange: {
		primary: 'oklch(0.621 0.15 47.29)',
		'primary-foreground': 'oklch(0.986 0.001 0)',
		secondary: 'oklch(0.724 0.084 48.88)',
		'secondary-foreground': 'oklch(0.986 0.001 0)',
		accent: 'oklch(0.684 0.115 46.44)',
		'accent-foreground': 'oklch(0.986 0.001 0)',
	},
	amber: {
		primary: 'oklch(0.676 0.148 65.13)',
		'primary-foreground': 'oklch(0.986 0.001 0)',
		secondary: 'oklch(0.768 0.087 70.51)',
		'secondary-foreground': 'oklch(0.986 0.001 0)',
		accent: 'oklch(0.738 0.114 64.6)',
		'accent-foreground': 'oklch(0.986 0.001 0)',
	},
	yellow: {
		primary: 'oklch(0.727 0.149 85.91)',
		'primary-foreground': 'oklch(0.986 0.001 0)',
		secondary: 'oklch(0.815 0.087 90.06)',
		'secondary-foreground': 'oklch(0.986 0.001 0)',
		accent: 'oklch(0.787 0.113 84.7)',
		'accent-foreground': 'oklch(0.986 0.001 0)',
	},
	lime: {
		primary: 'oklch(0.652 0.148 119.56)',
		'primary-foreground': 'oklch(0.986 0.001 0)',
		secondary: 'oklch(0.756 0.089 123.78)',
		'secondary-foreground': 'oklch(0.986 0.001 0)',
		accent: 'oklch(0.714 0.115 120.25)',
		'accent-foreground': 'oklch(0.986 0.001 0)',
	},
	green: {
		primary: 'oklch(0.577 0.148 142.27)',
		'primary-foreground': 'oklch(0.986 0.001 0)',
		secondary: 'oklch(0.684 0.089 144.59)',
		'secondary-foreground': 'oklch(0.986 0.001 0)',
		accent: 'oklch(0.643 0.115 142.51)',
		'accent-foreground': 'oklch(0.986 0.001 0)',
	},
	emerald: {
		primary: 'oklch(0.527 0.146 155.5)',
		'primary-foreground': 'oklch(0.986 0.001 0)',
		secondary: 'oklch(0.621 0.118 155.5)',
		'secondary-foreground': 'oklch(0.986 0.001 0)',
		accent: 'oklch(0.586 0.141 155.5)',
		'accent-foreground': 'oklch(0.986 0.001 0)',
	},
	teal: {
		primary: 'oklch(0.52 0.141 168.07)',
		'primary-foreground': 'oklch(0.986 0.001 0)',
		secondary: 'oklch(0.616 0.11 168.27)',
		'secondary-foreground': 'oklch(0.986 0.001 0)',
		accent: 'oklch(0.582 0.135 168.43)',
		'accent-foreground': 'oklch(0.986 0.001 0)',
	},
	cyan: {
		primary: 'oklch(0.536 0.157 189.74)',
		'primary-foreground': 'oklch(0.986 0.001 0)',
		secondary: 'oklch(0.632 0.106 189.74)',
		'secondary-foreground': 'oklch(0.986 0.001 0)',
		accent: 'oklch(0.596 0.136 189.74)',
		'accent-foreground': 'oklch(0.986 0.001 0)',
	},
	sky: {
		primary: 'oklch(0.58 0.154 202.77)',
		'primary-foreground': 'oklch(0.986 0.001 0)',
		secondary: 'oklch(0.673 0.095 203.42)',
		'secondary-foreground': 'oklch(0.986 0.001 0)',
		accent: 'oklch(0.634 0.122 203.02)',
		'accent-foreground': 'oklch(0.986 0.001 0)',
	},
	blue: {
		primary: 'oklch(0.565 0.169 255.95)',
		'primary-foreground': 'oklch(0.986 0.001 0)',
		secondary: 'oklch(0.659 0.101 255.88)',
		'secondary-foreground': 'oklch(0.986 0.001 0)',
		accent: 'oklch(0.619 0.138 255.9)',
		'accent-foreground': 'oklch(0.986 0.001 0)',
	},
	indigo: {
		primary: 'oklch(0.543 0.166 272.44)',
		'primary-foreground': 'oklch(0.986 0.001 0)',
		secondary: 'oklch(0.639 0.102 272.16)',
		'secondary-foreground': 'oklch(0.986 0.001 0)',
		accent: 'oklch(0.601 0.135 272.3)',
		'accent-foreground': 'oklch(0.986 0.001 0)',
	},
	violet: {
		primary: 'oklch(0.527 0.163 286.82)',
		'primary-foreground': 'oklch(0.986 0.001 0)',
		secondary: 'oklch(0.621 0.101 287.18)',
		'secondary-foreground': 'oklch(0.986 0.001 0)',
		accent: 'oklch(0.584 0.132 287.04)',
		'accent-foreground': 'oklch(0.986 0.001 0)',
	},
	purple: {
		primary: 'oklch(0.535 0.146 300.36)',
		'primary-foreground': 'oklch(0.986 0.001 0)',
		secondary: 'oklch(0.627 0.097 300.43)',
		'secondary-foreground': 'oklch(0.986 0.001 0)',
		accent: 'oklch(0.587 0.124 300.39)',
		'accent-foreground': 'oklch(0.986 0.001 0)',
	},
	fuchsia: {
		primary: 'oklch(0.545 0.17 300.13)',
		'primary-foreground': 'oklch(0.986 0.001 0)',
		secondary: 'oklch(0.637 0.109 299.93)',
		'secondary-foreground': 'oklch(0.986 0.001 0)',
		accent: 'oklch(0.598 0.144 299.95)',
		'accent-foreground': 'oklch(0.986 0.001 0)',
	},
	pink: {
		primary: 'oklch(0.586 0.159 330.53)',
		'primary-foreground': 'oklch(0.986 0.001 0)',
		secondary: 'oklch(0.674 0.097 329.27)',
		'secondary-foreground': 'oklch(0.986 0.001 0)',
		accent: 'oklch(0.638 0.126 329.89)',
		'accent-foreground': 'oklch(0.986 0.001 0)',
	},
	rose: {
		primary: 'oklch(0.578 0.195 12.77)',
		'primary-foreground': 'oklch(0.986 0.001 0)',
		secondary: 'oklch(0.67 0.116 12.06)',
		'secondary-foreground': 'oklch(0.986 0.001 0)',
		accent: 'oklch(0.638 0.157 12.38)',
		'accent-foreground': 'oklch(0.986 0.001 0)',
	},
};

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
