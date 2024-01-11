/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./App.{js,jsx,ts,tsx}", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: "#23A892",
        dark: "#222B45",
        white: "#FBFBFB",
        "gray-1": "#edf2fb",
      },
    },
  },
  plugins: [],
};
