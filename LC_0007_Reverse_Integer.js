/*
Date Started: 2022.12.27
Language(s): JavaScript
*/

/*
7. Reverse Integer
Medium

Given a signed 32-bit integer x, return x with its digits reversed. If reversing x causes the value to go outside the signed 32-bit integer range [-231, 231 - 1], then return 0.

Assume the environment does not allow you to store 64-bit integers (signed or unsigned).

Example 1:
Input: x = 123
Output: 321

Example 2:
Input: x = -123
Output: -321

Example 3:
Input: x = 120
Output: 21

Constraints:
    -231 <= x <= 231 - 1
*/

test1 = 123
test2 = -123
test3 = 120
test4 = 0

/*
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    //check if number is 0
    if (x === 0) {
        return 0
    }
    //track if number is true or false
    let negNum = false
    //if a negative number, change value of negNum to true
    if (x < 0) {
        negNum = true
    }
    //find absolute value of x
    x = Math.abs(x)
    //cut off any zeros
    while (x % 10 === 0) {
        x /= 10
    }
    //convert to string, reverse order, convert back to number
    x = x.toString().split('').reverse()
    x = parseInt(x.join(''))
    //reapply negative if applicable
    if (negNum === true) {
        x = x * (-1)
    }
    //set upper and lower limit
    let limit = 2 ** 31
    //return '0' if upper and lower limits are exceeded
    if ((Math.abs(x) > limit - 1 && negNum === false) || (Math.abs(x) > limit && negNum === true)) {
        return 0
    }
    //return result
    return x
};

console.log(reverse(test4))

/*
Runtime75 ms
Beats
91.1%
Memory43.6 MB
Beats
81.10%
*/
