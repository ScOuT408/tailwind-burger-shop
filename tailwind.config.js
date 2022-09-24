/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
    screens: {
      "2xl": { max: "1200px" },
      // => @media (max-width: 1535px) { ... }

      xl: { max: "1024px" },
      // => @media (max-width: 1279px) { ... }

      lg: { max: "991px" },
      // => @media (max-width: 1023px) { ... }

      md: { max: "768px" },
      // => @media (max-width: 767px) { ... }

      lm: { max: "550px" },
      // => @media (max-width: 767px) { ... }

      sm: { max: "460px" },
      // => @media (max-width: 639px) { ... }

      xsm: { max: "410px" },
      // => @media (max-width: 639px) { ... }
    },
    extend: {
      fontFamily: {
        playfair: ["Playfair Display", "sans-serif"],
      },
    },
  },
  plugins: [],
};
