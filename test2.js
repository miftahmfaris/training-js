function generateStr(str) {
  var arr = [];
  var hasil = '';
  for (var i = 0, j = 1; i < str.length; i++, j++) {
    arr[i] = str.substring(i, j)
  }

  var array = [];
  var slent = Math.pow(2, arr.length)

  for (var i = 0; i < slent; i++) {
    var hasil = '';
    for (var j = 0; j < arr.length; j++) {
      console.log('jjj ' + arr[j]);
      if (i & Math.pow(2, j)) {
        console.log(hasil);
        hasil += arr[j];
        console.log(hasil);
      }
    }
    if (hasil !== '') {
      array.push(hasil)
    }
  }
  return array;
}

// function substrings(str1) {
//   var array1 = [];
//   for (var x = 0, y = 1; x < str1.length; x++, y++) {
//     array1[x] = str1.substring(x, y);
//   }
//   var combi = [];
//   var temp = "";
//   var slent = Math.pow(2, array1.length);
//
//   for (var i = 0; i < slent; i++) {
//     temp = "";
//     for (var j = 0; j < array1.length; j++) {
//       if ((i & Math.pow(2, j))) {
//         temp += array1[j];
//       }
//     }
//     if (temp !== "") {
//       combi.push(temp);
//     }
//   }
//   console.log(combi.join("\n"));
// }
//
// substrings("dog");

console.log(generateStr('dog'));