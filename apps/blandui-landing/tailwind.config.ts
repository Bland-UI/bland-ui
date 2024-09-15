import type { Config } from "tailwindcss";
import { content, plugin } from '@blandui/blandui-react/tailwind';

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
	content(),
  ],
  theme: {
    extend: {
    },
  },
  plugins: [
	plugin(),
  ],
};
export default config;
