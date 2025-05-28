import { defineConfig } from "vitest/config";
import solid from "vite-plugin-solid";
import path from "node:path";

export default defineConfig({
  plugins: [solid()],
  resolve: {
    conditions: ["development", "browser"],
    alias: {
      "~": path.resolve(__dirname, "src"),
      "@": path.resolve(__dirname),
    },
  },
  publicDir: path.resolve(__dirname, "demo/public"),
  test: {
    globals: true,
    coverage: {
      provider: "istanbul",
      reporter: ["html", "text", "lcov"],
      enabled: true,
      include: ["src/**/*.{ts,tsx}"],
    },
    browser: {
      provider: 'preview', // or 'webdriverio'
      enabled: true,
      headless: false,
      instances: [
        { browser: 'chromium' }
      ]
      // enableUI: true
    },
  },
});
