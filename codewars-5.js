function digital_root(n) {
  // ...
  string = n.toString().split("");
  result = 0;
  for (var i = 0; i < string.length; i++) {
    result = result + Number(string[i]);
  }
  stringResult = result.toString().split("");
  finalResult = 0;
  if (stringResult.length > 1) {
    for (var j = 0; j < stringResult.length; j++) {
      finalResult = finalResult + Number(stringResult[j]);
    }
    return finalResult;
  } else {
    return result;
  }
}

console.log(digital_root(16)); //7
console.log(digital_root(942)); //6
console.log(digital_root(132189)); //6
