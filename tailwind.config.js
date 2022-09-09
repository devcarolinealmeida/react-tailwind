/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#C5DFFF",
        secondary: "#061E3C",
        hover: "#1057B0"
      },
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
      }
    },
    
  },
  plugins: [],
}