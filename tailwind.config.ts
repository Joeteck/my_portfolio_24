
const {
  default: flattenColorPalette,
} = require("tailwindcss/lib/util/flattenColorPalette");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: " class",
  theme: {
    extend: {
      fontFamily: {
        inter: ["Inter", "sans-serif"],
      },
      colors: {
        "black-100": "#2B352F",
        "primary-green": {
          DEFAULT: "#010604",
          700: "#03170f",
          600 : "#052919",
          500 : "#0a4b2f",
          400 : "#0f6e45",
          300 : "#13905a",
          200 : "#18b370",
          100 : "#1dd686",
        },
        "grey": {
          DEFAULT: "#C5CDCB",
          100 : "#88948F",
          200 : "#525352",
          300 : "#555555",
        },
        "light-grey": {
          "DEFAULT": "#6F7271"
        },
        "secondary-orange": "#EA8850",
        "white": {
          DEFAULT: "#f4fdf9 ",
          100: "#e2fbf0",
        },
      },
      backgroundImage: {
        'pattern': "url('/pattern.png')",
        'hero-bg': "url('/hero-bg.png')"
      }
    },
  },
  plugins: [addVariablesForColors],
};


// This plugin adds each Tailwind color as a global CSS variable, e.g. var(--gray-200).
function addVariablesForColors({ addBase, theme }: any) {
  let allColors = flattenColorPalette(theme("colors"));
  let newVars = Object.fromEntries(
    Object.entries(allColors).map(([key, val]) => [`--${key}`, val])
  );

  addBase({
    ":root": newVars,
  });
}



// #010604
// #03170f
// #052919
// #083a24
// #0a4b2f
// #0c5d3a
// #0f6e45
// #117f50
// #13905a
// #16a265
// #18b370
// #1ac47b
// #1dd686
// Shade Color Variation

// #24e290
// #35e499
// #47e6a1
// #58e9aa
// #69ebb3
// #7bedbc
// #8cf0c5
// #9df2cd
// #aff4d6
// #c0f7df
// #d1f9e8
// #e2fbf0
// #f4fdf9

// #88948F