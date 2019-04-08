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
  Text,
  Link
} from "spectacle";
import CodeSlide from "spectacle-code-slide";

import Speaker from "./Speaker";
import olivier from "./assets/images/olivier.jpg";
import olivierbg from "./assets/images/olivierbg.gif";
import axalogo from "./assets/images/axalogo.svg";
import logoDevoxx from "./assets/images/logoDevoxx.png";
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
import why from "./assets/images/why.gif";
import dolls from "./assets/images/dolls.gif";
import power from "./assets/images/power.gif";
import tests from "./assets/images/tests.gif";
import kentcdoddstweet from "./assets/images/kentcdoddstweet.png";
import devoxx from "./assets/images/devoxx.png";

import useStatePng from "./assets/code/useState.png";
import useReducerPng from "./assets/code/useReducer.png";
import useReducerPng2 from "./assets/code/useReducer2.png";
import useEffectPng from "./assets/code/useEffect.png";
import useContextPng from "./assets/code/useContext.png";
import useContextPng2 from "./assets/code/useContext2.png";
import useCallbackUseMemoPng from "./assets/code/useCallbackUseMemo.png";
import useRefPng from "./assets/code/useRef.png";
import eslintRulesPng from "./assets/code/eslintRules.png";
import codeHoc from "./assets/images/codeHoc.png";
import codeHooks from "./assets/images/codeHooks.png";
import useInFuture from "./assets/images/useInFuture.png";
import testPyramid from "./assets/images/testPyramid.png";
import reactredux from "./assets/images/reactredux.jpeg";
import redux1 from "./assets/images/redux1.png";
import redux2 from "./assets/images/redux2.png";
import typescript1 from "./assets/images/typescript1.png";
import typescript2 from "./assets/images/typescript2.png";
import custominstall from "./assets/images/custominstall.png";
import customUtilisation from "./assets/images/customUtilisation.png";

import codeRecompose from "./assets/code/sw_recompose.example";
import codeClass from "./assets/code/sw_class.example";
import codeBase from "./assets/code/sw_base.example";

