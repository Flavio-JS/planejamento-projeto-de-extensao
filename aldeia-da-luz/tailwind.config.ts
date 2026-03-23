import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#254822",
          foreground: "#ffffff",
        },
        secondary: {
          DEFAULT: "#29193b",
          foreground: "#ffffff",
        },
        background: "#cbcbc8",
        foreground: "#010206",
        muted: "#50504e",
        card: "#ffffff",
        border: "#50504e",
      },
      fontFamily: {
        serif: ["Playfair Display", "Georgia", "serif"],
        sans: ["Inter", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;
