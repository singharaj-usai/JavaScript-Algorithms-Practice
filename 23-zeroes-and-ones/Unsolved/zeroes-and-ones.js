// Write code to create a function that accepts a string containing only 0s and 1s
// Return true if there are an equal number of 0s and 1s
// Else return false

var zeroesAndOnes = function (str) {
  strMap = {};
  for (let i = 0; i < str.length; i++) {
    const e = str[i];
    if (strMap[e]) {
      strMap[e]++;
    } else {
      strMap[e] = 1;
    }
  }
  console.log(strMap);
  // Checks if string contains more than two types of characters.
  // String should only contain 0's and 1's
  // length of ensuing array shouldn't be greater than 2.
  if (Object.keys(strMap).length > 2) {
    return false;
  } else if (strMap["0"] === strMap["1"]) {
    return true;
  } else {
    return false;
  }
};

console.log(zeroesAndOnes(""));