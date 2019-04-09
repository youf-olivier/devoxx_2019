# devoxx_2019
Talk +  Sample App for Devoxx 2019

# Comment créer une application React avec les Hooks 

## Plan (WIP)

* Recompose & les Hoc 
    * Rappels sur les Hoc
    * Principe Injection
    * Inconvénients
* Rappels sur les Hooks principaux
    * Les 3 principaux
    * Les autres
    * Rules of Hooks
    * Custom Hooks
* Au revoir With, bonjour Use
    * A part qq exceptions, tous les with peuvent être remplacés par des use
    * Les exceptions :
        * WithRouter
        * Redux
* Complex state Managment (ou comment Remplacer Redux)
    * Exemple avec UseReducer et UseContext
* Avec Typescript
    * Tout est fonction 
* Les tests : TU / Test integration / E2E
    * Les vues : snapshot / React-testing-library
    * Les container : TU / TI avec React Testing Library
    * Les Customs Hooks : TI avec react-hooks-testing-library
    * Injection de dépendance grâce au HOC ou via les props

* Les meilleurs hooks déjà dispos (reHooks, forceUpdate, useRouter...)

## Rérérences : 

Hooks : 
* https://medium.com/capbase-engineering/react-hooks-is-the-functional-paradise-youve-been-waiting-for-994e53f65f94
* https://medium.com/the-guild/under-the-hood-of-reacts-hooks-system-eb59638c9dba

useEffect : 
* https://www.robinwieruch.de/react-hooks-fetch-data/
* https://overreacted.io/a-complete-guide-to-useeffect/
* Race condition : https://www.robinwieruch.de/react-hooks-fetch-data/

Tools : 
* https://axaguildev.github.io/

Tests : 
* https://testing-library.com/
* https://www.valentinog.com/blog/testing-react/
* https://react-testing-examples.com/
* https://github.com/threepointone/react-act-examples/blob/master/sync.md
* https://github.com/gnapse/jest-dom
* https://www.youtube.com/user/kentdoddsfamily/videos

BBL de décembre :
* https://github.com/oyouf/hooks_bbl

Custom Hooks :
* PR Use Router : https://github.com/ReactTraining/react-router/pull/6453/files
* ReHooks : https://github.com/Synvox/rehook
* https://usehooks.com/
* https://github.com/rehooks/awesome-react-hooks

Injection de dépendance : 
* https://medium.com/front-end-weekly/reactjs-hoc-how-to-inject-dependencies-to-react-component-in-angularjs-way-a2fc63d795c8

Functionnal Programming
* https://medium.com/capbase-engineering/react-hooks-is-the-functional-paradise-youve-been-waiting-for-994e53f65f94

Remplacer Redux pour le global State: 
* https://medium.com/octopus-labs-london/replacing-redux-with-react-hooks-and-context-part-1-11b72ffdb533
* https://medium.com/capbase-engineering/part-3-the-react-hooks-based-alternative-to-redux-and-the-flux-pattern-a726220a8a9a
* https://ideamotive.co/blog/redux-vs-context-api/
* https://victorops.com/blog/react-context-vs-react-redux

Typescript
* https://medium.com/@jrwebdev/react-hooks-in-typescript-88fce7001d0d
* https://dev.to/busypeoples/notes-on-typescript-react-hooks-28j2