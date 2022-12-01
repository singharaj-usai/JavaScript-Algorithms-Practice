// Write code to create a function that accepts a number and returns true if the number is a perfect square, otherwise it returns false.
// You may not use the built-in Math.sqrt method

var isPerfectSquare = function(num) {
    let squareRoot = Math.sqrt(num)
    console.log(squareRoot)
    let roundUp = Math.ceil(Math.sqrt(num))
    let roundDown = Math.floor(Math.sqrt(num))
    if (roundUp === roundDown) {
        return true
    } else {
        return false
    }
};

isPerfectSquare(14)
