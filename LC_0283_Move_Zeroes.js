/*
283. Move Zeroes
Easy

Given an integer array nums, move all 0's to the end of it while maintaining the relative order of the non-zero elements.

Note that you must do this in-place without making a copy of the array.


Example 1:
Input: nums = [0,1,0,3,12]
Output: [1,3,12,0,0]

Example 2:
Input: nums = [0]
Output: [0]

Constraints:
    1 <= nums.length <= 104
    -231 <= nums[i] <= 231 - 1
*/


/*
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */

test1 = [0,1,0,3,12]
test2 = [0]
test3 = [0,0,1]


// ATTEMPT 1: SPLICE AND PUSH
// var moveZeroes = function(nums) {
//     let numsLen = nums.length
//     let idx = 0
//     let ct = 0
//     while (ct < numsLen) {
//         if (nums[idx] === 0) {
//             nums.splice(idx, 1)
//             nums.push(0)
//             idx--
//         }
//         ct++
//         idx++
//     }
//     return nums
// };

/*
Runtime 88 ms
Beats 57.23%
Memory 46.9 MB
Beats 24.13%
*/

// ATTEMPT 2: USE FOR LOOP AND REMOVE VARIABLE FOR NUMS.LENGTH
var moveZeroes = function(nums) {
    let idx = 0
    for (let ct = 0; ct < nums.length; ct++) {
        if (nums[idx] === 0) {
            nums.splice(idx, 1)
            nums.push(0)
            idx--
        }
        idx++
    }
    return nums
};

/*
Runtime 76 ms
Beats 86.88%
Memory 47.2 MB
Beats 9.70%
*/


console.log(moveZeroes(test1))
// console.log(moveZeroes(test2))
// console.log(moveZeroes(test3))
