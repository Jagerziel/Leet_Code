/*
383. Ransom Note
Easy

Given two strings ransomNote and magazine, return true if ransomNote can be constructed by using the letters from magazine and false otherwise.

Each letter in magazine can only be used once in ransomNote.

Example 1:
Input: ransomNote = "a", magazine = "b"
Output: false

Example 2:
Input: ransomNote = "aa", magazine = "ab"
Output: false

Example 3:

Input: ransomNote = "aa", magazine = "aab"
Output: true


Constraints:
    1 <= ransomNote.length, magazine.length <= 105
    ransomNote and magazine consist of lowercase English letters.
*/


/*
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */

let ransomNote1 = "a", magazine1 = "b"
let ransomNote2 = "aa", magazine2 = "ab"
let ransomNote3 = "aa", magazine3 = "aab"
let ransomNote4 = "z", magazine4 = "ab"

var canConstruct = function(ransomNote, magazine) {
    // Set dictionary to hold items
    let letterDictionary = {}
    // Create dictionary for magazine
    for (let i = 0; i < magazine.length; i++) {
        // If letter already exists, add 1 to counter
        if (letterDictionary[magazine[i]] > 0) {
            letterDictionary[magazine[i]] = letterDictionary[magazine[i]] + 1
        } else {
        // Otherwise add letter to dictionary
            letterDictionary[magazine[i]] = 1
        }
    }
    // Check ransomNote letters against dictionary
    for (let i = 0; i < ransomNote.length; i++) {
        // If it exists, reduce 1 from letter count in dictionary
        if (letterDictionary[ransomNote[i]] > 0) {
            letterDictionary[ransomNote[i]] = letterDictionary[ransomNote[i]] - 1
        } else {
        // Otherwise return false
            return false
        }
    }
    // If all letters check out, return true
    return true
};

/*
Runtime 74 ms
Beats 85.30%
Memory 45.1 MB
Beats 58.3%
*/

console.log(canConstruct(ransomNote1 , magazine1))
console.log(canConstruct(ransomNote2 , magazine2))
console.log(canConstruct(ransomNote3 , magazine3))
console.log(canConstruct(ransomNote4 , magazine4))
