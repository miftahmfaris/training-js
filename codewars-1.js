function GetSum(a, b) {
  //Good luck!
  if (a == b) {
    return a;
  } else if (a < b && a < 0) {
    hasil = 0;
    for (var i = a; i < b; i++) {
      hasil = hasil + i;
    }
    return hasil + b;
  } else if (b < a && b < 0) {
    hasil = 0;
    for (var i = b; i < a; i++) {
      hasil = hasil + i;
    }
    return hasil + a;
  } else if (a < b) {
    hasil = 0;
    for (var i = a; i <= b; i++) {
      hasil = hasil + i;
    }
    return hasil;
  } else {
    hasil = 0;
    for (var i = b; i <= a; i++) {
      hasil = hasil + i;
    }
    return hasil;
  }
}

console.log(GetSum(-1, 2));
console.log(GetSum(248, 387));
