import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { fileURLToPath } from "url";
import path, { dirname } from "path";

const __filePath = fileURLToPath(import.meta.url);
const __dirname = dirname(__filePath);

export default defineConfig({
  plugins: [react()],
  base: "/",
  resolve: {
    alias: {
      "@shared": path.resolve(__dirname, "src/shared"),
      "@widgets": path.resolve(__dirname, "src/widgets"),
      "@app": path.resolve(__dirname, "src/app"),
      "@features": path.resolve(__dirname, "src/features"),
      "@pages": path.resolve(__dirname, "src/pages"),
      "@entities": path.resolve(__dirname, "src/entities"),
      "@assets": path.resolve(__dirname, "src/shared/assets"), // 🔥 отдельный алиас
      "@styles": path.resolve(__dirname, "src/shared/styles"), // 🔥 отдельный алиас
    },
  },
  css: {
    preprocessorOptions: {
      scss: {
        // Позволяет использовать @use / @import с алиасами
        includePaths: [
          path.resolve(__dirname, "src"),
          path.resolve(__dirname, "src/shared"),
          path.resolve(__dirname, "src/shared/assets"),
          path.resolve(__dirname, "src/shared/styles"),
        ],
        additionalData: `@use "@styles/mixins" as *;`, // автоматически подключает mixins
      },
    },
  },
});
