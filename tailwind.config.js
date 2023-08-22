/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        satoshi: ["Satoshi", "sans-serif"],
        inter: ["Inter", "sans-serif"],
      },
      colors: {
        "primary-orange": "#FF5722",
        "hero-btn-bg": "rgb(6,14,131)",
        "hero-btn-bgg":
          "linear-gradient(0deg, rgba(6,14,131,1) 0%, rgba(12,25,180,1) 100%)",
        "hover-btn": "rgb(0,3,255)",
        "hover-ln-btn":
          "linear-gradient(0deg, rgba(0,3,255,1) 0%, rgba(2,126,251,1) 100%)",
      },
    },
  },
  plugins: [],
};
