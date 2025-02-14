const flowbite = require("flowbite-react/tailwind");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    // ...
    "./index.html", "./src/**/*.{js,ts,jsx,tsx}",
    flowbite.content(),
  ],
  theme: {
    extends: {},
    container:{
      center: true,
      padding: '4rem'
    }
  },
  plugins: [
    // ...
    flowbite.plugin(),
  ],
};