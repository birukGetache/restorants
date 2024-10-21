// tailwind.config.js
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{html,js,vue}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#FF6363",
        secondary: {
          100:'#E2E2D5',
          200:'#888883',
        }
      },
      fontFamily: {
        Roboto: ["Roboto", "sans-serif"],
        body:["Nunito"]
      },
    },
    container: {
      padding: "2rem",
      center: true,
    },
    screens: {
      sm: "640px",
      md: "768px",
     lg: "1024px",
    },
    width: {
      'fit': 'fit-content',
    },
    fontSize:{
      mamoth: '8rem'
    },
    
  },
  plugins: [],
};