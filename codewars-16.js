function inArray(array1, array2) {
  //...
  result = [];
  for (var i = 0; i < array2.length; i++) {
    for (var j = 0; j < array1.length; j++) {
      if (
        array2[i].includes(array1[j]) == true &&
        result.indexOf(array1[j]) == -1
      ) {
        result.push(array1[j]);
      }
    }
  }
  return result.sort();
}
console.log(
  inArray(
    ["arp", "live", "strong"],
    ["lively", "alive", "harp", "sharp", "armstrong"]
  )
);
console.log(
  inArray(
    ["tarp", "mice", "bull"],
    ["lively", "alive", "harp", "sharp", "armstrong"]
  )
);
