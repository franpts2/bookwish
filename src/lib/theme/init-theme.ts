import { themes } from './themesData';

export function getInitThemeScript(): string {
	const themesJson = JSON.stringify(themes);
	return `
		(function() {
			const themes = ${themesJson};
			const savedTheme = localStorage.getItem('theme') || 'emerald';
			const theme = themes[savedTheme] || themes.emerald;
			const root = document.documentElement;
			Object.entries(theme).forEach(([key, value]) => {
				root.style.setProperty(\`--\${key}\`, value);
			});
		})();
	`;
}
