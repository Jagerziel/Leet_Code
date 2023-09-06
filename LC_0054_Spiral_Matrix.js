/*
54. Spiral Matrix
Medium
13.4K
1.2K
Companies

Given an m x n matrix, return all elements of the matrix in spiral order.

Example 1:
Input: matrix = [[1,2,3],[4,5,6],[7,8,9]]
Output: [1,2,3,6,9,8,7,4,5]

Example 2:
Input: matrix = [[1,2,3,4],[5,6,7,8],[9,10,11,12]]
Output: [1,2,3,4,8,12,11,10,9,5,6,7]

Constraints:
    m == matrix.length
    n == matrix[i].length
    1 <= m, n <= 10
    -100 <= matrix[i][j] <= 100
*/

let matrix01 = [[1,2,3],[4,5,6],[7,8,9]]
let matrix02 = [[1,2,3,4],[5,6,7,8],[9,10,11,12]]
let matrix03 = [[7],[9],[6]]
let matrix04 = [[1],[2],[3],[4],[5],[6],[7],[8],[9],[10]]

/**
 * @param {number[][]} matrix
 * @return {number[]}
 */

// ATTEMPT 1: Directionally cycle through spiral removing elements from original matrix as the loop progresses
// var spiralOrder = function(matrix) {
//     let direction = 'right'
//     let result = []

//     while (matrix.length > 0) {
//         if (direction === 'right') {
//             for (let i = 0; i < matrix[0].length; i++) {
//                 result.push(matrix[0][i])
//             }
//             matrix.splice(0, 1)
//             direction = 'down'
//             continue
//         } 
//         if (direction === 'down') {
//             for (let i = 0; i < matrix.length; i++) {
//                 result.push(matrix[i][matrix[i].length - 1])
//                 matrix[i].pop()
//                 if (matrix[i].length === 0) {
//                     matrix.shift()
//                     i--
//                 }        
//             }
//             direction = 'left'
//             continue
//         }
//         if (direction === 'left') {
//             for (let i = matrix[matrix.length - 1].length - 1; i >= 0; i--) {
//                 result.push(matrix[matrix.length - 1][i])
//             }
//             matrix.splice(matrix.length - 1, 1)
//             direction = 'up'
//             continue
//         } 
//         if (direction === 'up') {
//             for (let i = matrix.length - 1; i >=0; i--) {
//                 result.push(matrix[i][0])
//                 matrix[i].shift()
//                 if (matrix[i].length === 0) {
//                     matrix.pop()
//                 }
//             }
//             direction = 'right'
//             continue
//         }
//     }
//     return result
// };

/*
Runtime 52 ms
Beats 58.63%
Memory 41.7 MB
Beats 68.57%
*/

// ATTEMPT 2: ADD CONDITIONALS TO EXIT WHILE LOOP

var spiralOrder = function(matrix) {
    // Track direction and result
    let direction = 'right'
    let result = []

    while (matrix.length > 0) {
        if (direction === 'right') { // Go through zero index of matrix and push array to result
            for (let i = 0; i < matrix[0].length; i++) {
                result.push(matrix[0][i])
            }
            matrix.splice(0, 1) // Remove zero index
            if (matrix.length === 0) return result // Return result
            direction = 'down'
        } 
        if (direction === 'down') { // Go down last item in each sub-array 
            for (let i = 0; i < matrix.length; i++) {
                result.push(matrix[i][matrix[i].length - 1])
                matrix[i].pop() // Remove last item
                if (matrix[i].length === 0) {
                    matrix.shift()
                    i--
                }        
            }
            if (matrix.length === 0) return result // Return result
            direction = 'left'
        }
        if (direction === 'left') { // Go from right to left in last index in matrix
            for (let i = matrix[matrix.length - 1].length - 1; i >= 0; i--) {
                result.push(matrix[matrix.length - 1][i])
            }
            matrix.splice(matrix.length - 1, 1) // Remove last index in matrix
            if (matrix.length === 0) return result // Return result
            direction = 'up'
        } 
        if (direction === 'up') { // Go through first index of subarray going from last index in matrix to first
            for (let i = matrix.length - 1; i >=0; i--) {
                result.push(matrix[i][0])
                matrix[i].shift() // Remove first index of subarray
                if (matrix[i].length === 0) {
                    matrix.pop()
                }
            }
            direction = 'right'
        }
    }
    return result  // Return result
};

/*
Runtime 44 ms
Beats 90.46%
Memory 41.8 MB
Beats 57.47%
*/

// console.log(spiralOrder(matrix01))
// console.log(spiralOrder(matrix02))
// console.log(spiralOrder(matrix03))
console.log(spiralOrder(matrix04))
