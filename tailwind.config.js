/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
  ],

  theme: {
    colors: {
      fucsia: '#FF0E47'
    },
    extend: {
      fontFamily: {
        amaranth: ["Amaranth"],
        darkergrotesque: ['Darker Grotesque']
      }
    },
  },
  plugins: [require('@tailwindcss/typography')],
}
