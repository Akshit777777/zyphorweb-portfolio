import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./sections/**/*.{js,ts,jsx,tsx,mdx}",
    "./data/**/*.{js,ts,jsx,tsx,mdx}",
    "./utils/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        ocean: {
          50: "#ecf7ff",
          100: "#cfeeff",
          300: "#7dc9ef",
          500: "#19699f",
          700: "#0a3764",
          900: "#03162e"
        },
        mist: "#b8d3e6",
        navy: "#061a34",
        ink: "#020a16"
      },
      boxShadow: {
        glow: "0 0 34px rgba(125, 201, 239, 0.28)",
        luxury: "0 28px 100px rgba(0, 14, 32, 0.55)"
      },
      backgroundImage: {
        "radial-ocean": "radial-gradient(circle at 50% 0%, rgba(125, 201, 239, 0.26), transparent 34%)"
      },
      fontFamily: {
        sans: ["Inter", "Satoshi", "Poppins", "ui-sans-serif", "system-ui", "sans-serif"]
      }
    }
  },
  plugins: []
};

export default config;
