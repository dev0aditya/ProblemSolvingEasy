let base = 5;
let exponent = 2;

console.log(powerOf(base, exponent));
console.log(powerOfS(base, exponent));

//First Way
function powerOf(base, exponent) {
  // this is more compatible for older version of js
  return Math.pow(base, exponent);
}

//Second Way
function powerOfS(base, exponent) {
  // this was introduced in ES6 and has more similarity with maths notion and more prefered
  return base ** exponent;
}
