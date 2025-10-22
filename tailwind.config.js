/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./App.{js,ts,tsx}', './app/**/*.{js,ts,tsx}', './components/**/*.{js,ts,tsx}'],

  presets: [require('nativewind/preset')],
  theme: {
    extend: {
      colors: {
        primary: '#0089FF',
      },
      fontSize: {
        f10: ['10px'],
        f11: ['11px'],
        f12: ['12px'],
        f13: ['13px'],
        f14: ['14px'],
        f15: ['15px'],
        f16: ['16px'],
        f17: ['17px'],
        f18: ['18px'],
        f19: ['19px'],
        f20: ['20px'],
      },
      fontFamily: {
        nunito: ['Nunito_400Regular'],
        'nunito-bold': ['Nunito_700Bold'],
        'nunito-extrabold': ['Nunito_800ExtraBold'],
        'nunito-black': ['Nunito_900Black'],
      },
    },
  },
  plugins: [],
};
