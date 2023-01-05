// Write a function to take a string and return true if it contains valid sets of matching brackets, else return false

const validBrackets = function(str) {
    let strStack = [];

    for (let i = 0; i < str.length; i++) {
        const e = str[i];
        if (e === "{" || e === "(" || e === "[" ) {
            strStack.push(e);
        }

        if (e === ")") {
            if (strStack.pop() !== "(") {
                return false;
            }
            continue;
        }

        if (e === "}") {
            if (strStack.pop() !== "{") {
                return false;
            }
            continue;
        }

        if (e === "]") {
            if (strStack.pop() !== "[") {
                return false;
            }
            continue;
        }
    }

    return true;
};
