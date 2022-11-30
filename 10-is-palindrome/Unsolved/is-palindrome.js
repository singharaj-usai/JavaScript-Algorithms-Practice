// Write code that returns true if `str` is a palindrome, and false if `str` is not a palindrome

var isPalindrome = function (str) {
  // lcstring is LowerCase String
  const lcstring = str.toLowerCase();
  const splitstring = lcstring.split("");
  const newstring = splitstring.reverse().join("");
  if (lcstring === newstring) {
    return true;
  } else {
    return false;
  }
};

console.log(isPalindrome("racecar"));
