import { createSignal, Component, createEffect } from 'solid-js';

const InitialDarkMode = (): boolean => {
	const stored = localStorage.getItem('color-scheme');
	if (stored !== null) {
		return stored !== 'light';
	} else {
		const media = !window.matchMedia('(prefers-color-scheme: light)').matches;
		localStorage.setItem('color-scheme', media ? 'dark' : 'light');
		return media;
	}
};

const [darkMode, setDarkMode] = createSignal(InitialDarkMode());

export const getDarkMode = darkMode;

createEffect(() => {
	const isDarkMode = darkMode();
	localStorage.setItem('color-scheme', isDarkMode ? 'dark' : 'light');
});

createEffect(() => {
	const html = document.documentElement;
	const isDarkMode = darkMode();
	html.classList.toggle('dark', isDarkMode);
});

export const Toggle: Component = () => {
	return (
		<button onclick={() => setDarkMode(!darkMode())}>
			<svg width={32} height={32}>
				{/* TODO: Fancy svg like that animates between a moon and a star
				<text>{darkMode() ? 'Dark' : 'Light'}</text> */}
				<foreignObject>
					<p>{darkMode() ? 'Dark' : 'Light'}</p>
				</foreignObject>
			</svg>
		</button>
	);
};
