import type { Linter } from "eslint";

const config: Linter.Config = {
    settings: {
        files: ["**/*.js", "**/*.jsx", "**/*.ts", "**/*.tsx"],
    },
    extends: ["airbnb-base", "airbnb-typescript/base", "prettier"],
    parserOptions: { project: "./tsconfig.json" },
    ignorePatterns: ["node_modules", "dist", "jest.config.ts", "*.spec.ts", "*.test.ts"],
    plugins: ["@typescript-eslint"],
    root: true,
    rules: {
        "@typescript-eslint/quotes": [
            "error",
            "double",
            { avoidEscape: true, allowTemplateLiterals: true },
        ],
        "@typescript-eslint/return-await": "off",
        "no-restricted-syntax": "off",
        "no-return-await": "off",
        "@typescript/return-await": "off",
        "consistent-return": "off",
        "no-restricted-globals": "off",
        "@typescript-eslint/indent": "off",
        "import/prefer-default-export": "off",
        "no-underscore-dangle": "off",
        "default-case": "off",
        "object-curly-newline": "off",
        "no-console": "off",
        "max-classes-per-file": "off",
        "class-methods-use-this": "off",
        "import/no-cycle": "off",
        "no-nested-ternary": "off",
        "no-promise-executor-return": "off",
        "no-await-in-loop": "off",
        "no-param-reassign": ["error", { props: false }],
        "no-continue": "off",
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
    },
};

export default config;
