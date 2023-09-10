/*
419. Battleships in a Board
Medium

Given an m x n matrix board where each cell is a battleship 'X' or empty '.', return the number of the battleships on board.

Battleships can only be placed horizontally or vertically on board. In other words, they can only be made of the shape 1 x k (1 row, k columns) or k x 1 (k rows, 1 column), where k can be of any size. At least one horizontal or vertical cell separates between two battleships (i.e., there are no adjacent battleships).

Example 1:

Input: board = [["X",".",".","X"],[".",".",".","X"],[".",".",".","X"]]
Output: 2

Example 2:

Input: board = [["."]]
Output: 0

Constraints:

    m == board.length
    n == board[i].length
    1 <= m, n <= 200
    board[i][j] is either '.' or 'X'.

 

Follow up: Could you do it in one-pass, using only O(1) extra memory and without modifying the values board?
*/


/*
* @param {character[][]} board
* @return {number}
*/

let board = [["X",".",".","X"],[".",".",".","X"],[".",".",".","X"]]
let board2 = [[".","."],["X","X"]]

var countBattleships = function(board) {
    let shipCt = 0
    let rowLen = board[0].length
    let colLen = board.length

    function chkUpLeft ( arr , i , j) {
        let up = false
        let left = false

        if (i === 0) up = true
        else if (arr[i - 1][j] === '.' ) up = true
        else return false

        if (j === 0) left = true
        else if (arr[i][j - 1] === '.') left = true
        else return false

        return true
    }

    for (let i = 0; i < colLen; i++) {
        for (let j = 0; j < rowLen; j++) {
            if (board[i][j] === 'X') {
                if (i + 1 === colLen) {
                    if (chkUpLeft(board , i , j)) shipCt++
                    continue
                }
                if (j + 1 === rowLen) {
                    if (chkUpLeft(board , i , j)) shipCt++
                    continue
                }
                if (board[i + 1][j] !== 'X') {
                    if (chkUpLeft(board , i , j)) shipCt++
                    continue
                }
                if (board[i][j + 1] !== 'X') {
                    if (chkUpLeft(board , i , j)) shipCt++
                    j++
                    continue
                }
            }
        }
    }
    return shipCt
};

/*
Runtime 46 ms
Beats 98.28%
Memory 43.2 MB
Beats 47.41%
*/

// console.log(countBattleships(board))
console.log(countBattleships(board2))
