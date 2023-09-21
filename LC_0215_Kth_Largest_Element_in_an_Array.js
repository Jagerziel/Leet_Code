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
// let nums = [3,2,3,1,2,4,5,5,6], k = 4
let nums = [-1,2,0], k = 1

// Attempt 1: Track min and max results within the an array (of k length) and replace the mins and max as a higher value beats the min value.  Ultimately, the min value will be the nth value and the max will be the max value of the array.

// var findKthLargest = function(nums, k) {
//     let result = {
//         firstNElem: nums.slice(0,k),
//         min: nums[0],
//         max: nums[0]
//     }

//     for (let i = 1; i < k; i++) {
//         if (result.min > nums[i]) result.min = nums[i]
//         if (result.max < nums[i]) result.max = nums[i]
//     }

//     for (let i = k; i < nums.length; i++) {
//         if (nums[i] > result.min) {
//             for (let j = 0; j < k; j++) {
//                 if (result.firstNElem[j] === result.min) {
//                     result.firstNElem[j] = nums[i]
//                     break
//                 }
//             }
//             result.min = result.firstNElem[0]
//             for (let j = 1; j < k; j++) {
//                 if (result.firstNElem[j] < result.min) {
//                     result.min = result.firstNElem[j]
//                 }
//             }
//         }
//         if (nums[i] > result.max) {
//             result.max = nums[i]
//         }
//     }

//     return result.min
// };

/*
Runtime 3973 ms
Beats 10.46%
Memory 50.7 MB
Beats 83.76%
*/

// Attempt 2: Place and sort during iteration to find min number easier and allow for early breakout of internal loops

// var findKthLargest = function(nums, k) {
//     let result = [nums[0]]

//     for (let i = 1; i < k; i++) {
//         for (let j = 0; j < result.length; j++) {
//             if (nums[i] < result[j]) {
//                 result.splice(j,0,nums[i])
//                 break
//             }
//         }
//         if (result.length !== i + 1) result.push(nums[i])
//     }

//     for (let i = k; i < nums.length; i++) {
//         if (nums[i] > result[0]) {
//             result.shift()
//             for (let j = 0; j < result.length; j++) {
//                 if (nums[i] < result[j]) {
//                     result.splice(j,0,nums[i])
//                     break
//                 }
//             }
//             if (result.length !== k) result.push(nums[i])
//         }
//     }

//     return result[0]
// };

/*
Runtime 3385 ms
Beats 11.25%
Memory 55.6 MB
Beats 27.52%
*/

// Attempt 3: Sort and return n - length of array

// var findKthLargest = function(nums, k) {
//     let result = [nums[0]]

//     for (let i = 1; i < nums.length; i++) {
//         for (let j = 0; j < result.length; j++) {
//             if (nums[i] < result[j]) {
//                 result.splice(j,0,nums[i])
//                 break
//             }
//         }
//         if (result.length !== i + 1) result.push(nums[i])
//     }

//     return result[nums.length - k]
// };

/*
Runtime 6476 ms
Beats 5.19%
Memory 56.9 MB
Beats 24.60%
*/

// Attempt 4: Sort and return n - length of array

// var findKthLargest = function(nums, k) {
//     if (k === 1) return Math.max(...nums)
//     if (k === nums.length) return Math.min(...nums)
//     let result = [nums[0]]

//     for (let i = 1; i < k; i++) {
//         if (nums[i] >= result[result.length - 1]) {
//             result.push(nums[i])
//         } else {
//             for (let j = 0; j < result.length; j++) {
//                 if (nums[i] < result[j]) {
//                     result.splice(j,0,nums[i])
//                     break
//                 }
//             }
//         }
//     }

//     for (let i = k; i < nums.length; i++) {
//         if (nums[i] > result[0]) {
//             result.shift()
//             if (nums[i] >= result[result.length - 1]) {
//                 result.push(nums[i])
//             } else if (nums[i] <= result[0]) {
//                 result.unshift(nums[i])
//             } else {
//                 for (let j = 0; j < result.length; j++) {
//                     if (nums[i] < result[j]) {
//                         result.splice(j,0,nums[i])
//                         break
//                     }
//                 }
//             }
//         }
//     }

//     return result[0]
// };

/*
Runtime 3317 ms
Beats 12.39%
Memory 50.4 MB
Beats 86.88%
*/

// Attempt 5: Most successful try with a few minor changes

var findKthLargest = function(nums, k) {
    const result = {
        firstNElem: nums.slice(0,k),
        min: nums[0]
    }

    for (let i = 1; i < k; i++) {
        if (result.min > nums[i]) result.min = nums[i]
    }

    for (let i = k; i < nums.length; i++) {
        if (nums[i] > result.min) {
            let replaceMin = true
            const prevMin = result.min
            result.min = nums[i]
            for (let j = 0; j < k; j++) {
                if (result.firstNElem[j] === prevMin && replaceMin === true) {
                    result.firstNElem[j] = nums[i]
                    replaceMin = false
                }
                if (result.firstNElem[j] < result.min) {
                    result.min = result.firstNElem[j]
                }
            }
        }
    }

    return result.min
};

/*
Runtime 3074 ms
Beats 12.63%
Memory 49.8 MB
Beats 89.21%
*/


console.log(findKthLargest(nums, k))