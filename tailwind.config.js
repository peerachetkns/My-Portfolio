/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'elegant-grey': '#f4f4f5',
        'dark-grey': '#27272a',
        'muted-grey': '#a1a1aa',
      }
    },
  },
  plugins: [],
}
