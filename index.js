/** @type {import("eslint/conf/eslint-all")} */
module.exports = {
    settings: {
        files: ["**/*.js", "**/*.jsx", "**/*.ts", "**/*.tsx"],
        "import/resolver": {
            node: {
                extensions: [".js", ".jsx", ".ts", ".tsx"],
            },
        },
        "import/parsers": {
            "@typescript-eslint/parser": [".ts", ".tsx"],
        },
        "import/resolver": {
            typescript: {
                alwaysTryTypes: true,
                project: ["tsconfig.json", "package/tsconfig.json"],
            },
            node: {
                project: ["tsconfig.json", "package/tsconfig.json"],
            },
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
        "@typescript-eslint/quotes": [
            "error",
            "double",
            { avoidEscape: true, allowTemplateLiterals: true },
        ],
        "import/no-extraneous-dependencies": [
            "error",
            { devDependencies: ["**/*.test.[jt]s", "**/*.spec.[jt]s", "build.[jt]s"] },
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
