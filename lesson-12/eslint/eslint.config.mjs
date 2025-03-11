import globals from "globals";
import pluginJs from "@eslint/js";
import stylisticJs from '@stylistic/eslint-plugin-js'

/** @type {import('eslint').Linter.Config[]} */
export default [
  {files: ['**/**.js','**/**.mjs']},
  {languageOptions: { globals: globals.browser }},
  pluginJs.configs.recommended,
  {
    plugins: {
      '@stylistic/js': stylisticJs
    }
  },
  {
    rules:{
      "@stylistic/js/indent": ["error", 2],
      "@stylistic/js/space-before-blocks": ["error", "always"],
      "@stylistic/js/space-before-function-paren": ["error", "never"],
      "@stylistic/js/space-infix-ops": "error",
      "@stylistic/js/quotes": ["error", "single"],
      "@stylistic/js/semi": ["error", "always"],
      "@stylistic/js/comma-dangle": ["error", "always-multiline"],
      "@stylistic/js/array-bracket-spacing": ["error", "never"],
      "@stylistic/js/object-curly-spacing": ["error", "never"],
      "@stylistic/js/arrow-parens": ["error", "always"],
      "@stylistic/js/space-in-parens": ["error", "never"],
      "@stylistic/js/max-len": ["error", { "code": 100 }],
      "@stylistic/js/no-multiple-empty-lines": ["error", { "max": 1 }],
      "@stylistic/js/newline-per-chained-call": ["error", { "ignoreChainWithDepth": 2 }],
      "@stylistic/js/padded-blocks": ["error", "never"],
      "@stylistic/js/lines-between-class-members": ["error", "always"],
      "@stylistic/js/no-trailing-spaces": "error",
      "no-unused-vars": 0
    }
  }
];