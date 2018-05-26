function anagrams(word, words) {
  result = [];
  for (var i = 0; i < words.length; i++) {
    if (
      word
        .split("")
        .sort()
        .join("") ==
      words[i]
        .split("")
        .sort()
        .join("")
    ) {
      result.push(words[i]);
    }
  }
  return result;
}

console.log(anagrams("abba", ["aabb", "abcd", "bbaa", "dada"])); // => ['aabb', 'bbaa']
console.log(anagrams("racer", ["crazer", "carer", "racar", "caers", "racer"])); // => ['carer', 'racer']
console.log(anagrams("laser", ["lazing", "lazy", "lacer"])); // => []
