// Exerice 1
// Créer un namespace object Random (en s'inspirant de MyMath dans 11-object.js)
// qui contient les 4 fonctions suivantes
// Il faudra appeler getRandomInt :
// Random.getRandomInt(0, 100);

function getRandom() {
  return Math.random();
}

function getRandomArbitrary(min, max) {
  return Math.random() * (max - min) + min;
}

function getRandomInt(min, max) {
  const minCeiled = Math.ceil(min);
  const maxFloored = Math.floor(max);
  return Math.floor(Math.random() * (maxFloored - minCeiled) + minCeiled); // The maximum is exclusive and the minimum is inclusive
}

function getRandomIntInclusive(min, max) {
  const minCeiled = Math.ceil(min);
  const maxFloored = Math.floor(max);
  return Math.floor(Math.random() * (maxFloored - minCeiled + 1) + minCeiled); // The maximum is inclusive and the minimum is inclusive
}

// importe readline du fichier readline.js (binaire de Node.js)
const readline = require('readline');

// Exerice 2
// Créer une classe Jeu (ou fonction constructeur)
// qui va déclarer les 3 propriétés suivantes :
// - rl
// - entierAlea
// - essais
// en gardant les affections suivantes
// A ce stade le constructeur n'a pas de paramètres
// jouer devient une méthode de cette classe
// Donc l'appel de jouer serait
// const game = new Jeu();
// game.jouer();

// configure readline pour lire sur le clavier et écrire dans le terminal
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
const entierAlea = getRandomInt(0, 100);
const essais = [];

function jouer() {
  if (essais.length) {
    console.log('Vous avez déjà joué : ' + essais.join(' - '));
  }

  rl.question('Quel est le nombre ? ', (answer) => {
    console.log('Votre réponse : ' + answer);

    const entierSaisi = Number.parseInt(answer, 10);

    if (Number.isNaN(entierSaisi)) {
      console.log('Erreur: il faut saisir un nombre');
      return jouer();
    }

    essais.push(entierSaisi);

    if (entierSaisi < entierAlea) {
      console.log('Trop petit');
      jouer();
    } else if (entierSaisi > entierAlea) {
      console.log('Trop grand');
      jouer();
    } else {
      console.log('Gagné');
      rl.close();
    }
  });

}

jouer();

// Exercice 3
// Prévoir des options min et max au constructeur Jeu
// de sorte à ce que les appels suivants fonctionnent :
// const game = new Jeu();
// const game = new Jeu({ min: 10, max: 20 });
// const game = new Jeu({ max: 20 });
// const game = new Jeu({ min: 10 });
// const game = new Jeu({ });

// pile d'appels
// ^
// |                   [question]         [question]
// |[question]         [jouer   ]         [jouer   ]
// |[jouer   ]⟳        [=>      ]⟳        [=>      ]⟳
// +-------------------ENTREE-------------ENTREE-----------------> temps
//
