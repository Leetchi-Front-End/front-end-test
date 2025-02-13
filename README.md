# Test Leetchi Front

Bonjour brave chevalier Jedi.

Bienvenue sur le test technique front-end developer de Leetchi :)

Votre mission sera composée en 3 objectifs


### Objectif #1 (CSS) 5-10 min

Remplacer le contenu du JSON sur la page par un composant de votre création.

le composant devra afficher les données suivantes : 
- name
- la liste des stats de base
- les types, la taille et le poids en tags
- un boutton see online qui renvoit vers https://pokeapi.co/

exemple de design attendu: ![](https://raw.githubusercontent.com/Leetchi-Front-End/front-end-test/master/wiki/card-example.png)

Figma: https://www.figma.com/design/pfqn9okLgjNhq5nfPhOfEY/Test?node-id=0-1&p=f&t=84LrHtDecnq1JDlv-0
mdp : leetchi2025

### Objectif #2 (API CALL) 30 min

à l'aide de l'api https://pokeapi.co/, utiliser l'input `#search` afin de créer un champ de recherche affichant une liste de pokemon, ou un message "Aucun résultat trouvé pour "XXX" (XXX étant la valeur de la recherche). L'utilisateur doit être capable d'utiliser la touche **enter** déclencher une recherche.

La liste de résultats doit s'afficher, chaque item doit être en rendu avec le composant que vous avez créé pendant l'objectif 1

### Obectif 3 (JS/TS - PAGINATION) 20 min

Certaines recherches ont un grand nombre de résultats qui nécessite d'implémenter une pagination. La pagination se fait en offset.
exemple de query: `"a"`

Si une recherche contient plus de 10 items, afficher un bouton "Afficher plus" après votre liste d'items. Au click de bouton afficher la prochaine liste d'éléments avec le composant que vous avez créé pendant l'objectif 1.
