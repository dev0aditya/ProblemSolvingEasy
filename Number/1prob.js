let number = 37;

if (isPrime(number)) {
  console.log("Prime Number");
} else {
  console.log("Not a Prime Number");
}

function isPrime(num) {
  if (num <= 1) {
    return false;
  } else if (number % 2 == 0) {
    return false;
  }

  for (let i = 3; i < Math.sqrt(num); i++) {
    if (num % i == 0) {
      return false;
    }
  }

  return true;
}
