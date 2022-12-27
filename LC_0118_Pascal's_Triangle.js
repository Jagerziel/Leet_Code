/*
Date Started: 2022.12.27
Language(s): JavaScript
*/

/*
118. Pascal's Triangle
Easy

Given an integer numRows, return the first numRows of Pascal's triangle.
In Pascal's triangle, each number is the sum of the two numbers directly above it as shown:

Example 1:
Input: numRows = 5
Output: [[1],[1,1],[1,2,1],[1,3,3,1],[1,4,6,4,1]]

Example 2:
Input: numRows = 1
Output: [[1]]

Constraints:

    1 <= numRows <= 30

*/

/*
 * @param {number} numRows
 * @return {number[][]}
 */

let test1 = 7

var generate = function(numRows) {
    //Set initial array
    let arr = [[1]]
    //Return initial array if numRows is equal to 1
    if (numRows === 1) {
        return [[1]]
    } else {
        //Loop i times for the amount of additional arrays needed (less the one already created)
        for (let i = 1; i < numRows; i++) {
            //Create new array for embedding in arr
            let newArr = [1]
            //Loop j times and push the sum of the prior embedded array plus following index sum
            for (let j = 0; j < arr[i - 1].length; j++) {
                let num1 = arr[i - 1][j]
                //Ensure array position is not undefined (i.e. longer than length)
                let num2 = arr[i - 1][j + 1] === undefined ? 0 : arr[i - 1][j + 1]
                //Include number in newArr
                newArr.push(num1 + num2)
            }
            //Push newArr into arr
            arr.push(newArr)
        }
    }
    //Return result
    return arr
};

console.log(generate(test1))


/*
Runtime62 ms
Beats
88.97%
Memory42.1 MB
Beats
48.61%
*/