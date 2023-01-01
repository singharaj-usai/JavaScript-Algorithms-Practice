// Write code to return a new string with all of the characters in `str` reversed.
// You may NOT use the built-in reverse method

const reverse = (str) => {
    let reversed = [];
    for (let i = str.length-1; i >= 0; i--) {
        const character = str[i];
        reversed.push(character);
    }

    const result = reversed.join("");
    return result;
};
