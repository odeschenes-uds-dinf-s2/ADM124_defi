/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        udes: {
          100: "#018849",
        }
      },
      spacing: {
        "5rem": "5rem",
        "10rem": "10rem",
        "20rem": "20rem"
      }
    },
  },
  plugins: [],
}