import withHoc from "./assets/code/withHoc.example";
import useHooks from "./assets/code/useHooks.example";

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
        <Slide transition={["fade"]} bgImage={devoxx} bgDarken="0.3">
          <Heading size={1} fit caps lineHeight={1} textColor="#FFF">
            Les Hooks
          </Heading>
          <Heading size={1} fit caps lineHeight={3} textColor="#FFF">
            Comment revoir son application React
          </Heading>
          <Text margin="6em 0 0 0" ><Link href="https://oyouf.github.io">https://oyouf.github.io</Link></Text>
          <Text><Link href="https://github.com/oyouf/devoxx_2019">https://github.com/oyouf/devoxx_2019</Link></Text>
          <Image src={logoDevoxx} margin="3em auto" />
          <Notes>
            <div className="notes">
              Ici nous n'allons pas montrer de bests practices, mais des
              exemples simples de code
            </div>
          </Notes>
        </Slide>
        <Slide transition={["fade"]} bgImage={news} bgDarken="0.5">
          <Heading size={1} fit caps lineHeight={1} textColor="secondary">
            The fact
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
        <Slide transition={["fade"]} bgImage={recompose} bgDarken="0.8">
          <Heading size={1} fit lineHeight={1} textColor="secondary">
            Hier : Les HOC avec Recompose
          </Heading>
          <Image src={adclite} height="5em" margin="2em auto" />
        </Slide>
        <Slide transition={["fade"]} bgImage={tunning} bgDarken="0.8">
          <Heading size={2} lineHeight={1} textColor="secondary">
            Principes & atouts
          </Heading>
          <Fill>
            <Appear>
              <Text textSize="3em">HOC = Enhancer || Injector</Text>
            </Appear>
            <Appear>
              <Text textSize="3em">Généricité et réutilisabilité</Text>
            </Appear>
            <Appear>
              <Text textSize="3em">Composition</Text>
            </Appear>
            <Appear>
              <Text textSize="3em">Programmation fonctionnelle</Text>
            </Appear>
            <Appear>
              <Text textSize="3em">Délégation</Text>
            </Appear>
            <Appear>
              <Text textSize="3em">Tests</Text>
            </Appear>
          </Fill>
          <Notes>
            <ol className="notes">
              <li>
                Enhancers: Ajouter un LOADING Injectors: Inject props Exemple :
                Connect de Redux
              </li>
              <li>Réutilisabilité : WithLoader, withRouter, WithUser etc</li>
              <li>Composition avec Compose.</li>
              <li>Délégation Component/container pattern</li>
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
          <Appear>
            <Text textSize="3em">Lisibilité</Text>
          </Appear>
          <Appear>
            <Text textSize="3em">Collision</Text>
          </Appear>
          <Appear>
            <Text textSize="4em">
              <S type="bold">TypeScript</S>
            </Text>
          </Appear>
          <Notes>
            <ol className="notes">
              <li>
                Lisibilité : Pour des cas un peu complexe le code devient vite
                lourd et difficile d'accès pour une personne qui n'a pas
                travaillé sur le sujet.
              </li>
              <li>
                Mickael Jackson :
                <a
                  href="https://www.youtube.com/watch?v=BcVAq3YFiuc"
                  target="blank"
                >
                  ici
                </a>
              </li>
              <li>
                Collision : peut etre evité avec un bon nommage ou avec le
                namespace :
                <a
                  href="https://hackernoon.com/solving-the-problems-of-higher-order-components-without-throwing-the-baby-out-with-the-bathwater-40ddc72df5aa"
                  target="blank"
                >
                  ici
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
            <Text textSize="5em" bold={true}>
              Résoudre nativement
            </Text>
          </Appear>
          <Appear>
            <Text textSize="3em">Partage de logique entre les composants</Text>
          </Appear>
          <Appear>
            <Text textSize="3em">Problème des composants complexes</Text>
          </Appear>
          <Appear>
            <Text textSize="3em">
              Les classes embrouillent machines et developpeurs
            </Text>
          </Appear>
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
          <Heading size={1} fit lineHeight={1} textColor="secondary">
            Avec les Hooks...
          </Heading>
          <Appear>
            <Text textSize="3em">Pas de breaking change</Text>
          </Appear>
          <Appear>
            <Text textSize="3em">Extraction de la logique</Text>
          </Appear>
          <Appear>
            <Text textSize="3em">Suppression des lifecycles</Text>
          </Appear>
          <Appear>
            <Text textSize="3em">Suppression des classes</Text>
          </Appear>
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
                loading
              </li>
              <li>
                Mise a jour du state en valeur fixe ou avec une fonction avec en
                paramètre l'ancien état, ou
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
            useReducer
          </Heading>
          <Image src={useReducerPng2} height="42em" margin="2em auto" />
        </Slide>
        <Slide transition={["fade"]}>
          <Heading size={2} textColor="secondary">
            useEffect
          </Heading>
          <Image src={useEffectPng} height="40em" margin="2em auto" />
          <Notes>
            <ul className="notes">
              <li>
                UseEffect est une fonction qui ne doit rien renvoyer, ou juste
                une fonction de cleanup, qui elle meme ne renvoi rien
              </li>
              <li>
                Le cleanup est appelé lors de l'unmouut et a chaque render
              </li>
              <li>
                les deps permettent de savoir si on doit relancer au render{" "}
              </li>
              <li>On peut séparer les effect pour séparer les cas</li>
            </ul>
          </Notes>
        </Slide>
        <Slide transition={["fade"]}>
          <Heading size={1} fit lineHeight={1} textColor="secondary">
            Quelques subtilités
          </Heading>
          <Appear>
            <Text textSize="3em">Async/Await</Text>
          </Appear>
          <Appear>
            <Text textSize="3em">Chaque render possède son état</Text>
          </Appear>
          <Appear>
            <Text textSize="3em">useEffect remplace lifecycle</Text>
          </Appear>
          <Appear>
            <Text textSize="3em">
              useEffect est une synchronisation, pas le lifecycle
            </Text>
          </Appear>
          <Appear>
            <Text textSize="3em">
              Ne mentez pas à React à propos de dependances
            </Text>
          </Appear>
          <Appear>
            <Text textSize="3em">Fetch Data et Update : ⚠️ Race condition</Text>
          </Appear>
          <Notes>
            <ul className="notes">
              <li>utiliser then ou sortir la fonction</li>
              <li>
                A chaque rendu, au lancement de l'effect on capture l'état du
                composant. Si on veut suivre une valeur, il faut utiliser le
                Ref.
              </li>
              <li>cleanup idem ! il est initialiser au moment de l'init</li>
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
          <Image src={useContextPng} height="35em" margin="2em auto" />
        </Slide>
        <Slide transition={["fade"]}>
          <Heading size={2} textColor="secondary">
            useContext
          </Heading>
          <Image src={useContextPng2} height="35em" margin="2em auto" />
        </Slide>
        <Slide transition={["fade"]}>
          <Heading size={2} textColor="secondary">
            useCallback & useMemo
          </Heading>
          <Image src={useCallbackUseMemoPng} height="35em" margin="2em auto" />
          <Notes>
            <ul className="notes">
              <li>Avec le use Callback on peut jouer avec les dépendance</li>
              <li>
                Avec le useMemo on peut mettre en cache des composant (loading,
                etc)
              </li>
            </ul>
          </Notes>
        </Slide>
        <Slide transition={["fade"]}>
          <Heading size={2} textColor="secondary">
            useRef
          </Heading>
          <Image src={useRefPng} height="42em" margin="2em auto" />
          <Notes>
            <ul className="notes">
              <li>
                Use Ref permet de tracker n'importe quoi , object dom, fonction,
                props etc...
              </li>
            </ul>
          </Notes>
        </Slide>
        <Slide bgImage={rule1} bgDarken="0.7">
          <Heading size={1} lineHeight={1} textColor="secondary">
            Rules of Hooks
          </Heading>
        </Slide>
        <Slide transition={["fade"]}>
          <Heading size={1} fit lineHeight={1} textColor="secondary">
            Deux règles simples
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
            <Image src={eslintRulesPng} height="15em" margin="2em auto" />
          </Appear>
          <Notes>
            <ol className="notes">
              <li>
                Regle 1 : pas de if, de loop, de fonction imbriquée. Des Hooks
                custom oui
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
            Custom Hook
          </Heading>
          <Appear>
            <Text textSize="3em">Réutilisabilité</Text>
          </Appear>
          <Appear>
            <Text textSize="3em">Lisibilité</Text>
          </Appear>
          <Appear>
            <Text textSize="3em">Testabilité</Text>
          </Appear>
          <Notes>
            <ul className="notes">
              <li>Sortir les useState etc du form dans un useForme</li>
            </ul>
          </Notes>
        </Slide>
        <Slide bgImage={renovation} bgDarken="0.7">
          <Heading size={1} lineHeight={1} textColor="secondary">
            Revoir son application
          </Heading>
          <Notes>
            <div className="notes">Démo ! Présentation du code</div>
          </Notes>
        </Slide>
        <Slide transition={["fade"]}>
          <Heading size={2} lineHeight={1} textColor="secondary">
            Contexte
          </Heading>
          <List textColor="quaternary">
            <Appear>
              <ListItem textSize="3em">Component Pattern</ListItem>
            </Appear>
            <Appear>
              <ListItem textSize="3em">HOC / Hooks</ListItem>
            </Appear>
            <Appear>
              <ListItem textSize="3em">TypeScript</ListItem>
            </Appear>
            <Appear>
              <ListItem textSize="3em">Tests</ListItem>
            </Appear>
          </List>
        </Slide>
        <Slide bgImage={dolls} bgDarken="0.7">
          <Heading size={1} lineHeight={1} textColor="secondary">
            Component Pattern
          </Heading>
          <Appear>
            <Text textSize="3em">Component StateLess</Text>
          </Appear>
          <Appear>
            <Text textSize="3em">Container</Text>
          </Appear>
          <Appear>
            <Text textSize="3em">Custom Hooks</Text>
          </Appear>
          <Notes>
            <ol className="notes">
              <li>Le composant stateless est stable et facile a tester</li>
              <li>Le container y ajoute les état et la logique</li>
              <li>
                Extrais, les customs hooks etraits les pans logiques et les
                fonctionnalités réutilisable
              </li>
            </ol>
          </Notes>
        </Slide>
        <CodeSlide
          bgColor={"primary"}
          transition={[]}
          lang="js"
          code={withHoc}
          textSize="1.7em"
          ranges={[
            {
              loc: [0, 16],
              title: "Avec Recompose et les Hoc"
            },
            { loc: [1, 4] },
            { loc: [4, 7] },
            { loc: [7, 11] },
            { loc: [11, 12] },
            { loc: [14, 15] }
          ]}
        />
        <CodeSlide
          bgColor={"primary"}
          transition={[]}
          lang="js"
          code={useHooks}
          textSize="1.5em"
          ranges={[
            {
              loc: [0, 50],
              title: "Avec les Hooks"
            },
            { loc: [1, 7] },
            { loc: [8, 15] },
            { loc: [15, 19] },
            { loc: [19, 29] },
            { loc: [30, 40] }
          ]}
        />
        <Slide transition={["fade"]}>
          <Heading size={2} textColor="secondary">
            Des Hoc aux Hooks
          </Heading>
          <Fill>
            <Appear>
              <Text textSize="3em">Très similaire</Text>
            </Appear>
            <Appear>
              <Text textSize="3em">Propriétés visibles : pas de collision</Text>
            </Appear>
            <Appear>
              <Text textSize="3em">Lisibilité du tree view</Text>
            </Appear>
          </Fill>
        </Slide>
        <Slide>
          <div className="doubleimage-container">
            <Appear>
              <div className="doubleimage-content">
                <Image src={codeHoc} margin="16px auto" />
              </div>
            </Appear>
            <Appear>
              <div className="doubleimage-content">
                <Image src={codeHooks} margin="16px auto" />
              </div>
            </Appear>
          </div>
        </Slide>
        <Slide transition={["fade"]}>
          <Heading size={2} textColor="secondary">
            Des Hoc aux Hooks
          </Heading>
          <Fill>
            <Text textSize="3em">Très similaires</Text>
            <Text textSize="3em">Propriétés visibles : pas de collision</Text>
            <Text textSize="3em">Lisibilité du tree view</Text>
            <Appear>
              <Text textSize="3em">
                Les use à la place des with
                <Appear>
                  <Text>Quelques exceptions : withRouter, withRedux</Text>
                </Appear>
              </Text>
            </Appear>
          </Fill>
        </Slide>
        <Slide>
          <Image src={useInFuture} margin="16px auto" />
        </Slide>
        <Slide bgImage={reactredux} bgDarken="0.7">
          <Heading size={1} lineHeight={1} textColor="secondary">
            Complex State Management
          </Heading>
          <Notes>
            Plutot que d'utiliser Redux, pourquoi ne pas utiliser les Hooks ?
          </Notes>
        </Slide>
        <Slide transition={["fade"]}>
          <Heading size={2} textColor="secondary">
            Store
          </Heading>
          <Image src={redux1} height="45em" margin="2em auto" />
          <Notes>
            Tout commence ici, nous créons le store. Il n'est qu'un etat complet
            de l'application
          </Notes>
        </Slide>
        <Slide transition={["fade"]}>
          <Heading size={2} textColor="secondary">
            Utilisation
          </Heading>
          <Image src={redux2} height="45em" margin="2em auto" />
        </Slide>
        <Slide bgImage={power} bgDarken="0.6">
          <Heading size={1} lineHeight={1} textColor="secondary">
            TypeScript
          </Heading>
          <Notes>
            <ol className="notes">
              <li>Type script et HOC sont assez complexes</li>
              <li>
                Les hooks sont de simples fonctions, il est facile de typer
              </li>
            </ol>
          </Notes>
        </Slide>
        <Slide transition={["fade"]}>
          <Image src={typescript1} height="50em" margin="2em auto" />
        </Slide>
        <Slide transition={["fade"]}>
          <Image src={typescript2} height="50em" margin="2em auto" />
        </Slide>
        <Slide bgImage={tests} bgDarken="0.7">
          <Heading size={1} lineHeight={1} textColor="secondary">
            Tests
          </Heading>
          <Notes>
            <ol className="notes">
              <li>
                Beaucoup d'app sont souvent bien couverte coté TU avec Jest
              </li>
              <li>
                On se posent souvent la question d'avoir un test qui permet de
                vérifier le composant en lui meme et non pas son implémentation
              </li>
            </ol>
          </Notes>
        </Slide>
        <Slide transition={["fade"]}>
          <Heading size={1} lineHeight={1} textColor="secondary">
            Tests
          </Heading>
          <Image src={testPyramid} height="45em" margin="2em auto" />
        </Slide>
        <Slide transition={["fade"]}>
          <Heading size={2} textColor="secondary">
            Problématique
          </Heading>
          <Fill>
            <Appear>
              <Text textSize="4em" bold={true}>
                Avoir des tests
              </Text>
            </Appear>
            <Appear>
              <Text textSize="3em">maintenables</Text>
            </Appear>
            <Appear>
              <Text textSize="3em">qui assurent le bon fonctionnement</Text>
            </Appear>
            <Appear>
              <Text textSize="3em">resistants à la refacto</Text>
            </Appear>
          </Fill>
        </Slide>
        <Slide transition={["fade"]}>
          <Heading size={1} lineHeight={1} textColor="secondary">
            La réponse
          </Heading>
          <Image src={kentcdoddstweet} margin="2em auto" />
        </Slide>
        <Slide transition={["fade"]}>
          <Heading size={1} lineHeight={1} textColor="secondary">
            React Testing Library
          </Heading>
        </Slide>
        <Slide transition={["fade"]}>
          <Heading size={2} lineHeight={1} textColor="secondary">
            Avec Les custom hooks
          </Heading>
          <Appear>
            <Text textSize="1.5em" bgColor="red">
              <code>
                Invariant Violation: Hooks can only be called inside the body of
                a function component.
              </code>
            </Text>
          </Appear>
          <Appear>
            <Image src={custominstall} margin="2em auto" height="10em" />
          </Appear>
          <Appear>
            <Image src={customUtilisation} margin="2em auto" height="20em" />
          </Appear>
        </Slide>
        <Slide bgImage={question} bgDarken="0.6">
          <Heading size={2} lineHeight={1} textColor="secondary">
            Questions
          </Heading>
        </Slide>
        <Slide bgColor={"#222"} bgDarken="0.7">
          <Heading size={1} lineHeight={1} textColor="secondary">
            Merci
          </Heading>
          <Image src={yapot} width="35em" />
        </Slide>
      </Deck>
    );
  }
}
