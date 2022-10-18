import { mergeConfig } from "vite";

const path = require("path");
module.exports = {
	stories: [
		"../stories/**/*.stories.mdx",
		"../stories/**/*.stories.@(js|jsx|ts|tsx)",
	],
	staticDirs: ["../public"],
	addons: [
		"@storybook/addon-docs",
		"@storybook/addon-links",
		"@storybook/addon-essentials",
		"@storybook/addon-interactions",
		{
			/**
			 * Fix Storybook issue with PostCSS@8
			 * @see https://github.com/storybookjs/storybook/issues/12668#issuecomment-773958085
			 */
			name: "@storybook/addon-postcss",
			options: {
				postcssLoaderOptions: {
					implementation: require("postcss"),
				},
			},
		},
		"storybook-dark-mode",
	],
	framework: {
		name: "@storybook/react-vite",
		options: {},
	},
	core: {
		builder: "@storybook/builder-vite",
	},
	viteFinal: async (config) => {
		return mergeConfig(config, {
			alias: [
				{
					find: "@",
					replacement: [
						path.resolve(__dirname, "../stories/"),
						path.resolve(__dirname, "../"),
					],
				},
				{
					find: "@doyourthing/core",
					replacement: path.resolve(
						__dirname,
						"../../../packages/doyourthing-core/"
					),
				},
				{
					find: "@doyourthing/utils",
					replacement: path.resolve(
						__dirname,
						"../../../packages/doyourthing-utils/"
					),
				},
			],
			roots: [path.resolve(__dirname, "../public"), "node_modules"],
		});
	},
};
