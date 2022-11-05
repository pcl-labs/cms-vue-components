/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          black: "#343B44",
          red: "#F0233C",
          gray: {
            100: "#F9F9FA",
            200: "#F6F6F7",
            300: "#DEE1E8",
            500: "#D3D6DD",
            700: "#A2A4AF",
            900: "#595B69",
          },
          green: {
            DEFAULT: "#008060",
            dull: "#E7EDEA",
            hover: "#03664e",
          },
        },
      },
      spacing: {
        18: "72px",
        19: "76px",
        30: "120px",
        0.75: "3px",
      },
      fontFamily: {
        inter: ["Inter", "sans-serif"],
      },
      fontSize: {
        body: ["15px", "20px"],
        26: ["26px", "31px"],
        32: ["32px", "40px"],
      },
      boxShadow: {
        custom: "0px 1px 6px rgba(0, 0, 0, 0.1)",
      },
      borderWidth: {
        3: "3px",
      },
    },
  },
  plugins: [],
};
