/*
6. Zigzag Conversion
Medium
6.6K
13.1K
Companies

The string "PAYPALISHIRING" is written in a zigzag pattern on a given number of rows like this: (you may want to display this pattern in a fixed font for better legibility)

P   A   H   N
A P L S I I G
Y   I   R

And then read line by line: "PAHNAPLSIIGYIR"
Write the code that will take a string and make this conversion given a number of rows:
string convert(string s, int numRows);

Example 1:
Input: s = "PAYPALISHIRING", numRows = 3
Output: "PAHNAPLSIIGYIR"

Example 2:
Input: s = "PAYPALISHIRING", numRows = 4
Output: "PINALSIGYAHRPI"
Explanation:
P     I    N
A   L S  I G
Y A   H R
P     I

Example 3:
Input: s = "A", numRows = 1
Output: "A"

Constraints:
    1 <= s.length <= 1000
    s consists of English letters (lower-case and upper-case), ',' and '.'.
    1 <= numRows <= 1000
*/

/*
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */

let test01s = "PAYPALISHIRING",
    test01r = 3

let test02s = "PAYPALISHIRING",
    test02r = 4

let test03s = "A",
    test03r = 3

let test04s = "APPLETHINGSY",
    test04r = 3

let test05s = "AB",
    test05r = 1

let test06s = "ABCDEF",
    test06r = 4

// ATTEMPT 1: ZIG ZAG THROUGH ARRAY MOVING FROM TOP INDEX TO NUMROWS

var convert = function(s, numRows) {
    let resultArr = []
    let sLen = s.length
    let limit = (s.length - 1) % (numRows - 1)
    let whileCt = numRows
    let direction = true // true=diagonal-up; false=down

    if (numRows === 1) return s
    if (sLen <= numRows) return s

    for (let i = 0; i < numRows; i++) {
        resultArr.push(s[i])
    }

    while (whileCt < sLen - limit) {
        if (direction) {
            for (let i = numRows - 2; i >= 0; i--) {
                resultArr[i] += s[whileCt]
                whileCt++
            }
            direction = false
        } else {
            for (let i = 1; i < numRows; i++) {
                resultArr[i] += s[whileCt]
                whileCt++
            }
            direction = true
        }
    }

    if (direction) {
        for (let i = 1; i <= limit; i++) {
            resultArr[numRows - i - 1] += s[whileCt]
            whileCt++
            
        }
    } else {
        for (let i = 1; i <= limit; i++) {
            resultArr[i] += s[whileCt]
            whileCt++
        }
    }

    let result = ""
    for (let i of resultArr) {
        result += i
    }
    return result
};

/*
Runtime 73 ms
Beats 70.82%
Memory 47.9 MB
Beats 48.69%
*/

// ATTEMPT 2: SHORTCUT WHERE LIMIT === 0

var convert = function(s, numRows) {
    // Set variables
    let resultArr = []
    let sLen = s.length
    let limit = (s.length - 1) % (numRows - 1)
    let whileCt = numRows
    let direction = true 
    // Set early resolve conditions
    if (numRows === 1) return s
    if (sLen <= numRows) return s
    // Complete first row down and set initial values of resultArr
    for (let i = 0; i < numRows; i++) {
        resultArr.push(s[i])
    }
    // Depending on direction, add letter to each index of array via zig-zag
    while (whileCt < sLen - limit) {
        if (direction) {
            for (let i = numRows - 2; i >= 0; i--) {
                resultArr[i] += s[whileCt]
                whileCt++
            }
            direction = false
        } else {
            for (let i = 1; i < numRows; i++) {
                resultArr[i] += s[whileCt]
                whileCt++
            }
            direction = true
        }
    }
    // If there are any remaining letters that did not concisely fit within a full zig (or zag), add to the array results
    if (limit !== 0) {
        if (direction) {
            for (let i = 1; i <= limit; i++) {
                resultArr[numRows - i - 1] += s[whileCt]
                whileCt++
                
            }
        } else {
            for (let i = 1; i <= limit; i++) {
                resultArr[i] += s[whileCt]
                whileCt++
            }
        }
    }
    // Concatenate array indexes into a string
    let result = ""
    for (let i of resultArr) {
        result += i
    }
    // Return result
    return result
};

/*
Runtime 62 ms
Beats 93.70%
Memory 47.5 MB
Beats 50.27%
*/

// console.log(convert(test01s, test01r))
// console.log(convert(test02s, test02r))
// console.log(convert(test03s, test03r))
// console.log(convert(test04s, test04r))
// console.log(convert(test05s, test05r))
console.log(convert(test06s, test06r))
