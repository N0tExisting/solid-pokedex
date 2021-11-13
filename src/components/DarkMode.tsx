import { Component, createEffect, Switch, Match, createMemo } from 'solid-js';
import { FiSun, FiMoon } from 'solid-icons/fi';
import createRootedSignal from '../utils/reactivity/rooted_signal';
import styles from './darkMode.module.css';

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

const [darkMode, setDarkMode] = createRootedSignal(
	InitialDarkMode(),
	(darkMode) => {
		createEffect(() => {
			const isDarkMode = darkMode();
			console.log('Updating LocalStorage:', isDarkMode);
			localStorage.setItem('color-scheme', isDarkMode ? 'dark' : 'light');
		});

		createEffect(() => {
			const html = document.documentElement;
			const isDarkMode = darkMode();
			html.classList.toggle('dark', isDarkMode);
			console.log('Toggled Class:', isDarkMode);
		});
	},
);

export const getDarkMode = darkMode;

const toggle = () => setDarkMode(!darkMode());

const reset = () =>
	setDarkMode(!window.matchMedia('(prefers-color-scheme: light)').matches);

export const Toggle: Component = () => {
	const onRightClick = (e: MouseEvent) => {
		e.preventDefault();
		reset();
	};

	const title = createMemo(
		() => `Enable ${darkMode() ? 'Light' : 'Dark'} Mode`,
	);

	return (
		<button
			title={title()}
			type='button'
			class={styles.btn}
			onContextMenu={onRightClick}
			onclick={toggle}>
			<Switch>
				<Match when={darkMode()}>
					<FiSun title='Enable Light Mode' class={styles.icon} size={24} />
				</Match>
				<Match when={!darkMode()}>
					<FiMoon title='Enable Dark Mode' class={styles.icon} size={24} />
				</Match>
			</Switch>
		</button>
	);
};
