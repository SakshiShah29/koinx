/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ochre: "#FAEDDD",
        ochredark: "#D3C5B0",
        fadeochre: "#9A8261",
        darkbrown: "#312E2A",
        fadebrown: "#7A756E",
        lightfadebrown: "#616161",
        secondaryColor: "#C59F71",
      },
      fontFamily: {
        inter:["Inter"],
      },
      boxShadow: {
        'normal': '1px 3.5px 0px 0px #312E2A',
        'hover': '1px 1px 0px 0px #312E2A',
      }
    },
    screens: {
      es: "360px",
      sm: "576px",
      ls: "688px",
      md: "960px",
      lg: "1440px",
    },
  },
  plugins: [],
};
