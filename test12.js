function factorNumber(num) {
  var arr = [];
  for (var i = 0; i <= num; i++) {
    if (num % i == 0) {
      arr.push(i)
    }
  }
  //   var arr = [];
  //   var hasil = 0;
  //   for (var i = num; i >= 1; i--) {
  //     hasil = num / i;
  //     if (hasil == hasil.toFixed()) {
  //       arr.push(hasil)
  //     }
  //   }
  return arr;
}
console.log(factorNumber(15));
console.log(factorNumber(16));
console.log(factorNumber(17));