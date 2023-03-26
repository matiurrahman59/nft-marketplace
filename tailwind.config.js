/** @type {import('tailwindcss').Config} */
const { fontFamily } = require('tailwindcss/defaultTheme');
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    screens: {
      md: '768px',
      lg: '1280px',
    },
    extend: {
      colors: {
        primaryColor: '#A259FF',
        bgSecondary: '#3B3B3B',
        darkText: '#2B2B2B',
        labelColor: ' #858584',
      },
      fontFamily: {
        sans: ['var(--font-Work_Sans)', ...fontFamily.sans],
        spaceMono: ['var(--font-spaceMono)', ...fontFamily.sans],
      },
    },
  },
  plugins: [],
};
