// Write code to create a function that returns the factorial of `num`

var factorial = function (num) {
  // If equals to 0, then product will always be 0, so start at 1
  let factorial = 1;
  while (num >= 1) {
    factorial *= num;
    num--;
  }
  console.log(factorial);
  return factorial;
};
console.log(factorial(0));
