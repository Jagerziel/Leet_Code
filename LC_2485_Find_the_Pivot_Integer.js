/*
Date Started: 2022.12.26
Language(s): JavaScript
*/

/*
2485. Find the Pivot Integer
Easy

Given a positive integer n, find the pivot integer x such that:

    The sum of all elements between 1 and x inclusively equals the sum of all elements between x and n inclusively.

Return the pivot integer x. If no such integer exists, return -1. It is guaranteed that there will be at most one pivot index for the given input.

Example 1:
Input: n = 8
Output: 6
Explanation: 6 is the pivot integer since: 1 + 2 + 3 + 4 + 5 + 6 = 6 + 7 + 8 = 21.

Example 2:
Input: n = 1
Output: 1
Explanation: 1 is the pivot integer since: 1 = 1.

Example 3:
Input: n = 4
Output: -1
Explanation: It can be proved that no such integer exist.

Constraints:
    1 <= n <= 1000
*/


/*
 * @param {number} n
 * @return {number}
 */

test1 = 4

var pivotInteger = function(n) {
    //Create array for n
    let arr = []
    for (let i = 1; i <= n; i++) {
        arr.push(i)
    }
    //track the sum of the top and bottom half
    let topSum = 0
    let bottomSum = 0
    //track the index
    let topCt = 0
    let bottomCt = arr.length - 1
    //track total loop count
    let arrCt = 0
    while (arrCt <= arr.length) {
        //Check if sums are equal
        if (arr[topCt] === arr[bottomCt]) {
            if (topSum === bottomSum) {
                return topCt + 1
            } else {
                return -1
            }
        }
        //Move one index for bottomSum and reduce index by one
        bottomSum += arr[bottomCt]
        bottomCt--
        arrCt++
        //Loop through top indexes to meet the new bottom Sum
        while (topSum < bottomSum) {
            topSum += arr[topCt]
            topCt++
            arrCt++
        }
    }   
    //Return -1 if the loop executes with no matching sums
    return -1
};

console.log(pivotInteger(test1))

/*
Runtime66 ms
Beats
94.24%
Memory44.5 MB
Beats
17.98%
*/


