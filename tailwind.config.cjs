/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        'primary-sky': 'var(--primary-sky)',
        'primary-midnight': 'var(--primary-midnight)',
        'primary-cloud': 'var(--primary-cloud)',
        'primary-snow': 'var(--primary-snow)',
        'primary-shadow': 'var(--primary-shadow)',
        'primary-fog': 'var(--primary-fog)',
        'primary-storm': 'var(--primary-storm)',
        'primary-grey': 'var(--grey)',
      },

      fontSize: {
        h1: 'var(--font-size-h1)',
        h2: 'var(--font-size-h2)',
        h3: 'var(--font-size-h3)',
      },
    },
  },
  plugins: [],
};
