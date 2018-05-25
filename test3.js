function sortingAlpha(str) {
  var str = str.split('')
  for (var i = 0; i < str.length; i++) {
    for (var j = i + 1; j < str.length; j++) {
      if (str[i] > str[j]) {
        var temp = str[i];
        str[i] = str[j];
        str[j] = temp;
      }
    }
  }
  return str.join('');
}
console.log(sortingAlpha('webmaster'))