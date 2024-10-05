/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  
  theme: {
    extend: {
      fontFamily: {
        montserrat: ['Montserrat', 'sans-serif'],
        telegraf: ['Telegraf', 'sans-serif'], // Add Telegraf font
        alice: ['Alice', 'serif'],
        serif: ['Playfair Display', 'serif'],
        noto: ['"Noto Sans"', 'sans-serif'],
        poppins: ['Poppins', 'sans-serif'], // Add Poppins font
      },
      colors: {
        customBorder: '#396C64',  // Custom border color
        customText: '#81BAB1',    // Custom text color
        customBg: '#FFFFFF',      // Custom background color for text
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    },
  },
  plugins: [],
};
