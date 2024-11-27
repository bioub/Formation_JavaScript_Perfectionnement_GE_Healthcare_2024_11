// Importer Jeu depuis le fichier jeu

import Jeu from "./jeu.mjs";

const game = new Jeu({
  min: 10,
  max: 20,
});
game.jouer();
