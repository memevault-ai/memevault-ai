import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
    "./store/**/*.{ts,tsx}",
    "./hooks/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#06070b",
        foreground: "#f5f7fb",
        card: "#0e1118",
        border: "#1f2430",
        muted: "#8d97ab",
        accent: "#00d4ff",
        success: "#23c16b",
        warning: "#f59e0b",
        danger: "#ef4444",
      },
      boxShadow: {
        glow: "0 0 0 1px rgba(0,212,255,0.08), 0 12px 40px rgba(0,0,0,0.35)",
      },
      backgroundImage: {
        grid: "radial-gradient(circle at 1px 1px, rgba(255,255,255,0.05) 1px, transparent 0)",
      },
    },
  },
  plugins: [],
};

export default config;
