// En JS un certain nombre d'objet sont pré-existants :
console.log("typeof Math", typeof Math); // object
console.log("typeof JSON", typeof JSON); // object
console.log("typeof String", typeof String); // function (donc object)

// Certains objets sont définis par la plateforme

// Ex dans Node.js
console.log("typeof process", typeof process); // object

// Ex dans le navigateur
console.log("typeof document", typeof document); // object

// Certains objets ont des types (qu'on appelle des prototypes)
console.log("[] instanceof Array", [] instanceof Array); // true
console.log(
  "function() {} instanceof Function",
  function () {} instanceof Function
); // true
console.log("typeof function() {}", typeof function () {}); // function

// L'objet est dynamique (c'est un dictionnaire)

// On peut ajouter des clés/valeurs
console.log("Math.sum", Math.sum); // undefined
Math.sum = (a, b) => a + b;
console.log("Math.sum", Math.sum); // [Function (anonymous)]
console.log("Math.sum(1, 2)", Math.sum(1, 2)); // 3

// On peut modifier des clés/valeurs
Math.random = () => 0.5;
console.log("Math.random()", Math.random()); // 0.5

// On peut supprimer des clés/valeurs
delete Math.sum;
console.log("Math.sum", Math.sum); // undefined

// MAUVAISE PRATIQUE : de modifier des objets qu'on a pas créé soit même
// (à l'exception des tests automatisés)

// 2 syntaxes pour accéder au contenu de l'objet

console.log(Math.PI); // 3.141592653589793
console.log(Math["PI"]); // 3.141592653589793

// Les crochets sont plus dynamiques
const key = "PI";
console.log(Math[key]); // 3.141592653589793

// 2 systèmes pour créer ses objets
// Object Literal
// 2 use cases :
// - l'objet n'est créé qu'une fois (le temps de passer les paramètres à readline.createInterface()
// ou si on veut créer un namespace Object)
// - l'objet est simple créer et potentiellement plusieurs instances
// dans ce cas là éviter les fonctions

const MyMath = {
  sum(a, b) {
    return a + b;
  },
  sub(a, b) {
    return a - b;
  }
};

console.log(MyMath.sum(1, 2));


const coordsA = {
  x: 1,
  y: 2,
  // info() { }
};

const coordsB = {
  x: 1,
  y: 2,
  // info() { }
};

// console.log(coordsA.info === coordsB.info); // false (2 fonctions différentes)



// Constructor
// use case :
// - plusieurs instances avec des fonctions
// - type (prototype)
// function User(name) {
//   this.name = name;
// }

// User.prototype.hello = function() {
//   return 'Hello ' + this.name;
// }

class User {
  constructor(name) {
    this.name = name;
  }
  hello() {
    return 'Hello ' + this.name;
  }
}

const romain = new User('Romain');
console.log('typeof User', typeof User); // function
console.log('typeof romain', typeof romain); // object
console.log('romain instanceof User', romain instanceof User); // true
console.log('romain instanceof Object', romain instanceof Object); // true
console.log('romain.name', romain.name); // Romain

const toto = new User('Toto');
// delete toto.name;
// delete User.prototype.hello;
console.log('toto.hello()', toto.hello()); // Hello Toto
console.log("toto.hasOwnProperty('name')", toto.hasOwnProperty('name')); // true
console.log("toto.hasOwnProperty('hello')", toto.hasOwnProperty('hello')); // false

console.log('toto.hello === romain.hello', toto.hello === romain.hello); // true (la même fonction)


// for (const key in coordsA) {
//   if (Object.prototype.hasOwnProperty.call(coordsA, key)) {
//     const value = coordsA[key];

//   }
// }

const contact = {
  firstName: 'Romain',
  lastName: 'Bohdanowicz',
};

for (const [key, value] of Object.entries(contact)) {
  console.log(key, value);
}
