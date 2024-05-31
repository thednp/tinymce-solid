import { defineConfig } from "@solidjs/start/config";
import compress from "vite-plugin-compression2";
import tsconfigPaths from "vite-tsconfig-paths";
import path from "path";
import { fileURLToPath } from "url";
import { monorepoRoot } from "./loadEnv";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default defineConfig({
  vite: {
    envDir: monorepoRoot,
    plugins: [tsconfigPaths({ root: "." }), compress()],
    resolve: {
      alias: {
        "~": path.resolve(__dirname, "src"),
        "@": path.resolve(__dirname, ".."),
      },
    },
    routeDir: "../docs",
    build: {
      outDir: path.join(__dirname, "..", "docs"),
      target: "es2020",
      // outDir: "../docs",
    },
    server: {
      fs: {
        allow: ["../node_modules"],
      },
    },
  },
});
