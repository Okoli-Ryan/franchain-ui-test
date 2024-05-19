/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			colors: {
				light: "#F8F8FB",
				"light-2": "#FDFDFF",
				"light-3": "#CFCFCF00",
				"light-4": "#FDFDFF",
				"light-blue": "#B1B7D6",
				accent: "#282828",
				"accent-2": "#2C2C2C",
				"accent-3": "#343434",
				"accent-4": "#232323",
				dark: "#151515",
				primary: "#CED6F7",
				"primary-2": "#7D97FF",
				gray: "#EFEFEF",
			},
			fontSize: {
				10: "0.625rem",
				18: "1.125rem",
				22: "1.375rem",
				40: "2.5rem",
			},
		},
	},
	plugins: [],
};