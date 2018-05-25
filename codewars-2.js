function disemvowel(str) {
  return str.replace(/[aiueo]/ig, "");
}

console.log(disemvowel("This website is for losers LOL!"));
