/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**"],
  theme: {
    extend: {
      screens: {
        'sm-m': '425px',
        // => @media (max-width: 425px) { ... }
  
        'md': '765px',
        // => @media (min-width: 770px) { ... }

        'md-m': {'max': '767px'},
      // => @media (max-width: 768px) { ... }
  
        'lg': '1024px',
        // => @media (min-width: 1440px) { ... }
      },
      colors: {
        'primary': '#020F59',
        'secondary':'#248EA6',
        'dark': '#020A33',
        'ligth':'#C4EAF2',
        'infor':'#57F27E',
        'obscure': '#020307',

      },
    },
  },
  plugins: [require("daisyui")],

  daisyui: {
    styled: true,
    themes: true,
    base: true,
    utils: true,
    logs: true,
    rtl: false,
    prefix: "",
    darkTheme: "dark",
  },

}