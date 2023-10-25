const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        head: "#151515",
        "sub-head": "#444444",
        para: "#737373",
        "foot-details": "#E8E8E8",
        "foot-anchor": "#F3F3F3",
        special: "#FF3811",
        "slider-arrow": "#FFFFFF33",
      },
      fontFamily: {
        inter: ["Inter", "sans-serif"],
      },
    },
  },
  plugins: [require("daisyui")],
});
