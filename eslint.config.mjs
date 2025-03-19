import globals from "globals";
import pluginJs from "@eslint/js";
import eslintConfigPrettier from "eslint-config-prettier/flat";
import { defineConfig, globalIgnores } from "eslint/config";

/** @type {import('eslint').Linter.Config[]} */
export default defineConfig([
  globalIgnores(["migrations", "seeders", "node_modules"]),
  { files: ["**/*.js"], languageOptions: { sourceType: "commonjs" } },
  { languageOptions: { globals: globals.node } },
  pluginJs.configs.recommended,
  eslintConfigPrettier,
]);
