// Import React
import React from "react";

// Import Spectacle Core tags
import {
  Deck,
  Heading,
  ListItem,
  List,
  Image,
  Fill,
  Slide,
  Appear,
  Notes,
  S,
  Text
} from "spectacle";
import CodeSlide from "spectacle-code-slide";

import Speaker from "./Speaker";
import olivier from "./assets/images/olivier.jpg";
import olivierbg from "./assets/images/olivierbg.gif";
import axalogo from "./assets/images/axalogo.svg";
import reactLogo from "./assets/images/reactlogo.svg";
import news from "./assets/images/news.gif";
import theonewithhooks from "./assets/images/theonewithhooks.png";
import recompose from "./assets/images/recompose.png";
import adclite from "./assets/images/adclite.jpg";
import tunning from "./assets/images/tunning.jpg";
import failTunning from "./assets/images/failtunning.gif";
import hook from "./assets/images/hook.gif";
import danReloading from "./assets/images/danreloading.gif";
import renovation from "./assets/images/demo.gif";
import rule1 from "./assets/images/rule1.gif";
import custom from "./assets/images/custom.gif";
import yapot from "./assets/images/yapot.gif";
import question from "./assets/images/question.gif";
import miss from "./assets/images/miss.gif";
import why from "./assets/images/why.gif";
import waiting from "./assets/images/waiting.gif";
import chris from "./assets/images/chris.gif";

import useStatePng from "./assets/code/useState.png";
import useReducerPng from "./assets/code/useReducer.png";
import useEffectPng from "./assets/code/useEffect.png";
import useContextPng from "./assets/code/useContext.png";
import useCallbackUseMemoPng from "./assets/code/useCallbackUseMemo.png";
import useRefPng from "./assets/code/useRef.png";
import eslintRulesPng from "./assets/code/eslintRules.png";

import codeRecompose from "./assets/code/sw_recompose.example";
import codeClass from "./assets/code/sw_class.example";
import codeBase from "./assets/code/sw_base.example";

import useOthers from "./assets/code/useOthers.example";

import "spectacle-theme-nova/syntax/prism.nova.css";
import "spectacle-theme-nova/syntax/prism-javascript";
import "spectacle-theme-nova/syntax/prism-typescript";
// Import theme
// import createTheme from 'spectacle/lib/themes/default';
import createTheme from "spectacle-theme-nova";
import "./presentation.scss";

const theme = createTheme();

