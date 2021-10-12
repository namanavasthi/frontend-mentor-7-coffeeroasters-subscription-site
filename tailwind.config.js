module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      spacing: {
        15: "15px",
        18: "18px",
        24: "24px",
        25: "25px",
        26: "26px",
        30: "30px",
        32: "32px",
        40: "40px",
        90: "90px",
        163: "163px",
        500: "500px",
      },
      fontFamily: {
        barlow: ['"Barlow"', "sans-serif"],
        fraunces: ['"Fraunces"', "serif"],
      },
      fontSize: {
        15: "15px",
        18: "18px",
        40: "40px",
      },
      lineHeight: {
        25: "25px",
        40: "40px",
      },
      letterSpacing: {
        0: "0px",
      },
      colors: {
        neutral: {
          100: "#FEFCF7",
          200: "#A2A2A2",
        },
        primary: {
          100: "#0E8784",
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
