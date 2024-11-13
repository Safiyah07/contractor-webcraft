/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	darkMode: "class",
	theme: {
		extend: {
			backgroundImage: {
				gradient:
					"linear-gradient(to right, #0c0c0d 0%, #bdff68 25%, #0c0c0d 50%, #e066ff 75%, #0c0c0d 100%)",
				"light-gradient":
					"linear-gradient(to right, #f8f8ff 0%, #bdff68 25%, #f8f8ff 50%, #e066ff 75%, #f8f8ff 100%)",
				nanny:
					"linear-gradient(142deg, rgba(226, 255, 188, 0.5) 0%, rgba(11, 18, 21, 0) 9%, rgba(11, 18, 21, 0) 52%, rgba(11, 18, 21, 0) 86%, rgba(226, 255, 188, 0.5) 100%)",
				gisthub:
					"linear-gradient(142deg, rgba(255, 145, 77, 1) 0%, rgba(11, 18, 21, 0) 9%, rgba(11, 18, 21, 0) 52%, rgba(11, 18, 21, 0) 86%, rgba(255, 145, 77, 1) 100%)",
			},
			colors: {
				dark: "#0b1215",
				light: "#f8f8ff",
				green: "#bdff68",
				purple: "#e066ff",
				shadow: "#696969",
				hotdesk: "#9492F0",
			},
			boxShadow: {
				"3xl": "0px 3px 2px 0px rgba(35, 35, 35, 0.5)",
				"light-3xl": "0px 1px 2px 0px rgba(35, 35, 35, 0.5)",
			},
		},
		screens: {
			sm: { max: "602px" },
			md: { min: "603px", max: "880px" },
			"max-md": { min: "881px", max: "1115px" },
			lg: { min: "1116px" },
		},
	},
	plugins: [],
};
