/**
 * @type {import('solid-register/dist/readConfig').SolidRegisterConfiguration}
 */
module.exports = {
	compile: {
		css: true,
	},
	dom: process.env['TEST_DOM'] || 'jsdom',
	aliases: {
		solid: process.env['SOLID_IMPORT'] || 'dev',
	},
};
