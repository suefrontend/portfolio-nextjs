/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      container: {
        center: true,
        padding: "15px",
        screens: {
          md: "750px",
          lg: "970px",
          xl: "1170px",
          "2xl": "1496px",
        },
      },
      colors: {
        color: "#7d7d7d",
        pink: "#fc8596",
        lightgrey: "#959595",
        bglightgrey: "#f1f1f1",
        darkgrey: "#ababab",
      },
    },
  },
  plugins: [],
};
