// Top K Frequent Elements
// Medium
// Topics
// Company Tags
// Hints
// Given an integer array nums and an integer k, return the k most frequent elements within the array.

// The test cases are generated such that the answer is always unique.

// You may return the output in any order.

// Example 1:

// Input: nums = [1,2,2,3,3,3], k = 2

// Output: [2,3]
// Example 2:

// Input: nums = [7,7], k = 1

// Output: [7]
// Constraints:

// 1 <= nums.length <= 10^4.
// -1000 <= nums[i] <= 1000
// 1 <= k <= number of distinct elements in nums.


const nums = [1, 2, 2, 3, 3, 3];
const k = 2;

function topKFrequent(nums, k) {
    const frequencyMap = new Map();
    for (const num of nums) {
        frequencyMap.set(num, (frequencyMap.get(num) || 0) + 1);
    }
    const freqArray = Array.from(frequencyMap.entries());
    freqArray.sort((a, b) => b[1] - a[1]);
    return freqArray.slice(0, k).map(([num]) => num);
}

const result = topKFrequent(nums, k);
console.log(result);