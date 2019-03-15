// Import React
import React from 'react';

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
} from 'spectacle';
import CodeSlide from 'spectacle-code-slide';

import Speaker from './Speaker';
import olivier from './assets/images/olivier.jpg';
import olivierbg from './assets/images/olivierbg.gif';
import axalogo from './assets/images/axalogo.svg';
import reactLogo from './assets/images/reactlogo.svg';
import news from './assets/images/news.gif';
import theonewithhooks from './assets/images/theonewithhooks.png';
import tenor from './assets/images/tenor.gif';
import recompose from './assets/images/recompose.png';
import adclite from './assets/images/adclite.jpg';
import tunning from './assets/images/tunning.jpg';
import failTunning from './assets/images/failtunning.gif';
import hook from './assets/images/hook.gif';
import danReloading from './assets/images/danreloading.gif';
import demo from './assets/images/demo.gif';
import rule1 from './assets/images/rule1.gif';
import custom from './assets/images/custom.gif';
import yapot from './assets/images/yapot.gif';
import question from './assets/images/question.gif';
import miss from './assets/images/miss.gif';
import why from './assets/images/why.gif';
import waiting from './assets/images/waiting.gif';
import chris from './assets/images/chris.gif';

import codeRecompose from './assets/code/sw_recompose.example';
import codeClass from './assets/code/sw_class.example';
import codeBase from './assets/code/sw_base.example';
import useState from './assets/code/useState.example';
import useStateBefore from './assets/code/useStateBefore.example';
import useStateAfter from './assets/code/useStateAfter.example';
import useEffect from './assets/code/useEffect.example';
import useEffectBefore from './assets/code/useEffectBefore.example';
import useEffectAfter from './assets/code/useEffectAfter.example';
import useEffectAsync from './assets/code/useEffectAsync.example';
import useReducer from './assets/code/useReducer.example';
import useOthers from './assets/code/useOthers.example';

import 'spectacle-theme-nova/syntax/prism.nova.css';
import 'spectacle-theme-nova/syntax/prism-javascript';
import 'spectacle-theme-nova/syntax/prism-typescript';
// Import theme
// import createTheme from 'spectacle/lib/themes/default';
import createTheme from 'spectacle-theme-nova';
import './presentation.scss';

const theme = createTheme();

