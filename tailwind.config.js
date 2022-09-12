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
        roboto: ['Roboto', 'sans-serif'],
      },
      keyframes: {
        bell_kf: {
          '0%, 100%': {
            transform: 'rotate(-10deg)'
          },
          '50%': {
            transform: 'rotate(10deg)'
          }
        }
      },
      animation: {
        bell: 'bell_kf 0.31s ease-in-out infinite'
      }
    },
    
  },
  plugins: [],
}