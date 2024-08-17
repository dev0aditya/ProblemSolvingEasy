let num = 496;

if (perfectNum(num)) {
  console.log("Yes Perfect Number");
} else {
  console.log("Not so perfect Number");
}

function perfectNum(num) {
  let holder = 0;
  for (let i = 1; i < num; i++) {
    if (num % i == 0) {
      holder += i;
    }
  }

  return holder == num;
}
