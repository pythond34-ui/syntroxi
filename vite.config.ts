import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  plugins: [tailwindcss(), react()],
  resolve: {
    tsconfigPaths: true,
  },
  build: {
    cssCodeSplit: true,
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes("node_modules")) {
            if (id.includes("motion")) return "motion";
            if (id.includes("recharts")) return "recharts";
            if (id.includes("@radix-ui")) return "radix";
            if (id.includes("react-router-dom")) return "router";
            return "vendor";
          }
        },
      },
    },
  },
});
