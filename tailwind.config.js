module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  purge: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        background: '#101010',
        paper: '#1F2122',
        primary: '#F73859',
      },
      textColor: {
        primary: '#EFEDFF',
        secondary: '#BEBDD4',
        accent: '#F73859',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
