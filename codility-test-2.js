function solution(A, B) {
  var result = B[0];
  for (var i = 0; i < B.length; i++) {
    if (result > B[i]) {
      result = B[i];
    }
  }
  if (A.includes(result)) {
    return result;
  } else {
    return -1;
  }
}

console.log(solution([1, 3, 2, 1], [4, 2, 5, 3, 2]));
console.log(solution([2, 1], [3, 3]));
