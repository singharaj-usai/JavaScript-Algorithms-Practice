// Write code to create a function that accepts an array of integers sorted in ascending (increasing) order and returns a new array containing the squares of each number in ascending order

var sortedSquares = function(arr) {
    const result = arr.map((number) => {
        return number * number;
    });

    console.log(`Pre sort: ${result}`);

    for (let i = 0; i < result.length; i++) {
        for (let j = 0; j < result.length; j++) {
            if (result[i] < result [j]) {
                console.log(`Comparing ${result[i]} to ${result[j]}`)
                var temp = result[i];
                result[i] = result[j];
                result[j] = temp;
            }
        }
    }
    console.log(`Post sort: ${result}`);
    return result;
};

console.log(sortedSquares([-4,-1,0]));
