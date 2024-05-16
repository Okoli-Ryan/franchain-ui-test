/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			colors: {
				light: "#F8F8FB",
				accent: "#282828",
			},
		},
	},
	plugins: [],
};