# TEST Farmitoo

Ceci est le repository du résultat de mon test technique de Farmitoo.

## Installation

1. Cloner le repository GitHub :
```
    https://github.com/mariebosq/testfarmitoo.git
```
2. Télécharger et installer les dépendances backend du projet avec [Composer](https://getcomposer.org/download/) :
```
    composer install
```
4. Télécharger et installer les dépendances frontend du projets [Npm](https://www.npmjs.com/get-npm) and [Yarn](https://yarnpkg.com/) :
```
    yarn install
```
5. Compiler les assets (grâce à Webpack Encore) avec [Yarn](https://yarnpkg.com/) :
```
    yarn run encore dev
```

## Le cas

L'objectif est d'afficher une page "panier".
Le rendu attendu est celui du fichier assets/maquette.png (une version simplifée de notre page panier).

> La page s'affiche pour tous les écrans de 1920x à 375px
> J'ai choisis de gérer l'intégration avec du bootstrap car la maquette s'y prêtait


#### Info TVA
Le business modèle de Farmitoo implique des règles de calculs de la TVA complexes.
Dans notre cas, il est simplifié et le taux de TVA à appliquer est de 20% dans tous les cas.

> J'ai choisis de le gérer en JavaScript pour que la TVA s'affiche sans recharger la page quelque soit les modifications apportées au panier

#### Info frais de port
Les partenaires de Farmitoo ont des règles de calculs de frais de port très différentes.
Dans notre cas, elles sont simplifiées et de 20€ par tranche de 3 produits entamée (ex: 20€ pour 3 produits et 40€ pour 4 produits)

#### Info promotion
Les règles de promotions chez Farmitoo sont complexes.
Dans notre cas, elles sont simplifiées à une seule condition pour l'application et deux effets possibles :
- la promotion est appliquée uniquement si le montant HT de la commande dépasse le montant minimum `minAmount`
- si `freeDelivery` est à `true` les frais de livraison sont mis à 0
- le montant HT de la commande est diminué de la valeur de `reduction` (en pourcentage)

> Pour la même raison que le calcul de la TVA, j'ai choisis de le gérer en JS
