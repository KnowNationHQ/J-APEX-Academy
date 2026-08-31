import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          50: "#eefaf2",
          100: "#d6f2df",
          200: "#aee5bf",
          300: "#79d199",
          400: "#42b46f",
          500: "#1f9750",
          600: "#14793e",
          700: "#105f32",
          800: "#114c2b",
          900: "#0f3e24",
          950: "#062315",
        },
        gold: {
          50: "#fef8ec",
          100: "#fdedc9",
          200: "#fbd98f",
          300: "#f8c049",
          400: "#f3a821",
          500: "#e08a12",
          600: "#bd6c10",
          700: "#9a5014",
          800: "#7e4015",
          900: "#6b3516",
        },
        ink: {
          DEFAULT: "#0c1f17",
          soft: "#33463d",
          muted: "#64756c",
        },
      },
      fontFamily: {
        display: ["var(--font-display)", "system-ui", "sans-serif"],
        sans: ["var(--font-body)", "system-ui", "sans-serif"],
      },
      borderRadius: {
        xl: "0.875rem",
        "2xl": "1.25rem",
        "3xl": "1.75rem",
      },
      boxShadow: {
        soft: "0 1px 2px rgba(12,31,23,0.04), 0 8px 24px rgba(12,31,23,0.06)",
        lift: "0 4px 12px rgba(12,31,23,0.08), 0 16px 40px rgba(12,31,23,0.10)",
      },
      maxWidth: {
        container: "1200px",
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(12px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        "fade-up": "fade-up 0.5s ease-out both",
      },
    },
  },
  plugins: [],
};

export default config;
