const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  plugins: [require('@tailwindcss/forms')],
  theme: {
    extend: {
      colors: {
        customGreen: '#6AB547',
      },
      fontFamily: {
        sans: ['Roboto', 'sans-serif'], // Secondary Font for body
        heading: ['Poppins', 'sans-serif'], // Primary Font for headings
      },
    },
  },
}
