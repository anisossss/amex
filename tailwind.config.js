// tailwind.config.js
module.exports = {
  content: [
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      colors: {
        'amex-blue': '#89B4FA',
        'amex-dark-blue': '#1B365D',
        'amex-dark': '#11111B',
        'amex-dark-gray': '#181825',
        'card-bg': '#1E1E2E',
        white: '#CDD6F4',
        gray: {
          100: '#BAC2DE',
          200: '#A6ADC8',
          300: '#9399B2',
          400: '#7F849C',
          500: '#6C7086',
          600: '#585B70',
          700: '#45475A',
          800: '#313244',
          900: '#1E1E2E'
        }
      },
      boxShadow: {
        neon: '0 0 10px #CCFF00, 0 0 20px rgba(204, 255, 0, 0.5)',
        'neon-sm': '0 0 5px #CCFF00, 0 0 10px rgba(204, 255, 0, 0.5)',
        'amex-glow': '0 10px 25px -5px rgba(137, 180, 250, 0.25)'
      },
      fontFamily: {
        cairo: ['Cairo', 'sans-serif']
      }
    }
  },
  plugins: []
};
