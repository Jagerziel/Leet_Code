/*
Date Started: 2022.12.29
Language(s): JavaScript
*/

/*
796. Rotate String
Easy

Given two strings s and goal, return true if and only if s can become goal after some number of shifts on s.

A shift on s consists of moving the leftmost character of s to the rightmost position.
    For example, if s = "abcde", then it will be "bcdea" after one shift.

Example 1:
Input: s = "abcde", goal = "cdeab"
Output: true

Example 2:
Input: s = "abcde", goal = "abced"
Output: false

Constraints:
    1 <= s.length, goal.length <= 100
    s and goal consist of lowercase English letters.
*/

/*
 * @param {string} s
 * @param {string} goal
 * @return {boolean}
 */
//TEST 1
// s = "abcde", goal = "cdeab"
//TEST 2
s = "abcde", goal = "abced"
//Test 3
// s = "bbbacddceeb", goal = "ceebbbbacdd"

var rotateString = function(s, goal) {
    //loop up to i times for the length of the string
    for (let i = 0; i < s.length; i++) {
        //move first letter to end of string
        let adj = s.slice(0, 1)
        s = s.slice(1, s.length) + adj
        //check if string is equal to goal
        if (s === goal) {
            return true
        }
    }
    //if none are equal, return false
    return false
};
console.log(rotateString(s, goal))

/*
Runtime 63 ms
Beats 89%
Memory 42.1 MB
Beats 57.26%
*/