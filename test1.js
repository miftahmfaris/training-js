function palindrome(str) {
  var hasil = '';
  for (var i = str.length - 1; i >= 0; i--) {
    hasil += str[i]
  }
  if (str == hasil) {
    return true;
  }
  return false;
}

console.log(palindrome('katak'))