/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    minHeight: {
      30: "30px",
    },
    extend: {
      keyframes: {
        blink: {
          "0%, 100%": { opacity: 1 },
          "50%": { opacity: 0 },
        },
      },
      animation: {
        blink: "blink 2.5s linear infinite",
      },
      fontFamily: {
        kanit: ["Kanit-Thin"], // 'CustomFont' - имя шрифта, 'sans' - альтернативный шрифт
        lg400: ["Luckiest Guy"],
        jost: ["Jost"],
        krona: ["Krona One"],
      },
      colors: {
        sand: "#FED59C", // Replace with the exact sand color you want
        "dark-blue": "#0B2632",
        "light-sand": "#FFF3DC",
        "light-blue": "#7A979D", // Replace with the exact dark blue you want
        background: "#130D1A",
        uf: "#7152DF",
        acid: "#C0FE08",
        violet: "#4429A6",
        pressedviolet: "#4429A6",
        pressedtextviolet: "#CE7DFF",
        error: "#FF4874",
      },
      boxShadow: {
        outer: "-4px 4px 4px 0px #00000040",
        inset: "-4px 4px 4px 0px #FFFFFF82 inset",
      },
      backgroundImage: {
        flowerviolet: "url('/src/assets/flowviolet.png')",
        floweracid: "url('/src/assets/flowacid.png')",
        floweracidpressed: "url('/src/assets/flowacidpressed.png')",
      },
      screens: {
        w1500: "1500px",
      },
    },
  },
  plugins: [],
};
