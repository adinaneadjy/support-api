module.exports = {
  env: {
    node: true,
    es2021: true,
    jest: true, // <-- ajoutez ceci
  },
  extends: ["eslint:recommended", "plugin:prettier/recommended"],
  parserOptions: {
    ecmaVersion: 12,
    sourceType: "module",
  },
  rules: {
    // vos règles ici
  },
};
