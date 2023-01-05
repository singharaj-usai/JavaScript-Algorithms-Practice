// Write a function to take an array of integers and return the minimum number of increments required across the array to ensure that every number is unique

const minIncrement = function(nums) {
    let counter = 0;
    //for each check if number is unique
    for (let i = 0; i < nums.length; i++) {
        for (let f = 0; f < nums.length; f++) {
            if (nums[i] === nums[f] && i !== f) {
                nums[i]++;
                counter++;
                f = i = 0;
            }
        }
    }
    return counter;
};
