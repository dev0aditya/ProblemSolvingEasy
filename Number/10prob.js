let num = 81;

if (perfectSqr(num)) {
  console.log("Perfect Square");
} else {
  console.log("Not a Perfect Square");
}

function perfectSqr(num) {
  let root = Math.floor(num ** (1 / 2));
  return Math.pow(root, 2) == num;
}
