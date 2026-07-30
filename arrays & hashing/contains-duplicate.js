// Contains Duplicate

// Given an integer array nums, return true if any value appears more than once in the array, otherwise return false.

// Example 1
//Input: nums = [1, 2, 3, 3]
// Output: true

// Example 2
// Input: nums = [1, 2, 3, 4]
// Output: false

// const nums = [1, 2, 3, 3];
const nums = [1, 2, 3, 4];

function containsDuplicate(nums) {
    const map = new Map();

    for (let num of nums) {
        if (map.has(num)) {
            return true;
        } else {
            map.set(num, 1);
        }
    }
    return false;
}

console.log(containsDuplicate(nums));
