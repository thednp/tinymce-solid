// app.config.ts
import { defineConfig } from "@solidjs/start/config";
import compress from "vite-plugin-compression2";
import tsconfigPaths from "vite-tsconfig-paths";
import path from "path";
import { fileURLToPath } from "url";
var __filename = fileURLToPath(import.meta.url);
var __dirname = path.dirname(__filename);
var app_config_default = defineConfig({
  vite: {
    plugins: [tsconfigPaths({ root: "." }), compress()],
    resolve: {
      alias: {
        "~": path.resolve(__dirname, "src"),
        "@": path.resolve(__dirname, "..")
      }
    },
    routeDir: "docs",
    build: {
      outDir: path.join(__dirname, "..", "docs"),
      target: "es2020"
      // outDir: "../docs",
    },
    server: {
      fs: {
        allow: ["../node_modules"]
      }
    }
  }
});
export {
  app_config_default as default
};
