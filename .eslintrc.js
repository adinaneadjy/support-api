module.exports = {
  env: {
    node: true,      // On est sur Node.js
    es2021: true      // Permet syntaxe ES2021 
  },
  extends: "eslint:recommended", // règles recommandées par ESLint
  parserOptions: {
    ecmaVersion: 12,   // ES2021
    sourceType: "module" // pour utiliser import/export
  },
  rules: {
    // Ici j'ajouter mes règles 
   
  }
};
