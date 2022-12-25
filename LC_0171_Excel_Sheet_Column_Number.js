/*
Date Started: 2022.12.25
Language(s): JavaScript
*/

/*
171. Excel Sheet Column Number
Easy

Given a string columnTitle that represents the column title as appears in an Excel sheet, return its corresponding column number.

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
Input: columnTitle = "A"
Output: 1

Example 2:
Input: columnTitle = "AB"
Output: 28

Example 3:
Input: columnTitle = "ZY"
Output: 701

Constraints:

    1 <= columnTitle.length <= 7
    columnTitle consists only of uppercase English letters.
    columnTitle is in the range ["A", "FXSHRXW"].

*/


/*
 * @param {string} columnTitle
 * @return {number}
 */

let test1 = "ZY" //701
let test2 = "ADQ" //797
let test3 = "AMJ" //1024

var titleToNumber = function(columnTitle) {
    //variable for column number
    let colNum = 0
    //split columnTitle into array and reverse array
    let col = columnTitle.split("")
    col = col.reverse()
    //set letter values
    let chars = {
        A: 1, B: 2, C: 3, D: 4, E: 5, F: 6, G: 7, H: 8, I: 9, J: 10, K: 11, L: 12, M: 13, N: 14, O: 15, P: 16, Q: 17, R: 18, S: 19, T: 20, U: 21, V: 22, W: 23, X: 24, Y: 25, Z: 26
    }
    //iterate through each letter and add to colNum based on 'tier'
    for (let i = 0; i < col.length; i++) {
        colNum += chars[`${col[i]}`] * (i === 0 ? 1: 26 ** i)
    }
    //return result
    return colNum
};

console.log(titleToNumber(test3))


/*
Runtime89 ms
Beats
74.7%
Memory44 MB
Beats
33.97%
*/

