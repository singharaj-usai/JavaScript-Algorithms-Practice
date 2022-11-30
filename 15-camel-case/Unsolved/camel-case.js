// Write code to create a function that accepts a string and returns the string in camelCase

var camelCase = function (str) {
  newString = str.split(" ");
  newWords = [];
  firstWord = newString[0].toLowerCase();
  neWwords.push(firstWord);
  // For loop to check the string's first letter
  // 0 is the first index of the string to capitalize it
  for (let i = 1; i < newString.length; i++) {
    const word = newString[i];
    letters = word.split("");
    letters[0] = letters[0].toUpperCase();
    const newWord = letters.join("");
    newWords.push(newWord);
  }
  return neWwords.join("");
};

// The first word should not be capitalized
console.log(camelCase("I love jillian"));
