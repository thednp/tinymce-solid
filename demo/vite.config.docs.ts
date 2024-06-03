import { defineConfig } from 'vite';
import solidPlugin from 'vite-plugin-solid';
import compression from 'vite-plugin-compression2';

export default defineConfig({
  base: '/',
  plugins: [
    compression(),
    solidPlugin(),
    {
      name: 'Replace env variables',
      transform(code, id) {
        if (id.includes('node_modules')) {
          return code;
        }
        return code
          .replace(/process\.env\.SSR/g, 'false')
          .replace(/process\.env\.DEV/g, 'true')
          .replace(/process\.env\.PROD/g, 'false')
          .replace(/process\.env\.NODE_ENV/g, '"development"')
          .replace(/import\.meta\.env\.SSR/g, 'false')
          .replace(/import\.meta\.env\.DEV/g, 'true')
          .replace(/import\.meta\.env\.PROD/g, 'false')
          .replace(/import\.meta\.env\.NODE_ENV/g, '"development"');
      },
    },
  ],
  server: {
    port: 3000,
  },
  build: {
    target: 'esnext',
    outDir: '../docs',
    emptyOutDir: true,
  },
});
