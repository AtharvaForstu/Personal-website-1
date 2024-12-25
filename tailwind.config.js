/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Source Sans Pro', 'sans-serif'],
        playfair: ['Playfair Display', 'serif'],
        'press-start': ['"Press Start 2P"', 'cursive'],
      },
    },
  },
  plugins: [],
};