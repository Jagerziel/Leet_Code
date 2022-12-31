/*
Date Started: 2022.12.31
Language(s): JavaScript
*/

/*
482. License Key Formatting
Easy

You are given a license key represented as a string s that consists of only alphanumeric characters and dashes. The string is separated into n + 1 groups by n dashes. You are also given an integer k.

We want to reformat the string s such that each group contains exactly k characters, except for the first group, which could be shorter than k but still must contain at least one character. Furthermore, there must be a dash inserted between two groups, and you should convert all lowercase letters to uppercase.

Return the reformatted license key.

Example 1:
Input: s = "5F3Z-2e-9-w", k = 4
Output: "5F3Z-2E9W"
Explanation: The string s has been split into two parts, each part has 4 characters.
Note that the two extra dashes are not needed and can be removed.

Example 2:
Input: s = "2-5g-3-J", k = 2
Output: "2-5G-3J"
Explanation: The string s has been split into three parts, each part has 2 characters except the first part as it could be shorter as mentioned above.

Constraints:
    1 <= s.length <= 105
    s consists of English letters, digits, and dashes '-'.
    1 <= k <= 104
*/



/*
 * @param {string} s
 * @param {number} k
 * @return {string}
 */

//TEST 1
s = "5F3Z-2e-9-w", k = 4
//TEST 2
// s = "2-5g-3-J", k = 2
//TEST 3
// s = "2-5g-3-J", k = 1
// TEST4
// s = "3-J", k = 4

// var licenseKeyFormatting = function(s, k) {
//     //Split String to array
//     s = s.split('')
//     //Count indexes until k
//     let counter = 0
//     //Loop through string
//     for (let i = s.length; i >= 0; i--) {
//         //Remove any current instances of '-'
//         if (s[i] === '-') {
//             s.splice(i, 1)
//         } else {
//             //Insert '-' when counter equals k, reset counter
//             if (counter === k) {
//                 s.splice(i,0,'-')
//                 counter = 0
//             }
//             counter++
//         }
//     }
//     //Remove any leading '-' (occurs when 'k' evenly divides into the cleansed string)
//     if (s[0] === '-') {
//         s.splice(0, 1)
//     }
//     //Convert back to string with upper-case letters
//     s = s.join('').toUpperCase()
//     //Return result
//     return s
// };

// console.log(licenseKeyFormatting(s, k))

/*
Runtime 303 ms
Beats 13.74%
Memory 49.3 MB
Beats 31.4%
*/

/*
ATTEMPT 2: SLIGHTLY SIMPLIER CODE BUT SAME RUNTIME
*/

var licenseKeyFormatting = function(s, k) {
    //Clean string and convert to uppercase
    s = s.replaceAll('-','').toUpperCase()
    //Iterate through string in reverse inserting '-' at position k
    for (let i = s.length; i > 0; i -= k) {
        s = s.slice(0, i) + '-' + s.slice(i)
    }
    //Return result
    return s.slice(0, s.length - 1)
};

console.log(licenseKeyFormatting(s, k))

/*
Runtime 302 ms
Beats 13.74%
Memory 47.8 MB
Beats 54.96%
*/