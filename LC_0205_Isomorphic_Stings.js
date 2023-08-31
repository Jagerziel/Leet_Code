/*
205. Isomorphic Strings
Easy

Given two strings s and t, determine if they are isomorphic.

Two strings s and t are isomorphic if the characters in s can be replaced to get t.

All occurrences of a character must be replaced with another character while preserving the order of characters. No two characters may map to the same character, but a character may map to itself.

Example 1:
Input: s = "egg", t = "add"
Output: true

Example 2:
Input: s = "foo", t = "bar"
Output: false

Example 3:
Input: s = "paper", t = "title"
Output: true

Constraints:
    1 <= s.length <= 5 * 104
    t.length == s.length
    s and t consist of any valid ascii character.
*/

let s = "egg", t = "add"
// let s = "foo", t = "bar"
// let s = "paper", t = "title"
// let s = "badc", t = "baba"



/*
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */

// ATTEMPT 1: MATCHING KEYS AND OBJECT VALUES

// var isIsomorphic = function(s, t) {
//     let test_s = {}
//     let test_t = {}

//     for (let i = 0; i < s.length; i++) {
//         if (test_s[s[i]] === undefined) {
//             test_s[s[i]] = t[i]
//             if (test_t[t[i]] === undefined) {
//                 test_t[t[i]] = s[i]
//             } else {
//                 return false
//             }
//         } else {
//             if (test_s[s[i]] !== t[i]) {
//                 return false
//             }
//         }
//     }
//     return true
// };

/*
Runtime 68 ms
Beats 52.77%
Memory 42.1 MB
Beats 84.30%
*/

// ATTEMPT 2: REMOVE NEEDLESS PULL OF s[i] to insert into definitions of t[t[i]]

var isIsomorphic = function(s, t) {
    // Track Objects for s and t 
    let test_s = {}
    let test_t = {}
    // Loop through the index of both s & t simultaneously 
    for (let i = 0; i < s.length; i++) {
        if (test_s[s[i]] === undefined) {
            if (test_t[t[i]] !== undefined) return false // Exit if 't' already has a definition as it is stored duplicatively under s
            test_s[s[i]] = t[i]
            test_t[t[i]] = "1"
        } else if (test_s[s[i]] !== t[i]) { // Exit if the duplicate of s does not match current pos of t
            return false
        }
    }
    // Return result
    return true
};

/*
Runtime 58 ms
Beats 86.43%
Memory 42.3 MB
Beats 80.38%
*/

console.log(isIsomorphic(s, t))

let a = 2
let b = 3

if (a === 2 || b === 3) {
    console.log(true)
}