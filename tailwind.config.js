/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./pages/**/*.{tsx, ts, js, jsx}", "./components/**/*.{tsx, ts, js, jsx}"],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Poppins', 'sans-serif']
      },
      colors: {
        default: '#1F1F1F',
        blue1: '#6C63FF',
        blue2: '#5d56e5',
        blue3: '#4e46cf'
      }
    },
  },
  plugins: [],
}
