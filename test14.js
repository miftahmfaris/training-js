function pangkat(base, exponent) {
  var hasil = base;
  for (var i = 1; i < exponent; i++) {
    hasil *= base;
  }
  console.log(Math.pow(base, exponent));
  return hasil;
}
console.log(pangkat(2, 3));
console.log(pangkat(3, 3));
console.log(pangkat(6, 4));