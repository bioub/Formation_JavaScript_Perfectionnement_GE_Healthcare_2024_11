// IIFE
// Immediately Invoked Function Expression
(function () {
  'use strict';
  const names = ['Romain', 'Eric', 'Paul'];

  for (const n of names) {
    console.log(MyLib.hello(n));
  }
}());