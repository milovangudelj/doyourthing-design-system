const { themeConfig } = require("@doyourthing/utils");

/** @type {import('tailwindcss').Config} */
module.exports = {
	darkMode: "class",
	content: ["./src/**/*.{js,ts,jsx,tsx}"],
	presets: [themeConfig],
	theme: {},
	plugins: [],
};
