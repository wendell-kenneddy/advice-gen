module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Manrope', 'sans-serif']
      },
      colors: {
        'dark-grayish-blue': '#323a49',
        'grayish-blue': '#4e5d73',
        'light-cyan': '#cee3e9',
        'neon-green': '#52ffa8'
      }
    }
  },
  plugins: []
};
