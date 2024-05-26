import { content, plugin } from '@blandui/blandui-react/tailwind';
import forms from '@tailwindcss/forms';

console.log(content);

/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		content(),
		"./storybook/**/*.{ts,tsx}",
		"./stories/**/*.{ts,tsx}",
	],
	plugins: [
		forms(),
		plugin(),
	],
};
