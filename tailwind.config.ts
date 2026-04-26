import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        blacksite: {
          bg: "#050505",
          panel: "#0d0c0b",
          line: "#272220",
          text: "#f1ede6",
          muted: "#a8a098",
          red: "#b3263a",
          redSoft: "#e05266",
        },
      },
      fontFamily: {
        sans: ["var(--font-geist-sans)", "Arial", "sans-serif"],
        mono: [
          "var(--font-geist-mono)",
          "ui-monospace",
          "SFMono-Regular",
          "Consolas",
          "monospace",
        ],
      },
      boxShadow: {
        dossier: "0 18px 70px rgba(0, 0, 0, 0.45)",
        redline: "0 0 28px rgba(179, 38, 58, 0.14)",
      },
    },
  },
  plugins: [],
};

export default config;
