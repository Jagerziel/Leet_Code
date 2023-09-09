/*
74. Search a 2D Matrix
Medium

You are given an m x n integer matrix matrix with the following two properties:

    Each row is sorted in non-decreasing order.
    The first integer of each row is greater than the last integer of the previous row.

Given an integer target, return true if target is in matrix or false otherwise.

You must write a solution in O(log(m * n)) time complexity.

Example 1:
Input: matrix = [[1,3,5,7],[10,11,16,20],[23,30,34,60]], target = 3
Output: true

Example 2:
Input: matrix = [[1,3,5,7],[10,11,16,20],[23,30,34,60]], target = 13
Output: false

Constraints:
    m == matrix.length
    n == matrix[i].length
    1 <= m, n <= 100
    -104 <= matrix[i][j], target <= 104
*/

/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */

// let matrix = [[1,3,5,7],[10,11,16,20],[23,30,34,60]], target = 3
// let matrix = [[1,3,5,7],[10,11,16,20],[23,30,34,60]], target = 13
// let matrix = [[1]], target = 1
let matrix = [[1]], target = 2


var searchMatrix = function(matrix, target) {
    let matrixLen = matrix[0].length - 1
    for (let i = 0; i < matrix.length; i++) {
        if (target <= matrix[i][matrixLen]) {
            for (let j = 0; j < matrixLen + 1; j++) {       
                if (target === matrix[i][j]) return true
            }
            return false
        }
    }
    return false
};

/*
Runtime 57 ms
Beats 31.99%
Memory 42.1 MB
Beats 40.78%
*/



console.log(searchMatrix(matrix, target))