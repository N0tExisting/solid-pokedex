import { defineConfig } from 'vite-plugin-windicss';
import plugin from 'windicss/plugin';

//* SEE: https://windicss.org/utilities/

export default defineConfig({
	darkMode: 'class',
	extract: {
		include: [
			'./**/*.html',
			'./src/**/*.{js,ts,jsx,tsx}',
			'./src/**/*.{css,scss,pcss}',
			'./**/*.svg',
		],
	},
	theme: {
		extend: {},
	},
	plugins: [
		plugin(({ addUtilities, addDynamic, variants }) => {
			const containUtilities = {
				'.contain-none': {
					contain: 'none',
				},
				'.contain-strict': {
					contain: 'strict',
				},
				'.contain-content': {
					contain: 'content',
				},
				'.contain-size': {
					contain: 'size',
				},
				'.contain-layout': {
					contain: 'layout',
				},
				'.contain-style': {
					contain: 'style',
				},
				'.contain-paint': {
					contain: 'paint',
				},
				'.contain-full': {
					contain: 'size layout paint style',
				},

				'.content-visibility-visible': {
					'content-visibility': 'visible',
				},
				'.content-visibility-hidden': {
					'content-visibility': 'hidden',
				},
				'.content-visibility-auto': {
					'content-visibility': 'auto',
				},
			};
			addUtilities(containUtilities);
			// FIXME: I have no clue what I'm doing here
			/*addDynamic(
				'contain',
				({ Utility, Style }) => {
					return Utility.handler
						.handleStatic(Style('contain'))
						.handleString((val) => {
							// Replace underscores and dashes in val with spaces
							val = val.replace(/[_-]/g, ' ').trim();
							if (
								!/^(?:(?:paint|style|layout|size)\s){1,4}|content|strict|none$/.test(
									val,
								)
							) {
								throw new Error(
									`Invalid value for 'contain' property: '${val}'\n\
									See MDN Docs https://developer.mozilla.org/en-US/docs/Web/CSS/contain#values`,
								);
							}
							return val;
						})
						.createProperty('contain');
				},
				variants('contain'),
			);*/
		}),
		require('windicss/plugin/filters'),
		require('windicss/plugin/forms'),
		require('windicss/plugin/aspect-ratio'),
		require('windicss/plugin/line-clamp'),
		require('windicss/plugin/typography'),
		require('@windicss/plugin-scrollbar'),
		require('@windicss/plugin-interaction-variants'),
		require('@windicss/plugin-question-mark'),
	],
});
