const plugin = require("tailwindcss/plugin");
const darkMode = require("./dark-mode");

module.exports = {
  purge: false,
  theme: {
    extend: {
      colors: {
        "gray-650": "#787878",
      },
      width: {
        "49/100": "49%",
      },
    },
  },
  variants: {
    margin: ["responsive", "odd"],
  },
  // variants: {
  //   backgroundColor: ["dark"],
  //   textColor: ["responsive", "hover", "focus", "dark", "dark-hover"],
  // },
  plugins: [plugin(darkMode())],
};
