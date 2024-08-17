let decimal = 18;

console.log(binaryConverter(decimal));

function binaryConverter(decimal) {
  let holder = "";

  while (decimal > 0) {
    holder = (decimal % 2) + holder;
    decimal = Math.floor(decimal / 2);
  }
  holder = Number(holder);
  return holder;
}
