//Given two strings s and t, return true if the two strings are anagrams of each other, otherwise return false.

// An anagram is a string that contains the exact same characters as another string, but the order of the characters can be different.

const s = "racecar";
const t = "carecar";

// const s = "anagraeem";
// const t = "nagaram";

function isAnagram(s, t) {
    if (s.length !== t.length) {
        return false;
    }

    const mapOne = new Map();
    for (let char of s) {
        if (mapOne.has(char)) {
            mapOne.set(char, mapOne.get(char) + 1);
        } else {
            mapOne.set(char, 1);
        }
    }

    const mapTwo = new Map();
    for (let char of t) {
        if (mapTwo.has(char)) {
            mapTwo.set(char, mapTwo.get(char) + 1);
        } else {
            mapTwo.set(char, 1);
        }
    }

    for (let [char, count] of mapOne) {
        if (!mapTwo.has(char) || mapTwo.get(char) !== count) {
            return false;
        }
    }

    return true;
}

console.log(isAnagram(s, t));