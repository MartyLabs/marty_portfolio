module.exports = {
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
    backgroundColor: (theme) => ({
      main: "#232027",
    }),
    gradientColorStops: (theme) => ({
      start: "#A2CAFF",
      end: "#006FFF",
    }),
    letterSpacing: {
      desktop: "30px"
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
