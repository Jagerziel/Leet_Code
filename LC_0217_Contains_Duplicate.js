/*
Date Started: 2022.12.27
Language(s): JavaScript
*/

/*
217. Contains Duplicate
Easy

Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.

Example 1:
Input: nums = [1,2,3,1]
Output: true

Example 2:
Input: nums = [1,2,3,4]
Output: false

Example 3:
Input: nums = [1,1,1,3,3,4,3,2,4,2]
Output: true

Constraints:
    1 <= nums.length <= 105
    -109 <= nums[i] <= 109
*/

/*
 * @param {number[]} nums
 * @return {boolean}
 */

let test1 = [1,2,3,1]
let test2 = [1,2,3,4]
let test3 = [1,1,1,3,3,4,3,2,4,2]
let test4 = [-3,0,4,-11,-99,6,7]
let test5 = [3,3]

var containsDuplicate = function(nums) {
    //Iterate through array to check for duplicates
    for (let i = 0; i < nums.length; i++) {
        //Look for the second occurence of the number - if none appears return true
        if (nums.indexOf(nums[i], nums.indexOf(nums[i] , 0) + 1) !== - 1) {
            return true
        }
    }
    //If all are unique numbers (no duplicates), return false
    return false
};

console.log(containsDuplicate(test5))

/*
Runtime3466 ms
Beats
5%
Memory47.9 MB
Beats
98.22%
*/

/*
I MIGHT COME BACK TO THIS LATER TO GET A MORE EFFICIENT RUNTIME ON THIS
*/
