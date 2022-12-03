/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        christmas: 'url("./src/assets/bgChristmas.jpg")',
      },
    },
  },
  plugins: [],
};
