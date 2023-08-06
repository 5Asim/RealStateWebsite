/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        'nav': ['Poppins'],
        'dmSans': ['DM Sans'],
      },
      

    },
  },
  plugins: [],
}