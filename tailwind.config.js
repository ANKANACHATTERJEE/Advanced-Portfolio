/** @type {import('tailwindcss').Config} */

const { fontFamily } = require('tailwindcss/defaultTheme')

module.exports = { 
  content: [
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  darkMode:'class',
  theme: {
    extend: {
      fontFamily: {
        mont: ['var(--font-mont)', ...fontFamily.sans],
      },
      colors: {
        dark: "#1b1b1b",
        light: "#f5f5f5",
        primary: "#863E96", // 240,86,199 primaryDark: "#58E6D9", // 80,230,217
        primaryDark: "58E6D9",
      }
    },
    screens:{
      "2xl" : { max : "1535px" },
      xl : { max: "1279px" },
      lg : { max : "1023px" },
      md : { max : "767px" },
      sm : { max : "639px" },
      xs : { max:"479px" },
    }
  },
  plugins: [],
}
