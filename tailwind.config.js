import scrollbar from 'tailwind-scrollbar';

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        bigFont: ["Recursive", "sans-serif"],
        montserrat: ["Montserrat", "sans-serif"],
      },
      height: {
        screen: "100dvh",
      },
      colors: {
        'scroll-thumb': '#454a4d', // Thumb color
        'scroll-track': '#32405b', // Track color
      },
      scrollbar: {
        width: 'thin', // Default is 'auto'
        height: 'thin', // Default is 'auto'
      },
    },
  },
  plugins: [scrollbar],
};
