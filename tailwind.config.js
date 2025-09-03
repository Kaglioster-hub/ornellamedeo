/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}"
  ],
  safelist: [
    { pattern: /.*/ }, // ✅ Mantieni tutte le classi, nessuna viene purgata
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
