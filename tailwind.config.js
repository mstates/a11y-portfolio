/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './src/**/*.{js,ts,jsx,tsx,mdx}',
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-poppins)', 'ui-sans-serif', 'system-ui'],
      },
      colors: {
        primary: 'rgb(var(--color-primary) / <alpha-value>)',
        airbnb: {
          red: '#FF385C',
          dark: '#222222',
          gray: {
            light: '#F7F7F7',
            medium: '#DDDDDD',
            DEFAULT: '#717171'
          },
        },
      },
      borderRadius: {
        'xl': '1rem',
        '2xl': '1.5rem',
      },
      boxShadow: {
        'airbnb': '0 6px 16px rgba(0, 0, 0, 0.12)',
        'airbnb-hover': '0 6px 20px rgba(0, 0, 0, 0.2)'
      },
    },
  },
};
