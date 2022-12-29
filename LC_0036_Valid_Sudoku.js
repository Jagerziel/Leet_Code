/*
Date Started: 2022.12.29
Language(s): JavaScript
*/

/*
36. Valid Sudoku
Medium

Determine if a 9 x 9 Sudoku board is valid. Only the filled cells need to be validated according to the following rules:
    Each row must contain the digits 1-9 without repetition.
    Each column must contain the digits 1-9 without repetition.
    Each of the nine 3 x 3 sub-boxes of the grid must contain the digits 1-9 without repetition.

Note:

    A Sudoku board (partially filled) could be valid but is not necessarily solvable.
    Only the filled cells need to be validated according to the mentioned rules.

 

Example 1:
Input: board = 
[["5","3",".",".","7",".",".",".","."]
,["6",".",".","1","9","5",".",".","."]
,[".","9","8",".",".",".",".","6","."]
,["8",".",".",".","6",".",".",".","3"]
,["4",".",".","8",".","3",".",".","1"]
,["7",".",".",".","2",".",".",".","6"]
,[".","6",".",".",".",".","2","8","."]
,[".",".",".","4","1","9",".",".","5"]
,[".",".",".",".","8",".",".","7","9"]]
Output: true

Example 2:

Input: board = 
[["8","3",".",".","7",".",".",".","."]
,["6",".",".","1","9","5",".",".","."]
,[".","9","8",".",".",".",".","6","."]
,["8",".",".",".","6",".",".",".","3"]
,["4",".",".","8",".","3",".",".","1"]
,["7",".",".",".","2",".",".",".","6"]
,[".","6",".",".",".",".","2","8","."]
,[".",".",".","4","1","9",".",".","5"]
,[".",".",".",".","8",".",".","7","9"]]
Output: false
Explanation: Same as Example 1, except with the 5 in the top left corner being modified to 8. Since there are two 8's in the top left 3x3 sub-box, it is invalid.

 

Constraints:
    board.length == 9
    board[i].length == 9
    board[i][j] is a digit 1-9 or '.'.
*/

/*
 * @param {character[][]} board
 * @return {boolean}
 */
//should be true
test1 = board = 
[["5","3",".",".","7",".",".",".","."]
,["6",".",".","1","9","5",".",".","."]
,[".","9","8",".",".",".",".","6","."]
,["8",".",".",".","6",".",".",".","3"]
,["4",".",".","8",".","3",".",".","1"]
,["7",".",".",".","2",".",".",".","6"]
,[".","6",".",".",".",".","2","8","."]
,[".",".",".","4","1","9",".",".","5"]
,[".",".",".",".","8",".",".","7","9"]]
//should be false for vertical and square
test2 = 
[["8","3",".",".","7",".",".",".","."]
,["6",".",".","1","9","5",".",".","."]
,[".","9","8",".",".",".",".","6","."]
,["8",".",".",".","6",".",".",".","3"]
,["4",".",".","8",".","3",".",".","1"]
,["7",".",".",".","2",".",".",".","6"]
,[".","6",".",".",".",".","2","8","."]
,[".",".",".","4","1","9",".",".","5"]
,[".",".",".",".","8",".",".","7","9"]]
//should be false for square only
test3 = 
[["5","3",".",".","7",".",".",".","."]
,["6",".",".","1","9","5",".",".","."]
,[".","9","8",".",".",".",".","6","."]
,["8",".",".",".","6",".",".","1","3"]
,["4",".",".","8",".","3",".",".","1"]
,["7",".",".",".","2",".",".",".","6"]
,[".","6",".",".",".",".","2","8","."]
,[".",".",".","4","1","9",".",".","5"]
,[".",".",".",".","8",".",".","7","9"]]
//should be false for vertical only
test4 = 
[["8","3",".",".","7",".",".",".","."]
,["6",".",".","1","9","5",".",".","."]
,[".","9",".",".",".",".",".","6","."]
,["8",".",".",".","6",".",".",".","3"]
,["4",".",".","8",".","3",".",".","1"]
,["7",".",".",".","2",".",".",".","6"]
,[".","6",".",".",".",".","2","8","."]
,[".",".",".","4","1","9",".",".","5"]
,[".",".",".",".","8",".",".","7","9"]]


var isValidSudoku = function(board) {
    //create board reset function
    const boardReset = (boardName) => {
        boardName['1'] = false
        boardName['2'] = false
        boardName['3'] = false
        boardName['4'] = false
        boardName['5'] = false
        boardName['6'] = false
        boardName['7'] = false
        boardName['8'] = false
        boardName['9'] = false
    }
    //create check objects
    const checkNumHorz = { '1': false, '2': false, '3': false,'4': false,'5': false,'6': false,'7': false,'8': false,'9': false }
    const checkNumVert = { '1': false, '2': false, '3': false,'4': false,'5': false,'6': false,'7': false,'8': false,'9': false }
    const checkNumSquare = { '1': false, '2': false, '3': false,'4': false,'5': false,'6': false,'7': false,'8': false,'9': false }
    //Check Horizontal and Vertical board positions
    for (let i = 0; i < 9; i++) {
        for (let j = 0; j < 9; j++) {
            //Horizontal Check
            //Check if Horz object currently has 'true' designation
            //If yes, board is not valid
            if (checkNumHorz[board[i][j]] === true) {
                return false
            //if no, assign as true
            } else {
                if (board[i][j] !== '.') {
                    checkNumHorz[board[i][j]] = true
                }
            }
            //Reset Object to all false
            if (j === 8) {
                boardReset(checkNumHorz)
            }
            //Vertical Check
            // Check if Vert object currently has 'true' designation
            // If yes, board is not valid
            if (checkNumVert[board[j][i]] === true) {
                return false
            //if no, assign as true
            } else {
                if (board[j][i] !== '.') {
                    checkNumVert[board[j][i]] = true
                }
            }
            //Reset Object to all false
            if (j === 8) {
                boardReset(checkNumVert)
            }
        }
    }
    //Square Check
    //Horizontal Indexes with modifier of 0, 3, 6
    for (let sqH = 0; sqH <= 6; sqH += 3) {
        //Vertical Indexes with modifier of 0, 3, 6
        for (let sqV = 0; sqV <= 6; sqV += 3) {
            //Loop Horizontal 3 times
            for (let i = 0; i < 3; i++) {
                //Loop Vertical 3 times
                for (let j = 0; j < 3; j++) {
                    // Check if Square object currently has 'true' designation
                    // If yes, board is not valid
                    if(checkNumSquare[board[i + sqH][j + sqV]] === true) {
                        return false
                    //if no, assign as true
                    } else {
                        if (board[i + sqH][j + sqV] !== '.') {
                            checkNumSquare[board[i + sqH][j + sqV]] = true
                        }    
                    }
                    //Reset Object to all false
                    if (i === 2 && j === 2) {
                        boardReset(checkNumSquare)
                    }
                }
            }
        }
    }
    return true
};

console.log(isValidSudoku(test1))

/*
Runtime 76 ms
Beats 94.35%
Memory 44.6 MB
Beats 85.39%
*/