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

![image alt](https://github.com/adinaneadjy/support-api/blob/c0067aaaef56660229bc4e0580cb18f4f4277afc/1.1.png)


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

![image alt](https://github.com/adinaneadjy/support-api/blob/7cfd0050fd1997474b0d0ebed85861867e1ffc6a/1.2.png)



