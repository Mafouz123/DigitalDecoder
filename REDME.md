# Décoder le digital

Blog francophone consacré à la transformation digitale, à l’intelligence artificielle, au SEO et à l’expérience utilisateur. Le site est construit avec React, TypeScript et Vite; ses pages sont rendues côté navigateur et publiées comme fichiers statiques sur GitHub Pages.

**Site GitHub Pages :** https://mafouz123.github.io/DigitalDecoder/

## Prérequis

- Node.js 20 ou plus récent
- npm
- Git

## Installation

Depuis la racine du dépôt :

```powershell
npm ci
```

`npm ci` installe les versions verrouillées dans `package-lock.json`.

## Développement local

Pour lancer le frontend Vite :

```powershell
npm run dev:client
```

Ouvrir ensuite http://localhost:5000.

Pour lancer l’application via le serveur Express et Vite en middleware :

```powershell
npx tsx server/index.ts
```

Le serveur écoute sur le port `5000` par défaut. Le site ne dépend actuellement d’aucune API métier; le formulaire de contact prépare un message WhatsApp côté navigateur.

## Vérification et build

Contrôle TypeScript :

```powershell
npm run check
```

Build de production :

```powershell
npm run build
```

Le build écrit les fichiers frontend dans `dist/public` et le bundle Express dans `dist/index.cjs`. GitHub Pages ne publie que `dist/public`.

## Prévisualiser le build GitHub Pages

Le dépôt Pages utilise le sous-chemin `/DigitalDecoder/`. Pour simuler localement le build et les routes profondes dans PowerShell :

```powershell
$env:VITE_BASE_PATH = "/DigitalDecoder/"
npm run build
Copy-Item dist/public/index.html dist/public/404.html -Force
npx vite preview --host 127.0.0.1 --port 4173
```

Ouvrir http://127.0.0.1:4173/DigitalDecoder/ et tester aussi une route directe, par exemple http://127.0.0.1:4173/DigitalDecoder/articles/trusted-young-talent. Arrêter le serveur avec `Ctrl+C`. Pour revenir au build local à la racine, retirer la variable de l’environnement PowerShell :

```powershell
Remove-Item Env:VITE_BASE_PATH
```

## Déploiement GitHub Pages

Le workflow [`.github/workflows/deploy-pages.yml`](.github/workflows/deploy-pages.yml) s’exécute sur chaque push vers `main` ou à la demande depuis l’onglet **Actions**. Il installe les dépendances, contrôle les types, construit le site, ajoute `404.html`, puis publie `dist/public`.

Pour activer Pages dans le dépôt GitHub :

1. Ouvrir **Settings → Pages**.
2. Choisir **GitHub Actions** comme source de déploiement.
3. Pousser les changements sur `main` :

```powershell
git push origin main
```

Le workflow récupère automatiquement le sous-chemin Pages avec `actions/configure-pages`; aucun secret de déploiement personnalisé n’est requis.

## Routes et intégrations

Les routes du site sont déclarées dans `client/src/App.tsx` et gérées avec Wouter. Le workflow crée une copie de `index.html` en `404.html` pour que les routes profondes fonctionnent après un rechargement sur GitHub Pages.

Les liens de contact et de partage ouvrent des services externes comme WhatsApp et LinkedIn. GitHub Pages héberge uniquement des fichiers statiques : il ne peut pas exécuter Express, traiter des API côté serveur ou héberger une base de données. Toute future fonctionnalité backend devra être hébergée séparément et appelée depuis le site.

## Organisation du projet

- `client/src/pages/` : pages, articles et tutoriels
- `client/src/components/` : composants d’interface
- `client/public/` : fichiers statiques publics
- `attached_assets/` : images et ressources importées par le frontend
- `server/` : serveur Express utilisé pour le développement et le bundle serveur
- `shared/` : types et schémas partagés
- `.github/workflows/` : automatisation GitHub Actions
