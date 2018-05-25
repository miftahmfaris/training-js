function capitalize(str) {
  var str = str.split(' ')
  var hasil = '';
  for (var i = 0; i < str.length; i++) {
    hasil += str[i][0].toUpperCase() + str[i].slice(1) + ' '
  }
  return hasil;
}
// newarray1.push(array1[x].charAt(0).toUpperCase()+array1[x].slice(1));
console.log(capitalize('the quick brown fox'));