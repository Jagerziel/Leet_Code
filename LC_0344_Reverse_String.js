/*
Date Started: 2022.12.30
Language(s): JavaScript
*/

/*
344. Reverse String
Easy

Write a function that reverses a string. The input string is given as an array of characters s.

You must do this by modifying the input array in-place with O(1) extra memory.

Example 1:
Input: s = ["h","e","l","l","o"]
Output: ["o","l","l","e","h"]

Example 2:
Input: s = ["H","a","n","n","a","h"]
Output: ["h","a","n","n","a","H"]

Constraints:
    1 <= s.length <= 105
    s[i] is a printable ascii character.
*/

/*
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */

test1 = ["h","e","l","l","o"]
test2 = ["H","a","n","n","a","h"]
test3 = ["a"]
test4 = ["a","p","p","l","e","s"]

var reverseString = function(s) {
    //Iterate through string up to midpoint
    for (let i = 0; i < s.length / 2; i++) {
        //Swap items from outside moving in
        let t = s[i]
        s[i] = s[s.length - 1 - i]
        s[s.length - 1 - i] = t
    }
    //Return result
    return s
};

console.log(reverseString(test4))

/*
Runtime 90 ms
Beats 95.12%
Memory 48.9 MB
Beats 87.43%
*/