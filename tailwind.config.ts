import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      fontFamily: {
        primary: ["Inter", "sans-serif"],
        secondary: ["Playfair Display", "serif"],
        tertiary: ["Raleway", "sans-serif"],
      },
      textShadow: {
        DEFAULT: "2px 2px 6px rgba(255, 255, 255, 0.3)",
        strong: "3px 3px 10px rgba(255, 255, 255, 0.5)",
        glow: "0px 0px 12px rgba(255, 200, 0, 0.9)", // Golden glow
      },
      boxShadow: {
        glow: "0 0 15px rgba(255, 200, 0, 0.7)", // Gold glow effect
        deep: "0 5px 15px rgba(255, 255, 255, 0.5)", // White deep shadow
      },
    },
  },
  plugins: [],
} satisfies Config;


