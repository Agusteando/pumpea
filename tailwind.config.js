
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        heading: ["Montserrat", "sans-serif"],
        sans: ["Roboto", "sans-serif"],
      },
      colors: {
        primary: {
          DEFAULT: "#227EF0", // blue
          dark: "#145A86",
          light: "#5AC8FA",   // sky
        },
        accent: {
          DEFAULT: "#255980",
          sky: "#ACE5FF",
        },
        grayKt: {
          DEFAULT: "#DAEAF3", // as inspiration from Kt kids
          dark: "#616D78"
        }
      },
      backgroundImage: {
        'blue-gradient': "linear-gradient(91deg, #227EF0 0%, #5AC8FA 100%)",
        'sky-gradient': "linear-gradient(91deg, #5AC8FA 0%, #227EF0 100%)",
      }
    },
  },
  plugins: [],
}