export default class Presentation extends React.Component {
  render() {
    return (
      <Deck
        transition={['zoom', 'slide', 'fade']}
        transitionDuration={500}
        theme={theme}
        contentWidth="1280px"
      >
        <Slide transition={['fade']} bgImage={reactLogo} bgDarken="0.8">
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
        <Slide transition={['fade']} bgImage={news} bgDarken="0.5">
          <Heading size={1} fit caps lineHeight={1} textColor="secondary">
            The fact{' '}
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
        <Slide transition={['fade']} bgImage={tenor} bgDarken="0.2" />
        <Slide transition={['fade']} bgImage={recompose} bgDarken="0.8">
          <Heading size={1} fit lineHeight={1} textColor="secondary">
            Les HOC avec Recompose
          </Heading>
          <Image src={adclite} height="5em" margin="2em auto" />
        </Slide>
        <Slide transition={['fade']} bgImage={tunning} bgDarken="0.8">
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
          bgColor={'primary'}
          transition={[]}
          lang="jsx"
          code={codeBase}
          textSize="2em"
          ranges={[
            {
              loc: [0, 20],
              title: 'Exemple',
            },
            { loc: [0, 6] },
            { loc: [7, 11] },
          ]}
        />
        <CodeSlide
          bgColor={'primary'}
          transition={[]}
          lang="jsx"
          code={codeClass}
          textSize="1.9em"
          ranges={[
            {
              loc: [0, 100],
              title: 'Classe react',
            },
            { loc: [1, 5] },
            { loc: [6, 9] },
            { loc: [10, 30] },
            { loc: [11, 12] },
            { loc: [13, 16] },
            { loc: [17, 30] },
          ]}
        />
        <CodeSlide
          bgColor={'primary'}
          transition={[]}
          lang="jsx"
          code={codeRecompose}
          textSize="1.9em"
          ranges={[
            { loc: [0, 100], title: 'Version Recompose' },
            { loc: [0, 12] },
            { loc: [13, 14] },
            { loc: [15, 23] },
            { loc: [24, 28] },
            { loc: [29, 34], note: 'Fuuuuuuuuuuuuuusion !' },
            { loc: [35, 36] },
          ]}
        />
        <Slide transition={['fade']} bgImage={failTunning} bgDarken="0.8">
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
                Mickael Jackson :{' '}
                <a
                  href="https://www.youtube.com/watch?v=BcVAq3YFiuc"
                  target="blank"
                >
                  ici{' '}
                </a>
              </li>
              <li>
                Collision : peut etre evité avec un bon nommage ou avec le
                namespace :
                <a
                  href="https://hackernoon.com/solving-the-problems-of-higher-order-components-without-throwing-the-baby-out-with-the-bathwater-40ddc72df5aa"
                  target="blank"
                >
                  ici{' '}
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
        <Slide transition={['fade']} bgImage={hook} bgDarken="0.7">
          <Heading size={1} lineHeight={1} textColor="secondary">
            Hooks
          </Heading>
        </Slide>
        <Slide transition={['fade']} bgImage={why} bgDarken="0.7">
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
        <Slide transition={['fade']}>
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
        <CodeSlide
          bgColor={'primary'}
          transition={[]}
          lang="jsx"
          code={useState}
          textSize="2.2em"
          ranges={[
            { loc: [0, 19], title: 'useState' },
            { loc: [0, 6] },
            { loc: [7, 9] },
            { loc: [0, 6] },
            { loc: [10, 12] },
          ]}
        />
        <CodeSlide
          bgColor={'primary'}
          transition={[]}
          lang="jsx"
          code={useStateBefore}
          textSize="2.5em"
          ranges={[
            { loc: [0, 19], title: 'exemple - version Classe' },
            { loc: [1, 7] },
            { loc: [8, 18] },
          ]}
        />
        <CodeSlide
          bgColor={'primary'}
          transition={[]}
          lang="jsx"
          code={useStateAfter}
          textSize="2.2em"
          ranges={[
            { loc: [0, 50], title: 'exemple - version Hook' },
            { loc: [3, 4] },
            { loc: [7, 8] },
            { loc: [8, 11] },
          ]}
        />
        <CodeSlide
          bgColor={'primary'}
          transition={[]}
          lang="jsx"
          code={useReducer}
          textSize="2em"
          ranges={[
            { loc: [0, 50], title: 'useReducer' },
            { loc: [0, 2] },
            { loc: [3, 15] },
            { loc: [16, 34] },
            { loc: [17, 19] },
            { loc: [21, 31] },
          ]}
        />
        <CodeSlide
          bgColor={'primary'}
          transition={[]}
          lang="jsx"
          code={useEffect}
          textSize="2.2em"
          ranges={[
            { loc: [0, 50], title: 'useEffect' },
            { loc: [0, 6] },
            { loc: [7, 18] },
          ]}
        />
        <CodeSlide
          bgColor={'primary'}
          transition={[]}
          lang="jsx"
          code={useEffectBefore}
          textSize="2em"
          ranges={[
            { loc: [0, 50], title: 'exemple - version Classe' },
            { loc: [1, 7] },
            { loc: [8, 15] },
            { loc: [16, 26] },
          ]}
        />
        <CodeSlide
          bgColor={'primary'}
          transition={[]}
          lang="jsx"
          code={useEffectAfter}
          textSize="2em"
          ranges={[
            { loc: [0, 50], title: 'exemple - version Hook' },
            { loc: [3, 4] },
            { loc: [5, 8] },
            { loc: [9, 17] },
          ]}
        />
        <CodeSlide
          bgColor={'primary'}
          transition={[]}
          lang="jsx"
          code={useEffectAsync}
          textSize="2em"
          ranges={[
            { loc: [0, 50], title: 'useEffect - Async/await' },
            {
              loc: [0, 4],
              note:
                'Warning: useEffect function must return a cleanup function or nothing. Promises and useEffect(async () => …) are not supported, but you can call an async function inside an effect.',
            },
            { loc: [5, 9] },
            { loc: [10, 13] },
          ]}
        />
        <Slide bgImage={waiting} bgDarken="0.7">
          <Heading size={1} lineHeight={1} textColor="secondary">
            Donc...
          </Heading>
          <Notes>
            En pratique : Nous allons voir la différence entre recompose et les
            hooks
            <ol className="notes">
              <li>Collection : Use State et Use Effect</li>
              <li>Chronological : Use State et Use Effect et useContext</li>
            </ol>
          </Notes>
        </Slide>
        <CodeSlide
          bgColor={'primary'}
          transition={[]}
          lang="jsx"
          code={useOthers}
          textSize="2em"
          ranges={[
            { loc: [0, 50], title: 'les autres' },
            { loc: [0, 1] },
            { loc: [2, 10] },
            { loc: [11, 17] },
            { loc: [18, 20] },
            { loc: [21, 31] },
            { loc: [32, 33] },
          ]}
        />
        <Slide bgImage={rule1} bgDarken="0.7">
          <Heading size={1} lineHeight={1} textColor="secondary">
            Les règles à suivre
          </Heading>
        </Slide>
        <Slide transition={['fade']}>
          <Heading size={1} fit caps lineHeight={1} textColor="secondary">
            Deux simples règles
          </Heading>
          <List>
            <Appear>
              <ListItem textSize="3em">Les Hooks sont appelés en haut</ListItem>
            </Appear>
            <Appear>
              <ListItem textSize="3em">
                Les hooks ne doivent être appelés que dans des fonctions React
              </ListItem>
            </Appear>
          </List>
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
            Custom Hook{' '}
          </Heading>
          <Notes>
            <ol className="notes">
              <li>Sortir les useState etc du form dans un useForme</li>
            </ol>
          </Notes>
        </Slide>
        <Slide bgImage={miss} bgDarken="0.7">
          <Heading size={1} lineHeight={1} textColor="secondary">
            Ce qui fâche
          </Heading>
        </Slide>
        <Slide transition={['fade']}>
          <Heading size={1} lineHeight={1} textColor="secondary">
            Ce qui change
          </Heading>
          <List>
            <Appear>
              <ListItem textSize="3em">
                Se passer de branch, withProps, mapProps, etc.
              </ListItem>
            </Appear>
            <Appear>
              <ListItem textSize="3em">Ne couvre pas tout</ListItem>
            </Appear>
            <Appear>
              <ListItem textSize="3em">
                Pas de async/await dans le useEffect
              </ListItem>
            </Appear>
            <Appear>
              <ListItem textSize="3em">Fonctionnel VS Imperatif</ListItem>
            </Appear>
            <Appear>
              <ListItem textSize="3em">Les Hooks sont magiques</ListItem>
            </Appear>
          </List>
          <Notes>
            <ol className="notes">
              <li>Le UseEffect ne doit rien retourner</li>
              <li>
                A venir : des lifescycles manquant, le UseRouter et le UseRedux
                etc.
              </li>
            </ol>
          </Notes>
        </Slide>
        <Slide transition={['fade']} bgImage={chris} bgDarken="0.7">
          <Heading size={1} lineHeight={1} textColor="secondary">
            Mon avis
          </Heading>
          <List>
            <Appear>
              <ListItem textSize="3em">
                Les Hooks ne sont pas magiques, juste des tableaux
              </ListItem>
            </Appear>
            <Appear>
              <ListItem textSize="3em">Accessible</ListItem>
            </Appear>
            <Appear>
              <ListItem textSize="3em">La communauté est emballée</ListItem>
            </Appear>
            <Appear>
              <ListItem textSize="3em">Une première version</ListItem>
            </Appear>
            <Appear>
              <ListItem textSize="3em">Recompose still alive !</ListItem>
            </Appear>
          </List>
          <Notes>
            <ol className="notes">
              <li>Le UseEffect ne doit rien retourner</li>
            </ol>
          </Notes>
        </Slide>
        <Slide bgImage={question} bgDarken="0.7">
          <Heading size={1} lineHeight={1} textColor="secondary">
            Questions
          </Heading>
        </Slide>
        <Slide bgColor={'#222'} bgDarken="0.7">
          <Heading size={1} lineHeight={1} textColor="secondary">
            Merci
          </Heading>
          <Image src={yapot} width="30em" />
        </Slide>
        <Slide bgColor={'#222'} bgDarken="0.7">
          <Heading size={1} lineHeight={1} textColor="secondary">
            Ressources
          </Heading>
          <Text>
            Doc officielle : https://reactjs.org/docs/hooks-intro.html
          </Text>
          <Text>
            HOC+TS :
            https://medium.com/@jrwebdev/react-higher-order-component-patterns-in-typescript-42278f7590fb
          </Text>
          <Text>
            Fonctionnement des hooks :
            https://medium.com/the-guild/under-the-hood-of-reacts-hooks-system-eb59638c9dba
          </Text>
          <Text>
            Roadmap : https://reactjs.org/blog/2018/11/27/react-16-roadmap.html
          </Text>
          <Text>RFC : https://github.com/reactjs/rfcs/pull/68</Text>
          <Text>https://www.robinwieruch.de/react-hooks-fetch-data/</Text>
          <Text>
            https://medium.com/ottofellercom/can-react-hooks-api-replace-recompose-ea5460b7fde3
          </Text>
        </Slide>
      </Deck>
    );
  }
}
