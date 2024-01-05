/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontSize: {
 
    },
    extend: {
      fontFamily: {
        palanquin: ['Palanquin', 'sans-serif'],
        Roboto: ['roboto', 'sans-serif'],
        'display': ['roboto', 'sans-serif'],
        'body': ['roboto', 'sans-serif'],
      },
      colors: {
        'primary': "#ECEEFF",
        "dark-blue": "#091133",
        "light-blue": "#091133",
        "pale-blue": "#F5F6FF",
        "white-400": "rgba(255, 255, 255, 0.80)"
      },
      boxShadow: {
        '3xl': '0 10px 40px rgba(0, 0, 0, 0.1)'
      },
      backgroundImage: {
        'hero': "url('assets/images/collection-background.svg')",
        'card': "url('assets/images/thumbnail-background.svg')",
      },
      screens: {
        "wide": "1440px"
      }
    },
  },
  plugins: [],
}
