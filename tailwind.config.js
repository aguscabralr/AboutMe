/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      screens: {
        xs: "350px",
        sm: "400px",
        md: "600px",
        lg: "900px",
        xl: "1200px"
      },
      colors: {
        pri: "#007ACC", // It can be used for buttons, headings, and other prominent elements.
        sec: "#34A853", // This can be used for call-to-action buttons or accents.
        acc: "#FF6D00", // Adds a splash of excitement and draws attention to specific elements like icons or important details.
        bgd: "F5F5F5",
        txt: "#333333", // "#212B36",
        neu: "#EAEAEA", // Used for borders, dividers, or to create subtle distinctions between elements.
      },
    },
  },
  plugins: [require("daisyui")],
}
