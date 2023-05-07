/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      dropShadow: {
        '3xl': '0px 4px 8px rgba(28, 37, 44, 0.05)',
        '4xl': [
            '0px 4px 8px rgba(28, 37, 44, 0.05)',
            '0px 4px 8px rgba(28, 37, 44, 0.05)'
        ]
      }
    },
    screens: {
      'sm': '176px',
      // => @media (min-width: 476px) { ... }

      'md': '660px',
      // => @media (min-width: 660px) { ... }

      'lg': '1440px',
      // => @media (min-width: 1440px) { ... }
    },
  },
  plugins: [],
}

