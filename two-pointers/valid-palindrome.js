// Valid Palindrome
// Easy
// Topics
// Company Tags
// Hints
// Given a string s, return true if it is a palindrome, otherwise return false.

// A palindrome is a string that reads the same forward and backward. It is also case-insensitive and ignores all non-alphanumeric characters.

// Note: Alphanumeric characters consist of letters (A-Z, a-z) and numbers (0-9).

// Example 1:

// Input: s = "Was it a car or a cat I saw?"

// Output: true
// Explanation: After considering only alphanumerical characters we have "wasitacaroracatisaw", which is a palindrome.

// Example 2:

// Input: s = "tab a cat"

// Output: false
// Explanation: "tabacat" is not a palindrome.

// Constraints:

// 1 <= s.length <= 1000
// s is made up of only printable ASCII characters.


const s = "Was it a car or a cat I saw?";

function isAlphaNumeric(ch) {
    return /^[a-z0-9]$/i.test(ch);
}

function isPalindrome(s) {
    let left = 0;
    let right = s.length - 1;
    while (left < right) {
        while (left < right && !isAlphaNumeric(s[left])) {
            left++;
        }
        while (left < right && !isAlphaNumeric(s[right])) {
            right--;
        }
        if (s[left].toLowerCase() !== s[right].toLowerCase()) {
            return false;
        }
        left++;
        right--;
    }
    return true;
}

console.log(isPalindrome(s));
