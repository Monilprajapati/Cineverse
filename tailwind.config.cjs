/** @type {import('tailwindcss').Config} */
module.exports = {
   content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'searchbg': "url('./src/assets/images/movies.jpg')",
      }
    },
    fontFamily: {
      lato: ["Lato", "sans-serif"],
      montserrat: ["Montserrat", "sans-serif"],
      plusSans: ["Plus Jakarta Sans", "sans-serif"],
    },
  },
  plugins: [
    require('tailwind-scrollbar'),
  ],
}
