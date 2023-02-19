/*
43. Multiply Strings
Medium

Given two non-negative integers num1 and num2 represented as strings, return the product of num1 and num2, also represented as a string.

Note: You must not use any built-in BigInteger library or convert the inputs to integer directly.

Example 1:
Input: num1 = "2", num2 = "3"
Output: "6"

Example 2:
Input: num1 = "123", num2 = "456"
Output: "56088"

Constraints:

    1 <= num1.length, num2.length <= 200
    num1 and num2 consist of digits only.
    Both num1 and num2 do not contain any leading zero, except the number 0 itself.
*/


/*
 * @param {string} num1
 * @param {string} num2
 * @return {string}
*/

let num1 = "6"
let num2 = "10"

let num3 = "123456789"
let num4 = "987654321"
let num5 = "268526552232355502665523655226852265525222552255226"

let num6 = "492"
let num7 = "173"

let num8 = "99"
let num9 = "10"

let num10 = "99501"
let num11 = "0"

//ATTEMPT 1: WORKS UNTIL NUMBER GETS TOO LARGE - REFACTORING

// var multiply = function(num1, num2) {
//     //Function to convert number
//     function convertToNum (text) {
//         //Object to convert to number
//         const convert = {
//             "0": 0,
//             "1": 1,
//             "2": 2,
//             "3": 3,
//             "4": 4,
//             "5": 5,
//             "6": 6,
//             "7": 7,
//             "8": 8,
//             "9": 9
//         }
//         //Track value
//         let value = 0
//         //Convert text to number
//         for (let i = 0; i < text.length; i++) {
//             value += convert[text[i]] * (10 ** (text.length - i - 1))
//         }
//         //Return result
//         return value
//     }
//     //Multiply results using function above
//     let result = convertToNum(num1) * convertToNum(num2)
//     //Return result as a string
//     return `${result}`
//     // return convertToNum(num5)
// };

// console.log(multiply(num3, num4))


// var multiply = function(num1, num2) {
//     // Check for multiply by 0
//     if (num1 === '0' || num2 === '0') {
//         return '0'
//     }
//     // Set Object for each digit
//     let digitCount = num1.length + num2.length
//     let digitObj = {}
//     for (let i = 0; i < digitCount; i++) {
//         digitObj[i] = 0
//     }
//     // Assign number to object at each digit
//     for (let i = num1.length - 1; i >= 0; i--) {
//         // Control the digit's field for proper object assignment
//         let objPosition = 0 + ((num1.length - 1) - i)
//         // Assign digit value for current and next (if value is greater than 9)
//         for (let j = num2.length - 1; j >= 0; j--) {
//             digitObj[objPosition] += (num1[i] * num2[j]) % 10
//             digitObj[objPosition + 1] += Math.floor((num1[i] * num2[j]) / 10)
//             objPosition++
//         }
//     }
//     // As both numbers are now added, the object will again have values greater than 9.  This is a second iteration to move numbers into the appropriate digit should the value of that object key exceed 9.
//     for (let i = 0; i < digitCount; i++) {
//         if (digitObj[i] >= 10) {
//             digitObj[i + 1] += Math.floor(digitObj[i] / 10)
//             digitObj[i] = digitObj[i] % 10
//         }
//     }
//     // Set string and iterate through object to pull the values for each key appending into variable 'result'
//     let result = ""
//     let leadingZero = digitObj[digitCount - 1] === 0 ? 1 : 0
//     for (let i = 0; i < digitCount - leadingZero; i++) {
//         result = `${digitObj[i]}` + result
//     }
//     // Return result
//     return result
// };

// console.log(multiply(num10, num11))

/*
Runtime 80 ms
Beats 51.20%
Memory 45.5 MB
Beats 25.69%
*/

//REFACTORING ATTEMPT 1: REMOVE SECOND ADDITION LOOP

var multiply = function(num1, num2) {
    // Check for multiply by 0
    if (num1 === '0' || num2 === '0') {
        return '0'
    }
    // Set Object for each digit
    let digitCount = num1.length + num2.length
    let digitObj = {}
    for (let i = 0; i < digitCount; i++) {
        digitObj[i] = 0
    }
    // Assign number to object at each digit
    for (let i = num1.length - 1; i >= 0; i--) {
        // Control the digit's field for proper object assignment
        let objPosition = 0 + ((num1.length - 1) - i)
        // Assign digit value for current and next (if value is greater than 9)
        for (let j = num2.length - 1; j >= 0; j--) {
            digitObj[objPosition] += (num1[i] * num2[j]) % 10
            let over10 = 0
            if (digitObj[objPosition] >= 10) {
                over10 = Math.floor(digitObj[objPosition] / 10)
                digitObj[objPosition] = digitObj[objPosition] % 10
            }
            digitObj[objPosition + 1] += Math.floor((num1[i] * num2[j]) / 10) + over10
            objPosition++
        }
    }
    // Set string and iterate through object to pull the values for each key appending into variable 'result'
    let result = ""
    let leadingZero = digitObj[digitCount - 1] === 0 ? 1 : 0
    for (let i = 0; i < digitCount - leadingZero; i++) {
        result = `${digitObj[i]}` + result
    }
    // Return result
    return result
};

console.log(multiply(num3, num4))

/*
Runtime 81 ms
Beats 49.19%
Memory 45.2 MB
Beats 26.27%
*/


