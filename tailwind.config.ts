/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'brand-orange': '#f25a1a',
        'brand-lime': '#B9ED2A',
        'brand-dark': '#1B1B36',
        'brand-burgundy': '#56122D',
      },
    },
  },
  plugins: [],
}