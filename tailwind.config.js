/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
    extend: {},
  },
  plugins: [
    function({addUtilities}){
      const newUtilities = {
        ".no-swiggy-scrollbar::-webkit-scrollbar":{
          display:"none"
        }
      }
      addUtilities(newUtilities)
    }
  ],
}