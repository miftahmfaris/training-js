function solution(A) {
  // write your code in JavaScript (Node.js 8.9.4)
  var swap = A.slice(0);
  swap.sort();
  var counter = 0;
  for (var i = 0; i < A.length; i++) {
    if (A[i] != swap[i]) {
      counter++;
    }
    if (counter > 2) {
      return false;
    }
  }
  if (counter == 0 || counter == 2) {
    return true;
  } else {
    return false;
  }
}

console.log(solution([1, 5, 3, 3, 7]));
console.log(solution([1, 3, 5, 3, 4]));
console.log(solution([1, 3, 5]));
console.log(solution([1, 5, 3]));
