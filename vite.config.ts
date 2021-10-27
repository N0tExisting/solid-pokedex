import { defineConfig } from 'vite';
import solidPlugin from 'vite-plugin-solid';
import WindiCSS from 'vite-plugin-windicss';
import { typescriptPaths } from 'rollup-plugin-typescript-paths';

export default defineConfig({
	plugins: [
		typescriptPaths({ preserveExtensions: true, absolute: false }),
		solidPlugin(),
		WindiCSS(),
	],
	build: {
		target: 'esnext',
		polyfillDynamicImport: false,
		assetsDir: 'static',
		assetsInlineLimit: 512,
	},
	cacheDir: 'node_modules/.cache/vite',
});
