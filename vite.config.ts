import { defineConfig } from 'vite';
import solidPlugin from 'vite-plugin-solid';
import WindiCSS from 'vite-plugin-windicss';
//import htmlMinifier from 'rollup-plugin-html-minifier';
//import sri from 'rollup-plugin-sri';
import { typescriptPaths } from 'rollup-plugin-typescript-paths';

export default defineConfig({
	plugins: [
		typescriptPaths({ preserveExtensions: true, absolute: false }),
		solidPlugin(),
		WindiCSS(),
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
