let num = 145;

if (strongNum(num)) {
  console.log("Yes it is a strong number");
} else {
  console.log("No it is not a strong number");
}

function strongNum(num) {
  let copy = num;
  let keeper = 0;
  while (num > 0) {
    let holder = num % 10;
    let spoter = 1;

    for (let i = holder; i > 0; i--) {
      spoter *= i;
    }
    num = Math.floor(num / 10);
    keeper += spoter;
  }

  return keeper == copy;
}
