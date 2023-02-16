/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
  },
  daisyui: {
    themes: [
      {
        light: {        
"primary": "#F0681D",
// "primary": "#785B4A",
"secondary": "#2B35BC",
"accent": "#FFEDD5",
"neutral": "#F3F4F6",
"base-100": "#ffffff",
"info": "#98A8DD",
"success": "#1BBB70",
"warning": "#DF7E07",
"error": "#FA5C5C",
        },
      },
      {
      },
    ],
  },
  plugins: [require("daisyui")],
}