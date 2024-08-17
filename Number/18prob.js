let year = 1912;

if (leapYear(year)) {
  console.log("Yes it was a leap year");
} else {
  console.log("No it was not a leap year");
}

function leapYear(year) {
  if (year % 4 == 0) {
    if (year % 100 !== 0 || year % 400 == 0) {
      return true;
    }
  }
}
