function extractMoney(money, changeMoney) {
  var arr = [];
  var hasil = money;
  for (var i = 0; i < changeMoney.length; i++) {
    for (var j = 0; j < changeMoney.length; j++) {
      console.log(hasil + ' hasil');
      console.log(changeMoney[i] + ' iiiiiiiii');
      // console.log(changeMoney[j] + ' jjjjj');
      if (hasil >= changeMoney[i]) {
        hasil -= changeMoney[i];
        arr.push(changeMoney[i]);
      }
    }
  }
  return arr;
}
console.log(extractMoney(46, [25, 10, 5, 2, 1]));
// console.log(extractMoney(100, [25, 10, 5, 2, 1]));
// console.log(extractMoney(377, [25, 10, 5, 2, 1]));