function dedupArray(arr) {
  result = [];
  for (var i = 0; i < arr.length; i++) {
    if (result.indexOf(arr[i]) == -1) {
      result.push(arr[i]);
    }
  }
  return result;
}

console.log(dedupArray([1, 2, 5, 4, 2, 1, 10]));
