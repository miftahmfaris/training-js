function getMostCommonWord(string) {
  var word = getWord(string);
  var maxCounter = 0;
  var mostWord = "";

  for (var i = 0; i < word.length; i++) {
    var counter = getWordCount(word[i], string);
    if (counter > maxCounter) {
      mostWord = word[i];
      maxCounter = counter;
    }
  }
  return mostWord;
}

function dedupArray(arr) {
  var result = [];
  for (var i = 0; i < arr.length; i++) {
    if (result.indexOf(arr[i]) == -1) {
      result.push(arr[i]);
    }
  }
  return result;
}

function getWord(string) {
  var newString = dedupArray(string.split(" "));
  counter = 1;
  result = [];

  for (var i = 0; i < newString.length; i++) {
    result.push(newString[i]);
  }
  return result;
}

function getWordCount(word, sentence) {
  var counter = 0;
  var newSentence = sentence.split(" ");

  for (var i = 0; i < newSentence.length; i++) {
    if (newSentence[i] == word) {
      counter++;
    }
  }
  return counter;
}

console.log(getMostCommonWord("selamat pagi pak mau kemana pak"));
console.log(getMostCommonWord("selamat pagi"));
console.log(getMostCommonWord("foo bar baz bar baz"));
// console.log(getWordCount(newString, "selamat pagi pak mau kemana pak"));
