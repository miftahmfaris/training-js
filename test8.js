function getTypeOfValue(str) {
  return typeof str;
}
console.log(getTypeOfValue('str'));
console.log(getTypeOfValue(14));
console.log(getTypeOfValue(true));
console.log(getTypeOfValue([12, 123, 23]));
console.log(getTypeOfValue());
console.log(getTypeOfValue(getTypeOfValue));