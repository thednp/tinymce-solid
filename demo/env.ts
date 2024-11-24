/// <reference types="vite/client" />

interface ImportMetaEnv {
  MODE: "development" | "production" | string;
  BASE_URL: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
