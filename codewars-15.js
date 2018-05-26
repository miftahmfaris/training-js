function findUniq(arr) {
  // do magicvar
  var n = arr.length;
  var hash = {};
  var result = null;

  for (var i = 0; i < n; i++) {
    if (arr[i] in hash) {
      hash[arr[i]] += 1;
    } else {
      hash[arr[i]] = 1;
    }
  }

  for (var j in hash) {
    if (hash[j] == 1) {
      result = j;
    }
  }

  return result;
}

console.log(findUniq([0, 1, 0])); //, 1);
console.log(findUniq([1, 1, 1, 2, 1, 1])); //, 2);
console.log(findUniq([3, 10, 3, 3, 3])); //, 10);
