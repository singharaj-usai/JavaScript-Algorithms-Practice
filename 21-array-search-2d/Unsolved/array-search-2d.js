// Write code to create a function that accepts a two-dimensional array
// Each 2D element contains either the string "X" or "O" (both capitalized)
// Return the number of times "X" appears in the 2D array

// Concatenate nested arrays as one large parent array
var arraySearch2D = function (array) {
  var newArray = [].concat(...array);
  console.log(newArray);
  let count = 0;
  for (let i = 0; i < newArray.length; i++) {
    const e = newArray[i];
    if (e === "X") {
      count++;
    }
  }
  return count;
};

console.log(arraySearch2D(array));
