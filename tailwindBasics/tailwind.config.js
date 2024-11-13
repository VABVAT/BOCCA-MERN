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
        '395' : '350px'
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'], // Add Poppins as a custom font
      },
      gridTemplateColumns: {
        16: 'repeat(16, minmax(0, 1fr))', // Defines a 16-column layout
      },
      gridTemplateRows: {
        16: 'repeat(16, minmax(0, 1fr))', // Defines a 16-row layout
      },
      gridRowStart: {
        '8': '8',
        '9': '9',
        '10': '10',
        '11': '11',
        '12': '12',
        '13': '13',
        '14': '14',
        '15': '15',
      },
      gridColumnStart: {
        '8': '8',
        '9': '9',
        '10': '10',
        '11': '11',
        '12': '12',
        '13': '13',
        '14': '14',
        '15': '15',
      },
    },
  },
  plugins: [],
}