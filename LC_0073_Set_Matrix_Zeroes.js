/*
73. Set Matrix Zeroes
Medium

Given an m x n integer matrix matrix, if an element is 0, set its entire row and column to 0's.

You must do it in place.

Example 1:
Input: matrix = [[1,1,1],[1,0,1],[1,1,1]]
Output: [[1,0,1],[0,0,0],[1,0,1]]

Example 2:
Input: matrix = [[0,1,2,0],[3,4,5,2],[1,3,1,5]]
Output: [[0,0,0,0],[0,4,5,0],[0,3,1,0]]


Constraints:

    m == matrix.length
    n == matrix[0].length
    1 <= m, n <= 200
    -231 <= matrix[i][j] <= 231 - 1

Follow up:
    A straightforward solution using O(mn) space is probably a bad idea.
    A simple improvement uses O(m + n) space, but still not the best solution.
    Could you devise a constant space solution?
*/

/*
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */

let matrix01 = [[1,1,1],
                [1,0,1],
                [1,1,1]]

let matrix02 = [[0,1,2,0],
                [3,4,5,2],
                [1,3,1,5]]

var setZeroes = function(matrix) {
    let rowFlag = false // Flag if there is a '0' horizontally
    let colFlag = [] // Flag a zero vertically
    const rowLen = matrix[0].length // Track row length
    let replRow = [] // Create a full replacement row
    for (let i = 0; i < rowLen; i++) {
        replRow.push(0)
    }
    // Find '0' and add colFlag for column when found.  Replace row if '0' found.
    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < rowLen; j++) {
            if (matrix[i][j] === 0) {
                colFlag.push(j)
                rowFlag = true
            }
        }
        if (rowFlag === true) {
            matrix[i] = replRow
            rowFlag = false
        }
    }
    // Replace '0' for each column item
    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < colFlag.length; j++) {
            matrix[i][colFlag[j]] = 0
        }
    }
    // Return result
    return matrix
};

/*
Runtime 62 ms
Beats 91.6%
Memory 45.2 MB
Beats 33.94%
*/

console.log(setZeroes(matrix01))
// console.log(setZeroes(matrix02))
