const names = ['Romain', 'Eric', 'Paul'];

function hello(name) {
  console.log('Hello ' + name);
}

names.forEach(hello);

// pile d'appels
// ^
// |
// |[hello][hello][hello]
// |[forEach            ]
// +--------------------------------------> temps
