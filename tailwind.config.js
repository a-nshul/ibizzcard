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
        alice: ['Alice', 'serif'],
        serif: ['Playfair Display', 'serif'],
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
