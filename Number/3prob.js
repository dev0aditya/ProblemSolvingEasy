let num = 6;

function fiboter(num) {
  if (num <= 0) {
    return "Not Possible please provide number greater than 0";
  }
  let container = [];
  for (let i = 0; i < num; i++) {
    if (i == 0) {
      container.push(i);
    } else if (i == 1) {
      container.push(i);
    } else {
      container.push(container[i - 1] + container[i - 2]);
    }
  }
  return container;
}

console.log(fiboter(num));
