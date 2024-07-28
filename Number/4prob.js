let number = 12345;
let addedValue = 0;

while (number) {
  let keeper = number % 10;
  addedValue += keeper;
  number = Math.floor(number / 10);
}

console.log(addedValue);
