function array_diff(a, b) {
  hasil = [];
  for (var i = 0; i < a.length; i++) {
    if (b.length == 0) {
      hasil.push(a[i]);
    } else {
      for (var j = 0; j < b.length; j++) {
        if (a[i] != b[j]) {
          hasil.push(a[i]);
        }
      }
    }
  }
  return hasil;
}

console.log(array_diff([1, 2, 2, 2, 3], [2]));
console.log(array_diff([1, 2, 2], [1]));
console.log(array_diff([1, 2, 2], []));
