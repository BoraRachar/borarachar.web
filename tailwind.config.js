/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/sections/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#48358C",
        secondary: "#F27405",
        neutral: {
          black: "#232324",
          white: "#f2f2f3",
          green: "#34A853",
          gray: {
            500: "#4d4a4f",
            300: "#949295",
            200: "#f2f2f2",
          },
        },
      },
      boxShadow: {
        "card-custom": "17px 18px 0px 3px rgba(165,134,255,1)",
        "card-custom-sm": "8px 8px 0px 3px rgba(165,134,255,1)",
      },
      keyframes: {
        "fade-in-ltr": {
          "0%": { transform: "translateX(-100px)", opacity: "0" },
          "100%": { transform: "translateX(0)", opacity: "1" },
        },
        "fade-in-rtl": {
          "0%": { transform: "translateX(100px)", opacity: "0" },
          "100%": { transform: "translateX(0)", opacity: "1" },
        },
      },
      animation: {
        "fade-in-ltr": "fade-in-ltr 0.5s ease-out",
        "fade-in-rtl": "fade-in-rtl 0.5s ease-out",
      },
    },
  },
  plugins: [],
};
