function solution(str) {
  result = str.match(/.{1,2}/g);
  for (var i = 0; i < result.length; i++) {
    if (result[i].length == 1) {
      result[i] = result[i] + "_";
    }
  }
  return result;
}
console.log(solution("abc")); // should return ['ab', 'c_']
console.log(solution("abcdef")); // should return ['ab', 'cd', 'ef']
