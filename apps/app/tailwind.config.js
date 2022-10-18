const { themeConfig } = require("@doyourthing/utils");

/** @type {import('tailwindcss').Config} */
module.exports = {
	darkMode: "class",
	content: [
		"./pages/**/*.{js,ts,jsx,tsx}",
		"./components/**/*.{js,ts,jsx,tsx}",
		"../../node_modules/@doyourthing/core/src/**/*.{js,ts,jsx,tsx}",
	],
	presets: [themeConfig],
	theme: {},
	plugins: [],
};
