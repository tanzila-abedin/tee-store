/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      sm: { max: "425px" },
      // => @media (max-width: 576px)

      md: "960px",
      // => @media (min-width: 960px) { ... }

      lg: { min: "1440px", max: "1280px" },
      // => @media (min-width: 1440px) { ... }

      xl: "1280px",
      // => @media (min-width: 1280px) { ... }

      "2xl": "1536px",
      // => @media (min-width: 1536px) { ... }
    },
  },
  plugins: [],
};
