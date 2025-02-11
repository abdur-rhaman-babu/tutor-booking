/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    container: {
      padding: '4rem',
    },
    extend: {
      colors: {
        background: "#F3F8FF",  
        text: "#1E293B",        
        primary: "#3B82F6",     
        secondary: "#FACC15",   
        accent: "#22C55E",
      },
    },
  },
  plugins: [require("daisyui")],
};
