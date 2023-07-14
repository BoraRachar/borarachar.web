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
               gray:{
                  "500":"#4d4a4f",
                  "300": "#949295"
               },
            }

         },
        boxShadow: {
            "card-custom": "17px 18px 0px 3px rgba(165,134,255,1)",
         },
      },
   },
   plugins: [],
};
