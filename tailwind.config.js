/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        general: "#f0f0f0",
        navigation: "#f2890f",
        skype: "#c6c4c2",
      },
      backgroundImage: {
        catalog: "linear-gradient(0deg, #141414 0%, #1F1D1D 100%)",
        footerFade:
          "linear-gradient(180deg, rgba(19, 18, 18, 0) 0%, #131212 100%)",
      },
      fontFamily: {
        raleway: ["Raleway", "sans-serif"],
        roboto: ["Roboto", "sans-serif"],
      },
      letterSpacing: {
        navigation: "0.4px",
        description: "0.5px",
      },
    },
  },
  plugins: [],
};
