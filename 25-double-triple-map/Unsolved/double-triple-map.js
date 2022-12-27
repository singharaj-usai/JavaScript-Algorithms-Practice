// Write code to create a function that accepts an array of numbers and returns a new array that corresponds to the original array
// If a element in the original array is even, the element at the same index in the new array should be double the original element
// If an element in the original array is odd, the element at the same index of the new array should be triple the original element

var doubleTripleMap = function(arr) {
    var result = arr.map((number) => {
        if (number % 2 === 0) {
            return number *= 2;
        } else {
            return number *= 3;
        }
    });

    return result;
};

console.log(doubleTripleMap([1,2,3,4,5]));
