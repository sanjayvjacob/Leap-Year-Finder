function isLeap(year) {
  if (year % 4 !== 0) {
      return "Not a leap year";
  } else if (year % 100 !== 0) {
      return "Leap year";
  } else if (year % 400 !== 0) {
      return "Not a leap year";
  } else {
      return "Leap year";
  }
}
var year = 2024;
console.log(isLeap(year));