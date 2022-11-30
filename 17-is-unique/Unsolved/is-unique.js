// Write code to create a function that accepts an array numbers
// Return `true` is no number appears in the array more than once, else return `false`

var isUnique = function (array) {
  arrayObj = {};
  for (let i = 0; i < array.length; i++) {
    const number = array[i];
    if (!arrayObj[number]) {
      arrayObj[number] = 1;
    } else {
      arrayObj[number]++;
    }
    if (arrayObj[number] > 1) {
      return false;
    }
  }
  // Returns true if there are no numbers appearing in the array more than once
  return true;
};

console.log(isUnique([1, 2, 3, 4, 5]));
