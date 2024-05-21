import blandUI from 'blandui-react';

/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		"./storybook/**/*.{ts,tsx}",
		"../../packages/blandui-react/src/**/*.{ts,tsx}",
	],
	plugins: [
		blandUI.plugin(),
		require('@tailwindcss/forms'),
	],
};
