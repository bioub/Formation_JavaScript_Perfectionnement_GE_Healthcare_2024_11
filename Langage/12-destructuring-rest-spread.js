const nbs = [1, 2, 3, 4];

//                  [1 , 2   , 3    , 4     ]
function myFunction([un, deux, trois, quatre]) {
  // const un = array[0];
  // const deux = array[1];
}

myFunction(nbs);

const fullName = 'Romain Bohdanowicz';
// const tmp = fullName.split(' ');
// const prenom = tmp[0];
// const nom = tmp[1];
const [prenom, nom] = fullName.split(' ');

const coords = {x: 1, y: 2};

//    {x: 1  , y: 2  }
const {x: myX, y: myY} = coords;


// Idem que const { x: x, y: y } = coords;
const { x, y = 0 } = coords;



// L'operateur REST
// Transforme la syntaxe d'une liste de valeur (ici 3, 4)
// en un tableau (ici [3, 4])

function sum(a, b, ...otherNbs) {
  let result = a + b;

  for (const nb of otherNbs) {
    result += nb;
  }

  return result;
}

console.log(sum(1, 2, 3, 4));


const newNbs = [1, 2, 3, 4];
const [un, deux, ...troisEtQuatre] = newNbs;
console.log(troisEtQuatre); // [3, 4]


// L'operateur SPREAD
// Transforme la syntaxe d'un tableau (ici [1, 2, 3, 4])
// en une liste de valeur (ici 1, 2, 3, 4)

//            [1, 2, 3, 4]
const clone = [...newNbs];

// Ajouter en immuable
const newNbsImmuable = [...newNbs, 5];

function sum(a, b, c, d) {
  return a + b + c + d;
}

// sum(newNbs[0], newNbs[1]n )
console.log(sum(...newNbs));

// ES2018 on peut utiliser REST / SPREAD sur des objets

// SPREAD
const cloneCoords = {...coords};

// ajouter en immuable
const coords3d = {...coords, z: 3};

// REST
const {z, ...coords2d} = coords3d;
