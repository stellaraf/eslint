/** @type {import("eslint/lib/shared/types")} */
module.exports = {
  settings: {
    files: ["**/*.js", "**/*.jsx", "**/*.ts", "**/*.tsx"],
    "import/resolver": {
      typescript: {
        alwaysTryTypes: true,
        project: ["tsconfig.json", "package/tsconfig.json"],
      },
      node: {
        extensions: [".js", ".jsx", ".ts", ".tsx"],
      },
    },
    "import/parsers": {
      "@typescript-eslint/parser": [".ts", ".tsx"],
    },
  },

  parser: "@typescript-eslint/parser",
  extends: [
    "airbnb-base",
    "prettier",
    "plugin:@typescript-eslint/eslint-recommended",
    "plugin:@typescript-eslint/recommended",
  ],
  parserOptions: { project: "./tsconfig.json" },
  ignorePatterns: [
    "node_modules",
    "dist",
    "jest.config.ts",
    "*.spec.ts",
    "*.test.ts",
    "build.[jt]s",
  ],
  plugins: ["import", "@typescript-eslint"],
  root: true,
  overrides: [
    {
      files: ["*.ts", "*.tsx"],
      rules: {
        "no-undef": "off",
      },
    },
  ],
  rules: {
    "no-shadow": "off",
    "@typescript-eslint/ban-ts-comment": "off",
    "@typescript-eslint/indent": "off",
    "@typescript-eslint/no-inferrable-types": "off",
    "@typescript-eslint/no-shadow": "error",
    "@typescript-eslint/no-unnecessary-type-constraint": "off",
    "@typescript-eslint/quotes": [
      "error",
      "double",
      { avoidEscape: true, allowTemplateLiterals: true },
    ],
    "@typescript-eslint/return-await": "off",
    "@typescript/return-await": "off",
    "class-methods-use-this": "off",
    "consistent-return": "off",
    "default-case": "off",
    "import/extensions": [
      "error",
      "ignorePackages",
      {
        js: "never",
        jsx: "never",
        ts: "never",
        tsx: "never",
      },
    ],
    "import/no-cycle": "off",
    "import/no-extraneous-dependencies": [
      "error",
      { devDependencies: ["**/*.test.[jt]s", "**/*.spec.[jt]s", "build.[jt]s"] },
    ],
    "import/order": [
      "error",
      {
        groups: [
          "builtin",
          "external",
          "internal",
          "index",
          ["sibling", "parent"],
          "unknown",
          "type",
        ],
      },
    ],
    "import/prefer-default-export": "off",
    "max-classes-per-file": "off",
    "no-await-in-loop": "off",
    "no-console": "off",
    "no-continue": "off",
    "no-nested-ternary": "off",
    "no-param-reassign": ["error", { props: false }],
    "no-promise-executor-return": "off",
    "no-restricted-globals": "off",
    "no-restricted-syntax": "off",
    "no-return-await": "off",
    "no-underscore-dangle": "off",
    "object-curly-newline": "off",
  },
};
