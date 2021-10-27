/**
 * TODO: Fix Types
 * @type {import('ava').Config}
 */
module.exports = {
	files: ['**/test/**/*.test.*'],
	failFast: !!process.env.FAIL_FAST,
	//failWithoutAssertions: false,
	environmentVariables: {
		NODE_ENV: 'test',
	},
	verbose: true,
	require: [
		'esm',
		//'solid-register',
	],
	extensions: ['js', 'jsx', 'mjs', 'cjs', 'ts', 'tsx'],
	nodeArguments: [
		'--trace-deprecation',
		'--napi-modules',
		'-r',
		'solid-register',
	],
};
