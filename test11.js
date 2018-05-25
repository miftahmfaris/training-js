function perfectNumber(number) {
  var result = 0;
  for (var i = 1; i <= number / 2; i++) {
    if (number % i == 0) {
      result += i;
    }
  }
  if (result == number) {
    return number + ' is a Perfect Number'
  }
  return number + ' is not a Perfect Number';
}
console.log(perfectNumber(6));
console.log(perfectNumber(28));
console.log(perfectNumber(78));
console.log(perfectNumber(496));
console.log(perfectNumber(812));
console.log(perfectNumber(8128));