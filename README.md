Git : au-delà du versioning – Documentation du TP
Ce projet a été réalisé dans le cadre du TP “Git : au-delà du versioning”.
L’objectif principal est de mettre en place un workflow Git et GitHub professionnel, intégrant des règles de protection de branche, un pipeline CI/CD via GitHub Actions, et une API REST Node.js connectée à MongoDB pour servir de support technique.
Arborescence:
support-api/
├── src/
│ ├── models/
│ │ └── RequestType.js
│ ├── routes/
│ │ └── requestTypes.js
│ ├── config/
│ │ └── database.js
│ └── server.js
├── tests/
│ └── requestTypes.test.js
├── scripts/
│ └── seed.js
├── .github/
│ └── workflows/
│ └── ci.yml
├── .eslintrc.js
├── .prettierrc
├── package.json
└── README.md
Chaque dossier a un rôle précis :
-src/models/ : contient les schémas de données Mongoose.
-src/routes/ : définit les routes Express de l’API.
-src/config/ : configuration de la base de données MongoDB.
-scripts/ : script d’initialisation (seed.js).
-tests/ : tests unitaires Jest + Supertest.
-.github/workflows/ : configuration de l’intégration continue (CI/CD).

"C:\Users\aadra\Downloads\1.1.png"
Workflow Git
Création de branche :
git checkout -b feature/add-requesttype-model
Commits conventionnels :
1.Format : type: description
2.Exemple : feat: add RequestType model with validation
3.Création de Pull Request sur GitHub depuis la branche.
4.Exécution automatique des checks CI/CD sur la PR.
5.Merge dans main uniquement si tous les checks passent.
6.Suppression automatique de la branche après merge.
Exemple de types de commits :
-feat → nouvelle fonctionnalité
-fix → correction de bug
-test → ajout ou modification de tests
-chore → tâches de maintenance
"C:\Users\aadra\Downloads\1.2.png"

Protection de la branche main
Règles configurées
Sur GitHub → Settings → Branches → Branch protection rules, les options suivantes ont été activées :
✅ Require pull request before merging
✅ Require status checks to pass before merging
✅ Require branches to be up to date before merging
✅ Dismiss stale pull request approvals when new commits are pushed
❌ Block direct push to main

Pourquoi ces règles ?
Elles garantissent la qualité du code avant intégration.
Elles forcent la relecture via PR.
Elles empêchent les erreurs liées aux pushs directs.
Elles assurent que le code validé a passé tous les tests CI/CD.
"C:\Users\aadra\Downloads\1.3.png"
"C:\Users\aadra\Downloads\1.4.png"
Intégration continue (CI/CD)
Fichier .github/workflows/ci.yml
Deux jobs ont été mis en place :
1.Code Quality
Vérifie le formatage (Prettier)
Vérifie le linting (ESLint)
Échoue si des erreurs sont détectées
2.Tests
Lance MongoDB dans un conteneur
Installe les dépendances
Exécute les tests Jest
Vérifie une couverture ≥ 70 %
"C:\Users\aadra\Downloads\1.5.png"
Base de données MongoDB et API Express
Modèle RequestType
Exemple de schéma Mongoose :
js
const mongoose = require('mongoose');
const RequestTypeSchema = new mongoose.Schema({
code: { type: String, unique: true, required: true },
name: { type: String, required: true },
description: { type: String, required: true },
priority: { type: String, enum: ['low', 'medium', 'high', 'critical'], default: 'medium' },
category: { type: String, required: true },
estimatedResponseTime: Number,
isActive: { type: Boolean, default: true }
}, { timestamps: true });
module.exports = mongoose.model('RequestType', RequestTypeSchema);
Routes principales
GET /api/request-types → liste tous les types actifs
GET /api/request-types/:id → récupère un type précis
POST /api/request-types → crée un nouveau type
GET /health → renvoie { status: 'ok' }
"C:\Users\aadra\Downloads\1.6.png"
