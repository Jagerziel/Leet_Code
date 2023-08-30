/*
227. Basic Calculator II
Medium

Given a string s which represents an expression, evaluate this expression and return its value. 

The integer division should truncate toward zero.

You may assume that the given expression is always valid. All intermediate results will be in the range of [-231, 231 - 1].

Note: You are not allowed to use any built-in function which evaluates strings as mathematical expressions, such as eval().

Example 1:

Input: s = "3+2*2"
Output: 7

Example 2:

Input: s = " 3/2 "
Output: 1

Example 3:

Input: s = " 3+5 / 2 "
Output: 5

Constraints:

    1 <= s.length <= 3 * 105
    s consists of integers and operators ('+', '-', '*', '/') separated by some number of spaces.
    s represents a valid expression.
    All the integers in the expression are non-negative integers in the range [0, 231 - 1].
    The answer is guaranteed to fit in a 32-bit integer.

*/

/*
 * @param {string} s
 * @return {number}
 */

let test1 = "3+2*2", // 7
    test2 = " 3/2 ", // 1
    test3 = " 3+5 / 2 ", // 5
    test4 = "3+2*2+2", // 9
    test5 = "3 + 2 * 3 + 2 - 5 * 3", // -4
    test6 = "433     ", // 433
    test7 = " 25 * 31   " // 775

// ATTEMPT 1: CLEAN DATA, HANDLE MULT/DIV FIRST, HANDLE ADD/SUBT
// var calculate = function(s) {
//     function operationMultDiv(num1, num2, symbol) {
//         if (symbol === "*") return num1 * num2
//         if (symbol === "/") return Math.trunc(num1 / num2)
//     }
//     function operationAddSubt(num1, num2, symbol) {
//         if (symbol === "+") return num1 + num2
//         if (symbol === "-") return num1 - num2
//     }
//     let number = ""
//     let calcArr = []
//     for (let i = 0; i < s.length; i++) {
//         if (s[i] === " ") continue
//         if (isNaN(parseInt(s[i]))) {
//             calcArr.push(parseInt(number))
//             calcArr.push(s[i])
//             number = ""
//         } else {
//             number += s[i]
//         }
//     }
//     calcArr.push(parseInt(number))

//     let calcArrLen = calcArr.length
//     let calcArr2 = []
//     let contEval = false
//     let contEvalVal = 0
//     for (let i = 1; i < calcArrLen; i += 2) {
//         if (calcArr[i] === "*" || calcArr[i] === "/") {
//             if (contEval === false) {
//                 contEvalVal = operationMultDiv(calcArr[i - 1], calcArr[i + 1], calcArr[i])
//                 contEval = true
//             } else {
//                 contEvalVal = operationMultDiv(contEvalVal, calcArr[i + 1], calcArr[i])
//             }
//         } else {
//             if (contEval === false) {
//                 calcArr2.push(calcArr[i - 1])
//                 calcArr2.push(calcArr[i])
//             } else {
//                 calcArr2.push(contEvalVal)
//                 calcArr2.push(calcArr[i])
//                 contEval = false
//             }
//         }
//     }
//     if (contEval) calcArr2.push(contEvalVal)
//     if (!contEval) calcArr2.push(calcArr[calcArrLen - 1])

//     contEvalVal = calcArr2[0]

//     for (let i = 1; i < calcArr2.length; i += 2) {
//         contEvalVal = operationAddSubt(contEvalVal , calcArr2[i + 1] , calcArr2[i]) 
//     }

//     return contEvalVal
// };

/*
Runtime 90 ms
Beats 71.39%
Memory 67.1 MB
Beats 11.49%
*/


// ATTEMPT 2: CLEAN FUNCTIONS AND OPTIMIZE

var calculate = function(s) {
    function operationMultDiv(num1, num2, symbol) {
        return symbol === "*" ? num1 * num2 : Math.trunc(num1 / num2)
    }
    function operationAddSubt(num1, num2, symbol) {
        return symbol === "+" ? num1 + num2 : num1 - num2
    }
    let number = "",
        calcArr = []
    for (let i = 0; i < s.length; i++) {
        if (s[i] === " ") continue
        if (isNaN(parseInt(s[i]))) {
            calcArr.push(parseInt(number), s[i])
            number = ""
        } else {
            number += s[i]
        }
    }
    calcArr.push(parseInt(number))

    if (calcArr.length === 1) return calcArr[0]

    let calcArrLen = calcArr.length,
        calcArr2 = [],
        contEval = false,
        contEvalVal = 0
    for (let i = 1; i < calcArrLen; i += 2) {
        if (calcArr[i] === "*" || calcArr[i] === "/") {
            if (contEval === false) {
                contEvalVal = operationMultDiv(calcArr[i - 1], calcArr[i + 1], calcArr[i])
                contEval = true
            } else {
                contEvalVal = operationMultDiv(contEvalVal, calcArr[i + 1], calcArr[i])
            }
        } else {
            if (contEval === false) {
                calcArr2.push(calcArr[i - 1], calcArr[i])
            } else {
                calcArr2.push(contEvalVal, calcArr[i])
                contEval = false
            }
        }
    }
    if (contEval) calcArr2.push(contEvalVal)
    else calcArr2.push(calcArr[calcArrLen - 1])

    contEvalVal = calcArr2[0]

    for (let i = 1; i < calcArr2.length; i += 2) {
        contEvalVal = operationAddSubt(contEvalVal , calcArr2[i + 1] , calcArr2[i]) 
    }

    return contEvalVal
};

/*
Runtime 87 ms
Beats 76.53%
Memory 68.2 MB
Beats 10.2%
*/

console.log(calculate(test1))
console.log(calculate(test2))
console.log(calculate(test3))
console.log(calculate(test4))
console.log(calculate(test5))
console.log(calculate(test6))
console.log(calculate(test7))

