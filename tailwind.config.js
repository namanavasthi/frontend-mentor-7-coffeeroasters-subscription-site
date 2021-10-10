module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        neutral: {
          100: "#FEFCF7",
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
