/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
    extend: {
      backgroundImage: {
        'dome': "url('../public/Dome.png')",
      }
    },
  },
  plugins: [],
}
