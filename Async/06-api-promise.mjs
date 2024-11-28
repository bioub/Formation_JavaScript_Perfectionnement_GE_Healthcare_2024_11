import { readFile } from 'node:fs/promises';
import { setTimeout } from 'node:timers/promises';


// function timeout(delayMs) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve();
//     }, delayMs);
//   });
// }

setTimeout(400)
  .then(() => {
    console.log('400ms')
  });

// Combiner les promesses en entrée
// en une promesse qui sera résolue
// lors que toutes les promesses auront été
// résolue
// si une promesse est rejetée, l'ensemble est rejeté
Promise.all([
  readFile('.editorconfig'),
  readFile('03-promise.js'),
]).then((arrayResult) => {

})

// Promise.allSettled
// Combiner les promesses en entrée
// en une promesse qui sera résolue
// lors que toutes les promesses auront été
// résolue
// si une promesse est rejetée, on récupère les résultats partiels


// Promise.race
// Combiner les promesses en entrée
// en une promesse qui sera résolue
// lors que toutes la première promesse aura été résolu
// si la promesse est rejetée, l'ensemble est rejeté
Promise.race([
  readFile('.editorconfig'),
  setTimeout(4000),
]).then(() => {

})

// Promise.any
// Combiner les promesses en entrée
// en une promesse qui sera résolue
// lors que toutes la première promesse aura été résolu
// si toutes les promesses sont rejetées, l'ensemble est rejeté
// si une promesse est rejeté on attends la suivante
Promise.any([
  ping('server1'),
  ping('server2'),
  ping('server3'),
])
