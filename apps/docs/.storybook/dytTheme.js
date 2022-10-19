import { create } from '@storybook/theming';

import { themeConfig } from "@doyourthing/utils";
const { theme } = themeConfig;

export const dytDark = create({
  base: 'dark',

  colorPrimary: theme.colors.blue['500'],
  colorSecondary: theme.colors.primary['500'],

  // UI
  appBg: theme.colors.zinc['800'],
  appContentBg: theme.colors.zinc['900'],
  appBorderColor: theme.colors.zinc['700'],
  appBorderRadius: 4,

  // Typography
  fontBase: theme.extend.fontFamily.sans,
  fontCode: theme.extend.fontFamily.mono,

  // Text colors
  textColor: theme.colors.light.he,
  textMutedColor: theme.colors.light.me,
  textInverseColor: theme.colors.dark.he,

  // Toolbar default and active colors
  barTextColor: theme.colors.light.me,
  barSelectedColor: theme.colors.light.he,
  barBg: theme.colors.zinc['700'],

  // Form colors
  inputBg: theme.colors.transparent,
  inputBorder: theme.colors.zinc['700'],
  inputTextColor: theme.colors.light.he,
  inputBorderRadius: 4,

  brandTitle: 'DoYourThing UI',
  brandUrl: 'https://doyourthing.dev',
  brandImage: 'https://ui.doyourthing.dev/dyt-logo.svg',
  brandTarget: '_self',
  
});

export const dytLight = create({
	base: "dark",

	colorPrimary: theme.colors.blue["500"],
	colorSecondary: theme.colors.primary["500"],

	// UI
	appBg: theme.colors.zinc["100"],
	appContentBg: theme.colors.zinc["50"],
	appBorderColor: theme.colors.zinc["200"],
	appBorderRadius: 4,

	// Typography
	fontBase: theme.extend.fontFamily.sans,
	fontCode: theme.extend.fontFamily.mono,

	// Text colors
	textColor: theme.colors.dark.he,
	textMutedColor: theme.colors.dark.me,
	textInverseColor: theme.colors.dark.he,

	// Toolbar default and active colors
	barTextColor: theme.colors.dark.me,
	barSelectedColor: theme.colors.dark.he,
	barBg: theme.colors.zinc["200"],

	// Form colors
	inputBg: theme.colors.transparent,
	inputBorder: theme.colors.zinc["200"],
	inputTextColor: theme.colors.dark.he,
	inputBorderRadius: 4,

	brandTitle: "DoYourThing UI",
	brandUrl: "https://doyourthing.dev",
	brandImage: "https://ui.doyourthing.dev/dyt-logo.svg",
	brandTarget: "_self",
});