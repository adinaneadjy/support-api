# Support API

![CI](https://github.com/adinaneadjy/support-api/actions/workflows/ci.yml/badge.svg)

---

## 1. Workflow Git

### Schéma du workflow

- `main` : branche protégée, PR obligatoire pour tout merge
- `feature/*` : nouvelles fonctionnalités
- `bugfix/*` : corrections de bugs
- `hotfix/*` : corrections urgentes

### Règles de protection de branche

- Merge uniquement via Pull Request
- Required checks : CI, tests unitaires, code quality
- Interdiction de push direct sur `main`

### Création d'une Pull Request

1. Créer une branche depuis `main` :
   ```bash
   git checkout -b feature/ma-fonctionnalité
   ```
