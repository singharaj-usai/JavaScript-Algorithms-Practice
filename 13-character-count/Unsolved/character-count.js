// Write code to create a function that accepts a string and returns an object containing the number of times each character appears in the string

var characterCount = function (str) {
  const charObj = new Object();
  const words = str.split(" ");
  words.forEach((word) => {
    const letters = word.split("");
    for (let i = 0; i < letters.length; i++) {
      const letter = letters[i];
      if (letter in charObj) {
        charObj[letter]++;
      } else {
        charObj[letter] = 1;
      }
    }
  });
  return charObj;
};
