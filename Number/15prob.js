let num = 136;

console.log(decimalToOctal(num));

function decimalToOctal(num) {
  let holder = "";

  while (num > 0) {
    holder = (num % 8) + holder;
    num = Math.floor(num / 8);
  }

  return holder;
}
