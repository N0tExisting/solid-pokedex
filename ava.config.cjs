/**
 * TODO: Fix Types
 * @type {import('ava').Config}
 */
module.exports = {
	files: ['tests/**/*.(test|spec).(js|jsx|mjs|cjs|ts|tsx|*)'],
	failFast: !!process.env.FAIL_FAST,
	//failWithoutAssertions: false,
	environmentVariables: {
		NODE_ENV: 'test',
		TEST_DOM: 'jsdom',
		SOLID_IMPORT: 'dev',
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
