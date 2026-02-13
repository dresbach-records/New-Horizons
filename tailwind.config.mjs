/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        primary: '#0052FF', // Blue
        accent: '#FFC947', // Yellow
        dark: '#1D2434', // Dark Blue/Grey
        light: '#F9FAFB', // Off-white
      },
       fontFamily: {
        display: ['Manrope', 'sans-serif'],
      },
    },
  },
  plugins: [],
}