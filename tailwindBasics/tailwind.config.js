/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'gstart' : '#D6D5C9',
        'gend' : '#706F69'
      },
      width: {
        '706': '36.125rem',
        '306' : '250px' // Custom width
      },
      height: {
        '830' : '839px',
        '395' : '280px'
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'], // Add Poppins as a custom font
      },
    },
  },
  plugins: [],
}