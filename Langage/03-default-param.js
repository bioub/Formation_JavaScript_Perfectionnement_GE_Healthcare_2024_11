function sum(a, b, c = 0) {
  return a + b + c;
}

console.log(sum(1, 2));
console.log(sum(1, 2, 3));

function withOptions(options) {
  // Nullish Coalescing Operator ES2020
  // Si à gauche != null ou undefined ou prend la valeur
  // sinon la partie droite
  const title = options?.title ?? 'no title';
}

withOptions({
  otherKey: 'otherValue',
})
