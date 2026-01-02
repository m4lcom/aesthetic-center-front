const { fontFamily } = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-sans)", ...fontFamily.sans],
      },
      keyframes: {
        shimmer: {
          "100%": { transform: "translateX(100%) translateY(0) rotate(35deg)" },
        },
      },
      // No te olvides de declarar la animación aquí también
      animation: {
        shimmer: "shimmer 1.5s ease-in-out",
      },
      colors: {
        brand: {
          50: "#fff1f2",
          100: "#ffe4e6",
          200: "#fecdd3",
          300: "#fda4af",
          400: "#fb7185",
          500: "#f43f5e",
          600: "#e11d48",
          700: "#be123c",
          800: "#9f1239",
          900: "#881337",
        },
        secondary: {
          50: "#f1f7fb",
          100: "#dceefb",
          200: "#b6e0fe",
          300: "#84c5f4",
          400: "#62b0e8",
          500: "#457B9D",
          600: "#1D3557",
          700: "#15304c",
          800: "#0d2238",
          900: "#091a2b",
        },
        neutral: {
          50: "#f9fafb",
          100: "#f3f4f6",
          200: "#e5e7eb",
          300: "#d1d5db",
          400: "#9ca3af",
          500: "#6b7280",
          600: "#4b5563",
          700: "#374151",
          800: "#1f2937",
          900: "#111827",
        },
        accent: {
          DEFAULT: "#d4af37",
          light: "#f5e6a7",
          dark: "#b8860b",
        },
      },
    },
  },
  plugins: [],
};
