/*
Date Started: 2022.12.25
Language(s): JavaScript
*/

/*
168. Excel Sheet Column Title
Easy

Given an integer columnNumber, return its corresponding column title as it appears in an Excel sheet.

For example:
A -> 1
B -> 2
C -> 3
...
Z -> 26
AA -> 27
AB -> 28 
...

Example 1:
Input: columnNumber = 1
Output: "A"

Example 2:
Input: columnNumber = 28
Output: "AB"

Example 3:
Input: columnNumber = 701
Output: "ZY"

Constraints:
    1 <= columnNumber <= 231 - 1
*/

/*
 * @param {number} columnNumber
 * @return {string}
 */

let test1 = 470000

let nameOne = "Ryan"
// console.log(nameOne.split('').reverse().join(''))

var convertToTitle = function(columnNumber) {
    //align column number with index
    columnNumber -= 1
    let chars = {
        0: "A", 1: "B", 2: "C", 3: "D", 4: "E", 5: "F", 6: "G", 7: "H", 8: "I", 9: "J", 10: "K", 11: "L", 12: "M", 13: "N", 14: "O", 15: "P", 16: "Q", 17: "R", 18: "S", 19: "T", 20: "U", 21: "V", 22: "W", 23: "X", 24: "Y", 25: "Z"
    }
    //set loop count, starting subTotal, and columnTitle String
    let loop = 1
    let subTot = 26
    let columnTitle = ""
    //determine amount of loops
    while (subTot <= columnNumber) {
        loop++
        subTot += 26 ** loop
    } 
    loop--
    //Assign letters for all but last loop starting from largest
    if (loop > 0) {
        for (let i = loop; i > 0; i--) {
          let occurrences = Math.floor(columnNumber / (26 ** i)) - 1
          if (chars[occurrences] === undefined) {
            occurrences = 0
          }
          columnTitle += chars[occurrences]
          columnNumber -= Math.floor(columnNumber / (26 ** i)) * (26 ** i)
        }
    }
    //Add last letter
    columnTitle += chars[columnNumber]
    //Return result
    return columnTitle
};

console.log(convertToTitle(test1))

/*
Runtime52 ms
Beats
99.3%
Memory41.9 MB
Beats
53.65%
*/