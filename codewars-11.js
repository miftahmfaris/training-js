function tickets(peopleInLine) {
  // ...
  arraySeli = [];
  arrayCustomer = [];
  for (var i = 0; i < peopleInLine.length; i++) {
    if (peopleInLine[i] - 25 == 0) {
      arraySeli.push(peopleInLine[i]);
    } else {
      arraySeli.push(25);
      arrayCustomer.push(peopleInLine[i] - 25);
    }
  }
  resultSeli = arraySeli[0];
  for (var i = 1; i < arraySeli.length; i++) {
    resultSeli += arraySeli[i];
  }
  resultCustomer = arrayCustomer[0];
  for (var j = 1; j < arrayCustomer.length; j++) {
    resultCustomer += arrayCustomer[j];
  }
  console.log(resultSeli);
  console.log(resultCustomer);
  if ((resultSeli == resultCustomer)) {
    return "YES";
  } else {
    return "NO";
  }
}

console.log(tickets([25, 25, 50, 50])); //, "YES");
console.log(tickets([25, 100])); //, "NO");
console.log(
  tickets([25, 50, 25, 100, 25, 25, 50, 100, 25, 25, 50, 100, 25, 50, 25, 100])
); //YES
console.log(
  tickets([25, 50, 25, 100, 25, 25, 25, 100, 25, 50, 25, 100, 25, 50, 50, 25])
); //NO
console.log(tickets([50, 50, 50, 50, 50, 50, 50, 50, 50, 50])); //NO
console.log(tickets([25, 25, 25, 25, 25, 100, 100])); //NO
