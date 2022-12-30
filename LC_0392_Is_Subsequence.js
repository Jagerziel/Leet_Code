/*
Date Started: 2022.12.30
Language(s): JavaScript
*/

/*
392. Is Subsequence
Easy
6.5K
365
Companies

Given two strings s and t, return true if s is a subsequence of t, or false otherwise.

A subsequence of a string is a new string that is formed from the original string by deleting some (can be none) of the characters without disturbing the relative positions of the remaining characters. (i.e., "ace" is a subsequence of "abcde" while "aec" is not).

 

Example 1:
Input: s = "abc", t = "ahbgdc"
Output: true

Example 2:
Input: s = "axc", t = "ahbgdc"
Output: false

 

Constraints:
    0 <= s.length <= 100
    0 <= t.length <= 104
    s and t consist only of lowercase English letters.
 
Follow up: Suppose there are lots of incoming s, say s1, s2, ..., sk where k >= 109, and you want to check one by one to see if t has its subsequence. In this scenario, how would you change your code?
*/

/*
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
// TEST 1
s = "abc", t = "ahbgdc"
//TEST 2
// s = "axc", t = "ahbgdc"

var isSubsequence = function(s, t) {
    //Check for null s and return true
    if (s === "") {
        return true
    }
    //Iterator for s
    let inxT = 0
    //Loop through t
    for (let i = 0; i < t.length; i++) {
        //If equal move to next letter
        if(s[inxT] === t[i]) {
            inxT++
            //If next letter would be end of string, return true
            if (inxT === s.length) {
                return true
            }
        }
    }
    //Return false if no match
    return false
};

console.log(isSubsequence(s, t))

/*
Runtime 57 ms
Beats 97.50%
Memory 42.1 MB
Beats 55.23%
*/