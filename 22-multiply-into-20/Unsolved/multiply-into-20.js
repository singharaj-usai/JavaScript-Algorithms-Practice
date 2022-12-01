const multiplyInto20 = function (array) {
  // TODO: Write Your Code Here
  // The first loop isn't necessary, 
  // I just wanted some practice using objects to map values.
  let arrayMap = {};
  for (let i = 0; i < array.length; i++) {
    const number = array[i];
    if (20 % number === 0) {
      arrayMap[number] = true;
    }
  }

  let factors = Object.keys(arrayMap);
  for (let i = 0; i < factors.length; i++) {
    const numberOne = factors[i];
    for (let i = 0; i < factors.length; i++) {
      const numberTwo = factors[i];
      if (numberOne * numberTwo === 20) {
        return true;
      }
    }
  }
  return false;
};

console.log(multiplyInto20([1, 2, 3, 4, 5, 7, 9]));