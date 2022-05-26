module.exports = {
    purge: [
      './src/**/*.html',
      './src/**/*.js',
      './src/**/*.jsx',
    ],
    darkMode: false, // or 'media' or 'class'
    theme: {
        colors:{
            bg1 : '#CCC9DC',
            bg2 : '#324A5F',
            bg3 : '#1B2A41',
            bg4 : '#0C1821',
            primary1: '#3A86FF',
            primary2: '#8338EC',
            primary3: '#FF006E',
            primary4: '#FB5607',
            primary5: '#FFBE0B',
        },
        screens: {
          'tablet': '640px',
          // => @media (min-width: 640px) { ... }
    
          'laptop': '1024px',
          // => @media (min-width: 1024px) { ... }
    
          'desktop': '1280px',
          // => @media (min-width: 1280px) { ... }
        },
      extend: {
        fontFamily: {
        },
        colors: {
          
        },
      },
    },
    variants: {},
    plugins: [],
  };
  