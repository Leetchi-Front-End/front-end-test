# Test Leetchi Front

Bonjour brave chevalier Jedi.

Bienvenue sur le test technique front-end developer de Leetchi :)

Votre mission sera composée en 3 objectifs


### Objectif #1 (CSS) 5-10 min

Remplacer le contenu du JSON sur la page par un composant de votre création.

le composant devra afficher les données suivantes : 
- name
- height
- gender
- created (date) au format `DD/MM/YYYY`
- l'image: https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/Star_Wars_Logo.svg/2560px-Star_Wars_Logo.svg.png au **format carré**.
- un lien redirigant vers la proriété `url`
- un tag pour le sexe, la couleur de cheveux et celle des yeux

exemple de design attendu: ![](https://raw.githubusercontent.com/Leetchi-Front-End/front-end-test/master/wiki/card-example.png)

Figma: https://www.figma.com/design/pfqn9okLgjNhq5nfPhOfEY/Test?node-id=0-1&p=f&t=84LrHtDecnq1JDlv-0
mdp : leetchi2025

### Objectif #2 (API CALL) 30 min

à l'aide de l'api [swapi.dev](https://swapi.dev/), utiliser l'input `#search` afin de créer un champ de recherche affichant une liste de personnages, ou un message "Aucun résultat trouvé pour "XXX" (XXX étant la valeur de la recherche). L'utilisateur doit être capable d'utiliser la touche **enter** déclencher une recherche.

La liste de résultats doit s'afficher, chaque item doit être en rendu avec le composant que vous avez créé pendant l'objectif 1

https://swapi.dev/documentation#search

### Obectif 3 (JS/TS - PAGINATION) 20 min

Certaines recherches ont un grand nombre de résultats qui nécessite d'implémenter une pagination.
exemple de query: `"a"`

Si une recherche contient plus de 10 items, afficher un bouton "Afficher plus" après votre liste d'items. Au click de bouton afficher la prochaine liste d'éléments avec le composant que vous avez créé pendant l'objectif 1.
