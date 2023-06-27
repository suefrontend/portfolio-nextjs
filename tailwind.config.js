/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      borderColor: {
        pink: "#fc8596",
      },
      colors: {
        "main-bg-color": "#02172F",
        "text-gray-color": "#fff",
      },
    },
  },
  plugins: [],
};
