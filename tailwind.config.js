/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#48358C',
        "dark-primary": '#131025',
        secondary: '#F27405',
        neutral: '#F2F2F2',
      },
    },
  },
  plugins: [],
}
