/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './layout/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#cc4452',
        light: '#ffffff',
        light_gray: '#f0f2f7',
      }
    },
  },
  plugins: [require('@tailwindcss/forms')],
};
