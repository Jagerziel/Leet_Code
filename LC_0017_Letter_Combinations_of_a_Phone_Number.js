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




var letterCombinations = function(digits) {
    if (digits === "") return []
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

    let result = []
    let arr_a = numPad[digits[0]]
    let arr_b = numPad[digits[1]] 
    let arr_c = numPad[digits[2]]
    let arr_d = numPad[digits[3]] 

    // console.log(arr_a, arr_b, arr_c, arr_d)

    loop_a: for (let a = 0; a < arr_a.length; a++) {
        if (arr_b === undefined) {
            result.push(arr_a[a])
            continue loop_a
        }
        loop_b: for (let b = 0; b < arr_b.length; b++) {
            if (arr_c === undefined) {
                result.push(`${arr_a[a]}${arr_b[b]}`)
                continue loop_b
            } 
            loop_c: for (let c = 0; c < arr_c.length; c++) {
                if (arr_d === undefined) {
                    result.push(`${arr_a[a]}${arr_b[b]}${arr_c[c]}`)
                    continue loop_c
                } 
                loop_d: for (let d = 0; d < arr_d.length; d++) {
                    result.push(`${arr_a[a]}${arr_b[b]}${arr_c[c]}${arr_d[d]}`)
                }
            }
        }
    }
    return result
};

/*
Runtime 54 ms
Beats 45.33%
Memory 41.6 MB
Beats 86.45%
*/

// console.log(letterCombinations(test1))
// console.log(letterCombinations(test2))
// console.log(letterCombinations(test3))
// console.log(letterCombinations(test4))
console.log(letterCombinations(test5))
