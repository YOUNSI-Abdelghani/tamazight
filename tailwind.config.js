/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#99CC33",    // vert amazigh
        secondary: "#0099CB",  // bleu amazigh
        accent: "#FFE514",     // jaune amazigh
        danger: "#FF0000",     // rouge amazigh
      }
    },
  },
  plugins: [],
}