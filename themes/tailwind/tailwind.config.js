/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./themes/**/layouts/**/*.html",
    "./layouts/**/*.html"
  ],
  theme: {
    extend: {
      fontFamily: {
        'heading': ['League Spartan', 'sans-serif'],
        'body': ['Poppins', 'sans-serif'],
      },
      colors: {
        'primary':   '#08305C',  // Very Dark Blue
        'secondary': '#F39200',  // Saffron Gold
        'accent1': '#FBF1E2',    // Fine Porcelaine
        'accent2': '#D8E9F4',    // Azureish White
        'accent3': '#DFDDE3',    // February Frost
        'accent4': '#0A629E',    // Rave Regatta
        'accent5': '#5494BF',    // Blue Paradise
        'accent6': '#85B5D4',    // BLUE BELL 
        'dark':    '#111827',    
        darkblue: {"50":"f8f9fc","100":"#f1f3f9","200":"#e2e6f2","300":"#cbd3e5","400":"#94a1c9","500":"#6472a0","600":"#47547a","700":"#33405d","800":"#1e2a3f","900":"#0f1627"}
      },
      typography: {
        quoteless: {
          css: {
            'blockquote p:first-of-type::before': { content: 'none' },
            'blockquote p:first-of-type::after': { content: 'none' },
            'code::before': { content: 'none' },
            'code::after': { content: 'none' },
            '> ul > li > input:first-child': {
              marginTop: 0,
            },
            '> ul > li > input:last-child': {
              marginBottom: 0,
            },
            '> ol > li > input:first-child': {
              marginTop: 0,
            },
            '> ol > li > input:last-child': {
              marginBottom: 0,
            },
            '.gist .highlight tbody tr': {
              borderWidth: 0,
            },
          },
        },
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
