const nbs = [1, 2, 3];
nbs.push(4);
console.log(nbs); // [1, 2, 3, 4]

nbs.sort(); // Muable (Mutable)
// nbs = nbs.toSorted(); // Immuable (Immutable)

const coords = {
  x: 1,
  y: 2,
};

coords.z = 3;

let prenom = 'R';
prenom += 'o'; // aurait fait une erreur avec const
