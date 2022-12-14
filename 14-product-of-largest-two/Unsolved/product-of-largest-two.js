// Write code to create a function that accepts an array of numbers, finds the largest two numbers, and returns the product of the two

var productOfLargestTwo = function (array) {
  // Setting the variables for largest and second largest numbers
  let max = array[0];
  let secondmax = array[0];

  // For loop to check if the number is larger than max
  // If not larger, check if it's larger than secondmax
  for (let i = 0; i < array.length; i++) {
    const number = array[i];
    if (number > max) {
      secondmax = max;
      max = number;
    } else if (number > secondmax) {
      secondmax = number;
    }
  }
  return max * secondmax;
};

console.log(productOfLargestTwo([1, 2, 300, 4, 5]));
