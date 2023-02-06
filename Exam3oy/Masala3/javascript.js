var sonlar = [-9, -8, -7, -6, 34, 82, 27, 16];

var postivSon = [];
var negativeSon = [];

sonlar.forEach(function(item) {
  if (item < 0) {
    negativeSon.push(item);
  } else {
    postivSon.push(item)
  }
});

console.log(postivSon + ' позитивое число') 
console.log(negativeSon + ' отрицательное число')