/** @type {import('postcss-load-config').Config} */
const config = {
	plugins: [
		require("autoprefixer"),
		require("tailwindcss")("../../packages/blandui-react/tailwind.config.js"),
	],
};

module.exports = config;
