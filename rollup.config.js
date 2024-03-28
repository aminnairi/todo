import { defineConfig } from "rollup";
import terser from "@rollup/plugin-terser";

export default defineConfig({
  input: "src/index.js",
  plugins: [
    terser()
  ],
  external: [
    "readline/promises",
    "process",
    "crypto"
  ],
  output: {
    file: "dist/index.js",
    format: "esm"
  }
});