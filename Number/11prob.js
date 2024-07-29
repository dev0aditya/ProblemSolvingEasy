let start = 1;
let end = 21;

console.log(oddNums(start, end));

function oddNums(start, end) {
  let oddArray = [];

  for (let i = start; i <= end; i++) {
    if (i % 2 != 0) {
      oddArray.push(i);
    }
  }

  return oddArray;
}
