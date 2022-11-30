// Write code to create a function takes a string and returns a new string with the first letters of each word capitalized

var titleCase = function (str) {
  // Quotes need space for title cases
  const words = str.split(" ");
  let newstring = [];
  words.forEach((word) => {
    letters = word.split("");
    letters[0] = letters[0].toUpperCase();
    console.log(letters[0]);
    const newword = letters.join("");
    newstring.push(newword);
  });
  console.log(newstring);
  return newstring.join(" ");
};

console.log(titleCase("I am da goat"));