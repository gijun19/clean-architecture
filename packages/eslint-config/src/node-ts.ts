"use strict";

module.exports = {
  plugins: ["@typescript-eslint"],
  env: {
    node: true,
    es6: true,
    mocha: true,
  },
  parserOptions: {
    ecmaVersion: 2019,
    sourceType: "module",
  },
  overrides: [
    {
      files: ["*.ts"],
      parser: "@typescript-eslint/parser",
      extends: [
        "plugin:@typescript-eslint/eslint-recommended",
        "plugin:@typescript-eslint/recommended",
        "prettier/@typescript-eslint",
        "plugin:prettier/recommended",
      ],
      rules: {
        "@typescript-eslint/no-explicit-any": 1,
        "@typescript-eslint/no-unused-vars": "warn",
      },
    },
  ],
};
