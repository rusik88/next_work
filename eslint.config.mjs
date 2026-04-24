import { defineConfig } from "eslint/config";
import nextVitals from "eslint-config-next/core-web-vitals";
import nextTs from "eslint-config-next/typescript";
import prettier from "eslint-config-prettier";

export default defineConfig([
  ...nextVitals,
  ...nextTs,
  prettier,

  {
    files: ["**/*.{js,ts,jsx,tsx}"],

    rules: {
      // 🔹 База
      "no-console": ["warn", { allow: ["warn", "error"] }],
      "no-debugger": "warn",

      // 🔹 Стиль
      "semi": ["error", "always"],
      "quotes": ["error", "double"],
      "no-unexpected-multiline": "error",

      // 🔹 React / Next
      "react/react-in-jsx-scope": "off",
      "@next/next/no-img-element": "warn",

      // 🔹 Імпорти
      "import/order": [
        "warn",
        {
          groups: ["builtin", "external", "internal"],
          "newlines-between": "always",
        },
      ],

      // 🔹 TypeScript
      "@typescript-eslint/no-unused-vars": [
        "warn",
        { argsIgnorePattern: "^_" },
      ],

      "@typescript-eslint/consistent-type-imports": "warn",
    },

    ignores: [
      ".next/**",
      "out/**",
      "build/**",
      "node_modules/**",
      "next-env.d.ts",
    ],
  },
]);

//npm install -D eslint eslint-config-next @typescript-eslint/eslint-plugin @typescript-eslint/parser eslint-config-prettier eslint-plugin-import