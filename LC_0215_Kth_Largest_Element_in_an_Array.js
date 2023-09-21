/*
215. Kth Largest Element in an Array
Medium

Given an integer array nums and an integer k, return the kth largest element in the array.
Note that it is the kth largest element in the sorted order, not the kth distinct element.
Can you solve it without sorting?

Example 1:
Input: nums = [3,2,1,5,6,4], k = 2
Output: 5

Example 2:
Input: nums = [3,2,3,1,2,4,5,5,6], k = 4
Output: 4

Constraints:
    1 <= k <= nums.length <= 105
    -104 <= nums[i] <= 104
*/

/*
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */

// let nums = [3,2,1,5,6,4], k = 2
let nums = [3,2,3,1,2,4,5,5,6], k = 4

var findKthLargest = function(nums, k) {
    let result = {
        firstNElem: nums.slice(0,k),
        min: nums[0],
        max: nums[0]
    }

    for (let i = 1; i < k; i++) {
        if (result.min > nums[i]) result.min = nums[i]
        if (result.max < nums[i]) result.max = nums[i]
    }

    for (let i = k; i < nums.length; i++) {
        if (nums[i] > result.min) {
            for (let j = 0; j < k; j++) {
                if (result.firstNElem[j] === result.min) {
                    result.firstNElem[j] = nums[i]
                    break
                }
            }
            result.min = result.firstNElem[0]
            for (let j = 1; j < k; j++) {
                if (result.firstNElem[j] < result.min) {
                    result.min = result.firstNElem[j]
                }
            }
        }
        if (nums[i] > result.max) {
            result.max = nums[i]
        }
    }

    return result.min
};

/*
Runtime 3973 ms
Beats 10.46%
Memory 50.7 MB
Beats 83.76%
*/

console.log(findKthLargest(nums, k))