/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        Outfit:['Outfit']
      },
      colors: {
        headerColor: '#223144',
        textColor: '#A4A6B2'
      }
    },
  },
  plugins: [],
}

