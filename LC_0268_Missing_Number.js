/*
268. Missing Number
Easy

Given an array nums containing n distinct numbers in the range [0, n], return the only number in the range that is missing from the array.

Example 1:

Input: nums = [3,0,1]
Output: 2
Explanation: n = 3 since there are 3 numbers, so all numbers are in the range [0,3]. 2 is the missing number in the range since it does not appear in nums.

Example 2:

Input: nums = [0,1]
Output: 2
Explanation: n = 2 since there are 2 numbers, so all numbers are in the range [0,2]. 2 is the missing number in the range since it does not appear in nums.

Example 3:

Input: nums = [9,6,4,2,3,5,7,0,1]
Output: 8
Explanation: n = 9 since there are 9 numbers, so all numbers are in the range [0,9]. 8 is the missing number in the range since it does not appear in nums.

Constraints:

    n == nums.length
    1 <= n <= 104
    0 <= nums[i] <= n
    All the numbers of nums are unique.

*/

/*
 * @param {number[]} nums
 * @return {number}
*/

let test1 = [3,0,1], // 2
    test2 = [0,1], // 2
    test3 = [9,6,4,2,3,5,7,0,1] // 8


var missingNumber = function(nums) {
    let numLen = nums.length    

    let totalSum = 0
    let numsSum = 0
    for (let i = 0; i < numLen; i++) {
        totalSum += i
        numsSum += nums[i]
    }
    totalSum += numLen

    return totalSum - numsSum
};

/*
Runtime 61 ms
Beats 69.26%
Memory 44.1 MB
Beats 79.15%
*/

var missingNumber = function(nums) {
    // Track Lengths
    let numLenFull = nums.length
    let numLenHalf = Math.floor(numLenFull / 2)
    // Track Sums
    let totalSum = 0
    let numsSum = 0

    // Loop Through Array on Both Halves
    for (let i = 0; i < numLenHalf; i++) {
        totalSum += i
        totalSum += numLenHalf + i
        numsSum += nums[i]
        numsSum += nums[numLenHalf + i]
    }
    // Account for Odd and Even Arrays
    if (numLenFull % 2 === 1) {
        totalSum += (numLenFull * 2) - 1 
        numsSum += nums[numLenFull - 1]
    } else {
        totalSum += numLenFull
    }
    // Return Result
    return totalSum - numsSum
};

/*
Runtime 52 ms
Beats 91.83%
Memory 43.9 MB
Beats 89.20%
*/


console.log(missingNumber(test1))
console.log(missingNumber(test2))
console.log(missingNumber(test3))