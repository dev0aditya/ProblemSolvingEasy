let num = 212;

if (isPalindrome(num)) {
  console.log("Is Palindrome");
} else {
  console.log("Not Palindrome");
}

function isPalindrome(num) {
  let dup = num;
  let finalValue = 0;
  while (dup) {
    let holder = dup % 10;
    finalValue = finalValue * 10 + holder;
    dup = Math.floor(dup / 10);
  }
  return num == finalValue;
}
