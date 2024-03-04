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
    },
    extend: {
      colors : {
        "main-color": {
          DEFAULT : "#e0be5f",
        },
      },
    },
  },
  plugins: [],
}
