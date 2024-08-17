let num = 121;
let holder = 0;

console.log(sumOfDigsRecursion(num));

function sumOfDigsRecursion(num) {
  if (num === 0) {
    return 0;
  }

  return (num % 10) + sumOfDigsRecursion(Math.floor(num / 10));
}
