import { defineConfig } from 'vite';
import legacy from '@vitejs/plugin-legacy';
import solidPlugin from 'vite-plugin-solid';
import pages from 'vite-plugin-pages-solid';
import solidSvg from 'vite-plugin-solid-svg';
import WindiCSS from 'vite-plugin-windicss';
import tsconfigPaths from 'vite-tsconfig-paths';
import { minifyHtml } from 'vite-plugin-html';
//import sri from 'rollup-plugin-sri';

export default defineConfig({
	plugins: [
		tsconfigPaths(),
		solidPlugin(),
		solidSvg({ defaultExport: 'component' }),
		WindiCSS(),
		pages({
			pagesDir: 'src/routes',
			extensions: ['.jsx', '.tsx'],
		}),
		// https://vitejs.dev/plugins/#vitejs-plugin-legacy
		legacy(),
		minifyHtml({
			collapseWhitespace: true,
			decodeEntities: true,
			minifyCSS: true,
			minifyJS: true,
			processConditionalComments: true,
			removeAttributeQuotes: false,
			removeComments: true,
			removeEmptyAttributes: true,
			useShortDoctype: false,
		}),
		/*{
			enforce: 'post',
			...sri({
				publicPath: '/',
				algorithms: ['sha1', 'md5', 'sha512', 'sha256'],
			}),
		}*/
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
		fs: {
			//strict: true,
			//deny: ['.env', '.env.*', '**/*.{pem,crt}'],
			/*allow: [
				'index.html',
				'LICENSE',
				'package.json',
				'tsconfig*.json',
				'src/** /*',
				'public/** /*',
				'** /node_modules/** /*',
			],*/
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
