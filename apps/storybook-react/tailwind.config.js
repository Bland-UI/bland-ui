import { plugin } from 'blandui-react/tailwind';

/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		"./storybook/**/*.{ts,tsx}",
		"../../packages/blandui-react/src/**/*.{ts,tsx}",
	],
	plugins: [
		plugin(),
		require('@tailwindcss/forms'),
	],
};
