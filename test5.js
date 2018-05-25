function longestLetter(str) {
  var str = str.split(' ')
  var awal = str[0]
  for (var i = 1; i < str.length; i++) {
    if (awal.length < str[i].length) {
      awal = str[i]
    }
  }
  return awal;
}
console.log(longestLetter('Web Development Tutorial'));
console.log(longestLetter('Saya saya saya tidak rau'));
console.log(longestLetter('nantijugatahu kamu bisaatau tidak'));