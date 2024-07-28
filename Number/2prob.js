let num = 5;

function factorialOf(num) {
  if (num <= 1) {
    return 1;
  } else {
    let holder = num;
    for (let i = num - 1; i > 0; i--) {
      holder *= i;
    }
    return holder;
  }
}

console.log(factorialOf(num));
