import jsConfig from "@eslint/js";
import pluginVue from "eslint-plugin-vue";
import { config, plugin, configs as tsConfigs } from "typescript-eslint";

export default config(
  {
    ignores: [
      "dist/**",
      "node_modules/**",
      "!src/.vuepress/**",
      ".vuepress/public/**",
    ],
  },

  {
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "module",
      parserOptions: {
        extraFileExtensions: [".vue"],
        projectService: true,
        tsconfigRootDir: import.meta.dirname,
      },
    },
  },

  jsConfig.configs.recommended,
  ...pluginVue.configs["flat/recommended"],
  ...tsConfigs.strictTypeChecked,
  ...tsConfigs.stylisticTypeChecked,

  {
    files: ["**/*.ts", "**/*.cts", "**/*.mts"],
    plugins: {
      "@typescript-eslint": plugin,
    },
  },

  {
    files: ["**/*.{js,cjs,mjs,jsx}"],
    ...tsConfigs.disableTypeChecked,
  },
);
