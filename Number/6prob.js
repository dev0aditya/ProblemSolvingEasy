let num = 153;

if (isArmstrong(num)) {
  console.log("Is an Armstrong Number");
} else {
  console.log("Not an Armstrong Number");
}

function isArmstrong(num) {
  let keeper = num;
  let hold = 0;
  while (keeper) {
    let holder = keeper % 10;
    holder = holder ** 3;
    hold += holder;
    keeper = Math.floor(keeper / 10);
  }

  //   if (num == hold) {
  //     return true;
  //   } else {
  //     return false;
  //   }
  return num === hold;
}
