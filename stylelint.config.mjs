/** @type {import('stylelint').Config} */
export default {
  extends: ["stylelint-config-standard-scss", "stylelint-prettier/recommended"],
  plugins: ["stylelint-prettier"],
  rules: {
    "selector-class-pattern": "^[a-z][a-zA-Z0-9]*$",
    "prettier/prettier": [true, { endOfLine: "lf" }],
  },
};
