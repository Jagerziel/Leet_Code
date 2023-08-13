/*
1207. Unique Number of Occurrences
Easy

Given an array of integers arr, return true if the number of occurrences of each value in the array is unique or false otherwise.

Example 1:
Input: arr = [1,2,2,1,1,3]
Output: true
Explanation: The value 1 has 3 occurrences, 2 has 2 and 3 has 1. No two values have the same number of occurrences.

Example 2:
Input: arr = [1,2]
Output: false

Example 3:
Input: arr = [-3,0,1,-3,1,1,1,-3,10,0]
Output: true
*/

let test1 = [1,2,2,1,1,3] // true
let test2 = [1,2] // false
let test3 = [-3,0,1,-3,1,1,1,-3,10,0] // true


/*
 * @param {number[]} arr
 * @return {boolean}
 */

// ATTEMPT 1: OBJECT AND LOOP CHECK

var uniqueOccurrences = function(arr) {
    // Set object to contain array item counts
    let itemCtObj = {}

    // Set Object
    for (let i = 0; i < arr.length; i++) {
        if (itemCtObj[arr[i]] > 0) {
            itemCtObj[arr[i]] = itemCtObj[arr[i]] + 1
        } else {
            itemCtObj[arr[i]] = 1
        }
    }
    // Grab object values and sort them
    let itemCtObjVals = Object.values(itemCtObj).sort()
    // Loop through object values for duplicates
    for (let i = 1; i < itemCtObjVals.length; i++) {
        // Return false if two values match in consecutive indicies
        if (itemCtObjVals[i] === itemCtObjVals[i - 1]) return false
    }
    // Return true if loop completes
    return true
};

/*
Runtime 57 ms
Beats 66.79%
Memory 42.6 MB
Beats 64.72%
*/


console.log(uniqueOccurrences(test1))
console.log(uniqueOccurrences(test2))
console.log(uniqueOccurrences(test3))
