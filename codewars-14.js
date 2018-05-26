function duplicateEncode(word) {
  // ...
  // result = word.replace(/[a-zA-Z0-9\s\@&\/\\#,+()$~%.'":*?<>{}]/g, "(");
  array = [];
  firstArr = word[0];
  for (var i = 0; i < word.length; i++) {
    for (var j = 1; j < word.length; j++) {
      if (word[i] != word[j]) {
        array.push("(");
      }
    }
  }

  return array;
}

console.log(duplicateEncode("din")); //,"(((");
console.log(duplicateEncode("recede")); //,"()()()");
console.log(duplicateEncode("Success")); //,")())())","should ignore case");
console.log(duplicateEncode("(( @)")); //,"))((");
