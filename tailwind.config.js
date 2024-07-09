/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    backgroundImage: {
      bed: "url(../src/assets/bed.png)",
      smallBed:"url(../src/assets/smaller bed.png)",
      flower: "url(../src/assets/flower vase.png)",
      fatLight: "url(../src/assets/fat lights.png)",
      centerTable: "url(../src/assets/center table.png)",
      vase: "url(../src/assets/vase.png)",
      weirdStatue: "url(../src/assets/weird statues.png)",
      
    },
    
    extend: {},
  },
  darkMode: "class",
  plugins: [],
};
