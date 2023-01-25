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
      },

      fontSize: {
        h1: 'var(--h1)',
        h2: 'var(--h2)',
        h3: 'var(--h3)',
        lg: 'var(--lg)',
        md: 'var(--md)',
        sm: 'var(--sm)',
        xs: 'var(--xs)',
      },
    },
  },
  plugins: [],
};
