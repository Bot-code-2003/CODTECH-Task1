/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      dropShadow: {
        glowPurple: "0 0 10px rgba(145, 94, 255, 0.7)",
        glowYellow: "0 0 10px #F0DB4F",
        glowOrange: "0 0 10px #E44D26",
        glowBlue: "0 0 10px #1572B6",
        glowBlue2: "0 0 10px #61DAFB",
        glowGreen: "0 0 10px #3F873F",
        glowWhite: "0 0 10px rgba(255, 255, 255, 0.7)",
        glowPython: [
          "0 0 10px rgba(48, 105, 152, 0.7)",
          "0 0 20px rgba(255, 212, 59, 0.7)",
        ],
      },
      colors: {
        primary: "#050816",
        secondary: "#aaa6c3",
        tertiary: "#151030",
        "black-100": "#100d25",
        "black-200": "#090325",
        "white-100": "#f3f3f3",
      },
      boxShadow: {
        card: "0px 35px 120px -15px #211e35",
      },
      screens: {
        xs: "450px",
      },
      // backgroundImage: {
      //   "hero-pattern": "url('/src/assets/herobg.png')",
      // },
    },
  },
  plugins: [],
};
