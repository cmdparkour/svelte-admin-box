/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,svelte}",
    "./src/*.{js,ts,svelte}",
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require("tailwindcss"),
    require("autoprefixer"),
  ],
}