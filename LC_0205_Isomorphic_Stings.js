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
var isIsomorphic = function(s, t) {
    let test_s = {}
    let test_t = {}

    for (let i = 0; i < s.length; i++) {
        if (test_s[s[i]] === undefined) {
            test_s[s[i]] = t[i]
            if (test_t[t[i]] === undefined) {
                test_t[t[i]] = s[i]
            } else {
                return false
            }
        } else {
            if (test_s[s[i]] !== t[i]) {
                return false
            }
        }
    }
    return true
};

/*
Runtime 68 ms
Beats 52.77%
Memory 42.1 MB
Beats 84.30%
*/


console.log(isIsomorphic(s, t))
