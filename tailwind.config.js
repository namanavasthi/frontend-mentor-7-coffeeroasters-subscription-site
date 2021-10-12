module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      spacing: { 500: "500px" },
      colors: {
        neutral: {
          100: "#FEFCF7",
          200: "#A2A2A2",
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
