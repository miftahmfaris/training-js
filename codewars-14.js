function duplicateEncode(word) {
  // ...
  // result = word.replace(/[a-zA-Z0-9\s\@&\/\\#,+()$~%.'":*?<>{}]/g, "(");
  array = [];
  for (var i = 0; i < word.length; i++) {
    console.log(array.indexOf(word[i]));
    if (array.indexOf(word[i]) == -1) {
      array.push(word[i]);
    }
  }

  return array;
}

console.log(duplicateEncode("din")); //,"(((");
console.log(duplicateEncode("recede")); //,"()()()");
console.log(duplicateEncode("Success")); //,")())())","should ignore case");
console.log(duplicateEncode("(( @)")); //,"))((");
