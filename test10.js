function secondLowestSecondGreatest(num) {
  //Delete Same Number
  var arrBaru = [];
  for (var i = 0; i < num.length; i++) {
    for (var j = 0; j < num.length; j++) {
      if (i !== j && arrBaru.indexOf(num[i]) == -1) {
        arrBaru.push(num[i])
      }
    }
  }
  //Sorting lowest to highest
  for (var i = 0; i < arrBaru.length; i++) {
    for (var j = 0; j < arrBaru.length; j++) {
      if (arrBaru[i] < arrBaru[j]) {
        var temp = arrBaru[i];
        arrBaru[i] = arrBaru[j];
        arrBaru[j] = temp;
      }
    }
  }

  var hasil = [];
  if (arrBaru.length <= 1) {
    return []
  } else if (arrBaru.length == 2) {
    return arrBaru
  } else if (arrBaru.length == 3) {
    hasil.push(arrBaru[1])
    hasil.push(arrBaru[1])
  } else {
    hasil.push(arrBaru[1])
    hasil.push(arrBaru[arrBaru.length - 2])
  }
  return hasil;
}
console.log(secondLowestSecondGreatest([1, 2, 3, 4, 5, 5, 5]));
console.log(secondLowestSecondGreatest([1, 6, 8, 8, 8, 8, 8, 8, 4, 9]));
console.log(secondLowestSecondGreatest([1, 6, 8, 4]));
console.log(secondLowestSecondGreatest([]));
console.log(secondLowestSecondGreatest([9]));
console.log(secondLowestSecondGreatest([9, 8]));
console.log(secondLowestSecondGreatest([1, 2, 3]));