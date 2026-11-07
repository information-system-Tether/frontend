/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "lightgreen-adarkgreen": "var(--lightgreen-adarkgreen)",
        "lightgreen-acolor": "var(--lightgreen-acolor)",
        "lightgreen-alightgreen": "var(--lightgreen-alightgreen)",
        "lightgreen-alightorange": "var(--lightgreen-alightorange)",
        "lightgreen-adarkorange": "var(--lightgreen-adarkorange)",
        "lightgreen-ablack": "var(--lightgreen-ablack)",
      },
      fontFamily: {
        // Шрифты для Material 3
        "m3-headline-large": ["Roboto", "sans-serif"],
        "m3-body-large": ["Roboto", "sans-serif"],
        "m3-body-small": ["Roboto", "sans-serif"],
        "m3-label-large": ["Roboto", "sans-serif"],
        // Дополнительные шрифты
        logo: ["'Akaya Kanadaka'", "cursive"], 
        inter: ["Inter", "sans-serif"],      
      },
      borderRadius: {
        'shape-large': 'var(--shape-corner-large)',
      }
    },
  },
  plugins: [],
};