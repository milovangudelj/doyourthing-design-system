const withOpacity = (variableName) => {
	return ({ opacityValue }) => {
		if (opacityValue !== undefined) {
			return `rgba(var(${variableName}), ${opacityValue})`;
		}
		return `rgb(var(${variableName}))`;
	};
};

/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/components/**/*.{js,jsx,ts,tsx}"],
	darkMode: "class",
	theme: {
		colors: {
			skin: {
				900: withOpacity("--color-900"),
				800: withOpacity("--color-800"),
				700: withOpacity("--color-700"),
				600: withOpacity("--color-600"),
				500: withOpacity("--color-500"),
				400: withOpacity("--color-400"),
				300: withOpacity("--color-300"),
				200: withOpacity("--color-200"),
				100: withOpacity("--color-100"),
				50: withOpacity("--color-50"),
			},
			primary: {
				900: "#064C28",
				800: "#006531",
				700: "#007E3B",
				600: "#009444",
				500: "#00AF4F",
				400: "#2DC470",
				300: "#63D495",
				200: "#90E1B3",
				100: "#C1F0D5",
				50: "#EDFDF2",
			},
			accent: {
				900: "#7C2D12",
				800: "#9A3412",
				700: "#C2410C",
				600: "#EA580C",
				500: "#F97316",
				400: "#FB923C",
				300: "#FDBA74",
				200: "#FED7AA",
				100: "#FFEDD5",
				50: "#FFF7ED",
			},
			red: {
				900: "#7F1D1D",
				800: "#991B1B",
				700: "#B91C1C",
				600: "#DC2626",
				500: "#EF4444",
				400: "#F87171",
				300: "#FCA5A5",
				200: "#FECACA",
				100: "#FEE2E2",
				50: "#FEF2F2",
			},
			blue: {
				900: "#1E3A8A",
				800: "#1E40AF",
				700: "#1D4ED8",
				600: "#2563EB",
				500: "#3B82F6",
				400: "#60A5FA",
				300: "#93C5FD",
				200: "#BFDBFE",
				100: "#DBEAFE",
				50: "#EFF6FF",
			},
			zinc: {
				900: "#18181B",
				800: "#27272A",
				700: "#3F3F46",
				600: "#52525B",
				500: "#71717A",
				400: "#A1A1AA",
				300: "#D4D4D8",
				200: "#E4E4E7",
				100: "#F4F4F5",
				50: "#FAFAFA",
			},
			dark: {
				he: "rgba(0, 0, 0, .87)",
				me: "rgba(0, 0, 0, .60)",
				le: "rgba(0, 0, 0, .38)",
			},
			light: {
				he: "rgba(255, 255, 255, 1)",
				me: "rgba(255, 255, 255, .74)",
				le: "rgba(255, 255, 255, .38)",
			},
			black: "#000000",
			white: "#ffffff",
			transparent: "transparent",
		},
		extend: {
			fontFamily: {
				sans: "'DM Sans', sans-serif",
				mono: "'DM Mono', monospaced",
			},
			backgroundImage: {
				"unsplash-random":
					"url('https://source.unsplash.com/random/?desk-setup')",
			},
		},
	},
	plugins: [require("@tailwindcss/forms")],
};
