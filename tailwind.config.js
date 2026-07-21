/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{ts,tsx}",
  ],
  darkMode: "class",
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
        sm: "1.5rem",
        lg: "2rem",
      },
    },
    extend: {
      colors: {
        background: "#020617",
        foreground: "#e5e7eb",
        primary: "#38bdf8",
        border: "#1e293b",
        "muted-foreground": "#94a3b8",
      },
      keyframes: {
        meteor: {
          "0%": { transform: "translateX(0) translateY(0)", opacity: "1" },
          "100%": {
            transform: "translateX(120px) translateY(120px)",
            opacity: "0",
          },
        },
        "pulse-subtle": {
          "0%, 100%": { opacity: 0.5 },
          "50%": { opacity: 1 },
        },
      },
      animation: {
        meteor: "meteor 1.5s linear infinite",
        "pulse-subtle": "pulse-subtle 2s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
