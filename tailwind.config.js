/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      'sm': '750px',
      // => @media (min-width: 576px) { ... }

      'md': '970px',
      // => @media (min-width: 960px) { ... }

      'lg': '1170px',
      // => @media (min-width: 1440px) { ... }
    },
  },
  plugins: [],
}