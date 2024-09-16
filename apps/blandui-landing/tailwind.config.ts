import type { Config } from 'tailwindcss';
import { content, plugin } from '@blandui/blandui-react/tailwind';
import forms from '@tailwindcss/forms';

const config: Config = {
	content: [
		'./pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./components/**/*.{js,ts,jsx,tsx,mdx}',
		'./app/**/*.{js,ts,jsx,tsx,mdx}',
		content(),
	],
	theme: {
		extend: {
		},
	},
	plugins: [
		forms,
		plugin(),
	],
};
export default config;
