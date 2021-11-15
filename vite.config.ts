import { defineConfig } from 'vite';
import legacy from '@vitejs/plugin-legacy';
import solidPlugin from 'vite-plugin-solid';
import pages from 'vite-plugin-pages-solid';
import WindiCSS from 'vite-plugin-windicss';
//import htmlMinifier from 'rollup-plugin-html-minifier';
//import sri from 'rollup-plugin-sri';
//import typescript from 'rollup-plugin-typescript2';
import { typescriptPaths } from 'rollup-plugin-typescript-paths';

export default defineConfig({
	plugins: [
		//typescript(),
		typescriptPaths({ preserveExtensions: true, absolute: false }),
		solidPlugin(),
		WindiCSS(),
		pages({
			pagesDir: 'src/routes',
			extensions: ['.jsx', '.tsx'],
		}),
		// https://vitejs.dev/plugins/#vitejs-plugin-legacy
		legacy(),
		/*htmlMinifier({
			filter: (file) => {
				const retVal =
					typeof file === 'string'
						? file.endsWith('.html')
						: (console.warn('Unknown file type', file) as unknown as boolean);
				console.log(
					`\n${retVal ? '' : "Didn't "}Minif${retVal ? 'ied' : 'y'}`,
					file,
				);
				return retVal;
			},
			options: {
				collapseWhitespace: true,
				removeComments: true,
				decodeEntities: true,
				minifyCSS: true,
				minifyJS: true,
				removeEmptyAttributes: true,
				processConditionalComments: true,
			},
		}),*/
		/*{
			enforce: 'post',
			...sri({
				publicPath: '/',
				algorithms: ['sha1', 'md5', 'sha512', 'sha256'],
			}),
		}*/
		,
	],
	server: {
		watch: {
			ignored: [
				'**/coverage/**',
				'**/dist/**',
				'**/.vscode/**',
				'**/.github/**',
			],
		},
	},
	build: {
		target: 'esnext',
		polyfillDynamicImport: false,
		assetsDir: 'static',
		assetsInlineLimit: 512,
		sourcemap: true,
	},
	cacheDir: 'node_modules/.cache/vite',
});
