/*
Date Started: 2022.12.30
Language(s): JavaScript
*/

/*
Input: num = 38
Output: 2
Explanation: The process is
38 --> 3 + 8 --> 11
11 --> 1 + 1 --> 2 
Since 2 has only one digit, return it.

Example 2:
Input: num = 0
Output: 0

Constraints:
    0 <= num <= 231 - 1
Follow up: Could you do it without any loop/recursion in O(1) runtime?
*/

/*
 * @param {number} num
 * @return {number}
 */

test1 = 11
console.log(test1[2])

var addDigits = function(num) {
    //Loop until num is less than 10
    while (num >= 10) {
        // Handle digits for 100's, 10's, and 1's
        let dig3 = Math.floor(num / 100)
        let dig2 = Math.floor((num - dig3 * 100) / 10)
        let dig1 = Math.floor(num - dig2 * 10 - dig3 * 100)
        //Add all digits
        num = dig3 + dig2 + dig1
    }
    //Return result
    return num
};

console.log(addDigits(test1))

/*
Runtime 84 ms
Beats 72.44%
Memory 43.5 MB
Beats 72.64%
*/