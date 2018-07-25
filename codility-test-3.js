function solution(A, X) {
  var N = A.length;
  if (N === 0) {
    return -1;
  }
  var l = 0;
  var r = N - 1;
  while (l <= r) {
    var m = Math.floor((l + r) / 2);
    if (A[m] >= X) {
      r = m - 1;
    } else {
      l = m + 1;
      console.log(l);
    }
  }
  if (A[l] == X) {
    return l;
  }
  return -1;
}

// console.log(solution([1, 2, 5, 9, 9], 1));
// console.log(solution([1, 2, 5, 9, 9], 5));
// console.log(solution([1, 2, 5, 7, 9, 9], 5));
// console.log(solution([1, 2, 5, 9, 9], 9));
console.log(solution([1, 5, 2, 9, 9], 2));
