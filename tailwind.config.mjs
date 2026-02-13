/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				'primary': '#0f172a',
				'dark-blue': '#0a101e',
				'accent': '#22c55e',
			},
			fontFamily: {
				display: ['Space Grotesk', 'sans-serif'],
				body: ['Inter', 'sans-serif'],
			}
		},
	},
	plugins: [],
}
