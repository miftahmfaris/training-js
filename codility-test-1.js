function solution(S) {
  //TODO Have fun :)
  array = [];
  string = S.split(" ");
  for (var i = 0; i < string.length; i++) {
    hasil = string[i]
      .split("")
      .reverse()
      .join("");
    array.push(hasil);
  }
  return array.join(" ");
}

console.log(solution("Hey fellow warriors"));