export default class Presentation extends React.Component {
  render() {
    return (
      <Deck
        transition={["zoom", "slide", "fade"]}
        transitionDuration={500}
        theme={theme}
        contentWidth="1280px"
        contentHeight="800px"
      >
        <Slide transition={["fade"]} bgImage={reactLogo} bgDarken="0.8">
          <Heading size={1} fit caps lineHeight={1} textColor="secondary">
            Les Hooks
          </Heading>
          <Heading size={1} fit caps lineHeight={3} textColor="secondary">
            Comment revoir son application React
          </Heading>
          <Notes>
            <div className="notes">
              Ici nous n'allons pas montrer de bests practices, mais des
              exemples simples de code
            </div>
          </Notes>
        </Slide>
        <Speaker
          name="Olivier YOUF"
          job="Front-end Developer"
          company="Axa"
          avatar={olivier}
          companyIcon={axalogo}
          bg={olivierbg}
          twitter="oyouf"
          github="oyouf"
        />
        <Slide transition={["fade"]} bgImage={news} bgDarken="0.5">
          <Heading size={1} fit caps lineHeight={1} textColor="secondary">
            The fact{" "}
          </Heading>
          <Appear>
            <Image src={theonewithhooks} margin="16px auto" />
          </Appear>
          <Notes>
            <h4>Slide notes</h4>
            <ol className="notes">
              <li>Recompose : Andrew Clarck</li>
              <li>
                Résumé : Il a créé Recompose il y a 3 ans, Il y a deux ans il a
                rejoint la team React, Aujourd'hui les Hooks corrige tous les
                problemes. Pas de new feature mais corrections de bugs et
                compatibilité avec React
              </li>
            </ol>
          </Notes>
        </Slide>
        <Slide transition={["fade"]} bgImage={recompose} bgDarken="0.8">
          <Heading size={1} fit lineHeight={1} textColor="secondary">
            Les HOC avec Recompose
          </Heading>
          <Image src={adclite} height="5em" margin="2em auto" />
        </Slide>
        <Slide transition={["fade"]} bgImage={tunning} bgDarken="0.8">
          <Heading size={2} lineHeight={1} textColor="secondary">
            Principes & atouts
          </Heading>
          <Fill>
            <List>
              <Appear>
                <ListItem textSize="3em">HOC = Enhancer || Injector</ListItem>
              </Appear>
              <Appear>
                <ListItem textSize="3em">
                  Généricité et réutilisabilité
                </ListItem>
              </Appear>
              <Appear>
                <ListItem textSize="3em">Composition</ListItem>
              </Appear>
              <Appear>
                <ListItem textSize="3em">Programmation fonctionnelle</ListItem>
              </Appear>
              <Appear>
                <ListItem textSize="3em">Délégation</ListItem>
              </Appear>
              <Appear>
                <ListItem textSize="3em">Tests</ListItem>
              </Appear>
            </List>
          </Fill>
          <Notes>
            <ol className="notes">
              <li>
                Enhancers: Wrap a component with additional functionality/props.
                Exemple Ajouter un LOADING Injectors: Inject props into a
                component. Exemple : Connect de Redux
              </li>
              <li>Réutilisabilité : WithLoader, withRouter, WithUser etc</li>
              <li>Composition : on peut composer plusieurs</li>
              <li>Composition avec Compose.</li>
              <li>Délégation Component/container</li>
              <li>Tests : avec Recompose tout est fonction VS classes</li>
            </ol>
          </Notes>
        </Slide>
        <CodeSlide
          bgColor={"primary"}
          transition={[]}
          lang="jsx"
          code={codeBase}
          textSize="2em"
          ranges={[
            {
              loc: [0, 20],
              title: "Exemple"
            },
            { loc: [0, 6] },
            { loc: [7, 11] }
          ]}
        />
        <CodeSlide
          bgColor={"primary"}
          transition={[]}
          lang="jsx"
          code={codeClass}
          textSize="1.9em"
          ranges={[
            {
              loc: [0, 100],
              title: "Classe react"
            },
            { loc: [1, 5] },
            { loc: [6, 9] },
            { loc: [10, 30] },
            { loc: [11, 12] },
            { loc: [13, 16] },
            { loc: [17, 30] }
          ]}
        />
        <CodeSlide
          bgColor={"primary"}
          transition={[]}
          lang="jsx"
          code={codeRecompose}
          textSize="1.9em"
          ranges={[
            { loc: [0, 100], title: "Version Recompose" },
            { loc: [0, 12] },
            { loc: [13, 14] },
            { loc: [15, 23] },
            { loc: [24, 28] },
            { loc: [29, 34], note: "Fuuuuuuuuuuuuuusion !" },
            { loc: [35, 36] }
          ]}
        />
        <Slide transition={["fade"]} bgImage={failTunning} bgDarken="0.8">
          <Heading size={2} lineHeight={1} textColor="secondary">
            Inconvénients
          </Heading>
          <List>
            <Appear>
              <ListItem textSize="3em">Lisibilité</ListItem>
            </Appear>
            <Appear>
              <ListItem textSize="3em">Collision</ListItem>
            </Appear>
            <Appear>
              <ListItem textSize="4em">
                <S type="bold">TypeScript</S>
              </ListItem>
            </Appear>
          </List>
          <Notes>
            <ol className="notes">
              <li>
                Lisibilité : Pour des cas un peu complexe le code devient vite
                lourd et difficile d'accès pour une personne qui n'a pas
                travaillé sur le sujet.
              </li>
              <li>
                Mickael Jackson :{" "}
                <a
                  href="https://www.youtube.com/watch?v=BcVAq3YFiuc"
                  target="blank"
                >
                  ici{" "}
                </a>
              </li>
              <li>
                Collision : peut etre evité avec un bon nommage ou avec le
                namespace :
                <a
                  href="https://hackernoon.com/solving-the-problems-of-higher-order-components-without-throwing-the-baby-out-with-the-bathwater-40ddc72df5aa"
                  target="blank"
                >
                  ici{" "}
                </a>
              </li>
              <li>
                typescript : Fonction générique + Difficulté de trouver les
                type, doc. Doc alternative :
                <a
                  href="https://github.com/DefinitelyTyped/DefinitelyTyped/blob/master/types/recompose/recompose-tests.tsx"
                  target="blank"
                >
                  ici
                </a>
              </li>
            </ol>
          </Notes>
        </Slide>
        <Slide transition={["fade"]} bgImage={hook} bgDarken="0.7">
          <Heading size={1} lineHeight={1} textColor="secondary">
            Hooks
          </Heading>
        </Slide>
        <Slide transition={["fade"]} bgImage={why} bgDarken="0.7">
          <Heading size={1} lineHeight={1} textColor="secondary">
            Why ?
          </Heading>
          <Appear>
            <Text textSize="3em">Résoudre nativement</Text>
          </Appear>
          <List>
            <Appear>
              <ListItem textSize="3em">
                Partage de logique entre les composants
              </ListItem>
            </Appear>
            <Appear>
              <ListItem textSize="3em">
                Problème des composants complexes
              </ListItem>
            </Appear>
            <Appear>
              <ListItem textSize="3em">
                Les classes embrouillent machines et developpeurs
              </ListItem>
            </Appear>
          </List>
          <Notes>
            <ul className="notes">
              <li>
                Réutilisabilité : Obligé d'utiliser des HOC ou des render props.
                Les hooks permettent d'extraire et de faire des hooks partagés
              </li>
              <li>Composants complexes : Testabilité, lifecycles</li>
              <li>Classes : utilisation du This JS, minification, tests.</li>
            </ul>
          </Notes>
        </Slide>
        <Slide transition={["fade"]}>
          <Heading size={1} fit caps lineHeight={1} textColor="secondary">
            Avec les Hooks...
          </Heading>
          <List textColor="quaternary">
            <Appear>
              <ListItem textSize="3em">Pas de breaking change</ListItem>
            </Appear>
            <Appear>
              <ListItem textSize="3em">Extraction de la logique</ListItem>
            </Appear>
            <Appear>
              <ListItem textSize="3em">Suppression des lifecycles</ListItem>
            </Appear>
            <Appear>
              <ListItem textSize="3em">Suppression des classes</ListItem>
            </Appear>
          </List>
          <Notes>
            <ul className="notes">
              <li>Les Hooks ne fonctionne pas dans les classes</li>
            </ul>
          </Notes>
        </Slide>
        <Slide bgImage={danReloading} bgDarken="0.7">
          <Heading size={1} lineHeight={1} textColor="secondary">
            Principaux Hooks
          </Heading>
        </Slide>
        <Slide transition={["fade"]}>
          <Heading size={2} textColor="secondary">
            useState
          </Heading>
          <Image src={useStatePng} height="35em" margin="2em auto" />
          <Notes>
            Usestate est l'incontournable
            <ul className="notes">
              <li>
                Ititialisation avec une valeur fixe ou une fonction pour le lazy
                loading{" "}
              </li>
              <li>
                Mise a jour du state en valeur fixe ou avec une fonction avec en
                paramètre l'ancien état, ou{" "}
              </li>
            </ul>
          </Notes>
        </Slide>
        <Slide transition={["fade"]}>
          <Heading size={2} textColor="secondary">
            useReducer
          </Heading>
          <Image src={useReducerPng} height="42em" margin="2em auto" />
          <Notes>
            UseReducer permet la gestion d'un état plus complexe. Exemple :
            <ul>
              <li>formulaire avec validations croisées</li>
              <li>
                Gestion des fetchs avec gesgtion du loading des errors etc
              </li>
            </ul>
          </Notes>
        </Slide>
        <Slide transition={["fade"]}>
          <Heading size={2} textColor="secondary">
            useEffect
          </Heading>
          <Image src={useEffectPng} height="40em" margin="2em auto" />
        </Slide>
        <Slide transition={["fade"]}>
          <Heading size={1} fit caps lineHeight={1} textColor="secondary">
            Quelques subltilités
          </Heading>
          <List textColor="quaternary">
            <Appear>
              <ListItem textSize="3em">Async/Await</ListItem>
            </Appear>
            <Appear>
              <ListItem textSize="3em">Chaque render possède son état</ListItem>
            </Appear>
            <Appear>
              <ListItem textSize="3em">useEffect remplace lifecycle</ListItem>
            </Appear>
            <Appear>
              <ListItem textSize="3em">
                useEffect est une synchronisation, pas le lifecycle
              </ListItem>
            </Appear>
            <Appear>
              <ListItem textSize="3em">
                Ne mentez pas à React à propos de dependances
              </ListItem>
            </Appear>
            <Appear>
              <ListItem textSize="3em">
                Fetch Data et Update : ⚠️ Race condition
              </ListItem>
            </Appear>
          </List>
          <Notes>
            <ul className="notes">
              <li>
                useEffect ne gère pas l'implémentation des await, il faut sortir
                la fonction
              </li>
              <li>
                A chaque rendu, au lancement de l'effect on capture l'état du
                composant. Si on veut suivre une valeur, il faut utiliser le Ref
              </li>
              <li>
                useEffect remplace lifecycle et ses multiples implémentations
              </li>
              <li>
                Il faut changer sa facon de concevoir, et ne plus penser
                lifecycle, mais synchronisation
              </li>
              <li>
                Mentir peux ammener aux bugs. Chaque prop doit être spécifiée.
                On peut découpler soit en rendant auto suffisant, soit avec
                useReducer
              </li>
              <li>
                Si trop de dépendance sortir une fonction dans une callback et
                mettre la callback en dépendance
              </li>
              <li>
                Race condition : On fait un fetch uin peu long, mais entre temps
                l'état a été modifié, avec un simple booléen on peut résoudre le
                problème
              </li>
            </ul>
          </Notes>
        </Slide>
        <Slide transition={["fade"]}>
          <Heading size={2} textColor="secondary">
            useContext
          </Heading>
          <Image src={useContextPng} height="42em" margin="2em auto" />
        </Slide>
        <Slide transition={["fade"]}>
          <Heading size={2} textColor="secondary">
            useCallback & useMemo
          </Heading>
          <Image src={useCallbackUseMemoPng} height="20em" margin="2em auto" />
        </Slide>
        <Slide transition={["fade"]}>
          <Heading size={2} textColor="secondary">
            useRef
          </Heading>
          <Image src={useRefPng} height="42em" margin="2em auto" />
        </Slide>
        <Slide bgImage={rule1} bgDarken="0.7">
          <Heading size={1} lineHeight={1} textColor="secondary">
            Rules of Hooks
          </Heading>
        </Slide>
        <Slide transition={["fade"]}>
          <Heading size={1} fit caps lineHeight={1} textColor="secondary">
            Deux simples règles
          </Heading>
          <List>
            <Appear>
              <ListItem textSize="3em">
                Les Hooks sont appelés en haut
                <List>
                  <Appear>
                    <ListItem>
                      Evitez les boucles, if et fonctions imbriquées
                    </ListItem>
                  </Appear>
                </List>
              </ListItem>
            </Appear>
            <Appear>
              <ListItem textSize="3em">
                Les hooks ne doivent être appelés que dans des fonctions React
                <List>
                  <Appear>
                    <ListItem>Appels dans les fonctions composant</ListItem>
                  </Appear>
                  <Appear>
                    <ListItem>Appels dans les custom Hooks</ListItem>
                  </Appear>
                </List>
              </ListItem>
            </Appear>
          </List>
          <Appear>
            <Image src={eslintRulesPng} height="10em" margin="2em auto" />
          </Appear>
          <Notes>
            <ol className="notes">
              <li>
                Regle 1 : pas de if, de loop, de fonction imbriquée. Des Hooks
                cutom oui
              </li>
              <li>
                Tout s'explique parceque React travaille avec un ordre de Hook
                qui ne doit pas changer entre chaque rendu.
              </li>
              <li>On doit travailler avant tout avec des custom Hook</li>
              <li>Il existe un plugin EsLint</li>
            </ol>
          </Notes>
        </Slide>
        <Slide bgImage={custom} bgDarken="0.7">
          <Heading size={1} lineHeight={1} textColor="secondary">
            Custom Hook{" "}
          </Heading>
          <List>
            <Appear>
              <ListItem textSize="3em">Réutilisabilité</ListItem>
            </Appear>
            <Appear>
              <ListItem textSize="3em">Lisibilité</ListItem>
            </Appear>
            <Appear>
              <ListItem textSize="3em">Testabilité</ListItem>
            </Appear>
          </List>
          <Notes>
            <ol className="notes">
              <li>Sortir les useState etc du form dans un useForme</li>
            </ol>
          </Notes>
        </Slide>
        <Slide bgImage={renovation} bgDarken="0.7">
          <Heading size={1} lineHeight={1} textColor="secondary">
            Revoir son application
          </Heading>
        </Slide>
        <Slide transition={["fade"]}>
          <Heading size={1} fit caps lineHeight={1} textColor="secondary">
            Context
          </Heading>
          <List textColor="quaternary">
            <Appear>
              <ListItem textSize="3em">Component Pattern</ListItem>
            </Appear>
            <Appear>
              <ListItem textSize="3em">HOC / Recompose</ListItem>
            </Appear>
            <Appear>
              <ListItem textSize="3em">Tests unitaires</ListItem>
            </Appear>
            <Appear>
              <ListItem textSize="3em">Injection de dépendance</ListItem>
            </Appear>
          </List>
          <Notes>
            <ul className="notes">
              <li>Les Hooks ne fonctionne pas dans les classes</li>
            </ul>
          </Notes>
        </Slide>
      </Deck>
    );
  }
}
