/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      head: "#151515",
      "sub-head": "#444444",
      para: "#737373",
      "foot-details": "#E8E8E8",
      "foot-anchor": "#F3F3F3",
      special: "#FF3811",
      white: '#FFFFFF',
    },
    fontFamily: {
      inter: ["Inter", "sans-serif"],
    },
    extend: {},
  },
  plugins: [require("daisyui")],
};
