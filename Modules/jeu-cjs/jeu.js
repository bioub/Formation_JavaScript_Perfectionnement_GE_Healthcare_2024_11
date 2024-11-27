// Import Random depuis le fichier random
// Exporter Jeu pour l'importer dans main
const { Random } = require('./random');
const readline = require('node:readline');

class Jeu {
  constructor(options = {}) {
    const min = options?.min ?? 0;
    const max = options?.max ?? 100;

    this.rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout,
    });
    this.entierAlea = Random.getRandomInt(min, max);
    this.essais = [];
  }
  jouer() {
    if (this.essais.length) {
      console.log('Vous avez déjà joué : ' + this.essais.join(' - '));
    }

    this.rl.question('Quel est le nombre ? ', (answer) => {
      console.log('Votre réponse : ' + answer);

      const entierSaisi = Number.parseInt(answer, 10);

      if (Number.isNaN(entierSaisi)) {
        console.log('Erreur: il faut saisir un nombre');
        return this.jouer();
      }

      this.essais.push(entierSaisi);

      if (entierSaisi < this.entierAlea) {
        console.log('Trop petit');
        this.jouer();
      } else if (entierSaisi > this.entierAlea) {
        console.log('Trop grand');
        this.jouer();
      } else {
        console.log('Gagné');
        this.rl.close();
      }
    });

  }

}


module.exports = Jeu;
