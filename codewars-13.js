function order(words) {
  // ...
  words = words.split(" ");
  var customSort = function(a, b) {
    console.log(a);
    console.log(Number(a.match(/(\d+)/g)[0]) + "   aa");
    console.log(b);
    console.log(Number(b.match(/(\d+)/g)[0]) + "   bb");
    console.log(Number(a.match(/(\d+)/g)[0]) - Number(b.match(/(\d+)/g)[0]));
    return Number(a.match(/(\d+)/g)[0]) - Number(b.match(/(\d+)/g)[0]);
  };
  sorted = words.sort(customSort);
  console.log(words.sort(customSort));
  return sorted.join(" ");
}

console.log(order("is2 Thi1s T4est 3a")); //, "Thi1s is2 3a T4est")
console.log(order("4of Fo1r pe6ople g3ood th5e the2")); //, "Fo1r the2 g3ood 4of th5e pe6ople")
console.log(order("")); //, "")
