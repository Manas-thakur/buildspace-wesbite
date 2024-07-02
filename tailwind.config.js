/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      boxShadow: {
        'bottom-right': '5px 5px 5px 0px rgba(0,0,0,0.75)',
        'top-left': '-10px -10px 5px 0px rgba(0,0,0,0.75)',
        // Add more custom shadows as needed
      }
    },
  },
  plugins: [],
};
