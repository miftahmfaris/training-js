function lampsMultiplication(num) {
  result = 0;
  for (var i = 1; i <= num; i++) {
    for (var j = 1; j <= num; j++) {
      if (j % i == 0) {
        console.log(j + " j");
        console.log(i + "  i");
        console.log(j % i);
        result += 1;
      }
    }
  }
  return result;
}

console.log(lampsMultiplication(5));
