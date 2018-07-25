function solution(A) {
  for (i = 1; i < 1000000; i++) {
    if (!A.includes(i)) {
      return i;
    }
  }
}

console.log(solution([1, 2, 3, 4, 5]));
console.log(solution([1, 3, 6, 4, 1, 2]));
