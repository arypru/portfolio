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
    container: {
      center: true,
    },
    colors: {
      fucsia: '#FF0E47'
    },
    extend: {
      fontFamily: {
        amaranth: ["Amaranth"],
        darkergrotesque: ["Open Sans", "Arial"],
      }
    },
    cursor: {
      default: 'url(/images/cursors/cursor.png), default',
      pointer: 'url(/images/cursors/seleccione.png), pointer',
      text: 'url(/images/cursors/mecanografia.png), text'
    },
  },
  plugins: [require('@tailwindcss/typography')],
}
