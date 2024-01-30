/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        red01: "#E7584C",
        black1: "#696b71",
        black2: "#4c4c52",
        blue1: "#1e2c43",
        
      }
    },
  },
  plugins: [],
}

