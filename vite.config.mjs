import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [
    react({
      babel: {
        presets: [
          ["@babel/preset-env", { modules: false }],
          [
            "@babel/preset-react",
            {
              runtime: "classic",
              pragma: "Didact.createElement",
            },
          ],
        ],
      },
    }),
  ],
  esbuild: {
    loader: { ".js": "jsx" },
    jsxInject: `import Didact from "./react";`,
    jsxFactory: "Didact.createElement",
  },
});
