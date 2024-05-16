/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			colors: {
				light: "#F8F8FB",
				"light-2": "#FDFDFF",
				"light-blue": "#B1B7D6",
				accent: "#282828",
				primary: "#CED6F7",
			},
		},
	},
	plugins: [],
};