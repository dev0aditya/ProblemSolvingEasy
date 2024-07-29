let days = 2212;

console.log(daysConverter(days));

function daysConverter(days) {
  let years = Math.floor(days / 365);
  let day = days % 365;
  let month = Math.floor(day / 30);
  day = day % 30;

  return `Years: ${years}, Months: ${month}, Days: ${day}`;
}
