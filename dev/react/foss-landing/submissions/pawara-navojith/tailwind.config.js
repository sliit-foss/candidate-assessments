/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,jsx}', './src/**/**/*.{html,js,jsx}'],
  theme: {
    extend: {},
    fontFamily: {
      subHeadingFont: [
        'Trebuchet MS',
        'Lucida Sans Unicode',
        'Lucida Grande',
        'Lucida Sans',
        'Arial,sans-serif',
      ],
    },
  },
  plugins: [],
};
