function humanReadable(seconds) {
  // TODO
  var t = new Date(1970, 0, 1);
  t.setSeconds(seconds);
  console.log(t.setSeconds(seconds));
  var s = t.toTimeString().substr(0, 8);
  console.log(s);
  if (seconds > 86399)
    s = Math.floor((t - Date.parse("1/1/70")) / 3600000) + s.substr(2);
  return s;
}
console.log(humanReadable(0)); //, '00:00:00', 'humanReadable(0)');
console.log(humanReadable(5)); //, '00:00:05', 'humanReadable(5)');
console.log(humanReadable(60)); //, '00:01:00', 'humanReadable(60)');
console.log(humanReadable(86399)); //, '23:59:59', 'humanReadable(86399)');
console.log(humanReadable(359999)); //, '99:59:59', 'humanReadable(359999)');
