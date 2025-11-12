🚀 Git : au-delà du versioning – Documentation du TP

Ce projet a été réalisé dans le cadre du TP “Git : au-delà du versioning”.
L’objectif principal est de mettre en place un workflow Git et GitHub professionnel, intégrant :

Des règles de protection de branche

Un pipeline CI/CD via GitHub Actions

Une API REST Node.js connectée à MongoDB pour servir de support technique
📁 Arborescence du projet

support-api/
├── src/
│   ├── models/
│   │   └── RequestType.js
│   ├── routes/
│   │   └── requestTypes.js
│   ├── config/
│   │   └── database.js
│   └── server.js
├── tests/
│   └── requestTypes.test.js
├── scripts/
│   └── seed.js
├── .github/
│   └── workflows/
│       └── ci.yml
├── .eslintrc.js
├── .prettierrc
├── package.json
└── README.md
🔍 Description des dossiers

src/models/ → Schémas de données Mongoose

src/routes/ → Routes Express de l’API

src/config/ → Configuration de la base de données MongoDB

scripts/ → Script d’initialisation (seed.js)

tests/ → Tests unitaires (Jest + Supertest)

.github/workflows/ → Configuration CI/CD

![image alt](https://github.com/adinaneadjy/support-api/blob/c0067aaaef56660229bc4e0580cb18f4f4277afc/1.1.png)

🌿 Workflow Git
Création de branche
git checkout -b feature/add-requesttype-model

🧱 Commits conventionnels

Format :

type: description


Exemple :

feat: add RequestType model with validation

🚀 Étapes du workflow

Création de la branche

Commit selon la convention

Pull Request sur GitHub

Exécution automatique du pipeline CI/CD

Merge dans main seulement si les checks passent

Suppression automatique de la branche après merge

📋 Types de commits

| Type      | Description                    |
| --------- | ------------------------------ |
| **feat**  | Nouvelle fonctionnalité        |
| **fix**   | Correction de bug              |
| **test**  | Ajout ou modification de tests |
| **chore** | Tâches de maintenance          |


![image alt](https://github.com/adinaneadjy/support-api/blob/7cfd0050fd1997474b0d0ebed85861867e1ffc6a/1.2.png)

🛡️ Protection de la branche main

Configuration via Settings → Branches → Branch protection rules :

✅ Require pull request before merging
✅ Require status checks to pass before merging
✅ Require branches to be up to date before merging
✅ Dismiss stale pull request approvals when new commits are pushed
❌ Block direct push to main

🎯 Pourquoi ces règles ?

Garantir la qualité du code avant intégration

Forcer la relecture via Pull Request

Empêcher les erreurs de push direct

Assurer que le code validé passe tous les tests CI/CD
![image alt](https://github.com/adinaneadjy/support-api/blob/0526b44e9f1ff55309c3b23f82370fbf37917219/1.3.png)

![image alt](https://github.com/adinaneadjy/support-api/blob/0526b44e9f1ff55309c3b23f82370fbf37917219/1.4.png)
⚙️ Intégration Continue (CI/CD)
📄 Fichier : .github/workflows/ci.yml

Deux jobs sont définis :

1️⃣ Code Quality

Vérifie le formatage (Prettier)

Vérifie le linting (ESLint)

Échoue si des erreurs sont détectées

2️⃣ Tests

Lance MongoDB dans un conteneur

Installe les dépendances

Exécute les tests Jest

Vérifie une couverture ≥ 70 %

![image alt](https://github.com/adinaneadjy/support-api/blob/0526b44e9f1ff55309c3b23f82370fbf37917219/1.5.png)

🗃️ Base de données MongoDB & API Express
📌 Modèle RequestType

Exemple de schéma Mongoose :
const mongoose = require('mongoose');

const RequestTypeSchema = new mongoose.Schema({
  code: { type: String, unique: true, required: true },
  name: { type: String, required: true },
  description: { type: String, required: true },
  priority: { 
    type: String, 
    enum: ['low', 'medium', 'high', 'critical'], 
    default: 'medium' 
  },
  category: { type: String, required: true },
  estimatedResponseTime: Number,
  isActive: { type: Boolean, default: true }
}, { timestamps: true });

module.exports = mongoose.model('RequestType', RequestTypeSchema);

| Méthode  | Endpoint                 | Description                                    |
| -------- | ------------------------ | ---------------------------------------------- |
| **GET**  | `/api/request-types`     | Liste tous les types actifs                    |
| **GET**  | `/api/request-types/:id` | Récupère un type précis                        |
| **POST** | `/api/request-types`     | Crée un nouveau type                           |
| **GET**  | `/health`                | Vérifie l’état du service (`{ status: 'ok' }`) |


![image alt](https://github.com/adinaneadjy/support-api/blob/0526b44e9f1ff55309c3b23f82370fbf37917219/1.6.png)

