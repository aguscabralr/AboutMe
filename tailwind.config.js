/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      screens: {
        xs: '200px',
        sm: '420px',
        md: '640px',
        lg: '1024px',
        xl: '1536px',
      },
    },
  },
  plugins: [],
};
