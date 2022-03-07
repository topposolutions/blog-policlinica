module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        officialBlue:"#0065b4",
        blue: '#2ca3fa',
        blueOnHover:"#1f90ed",
        buttoncolor: '#d6e9fa',
      },
      flex:{
        '2': '2 2 0%',
        '3': '3 3 0%',
        '4': '4 4 0%',
        '5': '5 5 0%',
      }
    },
  },
  plugins: [],
}
