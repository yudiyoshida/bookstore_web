/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    fontFamily: {
      'kumbh-sans': ['Kumbh Sans',' sans-serif'],
    },
    extend: {
      colors: {
        'title-blue': '#5ba499',
        'button-hover': '#43877b',
        'dark-grayish-blue': '#3d4d5a',
        'grayish-blue': '#8299ab',
        'light-grayish-blue': '#f9fcfe',
        'orange': '#ff8000',
        'pale-orange': '#fce6c4',
        'very-dark-blue': '#0d1d23'
      }      
    },
  },
  plugins: [],
}

