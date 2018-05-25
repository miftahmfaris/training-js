function createMatrix(num) {
  var hasil = '';
  for (var i = 0; i < num; i++) {
    for (var j = 0; j < num; j++) {
      if (i == j) {
        hasil = 1
      } else {
        hasil = 0
      }
      console.log(hasil);
    }
    console.log('-----------');
  }
  // return hasil;
}
console.log(createMatrix(4));