function uniqueChar(str) {
  // var uniql = "";
  // for (var i = 0; i < str.length; i++) {
  //
  //   if (uniql.indexOf(str.charAt(i)) == -1) {
  //     uniql += str[i];
  //
  //   }
  // }
  // return uniql;
  var arr = [];
  for (var i = 0; i < str.length; i++) {
    for (var j = 0; j < str.length; j++) {
      if (i != j && arr.indexOf(str[i]) == -1) {
        arr.push(str[i])
      }
    }
  }
  return arr.join('');
}
console.log(uniqueChar('thequickbrownfoxjumpsoverthelazydog'));