// Write code to create a function that accepts two arrays of numbers
// Return a new array containing the intersecting elements of the arrays

var arrayIntersection = function (arr1, arr2) {
    result = [];
    numMap = {};

    for (let i = 0; i < arr1.length; i++) {
        const number = arr1[i];
        if (numMap[number]) {
            numMap[number]++;
        } else {
            numMap[number] = 1;
        }
    }

    for (let i = 0; i < arr2.length; i++) {
        const number = arr2[i];
        if (numMap[number]) {
            result.push(number);
        }
    }

    return result;
};

console.log(arrayIntersection([1, 2, 2, 3, 4, 4], [1, 2, 2, 3, 5]));
