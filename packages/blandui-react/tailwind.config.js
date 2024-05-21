const { join } = require('node:path');

/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		join(__dirname, './src/**/*.{ts,tsx}'),
	],
	plugins: [
		require('blandui'),
	],
};
