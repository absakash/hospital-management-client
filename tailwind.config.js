/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#0FCFEC",
          secondary: "#19D3AE",
          accent: "#262626",
          neutral: "#3A4256",
          "base-100": "#ffffff",
          info: "#0072f5",
          success: "#21ca51",
          warning: "#ff6052",
          error: "#de1b8d",
        },
        themes: ["light", "dark", "cupcake"],
      }
    ]
  },
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
};
