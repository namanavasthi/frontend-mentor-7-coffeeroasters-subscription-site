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
        30: "30px",
        32: "32px",
        40: "40px",
        48: "48px",
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
        40: "40px",
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
        },
        primary: {
          100: "#0E8784",
          200: "#333D4B",
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
