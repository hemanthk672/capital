/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        playfair: ['"Playfair Display"', 'serif'],
        poppins: ['Poppins', 'sans-serif'],
      },
      colors: {
        gold: {
          DEFAULT: '#c9a840',
          light: '#e8c85a',
          dark: '#a8881c',
        },
        salon: {
          black: '#0a0a0a',
          dark: '#161616',
          cream: '#f5f0e8',
        },
      },
    },
  },
  plugins: [],
};
