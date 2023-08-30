/*
17. Letter Combinations of a Phone Number
Medium

Given a string containing digits from 2-9 inclusive, return all possible letter combinations that the number could represent. Return the answer in any order.

A mapping of digits to letters (just like on the telephone buttons) is given below. Note that 1 does not map to any letters.

Example 1:
Input: digits = "23"
Output: ["ad","ae","af","bd","be","bf","cd","ce","cf"]

Example 2:
Input: digits = ""
Output: []

Example 3:
Input: digits = "2"
Output: ["a","b","c"]

Constraints:
    0 <= digits.length <= 4
    digits[i] is a digit in the range ['2', '9'].
*/

/*
 * @param {string} digits
 * @return {string[]}
 */

let test1 = "23",
    test2 = "",
    test3 = "2",
    test4 = "457",
    test5 = "9797"


// ATTEMPT 1: FOUR TIER CONDITIONAL LOOP

// var letterCombinations = function(digits) {
//     if (digits === "") return []
//     let numPad = {
//         2: ["a", "b", "c"],
//         3: ["d", "e", "f"],
//         4: ["g", "h", "i"],
//         5: ["j", "k", "l"],
//         6: ["m", "n", "o"],
//         7: ["p", "q", "r", "s"],
//         8: ["t", "u", "v"],
//         9: ["w", "x", "y", "z"]
//     }

//     let result = []
//     let arr_a = numPad[digits[0]]
//     let arr_b = numPad[digits[1]] 
//     let arr_c = numPad[digits[2]]
//     let arr_d = numPad[digits[3]] 

//     // console.log(arr_a, arr_b, arr_c, arr_d)

//     loop_a: for (let a = 0; a < arr_a.length; a++) {
//         if (arr_b === undefined) {
//             result.push(arr_a[a])
//             continue loop_a
//         }
//         loop_b: for (let b = 0; b < arr_b.length; b++) {
//             if (arr_c === undefined) {
//                 result.push(`${arr_a[a]}${arr_b[b]}`)
//                 continue loop_b
//             } 
//             loop_c: for (let c = 0; c < arr_c.length; c++) {
//                 if (arr_d === undefined) {
//                     result.push(`${arr_a[a]}${arr_b[b]}${arr_c[c]}`)
//                     continue loop_c
//                 } 
//                 loop_d: for (let d = 0; d < arr_d.length; d++) {
//                     result.push(`${arr_a[a]}${arr_b[b]}${arr_c[c]}${arr_d[d]}`)
//                 }
//             }
//         }
//     }
//     return result
// };

/*
Runtime 54 ms
Beats 45.33%
Memory 41.6 MB
Beats 86.45%
*/

// ATTEMPT 2: OPTIMIZED OBJECT LENGTH RECORDING IN FUNCTION

var letterCombinations = function(digits) {
    if (digits === "") return [] // Return empty array if length is 0

    // Set numPad object to pull phone letters
    let numPad = {
        2: ["a", "b", "c"],
        3: ["d", "e", "f"],
        4: ["g", "h", "i"],
        5: ["j", "k", "l"],
        6: ["m", "n", "o"],
        7: ["p", "q", "r", "s"],
        8: ["t", "u", "v"],
        9: ["w", "x", "y", "z"]
    }
    // Track Digit Length and Result
    let digitLen = digits.length
    let result = []

    // Track Individual Loop Length
    let loop_a_len = numPad[digits[0]].length
    let loop_b_len = numPad[digits[1]] ? numPad[digits[1]].length : 0
    let loop_c_len = numPad[digits[2]] ? numPad[digits[2]].length : 0
    let loop_d_len = numPad[digits[3]] ? numPad[digits[3]].length : 0

    // Loop through each digit character returning result only if length condition is met
    loop_a: for (let a = 0; a < loop_a_len; a++) {
        if (digitLen === 1) {
            result.push(numPad[digits[0]][a])
            continue loop_a
        }
        loop_b: for (let b = 0; b < loop_b_len; b++) {
            if (digitLen === 2) {
                result.push(`${numPad[digits[0]][a]}${numPad[digits[1]][b]}`)
                continue loop_b
            } 
            loop_c: for (let c = 0; c < loop_c_len; c++) {
                if (digitLen === 3) {
                    result.push(`${numPad[digits[0]][a]}${numPad[digits[1]] [b]}${numPad[digits[2]][c]}`)
                    continue loop_c
                } 
                loop_d: for (let d = 0; d < loop_d_len; d++) {
                    result.push(`${numPad[digits[0]][a]}${numPad[digits[1]][b]}${numPad[digits[2]][c]}${numPad[digits[3]][d]}`)
                }
            }
        }
    }
    // Return result
    return result
};

/*
Runtime 43 ms
Beats 93.70%
Memory 41.5 MB
Beats 86.45%
*/

console.log(letterCombinations(test1))
// console.log(letterCombinations(test2))
// console.log(letterCombinations(test3))
// console.log(letterCombinations(test4))
// console.log(letterCombinations(test5))
