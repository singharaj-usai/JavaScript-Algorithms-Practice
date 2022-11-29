// Write code to return the largest number in the given array

var maxNum = function (array) {
  let max = array[0];
  for (let i = 0; i < array.length; i++) {
    const currentNumber = array[i];
    if (max < currentNumber) {
      max = currentNumber;
    }
  }
  return max;
};

console.log(maxNum([12, 63, 200, 5]));
