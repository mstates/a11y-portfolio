// tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
  // In Tailwind 4, content paths are often auto-detected
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-poppins)', 'sans-serif'],
      },
    },
  },
  plugins: [],
}