// Write code to return the the number of vowels in `str`

var vowelCount = function (str) {
  const splitstring = str.toLowerCase().split("");
  console.log(splitstring);
  let count = 0;

  splitstring.forEach((letter) => {
    if (
      letter === "a" ||
      letter === "e" ||
      letter === "i" ||
      letter === "o" ||
      letter === "u"
    ) {
      console.log("Vowel found, increasting count");
      count++;
    }
  });
  return count;
};

// console.log("a" === "j" || "i");

//The above log will NOT compare a to both j and i, but rather log "i" because "a" does not equal "j" (falsey)