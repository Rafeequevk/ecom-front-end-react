// /** @type {import('tailwindcss').Config} */
// module.exports = {
//   content: [],
//   theme: {
//     extend: {},
//   },
//   plugins: [require("tailwindcss"), require("autoprefixer")],
// };

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    colors: {
      transparent: "transparent",
      current: "currentColor",
      white: "#ffffff",
      purple: "#3f3cbb",
      midnight: "#121063",
      metal: "#565584",
      tahiti: "#3ab7bf",
      silver: "#ecebff",
      "bubble-gum": "#ff77e9",
      bermuda: "#78dcca",
      SkyBlue: "#3187ED",
      grey: "#F8F8F8",
      greenish: "#00C6D7",
    },
    extend: {
      gridTemplateColumns: { 25: "25% repeat(3, 1fr) 25%" },
    },
  },
  plugins: [],
};
