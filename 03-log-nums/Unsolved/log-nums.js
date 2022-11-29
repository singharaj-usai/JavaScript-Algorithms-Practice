// Write code to print all numbers from 1 to `num`
// Assume `num` will be a positive number

// Below is my method that counts down

var logNums = function(num) {
    let start = 1
    while (start <= num) {
        console.log(start)
        start++
    }
};

logNums(10)

// Below is the solutions that counts up

//var logNums = function(num) {
//    for (var i = 1; i <= num; i++) {
//      console.log(i);
//    }
//  };