// Write code to merge two sorted arrays into a new sorted array

var mergeSorted = function (arr1, arr2) {
    if (arr1.length < 1 || arr2 < 1) {
        return arr2.length < 1 ? arr1 : arr2;
    }
    var sortedArr = [];
    var i = 0;
    var j = 0;
    while (i < arr1.length && j < arr2.length) {
        if (arr1[i] < arr2[j]) {
            sortedArr.push(arr1[i]);
            i++;
        } else {
            sortedArr.push(arr2[j]);
            j++;
        }
    }
    while (i < arr1.length) {
        sortedArr.push(arr1[i]);
        i++;
    }
    while (j < arr2.length) {
        sortedArr.push(arr2[j]);
        j++;
    }
    return sortedArr;
};

// This function is my attempt at doing a merge sort with the ability to use the "sort" method.
const mergeSorted2 = (arr1, arr2) => {
    return arr1.concat(arr2).sort(function (a, b) {
        return a - b;
    });
};
