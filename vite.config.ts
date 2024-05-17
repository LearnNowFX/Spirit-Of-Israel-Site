import path from "path";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { PAGES } from "./src/constants/pages.constants";
import { SiteMapGenerator } from "./plugins/sitemap-generator.plugin";
import { EnvironmentManager } from "./plugins/environment-manager.plugin";

export default defineConfig(() => {
  return {
    base: "./",
    define: {
      "process.env": {},
    },
    resolve: {
      alias: {
        src: path.resolve(__dirname, "./src"),
      },
    },
    server: {
      host: "localhost",
      port: 3000,
      open: true,
    },
    build: {
      sourcemap: true,
      outDir: "build",
    },
    plugins: [
      react({
        jsxImportSource: "@emotion/react",
        babel: {
          plugins: ["@emotion/babel-plugin"],
        },
      }),
      EnvironmentManager.loadFile(),
      EnvironmentManager.validate(),
      SiteMapGenerator.generate(process.env.VITE_DOMAIN_URL, PAGES),
    ],
  };
});
