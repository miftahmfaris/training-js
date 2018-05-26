function toCamelCase(str) {
  result = str.split(/[.\*+-/_]/);
  array = [];
  array.push(result[0]);
  string = "";
  for (var i = 1; i < result.length; i++) {
    array.push(result[i][0].toUpperCase().concat(result[i].substr(1)));
  }
  return array.join("");
}
console.log(toCamelCase("")); //, '', "An empty string was provided but not returned")
console.log(toCamelCase("the_stealth_warrior")); //, "theStealthWarrior", "toCamelCase('the_stealth_warrior') did not return correct value")
console.log(toCamelCase("The-Stealth-Warrior")); //, "TheStealthWarrior", "toCamelCase('The-Stealth-Warrior') did not return correct value")
console.log(toCamelCase("A-B-C")); //, "ABC", "toCamelCase('A-B-C') did not return correct value")
