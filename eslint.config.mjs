import globals from "globals";
import pluginJs from "@eslint/js";
import tseslint from "typescript-eslint";
import pluginReact from "eslint-plugin-react";
import eslintConfigPrettier from "eslint-config-prettier";
import i18next from "eslint-plugin-i18next";
import storybook from "eslint-plugin-storybook";

/** @type {import('eslint').Linter.Config[]} */
export default [
  { files: ["**/*.{js,mjs,cjs,ts,jsx,tsx}"] },
  { languageOptions: { globals: globals.browser } },
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  pluginReact.configs.flat.recommended,
  eslintConfigPrettier,
  i18next.configs["flat/recommended"],
  ...storybook.configs["flat/recommended"],
  {
    ignores: ["build/**/*", "node_modules/**/*"],
    settings: {
      react: {
        version: "detect",
      },
    },
    rules: {
      "react/react-in-jsx-scope": "off",
      "@typescript-eslint/no-unused-vars": [
        "error",
        {
          args: "all",
          argsIgnorePattern: "^_",
          caughtErrors: "all",
          caughtErrorsIgnorePattern: "^_",
          destructuredArrayIgnorePattern: "^_",
          varsIgnorePattern: "^_",
          ignoreRestSiblings: true,
        },
      ],
      "i18next/no-literal-string": [
        "error",
        {
          markupOnly: true,
          ignoreAttribute: ["data-testid", "to"],
        },
      ],
    },
  },
  {
    files: ["**/*.test.{ts,tsx}", "**/*.stories.{ts,tsx}"],
    rules: {
      "i18next/no-literal-string": "off",
    },
  },
];
