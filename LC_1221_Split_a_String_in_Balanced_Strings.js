/*
Date Started: 2022.12.26
Language(s): JavaScript
*/

/*
1221. Split a String in Balanced Strings
Easy

Balanced strings are those that have an equal quantity of 'L' and 'R' characters.

Given a balanced string s, split it into some number of substrings such that:

    Each substring is balanced.

Return the maximum number of balanced strings you can obtain.

 

Example 1:

Input: s = "RLRRLLRLRL"
Output: 4
Explanation: s can be split into "RL", "RRLL", "RL", "RL", each substring contains same number of 'L' and 'R'.

Example 2:

Input: s = "RLRRRLLRLL"
Output: 2
Explanation: s can be split into "RL", "RRRLLRLL", each substring contains same number of 'L' and 'R'.
Note that s cannot be split into "RL", "RR", "RL", "LR", "LL", because the 2nd and 5th substrings are not balanced.

Example 3:

Input: s = "LLLLRRRR"
Output: 1
Explanation: s can be split into "LLLLRRRR".

 

Constraints:

    2 <= s.length <= 1000
    s[i] is either 'L' or 'R'.
    s is a balanced string.

*/

/*
 * @param {string} s
 * @return {number}
 */

test1 = "RLRRLLRLRL"
test2 = "RLRRRLLRLL"
test3 = "LLLLRRRR"

var balancedStringSplit = function(s) {
    ///Create object to use a +/- system for letters 
    let LR = {
        L: -1,
        R: 1
    }
    //Split String to Array
    s = s.split("")
    //Keep running totlal to check for equality
    tempTotal = 0
    //Log each balanced string
    balancedStringCt = 0
    //Iterate through array 
    for (let i = 0; i < s.length; i++) {
        //Add value of letter to tempTotal
        tempTotal += LR[s[i]]
        //Check for 0 - if 0 then we have a balanced string!
        if (tempTotal === 0) {
            balancedStringCt++
            tempTotal = 0
        }
    }
    //Return total number of balanced strings
    return balancedStringCt
};

console.log(balancedStringSplit(test3))

/*
Runtime75 ms
Beats
72.68%
Memory41.5 MB
Beats
95.97%
*/




