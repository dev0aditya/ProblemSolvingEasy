let num = 12;

console.log(sumOfNaturalNumRecursion(num));

function sumOfNaturalNumRecursion(num) {
  if (num == 1) {
    return 1;
  }

  return num + sumOfNaturalNumRecursion(num - 1);
}
