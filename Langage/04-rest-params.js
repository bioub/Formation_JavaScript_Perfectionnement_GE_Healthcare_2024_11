function sum(a, b, ...otherNbs) {
  let result = a + b;

  for (const nb of otherNbs) {
    result += nb;
  }

  return result;
}

console.log(sum(1, 2, 3, 4));
