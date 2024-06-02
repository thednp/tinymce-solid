import { defineConfig } from "@solidjs/start/config";
import compress from "vite-plugin-compression2";
import tsconfigPaths from "vite-tsconfig-paths";
import path from "path";
import { fileURLToPath } from "url";
import { monorepoRoot } from "./loadEnv";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default defineConfig({
  server: {
    output: { dir: "../docs", /*publicDir: "../docs/public"*/ },
  },
  vite: {
    // ssr: {
    //   external: ["tinymce"],
    // },
    // optimizeDeps: {
    //   include: ['tinymce'],
    // },
    envDir: monorepoRoot,
    plugins: [tsconfigPaths({ root: "." }), compress()],
    resolve: {
      alias: {
        "~": path.resolve(__dirname, "src"),
        "@": path.resolve(__dirname, ".."),
      },
    },
    build: {
      target: "es2020",
    },
    server: {
      fs: {
        allow: ["../node_modules"/*, "../../node_modules"*/],
      },
    },

  },
});
