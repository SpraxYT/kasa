# Kasa - Location immobilière

Application web de location immobilière développée avec React et Sass, utilisant Vite comme bundler. Ce projet est une refonte complète du site Kasa, leader de la location d'appartements entre particuliers en France.

## 🛠 Technologies Utilisées

- React 18
- React Router 6
- Sass
- Vite

## 🚀 Fonctionnalités Principales

### Système de Navigation
- Header avec logo et menu de navigation dynamique
- Footer avec logo et mention de copyright
- Gestion des routes avec React Router
- Page 404 personnalisée pour les routes inexistantes

### Page d'Accueil
- Bannière avec image de fond et texte d'accroche
- Grille de logements responsive
- Cards avec effet de superposition et transition au hover
- Chargement dynamique des données depuis logements.json

### Page À Propos
- Bannière spécifique avec image de montagne
- Sections collapsibles pour les informations
- Animation fluide à l'ouverture/fermeture
- Contenu structuré et accessible

### Page Logement
- Carrousel d'images avec :
  * Navigation circulaire
  * Flèches conditionnelles
  * Compteur de position
  * Adaptation responsive
- Informations du logement :
  * Titre et localisation
  * Tags dynamiques
  * Profil de l'hôte avec photo
  * Système de notation en étoiles
- Sections collapsibles :
  * Description détaillée
  * Liste des équipements

### Composants Réutilisables
- Layout : Structure commune à toutes les pages
- Banner : Bannière adaptative selon la page
- Card : Vignette de logement avec image et titre
- Collapse : Menu déroulant animé
- Tag : Étiquettes de caractéristiques
- Rating : Système d'étoiles de 1 à 5

### Gestion des Erreurs
- Validation des IDs de logement
- Redirection vers 404 si logement non trouvé
- Messages d'erreur explicites
- Retour facile à l'accueil

## 💻 Installation

1. Clonez le repository :
```bash
git clone [votre-repo]
cd [votre-repo]
```

2. Installez les dépendances :
```bash
npm install
```

3. Lancez le serveur de développement :
```bash
npm run dev
```

## 📝 Architecture du Projet

```
src/
├── components/     # Composants réutilisables
│   ├── Banner/      # Bannière avec image de fond
│   ├── Card/        # Vignette de logement
│   ├── CardContainer/ # Conteneur de vignettes
│   ├── Collapse/     # Menu déroulant
│   ├── Footer/      # Pied de page
│   ├── Header/      # En-tête avec navigation
│   ├── Layout/      # Structure principale
│   ├── Navigation/  # Menu de navigation
│   ├── Rating/      # Système d'étoiles
│   ├── Slideshow/   # Carrousel d'images
│   └── Tag/         # Étiquettes
├── pages/          # Pages de l'application
│   ├── About/       # Page À propos
│   ├── Home/        # Page d'accueil
│   ├── Logement/    # Page de détail
│   └── NotFound/    # Page 404
├── styles/         # Fichiers Sass
│   ├── _banner.scss
│   ├── _card.scss
│   ├── _collapse.scss
│   ├── _footer.scss
│   ├── _header.scss
│   ├── _logement.scss
│   ├── _mixins.scss
│   ├── _notfound.scss
│   ├── _rating.scss
│   ├── _slideshow.scss
│   ├── _tag.scss
│   ├── _variables.scss
│   └── main.scss
├── router/         # Configuration des routes
│   └── Router.jsx   # Définition des routes
├── assets/         # Images et ressources
└── logements.json # Données des logements
```

## 📱 Design Responsive

L'application s'adapte à tous les écrans avec trois breakpoints :

### Mobile (< 768px)
- Layout en colonne pour la page logement
- Réorganisation des informations hôte/rating
- Réduction de la taille des flèches du carrousel
- Ajustement des tailles de police

### Tablette (768px - 1024px)
- Adaptation des marges et du padding
- Ajustement des tailles d'images
- Optimisation de la grille de logements

### Desktop (> 1024px)
- Layout en deux colonnes pour la page logement
- Affichage optimal du carrousel
- Espacement maximal des éléments

## 🔄 Routes et Navigation

- `/` : Page d'accueil avec grille de logements
- `/about` : Page à propos avec sections collapsibles
- `/logement/:id` : Page détaillée d'un logement
- `*` : Page 404 avec redirection

## 🎨 Style et Design System

### Architecture SASS
- Organisation modulaire des styles
- Variables pour les couleurs et dimensions
- Mixins pour la réutilisation de code
- Nomenclature BEM pour les classes CSS

### Animations
- Transition fluide du carrousel
- Animation du menu collapse
- Effets de hover sur les cards
- Transitions de page

### Accessibilité
- Contraste des couleurs optimisé
- Navigation au clavier
- Alt text pour les images
- Structure HTML sémantique
