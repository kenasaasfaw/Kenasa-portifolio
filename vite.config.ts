import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
import { fileURLToPath } from "url";

// emulate __dirname
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default defineConfig(({ command }) => ({
  plugins: [react()],
  base: command === "serve" ? "/" : "./",
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
    },
  },
}));
