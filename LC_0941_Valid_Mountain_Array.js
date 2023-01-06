/*
Date Started: 2022.01.06
Language(s): JavaScript
*/

/*
941. Valid Mountain Array
Easy
2.5K
153
Companies

Given an array of integers arr, return true if and only if it is a valid mountain array.

Recall that arr is a mountain array if and only if:
    arr.length >= 3
    There exists some i with 0 < i < arr.length - 1 such that:
        arr[0] < arr[1] < ... < arr[i - 1] < arr[i] 
        arr[i] > arr[i + 1] > ... > arr[arr.length - 1]

Example 1:
Input: arr = [2,1]
Output: false

Example 2:
Input: arr = [3,5,5]
Output: false

Example 3:
Input: arr = [0,3,2,1]
Output: true

Constraints:
    1 <= arr.length <= 104
    0 <= arr[i] <= 104
*/

/*
 * @param {number[]} arr
 * @return {boolean}
 */

let test1 = [0,3,2,1]
let test2 = [3,5,5]
let test3 = [2,1]

var validMountainArray = function(arr) {
    if (arr.length < 3) return false
    //Track which 'phase' we are on
    let max = 0
    let inflection = false
    //Used for iteration
    let ct = 0
    //While loop to get to inflection
    while (ct < arr.length || inflection === false) {
      //Iterate through array while value at current index is less than the value at next index
      if (arr[ct] < arr[ct + 1]) {
        ct++
      //If the value at current index is greater than next index, set maximum and inflection phase
      } else if (arr[ct] > arr[ct + 1]) {
        max = arr[ct]
        inflection = true
        break
      //Return false since the value would be equal
      } else {
        return false
      }
    }
    //While loop for post-inflection point
    while (arr[ct] > arr[ct + 1] || ct + 1 < ct.length) {
      //confirm current value is greater than value at next index
      if (arr[ct] > arr[ct + 1]) {
        ct++
      } else {
        //Otherwise return false
        return false
      }
    }
    //If successfully iterated through whole array, return true
    if (arr.length === ct + 1 && arr[0] !== max) return true
    //Otherwise return false
    return false
  };

console.log(validMountainArray(test1))

/*
Runtime 106 ms
Beats 41.11%
Memory 44.7 MB
Beats 45.23%
*/





