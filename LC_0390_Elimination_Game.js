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

let test1 = 1
let test2 = 2 
let test3 = 3
let test4 = 4
let test5 = 5
let test6 = 6
let test7 = 7
let test8 = 8
let test9 = 9
let test10 = 10
let test11 = 11
let test12 = 12
let test13 = 13
let test14 = 14
let test15 = 15
let test16 = 16
let test17 = 17
let test18 = 18
let test19 = 19
let test20 = 20
let test21 = 21

let test5000 = 10000000

// ATTEMPT 1: SOLUTION WORKS BUT TIMES OUT: 3374 / 3377 testcases passed (failed at 10000000)

// var lastRemaining = function(n) {
//     if (n === 1) return 1

//     let resultArray = []
//     let direction = true // true = left, false = right
    
//     for (let i = 1; i < n; i += 2) {
//         resultArray.push(i + 1)
//     }
//     // console.log(resultArray)

//     function leftToRight ( arr ) {
//         let returnArr = []
//         for (let i = 1; i < arr.length; i += 2) {
//             returnArr.push(arr[i])
//         }
//         return returnArr
//     }

//     function rightToLeft ( arr ) {
//         let returnArr = []
//         for (let i = arr.length - 2; i >= 0; i -= 2) {
//             returnArr.unshift(arr[i])
//         }
//         return returnArr
//     }

//     while (resultArray.length > 1) {
//         if (direction === true) {
//             resultArray = rightToLeft(resultArray)
//         } else {
//             resultArray = leftToRight(resultArray)
//         }
//         direction = !direction
//     }

//     return resultArray
// };



// ATTEMPT 2: SPLICE - TIMES OUT at 1000000 (3373 / 3377 testcases passed)


// var lastRemaining = function(n) {
//     if (n === 1) return 1

//     let resultArray = []
//     let direction = false
    
//     for (let i = 1; i < n; i += 2) {
//         resultArray.push(i + 1)
//     }

//     while (resultArray.length > 1) {
//         let resultArrayEven = resultArray.length % 2
//         let applciationSum = resultArrayEven + (direction ? 1 : 0)
//         if (applciationSum === 0) {
//             for (let i = 1; i < resultArray.length; i ++) {
//                 resultArray.splice(i, 1)
//                 console.log(resultArray.length)
//             }
//             direction = !direction
//         } else {
//             for (let i = 0; i < resultArray.length; i ++) {
//                 resultArray.splice(i, 1)
//             }
//             direction = !direction
//         }

//     }
//     return resultArray
// };

// ATTEMPT 3: SPLICE with FILTER: RUNTIME ERROR: 3375 / 3377 testcases passed

var lastRemaining = function(n) {
    if (n === 1) return 1

    let resultArray = []
    let direction = false
    
    for (let i = 1; i < n; i += 2) {
        resultArray.push(i + 1)
    }

    while (resultArray.length > 1) {
        let resultArrayEven = resultArray.length % 2
        let applciationSum = resultArrayEven + (direction ? 1 : 0)
        if (applciationSum === 0) {
            resultArray = resultArray.filter((num, idx)=> {
                if(idx % 2 === 0) {
                    return num
                }
            })
            direction = !direction
        } else {
            resultArray = resultArray.filter((num, idx)=> {
                if (idx % 2 === 1) return num
            })
            direction = !direction
        }

    }
    return resultArray
};





// console.log(lastRemaining(test1))
// console.log(lastRemaining(test2))
// console.log(lastRemaining(test3))
// console.log(lastRemaining(test5))
// console.log(lastRemaining(test9))

// console.log(lastRemaining(test19))
console.log(lastRemaining(test20))
// console.log(lastRemaining(test5000))



// for (let i = 1; i < 50; i++) {
//     console.log(`Test ${i}: ${lastRemaining(i)}`)
// }



