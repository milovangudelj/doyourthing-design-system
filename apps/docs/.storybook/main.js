const path = require("path");
const mergeConfig = require("vite");

module.exports = {
	stories: ["../stories/**/*.stories.mdx", "../stories/**/*.stories.tsx"],
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
	framework: "@storybook/react",
	core: {
		builder: "@storybook/builder-vite",
	},
	async viteFinal(config) {
		// customize the Vite config here
		return mergeConfig(config, {
			resolve: {
				// alias: [
				// 	{
				// 		find: "@doyourthing/core",
				// 		replacement: path.resolve(
				// 			__dirname,
				// 			"../../../packages/doyourthing-core/"
				// 		),
				// 	},
				// ],
				// roots: [path.resolve(__dirname, "../public"), "node_modules"],
			},
		});
	},
};
