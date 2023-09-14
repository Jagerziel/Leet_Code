/*
49. Group Anagrams
Medium

Given an array of strings strs, group the anagrams together. You can return the answer in any order.

An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.

Example 1:
Input: strs = ["eat","tea","tan","ate","nat","bat"]
Output: [["bat"],["nat","tan"],["ate","eat","tea"]]

Example 2:
Input: strs = [""]
Output: [[""]]

Example 3:
Input: strs = ["a"]
Output: [["a"]]

Constraints:
    1 <= strs.length <= 104
    0 <= strs[i].length <= 100
    strs[i] consists of lowercase English letters.
*/

/*
 * @param {string[]} strs
 * @return {string[][]}
 */

let strs01 = ["eat","tea","tan","ate","nat","bat"]
let strs02 = [""]
let strs03 = ["a"]

var groupAnagrams = function(strs) {
    // Track Result
    let result = {}
    // At each word in the array...
    for (let i = 0; i < strs.length; i++) {
        let sortedChars = strs[i].split("").sort().join("") // Sort letters
        if (result[sortedChars] !== undefined) {
            result[sortedChars].push(strs[i]) // If word exists in object, add this one
        } else {
            result[sortedChars] = [strs[i]] // If a new word, add key/value pair to result
        }
    }
    return Object.values(result) // Return the values of the result object
};

/*
Runtime 95 ms
Beats 93.87%
Memory 52.8 MB
Beats 77.50%
*/

console.log(groupAnagrams(strs01))
console.log(groupAnagrams(strs02))
console.log(groupAnagrams(strs03))
