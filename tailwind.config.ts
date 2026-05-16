import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        purple: {
          DEFAULT: "#7C3BED",
          deep: "#5B22B8",
          tint: "#F2EBFF",
          soft: "#EADBFF",
          light: "#C9B3FF",
        },
        ink: {
          DEFAULT: "#110B1F",
          2: "#2A2433",
          3: "#5A5363",
        },
        muted: "#8A8392",
        bg: {
          DEFAULT: "#FBFAF7",
          2: "#FFFFFF",
          dark: "#0E0918",
        },
        line: {
          DEFAULT: "#ECE7DD",
          2: "#E2DCD0",
          dark: "#221A30",
        },
        "accent-cream": "#F4EFE3",
        success: "#1F8A5B",
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        display: ["var(--font-plus-jakarta)", "system-ui", "sans-serif"],
        mono: ["var(--font-jetbrains)", "ui-monospace", "monospace"],
      },
    },
  },
  plugins: [],
};

export default config;
