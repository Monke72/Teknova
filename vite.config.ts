import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { fileURLToPath } from "url";
import path, { dirname } from "path";
// import path from "path";

const __filePath = fileURLToPath(import.meta.url);
const __dirname = dirname(__filePath);

export default defineConfig({
  plugins: [react()],
  base: "/",
  resolve: {
    alias: {
      "@shared": path.resolve(__dirname, "src/shared/"),
      "@widgets": path.resolve(__dirname, "src/widgets/"),
      "@app": path.resolve(__dirname, "src/app/"),
      "@features": path.resolve(__dirname, "src/features/"),
      "@pages": path.resolve(__dirname, "src/pages/"),
      "@entities": path.resolve(__dirname, "src/entities/"),
    },
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `
          @use "@shared/styles/mixins" as *;
        `,
      },
    },
  },
});
