/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      // ---------------- COLORS ----------------
      colors: {
        mainBlue: "#2c3e50",
        babyBlue: "#87ceeb",
        red: "#e04556",
        lightRed: "#5D4D5A",
        white: "#ffffff",
        gray: "#8D8E8F",
      },

      // ---------------- FONT SIZES ----------------
      fontSize: {
        xs: ["0.75rem", "1rem"], // 12px
        sm: ["0.875rem", "1.25rem"], // 14px
        base: ["1rem", "1.5rem"], // 16px
        lg: ["1.125rem", "1.75rem"], // 18px
        xl: ["1.25rem", "1.75rem"], // 20px
        "2xl": ["1.5rem", "2rem"], // 24px
        "3xl": ["1.875rem", "2.25rem"], // 30px
        "4xl": ["2.25rem", "2.5rem"], // 36px
        "5xl": ["3rem", "1"], // 48px
      },

      // ---------------- SCREENS (BREAKPOINTS) ----------------
      screens: {
        xs: "480px",
        sm: "576px",
        md: "768px",
        lg: "992px",
        xl: "1280px",
        "2xl": "1536px",
      },

      // ---------------- BORDER RADII ----------------
      borderRadius: {
        sm: "0.125rem",
        DEFAULT: "0.25rem",
        md: "0.375rem",
        lg: "0.5rem",
        xl: "0.75rem",
        "2xl": "1rem",
        full: "9999px",
      },

      // ---------------- CUSTOM BOX SHADOWS ----------------
      boxShadow: {
        light: "0 1px 3px rgba(0,0,0,0.1)",
        DEFAULT: "0 4px 6px rgba(0,0,0,0.1)",
        strong: "0 10px 15px rgba(0,0,0,0.2)",
      },
    },
  },
  plugins: [],
};
