function spinWords(str) {
  //TODO Have fun :)
  array = [];
  string = str.split(" ");
  for (var i = 0; i < string.length; i++) {
    if (string[i].split("").length > 5) {
      hasil = string[i]
        .split("")
        .reverse()
        .join("");
      array.push(hasil);
    } else {
      array.push(string[i]);
    }
  }
  return array.join(" ");
}

console.log(spinWords("Hey fellow warriors"));
