// Write code to add all the numbers in `arr` and return the total

var sumArray = function (array) {
  let sum = 0;
  array.forEach((number) => {
    return (sum += number);
  });
  return sum;
};
