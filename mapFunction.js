var map = function(array, callback) {
  var clone = array.slice();
  clone.forEach(function(element, i) {
    clone[i] = callback(element);
  });
  return clone;
};

var words = ["ground", "control", "to", "major", "tom"];

console.log(
(words, function(word) {
  return word.length;
}));


console.log(
map(words, function(word) {
  return word.toUpperCase();
}));

console.log(
map(words, function(word) {
  return word.split('').reverse().join('');
}));




// var map2 = function(cb) {
//   const clone = this.slice();
//   clone.forEach(function(el,i) {
//     clone[i] = cb(el);
//     // el = cb(el);
//   });
//   return clone;
// };

// Array.prototype.map2 = map2;

// console.log(
//   'new',
//   [1,2,3].map2(function(x){ return x*x; })
// );