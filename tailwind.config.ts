import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./data/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: "#1f2a37",
        mist: "#eef3f7",
        line: "#d6dde6",
        brand: {
          50: "#f2f6fb",
          100: "#dbe6f0",
          200: "#b1c7da",
          300: "#86a8c4",
          400: "#5d89ad",
          500: "#3f6f94",
          600: "#335b7a",
          700: "#284860",
          800: "#1d3445",
          900: "#11202a"
        },
        sand: "#f8f6f1",
        success: "#2f6f52",
        warning: "#9b5d1a"
      },
      boxShadow: {
        soft: "0 18px 45px rgba(31, 42, 55, 0.08)"
      },
      fontFamily: {
        display: ["Georgia", "Times New Roman", "serif"],
        sans: ["ui-sans-serif", "system-ui", "sans-serif"]
      },
      backgroundImage: {
        "soft-grid":
          "linear-gradient(rgba(63,111,148,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(63,111,148,0.06) 1px, transparent 1px)"
      }
    },
  },
  plugins: [],
};

export default config;
