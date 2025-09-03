/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
    "./app/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        brandBlue: "#2E8BC0",   // Azzurro digitale
        brandGold: "#FFD700",   // Giallo oro
        brandGreen: "#9FE2BF",  // Verde pastello
        brandGray: "#444444",   // Grigio elegante
      },
      fontFamily: {
        sans: ["Source Sans Pro", "sans-serif"],
        serif: ["Playfair Display", "serif"],
        title: ["Montserrat", "sans-serif"],
      },
    },
  },
  plugins: [],
};
