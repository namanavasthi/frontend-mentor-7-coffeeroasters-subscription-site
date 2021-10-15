module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      spacing: {
        13: "13px",
        15: "15px",
        16: "16px",
        18: "18px",
        23: "23px",
        24: "24px",
        25: "25px",
        26: "26px",
        28: "28px",
        30: "30px",
        31: "31px",
        32: "32px",
        33: "33px",
        36: "36px",
        40: "40px",
        48: "48px",
        56: "56px",
        61: "61px",
        64: "64px",
        80: "80px",
        90: "90px",
        120: "120px",
        151: "151px",
        163: "163px",
        200: "200px",
        500: "500px",
      },
      fontFamily: {
        barlow: ['"Barlow"', "sans-serif"],
        fraunces: ['"Fraunces"', "serif"],
      },
      fontSize: {
        15: "15px",
        18: "18px",
        24: "24px",
        28: "28px",
        40: "40px",
        72: "72px",
      },
      lineHeight: {
        25: "25px",
        32: "32px",
        40: "40px",
        72: "72px",
      },
      letterSpacing: {
        0: "0px",
      },
      colors: {
        neutral: {
          100: "#FEFCF7",
          200: "#A2A2A2",
          300: "#83888F",
          400: "#FDD6BA",
        },
        primary: {
          100: "#0E8784",
          200: "#333D4B",
          300: "#2C343E",
          400: "#273038",
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
