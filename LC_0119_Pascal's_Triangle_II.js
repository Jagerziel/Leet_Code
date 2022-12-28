/*
Date Started: 2022.12.27
Language(s): JavaScript
*/

/*
119. Pascal's Triangle II
Easy

Given an integer rowIndex, return the rowIndexth (0-indexed) row of the Pascal's triangle.

In Pascal's triangle, each number is the sum of the two numbers directly above it as shown:

Example 1:
Input: rowIndex = 3
Output: [1,3,3,1]

Example 2:
Input: rowIndex = 0
Output: [1]

Example 3:
Input: rowIndex = 1
Output: [1,1]

Constraints:
    0 <= rowIndex <= 33
*/

/*
* @param {number} rowIndex
* @return {number[]}
*/

let test1 = 3

var getRow = function(rowIndex) {
        //Set initial array
        let arr = [1]
        //Return initial array if rowIndex is equal to 0
        if (rowIndex === 0) {
            return [1]
        } else {
            //Set while loop counter
            let counter = 0
            while (counter < rowIndex) {
                //set initial array structure
                let newArr = [1]
                //Conduct loop based on current arr length
                for (let j = 0; j < arr.length; j++) {
                    //Set first num to current item
                    let num1 = arr[j]
                    //Ensure array position is not undefined (i.e. longer than length)
                    let num2 = arr[j + 1] === undefined ? 0 : arr[j + 1]
                    //Include number in newArr
                    newArr.push(num1 + num2)
                }
                //Replace arr with the most current arr (newArr)
                arr = newArr
                //Iterate counter 
                counter++
            }
        }
        //Return result
        return arr
};

console.log(getRow(test1))

/*
Runtime 63 ms
Beats 90.81%
Memory 41.8 MB
Beats 85.53%
*/

