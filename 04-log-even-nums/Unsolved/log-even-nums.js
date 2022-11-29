// Write code to print all even numbers from 0 to `num`
// Assume `num` will be a positive number

var logEvenNums = function (num) {
  let start = 0;
  while (start < num) {
    if (start % 2 === 0) {
      console.log(start);
      start++;
    } else {
      start++;
    }
  }
};