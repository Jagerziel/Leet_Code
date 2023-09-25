/*
400. Nth Digit
Medium

Given an integer n, return the nth digit of the infinite integer sequence [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, ...].

Example 1:
Input: n = 3
Output: 3

Example 2:
Input: n = 11
Output: 0
Explanation: The 11th digit of the sequence 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, ... is a 0, which is part of the number 10.

Constraints:
    1 <= n <= 2^31 - 1
*/


/*
 * @param {number} n
 * @return {number}
 */

let test01 = 3
let test02 = 11
let test03 = 351
let test04 = 10
let test05 = 10000 // 7
let test06 = 1000 // 3
let test07 = 12
let test08 = 13
let test09 = 14
let test10 = 15
let test11 = 209
let test12 = 210
let test13 = 211
let test14 = 212
let test15 = 213


var findNthDigit = function(n) {
    // Check length of n and if less than 10, return result
    let digits = n.toString().length
    if (digits === 1) return n

    let accNum = 10 // Accumulating Number
    let power = 2 // Power
    let currNum = 10 // Current Number

    // Add/Iterate through accNum, power, and currNum to find right number of digits to calculate final result on
    while (accNum + ((10 ** power) * power) - ((10 ** (power - 1)) * power) <= n) {
        accNum += (((10 ** power) * power)) - (((10 ** (power - 1)) * power))
        currNum += 10 ** power - 10 ** (power - 1)
        power++
    }

    // Determine the final base number and which digit position needs to be extracted
    let baseNum = Math.trunc((n - accNum) / power) + currNum
    let digit = (n - accNum) % power

    // Return result
    return baseNum.toString()[digit]
};

/*
Runtime 46 ms
Beats 90%
Memory 41.8 MB
Beats 82.50%
*/


// console.log(findNthDigit(test01))
// console.log(findNthDigit(test03))
// console.log(test04, findNthDigit(test04))
// console.log(test02, findNthDigit(test02))
// console.log(test07, findNthDigit(test07))
// console.log(test08, findNthDigit(test08))
// console.log(test09, findNthDigit(test09))
// console.log(test10, findNthDigit(test10))
// console.log(test11, findNthDigit(test11))
// console.log(test12, findNthDigit(test12))
// console.log(test13, findNthDigit(test13))
// console.log(test14, findNthDigit(test14))
// console.log(test15, findNthDigit(test15))



console.log(findNthDigit(test05))
console.log(findNthDigit(test06))



// for (let i = 180; i < 200; i++) {
//     console.log(`${i}) ${findNthDigit(i)}`)
// }
