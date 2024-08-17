let num = 18;

console.log(DecimalToBinaryRecursion(num));

function DecimalToBinaryRecursion(num) {
  let holder = "";
  if (num > 0) {
    DecimalToBinaryRecursion(() => {
      holder = (num % 2) + holder;
      num = Math.floor(num / 2);
      return holder;
    });
  }

  return holder;
}
