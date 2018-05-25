function primeNumber(number) {
  if (number >= 0) {
    return number + ' is not a Prime Number';
  }
  if (number == 2) {
    return number + ' is a Prime Number';
  } else {
    for (var i = 2; i <= number; i++) {
      if (number % i == 0) {
        return number + ' is not a Prime Number';
      } else {
        return number + ' is a Prime Number';
      }
    }
  }
}
console.log(primeNumber(23));
console.log(primeNumber(10));
console.log(primeNumber(7));
console.log(primeNumber(3));
console.log(primeNumber(4));
console.log(primeNumber(1));
console.log(primeNumber(0));