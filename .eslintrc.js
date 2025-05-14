// .eslintrc.js
  module.exports = {
    extends: [
      "next/core-web-vitals",
      "plugin:jsx-a11y/recommended",
      "prettier"
    ],
    plugins: [
      "jsx-a11y",
      "prettier"
    ],
    rules: {
      "prettier/prettier": "error",
      "jsx-a11y/anchor-is-valid": "error",
      "react/jsx-curly-brace-presence": ["error", { props: "never", children: "never" }],
      "react/self-closing-comp": ["error", { component: true, html: true }],
      "import/order": ["error", {
        "groups": ["builtin", "external", "internal", "parent", "sibling", "index"],
        "newlines-between": "always",
        "alphabetize": { "order": "asc", "caseInsensitive": true }
      }]
    }
  };
