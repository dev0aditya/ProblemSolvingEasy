let start = 1;
let end = 21;

console.log(evenNums(start, end));

function evenNums(start, end) {
  let evenArray = [];

  for (let i = start; i <= end; i++) {
    if (i % 2 == 0) {
      evenArray.push(i);
    }
  }

  return evenArray;
}
