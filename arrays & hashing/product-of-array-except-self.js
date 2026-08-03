// Products of Array Except Self
// Medium
// Topics
// Company Tags
// Hints
// Given an integer array nums, return an array output where output[i] is the product of all the elements of nums except nums[i].

// Each product is guaranteed to fit in a 32-bit integer.

// Follow-up: Could you solve it in 
// O
// (
// n
// )
// O(n) time without using the division operation?

// Example 1:

// Input: nums = [1,2,4,6]

// Output: [48,24,12,8]
// Example 2:

// Input: nums = [-1,0,1,2,3]

// Output: [0,-6,0,0,0]
// Constraints:

// 2 <= nums.length <= 1000
// -20 <= nums[i] <= 20


const nums = [1, 2, 4, 6];

function productExceptSelf(nums) {
    const n = nums.length;
    const output = new Array(n).fill(1);

    const leftProducts = new Array(n).fill(1);
    for (let i = 1; i < n; i++) {
        leftProducts[i] = leftProducts[i - 1] * nums[i - 1];
    }

    const rightProducts = new Array(n).fill(1);
    for (let i = n - 2; i >= 0; i--) {
        rightProducts[i] = rightProducts[i + 1] * nums[i + 1];
    }

    for (let i = 0; i < n; i++) {
        output[i] = leftProducts[i] * rightProducts[i];
    }

    return output;
}

console.log(productExceptSelf(nums)); // [48, 24, 12, 8]
