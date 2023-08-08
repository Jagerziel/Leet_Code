/*
390. Elimination Game
Medium

You have a list arr of all integers in the range [1, n] sorted in a strictly increasing order. Apply the following algorithm on arr:

    Starting from left to right, remove the first number and every other number afterward until you reach the end of the list.
    Repeat the previous step again, but this time from right to left, remove the rightmost number and every other number from the remaining numbers.
    Keep repeating the steps again, alternating left to right and right to left, until a single number remains.

Given the integer n, return the last number that remains in arr.

Example 1:
Input: n = 9
Output: 6
Explanation:
arr = [1, 2, 3, 4, 5, 6, 7, 8, 9]
arr = [2, 4, 6, 8]
arr = [2, 6]
arr = [6]

Example 2:
Input: n = 1
Output: 1
*/

/*
 * @param {number} n
 * @return {number}
*/

let test1 = 9
let test2 = 1 
let test3 = 11
let test4 = 10
let test5 = 10000000

// ATTEMPT 1: SOLUTION WORKS BUT TIMES OUT

var lastRemaining = function(n) {
    if (n === 1) return 1

    let resultArray = []
    let direction = true // true = left, false = right
    
    for (let i = 1; i < n; i += 2) {
        resultArray.push(i + 1)
    }
    // console.log(resultArray)

    function leftToRight ( arr ) {
        let returnArr = []
        for (let i = 1; i < arr.length; i += 2) {
            returnArr.push(arr[i])
        }
        return returnArr
    }

    function rightToLeft ( arr ) {
        let returnArr = []
        for (let i = arr.length - 2; i >= 0; i -= 2) {
            returnArr.unshift(arr[i])
        }
        return returnArr
    }

    while (resultArray.length > 1) {
        if (direction === true) {
            resultArray = rightToLeft(resultArray)
        } else {
            resultArray = leftToRight(resultArray)
        }
        direction = !direction
    }

    return resultArray
};

// console.log(lastRemaining(test1))
// console.log(lastRemaining(test2))
// console.log(lastRemaining(test3))
// console.log(lastRemaining(test4))
console.log(lastRemaining(test5))



