// Write code to create a function that accepts two arrays of numbers
// There will be one number common to both arrays
// Return the common number
// You may not use the `indexOf` or `includes` method

var commonElement = function(arrA, arrB) {
    let numMap = {};
    let result;

    for (let i = 0; i < arrA.length; i++) {
        const number = arrA[i];
        if (numMap[number]) {
            numMap[number]++;
        } else {
            numMap[number] = 1;
        }
    }

    for (let i = 0; i < arrB.length; i++) {
        const number = arrB[i];
        if (numMap[number]) {
            result = number;
        }
    }

    return result;
};

console.log(commonElement(arrA, arrB));