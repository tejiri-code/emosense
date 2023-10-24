module.exports = {
    content: [
        "./src/**/*.{js,jsx,ts,tsx}",
      ],
    theme: {
      extend: {},
      animation: {
        'fade-in': 'fadeIn 1s ease-out',
      },
      colors: {
        primary: {
          100: '#161E2F',
          200: '#242F49',
          300: '#384358',
        },
        secondary: {
          100: '#FFA586',
          200: '#B51A2B',
          300: '#541A2E',
        },
        dark: {
          'primary-bg': '#161E2F',
          'primary-text': '#FFF',
        },
      },
    },
    variants: {
      extend: {},
    },
    plugins: [],
  };
  