/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  safelist: [
    { pattern: /.*/ }, // Mantiene tutte le classi (nessuna viene purgata)
  ],
  theme: {
    extend: {
      colors: {
        brandWhite: "#FFFFFF",  // Bianco puro
        brandBlack: "#0A0A0A",  // Nero profondo
        brandGold: "#FFD700",   // Oro elegante
        brandCream: "#FAF3E0",  // Crema delicato
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
