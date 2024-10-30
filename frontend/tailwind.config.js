/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        colorText: "#8a6260",
        blackText: "#181111",
        background: "#f5f0f0",
        reddish: "#f2231c",
        white: "#fff",  
        black: "#000",
      },
    },
  },
  plugins: [],
}

