function countVowel(str) {
  var vowel = 'aiueo'.split('')
  var counter = 0;
  for (var i = 0; i < vowel.length; i++) {
    for (var j = 0; j < str.length; j++) {
      if (vowel[i] == str[j]) {
        counter++
      }
    }
  }
  return counter;
}
console.log(countVowel('The quick brown fox'));
console.log(countVowel('aaaaaaaaaaaaaaaaaaaaaaa'));