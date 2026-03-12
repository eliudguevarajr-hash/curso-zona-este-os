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
        paper: "#fffdf9",
        stone: "#e7dfd2",
        gold: {
          50: "#fbf5e9",
          100: "#f4e7c6",
          200: "#e8cf93",
          300: "#d9b564",
          400: "#c59a57",
          500: "#a97833",
          600: "#875d28",
          700: "#65441d",
          800: "#442d12",
          900: "#251708"
        },
        sage: {
          50: "#f2f6f1",
          100: "#dde9da",
          200: "#bbceb4",
          300: "#96b08d",
          400: "#76916d",
          500: "#5d7555",
          600: "#495d43",
          700: "#394835",
          800: "#293326",
          900: "#171d15"
        },
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
        soft: "0 18px 45px rgba(31, 42, 55, 0.08)",
        float: "0 24px 60px rgba(17, 32, 42, 0.14)"
      },
      fontFamily: {
        display: ["Georgia", "Times New Roman", "serif"],
        sans: ["ui-sans-serif", "system-ui", "sans-serif"]
      },
      backgroundImage: {
        "soft-grid":
          "linear-gradient(rgba(63,111,148,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(63,111,148,0.06) 1px, transparent 1px)",
        "brand-wash":
          "linear-gradient(135deg, rgba(17,32,42,0.98), rgba(40,72,96,0.94) 45%, rgba(63,111,148,0.88))",
        "sun-wash":
          "linear-gradient(135deg, rgba(251,245,233,0.96), rgba(244,231,198,0.78))"
      }
    },
  },
  plugins: [],
};

export default config;
