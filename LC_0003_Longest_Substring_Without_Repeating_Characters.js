/*
Date Started: 2022.12.30
Language(s): JavaScript
*/

/*
3. Longest Substring Without Repeating Characters
Medium

Given a string s, find the length of the longest
substring
without repeating characters.

Example 1:
Input: s = "abcabcbb"
Output: 3
Explanation: The answer is "abc", with the length of 3.

Example 2:
Input: s = "bbbbb"
Output: 1
Explanation: The answer is "b", with the length of 1.

Example 3:
Input: s = "pwwkew"
Output: 3
Explanation: The answer is "wke", with the length of 3.
Notice that the answer must be a substring, "pwke" is a subsequence and not a substring.

Constraints:
    0 <= s.length <= 5 * 104
    s consists of English letters, digits, symbols and spaces.
*/

/*
 * @param {string} s
 * @return {number}
 */

test1 = "abcabcbb"
test2 = "bbbbb"
test3 = "pwwkew"
test4 = "aba"
test5 = "au"
test6 = "dvdf"
test7 = "bb"

var lengthOfLongestSubstring = function(s) {
    //Set results for arrays of 1 and 2 length
    if (s.length === 0) return 0
    if (s.length === 1) return 1
    //Temporary Array
    let compArr = [s[0]]
    //Maximum Length
    let maxLen = 1
    //Iterate through the string starting at character 1 (0 is already done)
    for (let i = 1; i < s.length; i++) {
        //Assign temp variable for compArr length so it does not change when adding items
        let compLen = compArr.length
        //Loop through compArr and compare current letter
        for (let j = 0; j < compLen; j++) {
            //If it matches, restart compArr and record max length if applicable
            if (compArr[j] === s[i]) {
                if (compArr.length > maxLen) {
                    maxLen = compArr.length
                }
                //Append new item
                compArr.push(s[i])
                //Remove matching result and anything prior
                compArr.splice(0, j + 1)
                break
            //If it doesn't match and has iterated through all items, push the letter to compArr
            } else if (j === compLen - 1) {
                compArr.push(s[i])
            } 
        }
    }
    //Check for evaluations of last item
    if (compArr.length > maxLen) maxLen = compArr.length
    //Return result
    return maxLen
};

console.log(lengthOfLongestSubstring(test7))

/*
Runtime 98 ms
Beats 85.54%
Memory 45.2 MB
Beats 90.39%
*/