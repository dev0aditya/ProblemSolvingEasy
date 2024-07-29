let num1 = 12;
let num2 = 30;
let keeper = 0;

function GCDfinder(num1, num2) {
  keeper = Math.min(num1, num2);
  let holder = 0;
  for (let i = 1; i <= keeper; i++) {
    if (num1 % i == 0 && num2 % i == 0) {
      holder = i;
    }
  }
  return holder;
}

console.log(GCDfinder(num1, num2));
