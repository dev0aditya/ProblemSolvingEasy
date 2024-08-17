let num = 25;

if (automorphicNum(num)) {
  console.log("Yes it is an automorphic number");
} else {
  console.log("Try some other number");
}

function automorphicNum(num) {
  let sqr = num ** 2;
  let holder = 1;
  let copy = num;
  while (copy > 0) {
    holder *= 10;
    copy = Math.floor(copy / 10);
  }
  return sqr % holder == num;
}
