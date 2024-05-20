import type { StorybookConfig } from "@storybook/nextjs";

const config: StorybookConfig = {
	stories: [
		"../../../packages/blandui-react/src/**/*.stories.@(ts|tsx)",
	],
	addons: [
		"@storybook/addon-onboarding",
		"@storybook/addon-links",
		"@storybook/addon-essentials",
		"@chromatic-com/storybook",
		"@storybook/addon-interactions",
	],
	framework: {
		name: "@storybook/nextjs",
		options: {},
	},
};
export default config;
