module.exports = {
  purge: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}"
  ],
  content: [],
  theme: {
    fontFamily: {
      'kaushan': ['Kaushan Script'],
    },
    extend: {
      colors: {
        green: {
          DEFAULT: '#00f260',
        }
      },
    },
    plugins: [
    ],
    darkMode: false,
    variants: {
      extend: {},
    },
  }
}

