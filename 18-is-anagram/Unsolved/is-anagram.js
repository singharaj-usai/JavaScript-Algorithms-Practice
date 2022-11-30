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
        // Create an array of keys in object A
        // Then check if those keys exist in object B.
        // Then, check if the values for those keys is the same between objects. 
        // The .every() method accepts a callback and returns true or false
        return Object.keys(objA).every( key =>
            objB.hasOwnProperty(key) && objB[key] === objA[key]);
    }
    // Return false here in the case stringA and stringB are different lengths
    return false;
};

console.log(isAnagram("Test yooo", "Test yo"));