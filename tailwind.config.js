/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        bigFont: ["Recursive", "sans-serif"],
        redHat: ["Red Hat Text", "sans-serif"]
      },
    },
  },
  plugins: [],
};
