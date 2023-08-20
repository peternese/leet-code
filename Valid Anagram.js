/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    var ns = s.split('').sort().toString();
    var ts = t.split('').sort().toString();
    return ns == ts;
};



// console.log(isAnagram('anagram','nagaram'))
// console.log(isAnagram('rat','car'))



// https://leetcode.com/problems/valid-anagram/

// Given two strings s and t, return true if t is an anagram of s, and false otherwise.

// An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.

// Example 1:

// Input: s = "anagram", t = "nagaram"
// Output: true
// Example 2:

// Input: s = "rat", t = "car"
// Output: false