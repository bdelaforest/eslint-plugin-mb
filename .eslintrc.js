"use strict";

const baseRules = require("eslint-config-lydell");

module.exports = {
  root: true,
  plugins: ["import", "jest", "prettier"],
  env: { es6: true, node: true },
  rules: Object.assign({}, baseRules({ import: true }), {
    "import/newline-after-import": "error",
    "no-console": "error",
    "prefer-template": "off",
    "prettier/prettier": "error",
  }),
  overrides: [
    {
      files: ["*.test.js"],
      env: { jest: true },
      rules: baseRules({ builtin: false, jest: true }),
    },
  ],
};
