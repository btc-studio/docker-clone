module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'blue2': '#022144',
        'blue1': '#0091e2',
        'gray1': '#697a89',
      },
      backgroundSize: {
        '16': '34rem',
      },
      minWidth: {
        '300': '300px',
      },
      screens: {
        'mdm': '960px',
      },
    },

  },
  plugins: [],
}
