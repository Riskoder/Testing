function testing(n) {
  console.log(n + ` testing git`);
  return n > 0 || n < 8 ? true : `testing git conflicts`;
}

console.log(testing(4));
