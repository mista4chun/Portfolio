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
    },
  },
  plugins: [],
};
