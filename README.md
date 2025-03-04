# tp-api

## Installation et Configuration

### Cloner le projet

```sh
git clone git@github.com:louis-stintzy/tp-api.git
cd tp-api
```

### Installer les dépendances

```sh
npm install
```

### Créer la base de données PostgreSQL

```sh
sudo -u postgres psql
CREATE USER tp WITH PASSWORD 'tp';
CREATE DATABASE tp OWNER tp;
```

### Configuration des variables d'environnement

```sh
CORS_ORIGIN='*'
PORT=3200
PG_URL='postgres://tp:tp@localhost/tp'
```

### Tester la connexion à la base de données et synchroniser la base de données

Voir Readme dans le dossier database

### Démarrer le serveur

```sh
npm run dev
```

## Route disponible

POST /auth/register : Inscription d’un utilisateur
