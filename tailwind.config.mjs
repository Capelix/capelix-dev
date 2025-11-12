/** @type {import('tailwindcss').Config} */
export default {
	content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
	theme: {
		extend: {
			colors: {
				primary: "#a9b3c1",
				secondary: "#64748b",
				accent: "#0891b2",
				main: "#155e75",
				success: "#10b981",
				warning: "#f59e0b",
				glass: "rgba(0, 0, 0, 0.3)",
			},
			fontFamily: {
				ubuntu: ["Ubuntu", "Onest Variable"],
			},
		},
	},
	plugins: [],
}
