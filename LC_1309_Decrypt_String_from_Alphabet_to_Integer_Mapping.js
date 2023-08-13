/*
1309. Decrypt String from Alphabet to Integer Mapping
Easy

You are given a string s formed by digits and '#'. We want to map s to English lowercase characters as follows:

    Characters ('a' to 'i') are represented by ('1' to '9') respectively.
    Characters ('j' to 'z') are represented by ('10#' to '26#') respectively.

Return the string formed after mapping.

The test cases are generated so that a unique mapping will always exist.

Example 1:
Input: s = "10#11#12"
Output: "jkab"
Explanation: "j" -> "10#" , "k" -> "11#" , "a" -> "1" , "b" -> "2".

Example 2:
Input: s = "1326#"
Output: "acz"

Constraints:

    1 <= s.length <= 1000
    s consists of digits and the '#' letter.
    s will be a valid string such that mapping is always possible.
*/

/*
 * @param {string} s
 * @return {string}
 */

let test1 = "10#11#12"
let test2 = "1326#"
var freqAlphabets = function(s) {
    // Set Lexicon
    let codeLexicon = { "1": "a", "2": "b", "3": "c", "4": "d", "5": "e", "6": "f", "7": "g", "8": "h", "9": "i", "10#": "j", "11#": "k", "12#": "l", "13#": "m", "14#": "n", "15#": "o", "16#": "p", "17#": "q", "18#": "r", "19#": "s", "20#": "t", "21#": "u", "22#": "v", "23#": "w", "24#": "x", "25#": "y", "26#": "z" }

    // Track index, result, and length
    let idx = 0
    let result = ""
    let strLen = s.length

    // Lop through string
    while (idx < strLen) {
        // Check if there is a "#" two indicies from current index.  If so, use 3-digit code, else use 1 digit code
        if (s[idx+2] === "#") {
            result += codeLexicon[s[idx] + s[idx + 1] + s[idx + 2]]
            idx += 3
        } else {
            result += codeLexicon[s[idx]]
            idx++
        }
    }
    // Return result
    return result
};

/*
Runtime 52 ms
Beats 81.35%
Memory 41.8 MB
Beats 81.35%
*/

console.log(freqAlphabets(test1))
console.log(freqAlphabets(test2))
