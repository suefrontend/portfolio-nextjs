/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
<<<<<<< HEAD
      container: {
        center: true,
        padding: "15px",
        screens: {
          // md: "750px",
          lg: "970px",
          xl: "1170px",
          "2xl": "1170px",
        },
      },
      colors: {
        color: "#7d7d7d",
        pink: "#fc8596",
        lightgrey: "#959595",
        bglightgrey: "#f1f1f1",
        darkgrey: "#ababab",
=======
      colors: {
        pink: "#fc8596",
>>>>>>> 557af377ff4de47387b9efd5be834ce1ce5e720c
      },
    },
  },
  plugins: [],
};
