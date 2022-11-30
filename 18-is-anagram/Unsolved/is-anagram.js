// Write code to create a function that accepts two strings
// Return true if the strings are anagrams of each other, otherwise return false

var isAnagram = function(strA, strB) {
    objA = {}
    objB = {}
    
    for (let i = 0; i < strA.length; i++){
        const character = strA[i];
        if (!objA[character]) {
            objA[character] = 1;
        } else {
            objA[character]++;
        }
    }

    for (let i = 0; i < strB.length; i++){
        const character = strB[i];
        if (!objB[character]) {
            objB[character] = 1;
        } else {
            objB[character]++
        }
    }

    const objALength = Object.keys(objA).length;
    const objBLength = Object.keys(objB).length;

    if (objALength === objBLength) {
        return Object.keys(objA).every( key =>
            objB.hasOwnProperty(key) && objB[key] === objA[key]);
    }
    return false;
};

console.log(isAnagram("Test yooo", "Test yo"));