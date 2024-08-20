/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        customColor: 'var(--ast-global-color-0)',
      },
    },
  },
  plugins: [],
}

