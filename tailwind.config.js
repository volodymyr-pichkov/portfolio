/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        general: "#f0f0f0",
        navigation: "#f2890f",
        skype: "#c6c4c2",
        questInfo: "#e6e6e6",
        checkBox: "#b8b8b8",
      },
      backgroundImage: {
        catalog: "linear-gradient(0deg, #141414 0%, #1F1D1D 100%)",
        bookingPopup: "linear-gradient(0deg, #141414 0%, #1F1D1D 100%)",
        footerFade:
          "linear-gradient(180deg, rgba(19, 18, 18, 0) 0%, #131212 100%)",
        iconFade:
          "linear-gradient(0deg, rgba(28, 27, 27, 0.9) 5.23%, rgba(46, 46, 46, 0) 98.38%)",
      },
      fontFamily: {
        raleway: ["Raleway", "sans-serif"],
        roboto: ["Roboto", "sans-serif"],
      },
      letterSpacing: {
        navigation: "0.4px",
        description: "0.5px",
      },
      stroke: {
        divider: "rgba(255, 255, 255, 0.5)",
        dividerLight: "rgba(255, 255, 255, 0.3)",
      },
      padding: {
        600: "600px",
        632: "632px",
      },
    },
  },
  plugins: [],
};
