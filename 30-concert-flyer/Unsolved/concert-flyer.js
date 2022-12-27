// Write a function that takes two strings and returns true if every word found in the second string is present in the first string. You will be checking for both words and their frequency. Assume you'll need to worry about casing, but the strings won't contain any punctuation. Assume neither string will be empty

var concertFlyer = function (magazine, flyer) {
    wordMap = {};
    let magWords = magazine.split(" ");
    let flyerWords = flyer.split(" ");

    for (let i = 0; i < magWords.length; i++) {
        const word = magWords[i];
        if (wordMap[word]) {
            wordMap[word]++;
        } else {
            wordMap[word] = 1;
        }
    }

    for (let i = 0; i < flyerWords.length; i++) {
        const word = flyerWords[i];
        if (!wordMap[word]) {
            return false;
        }
    }

    console.log(wordMap);
    return true;
};
