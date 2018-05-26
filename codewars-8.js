function digPow(n, p) {
  // ...
  arr = n.toString().split("");
  result = Number(Math.pow(arr[0], p));
  for (var i = 1; i < arr.length; i++) {
    result = result + Number(Math.pow(arr[i], p + i));
  }
  for (var j = 0; j < 100000; j++) {
    if (result == n * j) {
      return j;
    }
  }
  return -1;
}
console.log(digPow(89, 1)); //, 1)
console.log(digPow(92, 1)); //, -1)
console.log(digPow(695, 2));
console.log(digPow(46288, 3)); //, 51)
