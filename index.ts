import { configureVueProject, defineConfigWithVueTs, vueTsConfigs } from "@vue/eslint-config-typescript";
import pluginVue from "eslint-plugin-vue";
import stylistic from "@stylistic/eslint-plugin";
import perfectionist from "eslint-plugin-perfectionist";

configureVueProject({
  tsSyntaxInTemplates: true,
  scriptLangs: ["ts"],
});

export default defineConfigWithVueTs(
  {
    ignores: ["node_modules/**", "dist/**"],
  },
  pluginVue.configs["flat/strongly-recommended"],
  vueTsConfigs.recommendedTypeChecked,
  {
    rules: {
      "@typescript-eslint/no-explicit-any": "warn",
      "@typescript-eslint/no-empty-object-type": ["error",
        {
          allowInterfaces: "with-single-extends",
        },
      ],
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
      "vue/mustache-interpolation-spacing": ["error", "always"],
    },
  },
  {
    plugins: { "@stylistic": stylistic },
    rules: {
      "@stylistic/indent": ["error", 2, {
        "SwitchCase": 1,
      }],
      "@stylistic/semi": ["error", "always"],
      "@stylistic/quotes": ["error", "double"],
      "@stylistic/linebreak-style": ["error", "unix"],
      "@stylistic/eol-last": ["error", "always"],
      "@stylistic/object-curly-spacing": [2, "always"],
      "@stylistic/max-len": ["error", {
        "code": 120,
        "tabWidth": 2,
      }],
      "@stylistic/comma-dangle": ["error", "always-multiline"],
      "@stylistic/member-delimiter-style": ["error"],
      "@stylistic/type-generic-spacing": ["error"],
      "@stylistic/type-annotation-spacing": ["error"],
      "@stylistic/no-multiple-empty-lines": ["error", { "max": 1, "maxEOF": 0 }],
      "@stylistic/padding-line-between-statements": [
        "error",
        { blankLine: "always", prev: "*", next: "if" },
        { blankLine: "always", prev: "*", next: "return" },
        { blankLine: "always", prev: "*", next: "export" },
        { blankLine: "any", prev: "export", next: "export" },
      ],
    },
  },
  {
      plugins: {
        perfectionist,
      },
      rules: {
        "perfectionist/sort-imports": ["error", {
          type: "line-length",
        }],
      },
    },
);
