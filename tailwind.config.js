/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["index.html"],
  theme: {
    fontFamily: {
      Raleway: ["Raleway", "sans-serif"],
      Josefin: ["Josefin Sans", "sans-serif"],
    },
    fontSize: {
      h1: ["42px;", "1.2"],
      h2: ["32px;", "1.2"],
      h3: ["24px;", "1.2"],
      h4: ["24px;", "1.2"],
      a: ["14px;", "22.4px"],
      p: ["22px;", "1.2"],
    },
    colors: {
      primary: "#ffe1fb",
    },
  },
  plugins: [],
};
