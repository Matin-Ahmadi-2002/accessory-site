/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/*.html"],
  theme: {
    fontFamily: {
      "iransans" : "iransans",
      "iransansBold" : "iransansBold",
      "iransansLight" : "iransansLight",
      "iransansMedium" : "iransansMedium",
      "iransansUltralight" : "iransansUltralight",
    },
    screens: {
      'xl': {'max': '1200px'},
      'lg': {'max': '992px'},
      'md': {'max': '768px'},
      'sm': {'max': '576px'},
      'ssm': {'max': '450px'},
    },
    extend: {
      colors : {
        "main-color": {
          DEFAULT : "#e0be5f",
        },
        "nav-color": {
          DEFAULT : "#bd9933",
        },
      },
      boxShadow : {
        "navshadow": "0 0px 5px #ddd",
      },
      fontSize : {
        '7.5xl' : "5.3125rem",
        '4.5xl' : "2.75rem"
      },
      spacing : {
        '50' : "12.5rem"
      }
    },
  },
  plugins: [],
}
