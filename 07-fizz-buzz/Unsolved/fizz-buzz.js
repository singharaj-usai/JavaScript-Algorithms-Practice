// Write code to loop through the array of numbers
// At each iteration, if a number is evenly divisible by 3 print "Fizz"
// If a number is evenly divisible by 5 print "Buzz"
// If a number is evenly divisible by both 3 AND 5, print "Fizz Buzz"
// If a number is not divisible by 3 or 5, print the number

var fizzBuzz = function (array) {
  array.forEach((number) => {
    if (number % 3 === 0 && number % 5 === 0) {
      console.log("Fizz Buzz");
      return "Fizz Buzz";
    } else if (number % 3 === 0) {
      console.log("Fizz");
      return "Fizz";
    } else if (number % 5 === 0) {
      console.log("Buzz");
      return "Buzz";
    } else {
      console.log(number);
      return number;
    }
  });
};

const result = fizzBuzz([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]);
console.log(result);
