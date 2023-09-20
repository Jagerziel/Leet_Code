/*
1200. Minimum Absolute Difference
Easy

Given an array of distinct integers arr, find all pairs of elements with the minimum absolute difference of any two elements.

Return a list of pairs in ascending order(with respect to pairs), each pair [a, b] follows
    a, b are from arr
    a < b
    b - a equals to the minimum absolute difference of any two elements in arr
Example 1:

Input: arr = [4,2,1,3]
Output: [[1,2],[2,3],[3,4]]
Explanation: The minimum absolute difference is 1. List all pairs with difference equal to 1 in ascending order.

Example 2:
Input: arr = [1,3,6,10,15]
Output: [[1,3]]

Example 3:
Input: arr = [3,8,-10,23,19,-4,-14,27]
Output: [[-14,-10],[19,23],[23,27]]

 

Constraints:
    2 <= arr.length <= 105
    -106 <= arr[i] <= 106
*/

/*
 * @param {number[]} arr
 * @return {number[][]}
 */

let test01 = [4,2,1,3]
let test02 = [1,3,6,10,15]
let test03 = [3,8,-10,23,19,-4,-14,27]

// ATTEMPT 1: Sort array, then create object with keys being the values.  Pull the lowest object key value and return the result.

var minimumAbsDifference = function(arr) {
    arr.sort((a, b) => a - b)
    let result = {}

    for (let i = 1; i < arr.length; i++) {
        let key = arr[i] - arr[i - 1]
        if (result[key] === undefined) {
            result[key] = [[arr[i - 1], arr[i]]]
        } else {
            result[key].push([arr[i - 1], arr[i]])
        }
    }
    return Object.values(result)[0]
};
/*
Runtime 168 ms
Beats 9.5%
Memory 72.2 MB
Beats 5.87%
*/

console.log(minimumAbsDifference(test01))
console.log(minimumAbsDifference(test02))
console.log(minimumAbsDifference(test03))
