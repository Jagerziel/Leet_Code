/*
75. Sort Colors
Medium

Given an array nums with n objects colored red, white, or blue, sort them in-place so that objects of the same color are adjacent, with the colors in the order red, white, and blue.

We will use the integers 0, 1, and 2 to represent the color red, white, and blue, respectively.

You must solve this problem without using the library's sort function.

Example 1:
Input: nums = [2,0,2,1,1,0]
Output: [0,0,1,1,2,2]

Example 2:
Input: nums = [2,0,1]
Output: [0,1,2]

Constraints:
    n == nums.length
    1 <= n <= 300
    nums[i] is either 0, 1, or 2.
*/

/*
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */

let nums01 = [2,0,2,1,1,0]
let nums02 = [2,0,1]
let nums03 = [1,2,0]

// ATTEMPT 1: LOOP THROUGH EACH AND ONLY ACT ON '0' and '2'.  Remove and add at beginning or end of array, respectively.

var sortColors = function(nums) {
    let iMod = 0
    for (let i = 0; i < nums.length; i++) {
        if (nums[i - iMod] === 0) {
            nums.splice(i - iMod, 1)
            nums.unshift(0)
        } else if (nums[i - iMod] === 2) {
            nums.splice(i - iMod, 1)
            nums.push(2)
            iMod++
        }
    }
    return nums
};

/*
Runtime 58 ms
Beats 37.14%
Memory 41.8 MB
Beats 75.9%
*/

// console.log(sortColors(nums01))
// console.log(sortColors(nums02))
console.log(sortColors(nums03))
