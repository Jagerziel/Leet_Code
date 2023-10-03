/*
645. Set Mismatch
Easy

You have a set of integers s, which originally contains all the numbers from 1 to n. Unfortunately, due to some error, one of the numbers in s got duplicated to another number in the set, which results in repetition of one number and loss of another number.

You are given an integer array nums representing the data status of this set after the error.

Find the number that occurs twice and the number that is missing and return them in the form of an array.

Example 1:
Input: nums = [1,2,2,4]
Output: [2,3]

Example 2:
Input: nums = [1,1]
Output: [1,2]

Constraints:
    2 <= nums.length <= 104
    1 <= nums[i] <= 104
*/


/*
 * @param {number[]} nums
 * @return {number[]}
 */

let nums01 = [1,2,2,4] // 2,3
let nums02 = [1,1] // 1,2
let nums03 = [3,2,2] // 2,1
let nums04 = [3,3,2] // 3,1
let nums05 = [2,3,3] // 3,1
let nums06 = [1,1,2,3] // 1,4
let nums07 = [37,62,43,27,12,66,36,18,39,54,61,65,47,32,23,2,46,8,4,24,29,38,63,39,25,11,45,28,44,52,15,30,21,7,57,49,1,59,58,14,9,40,3,42,56,31,20,41,22,50,13,33,6,10,16,64,53,51,19,17,48,26,34,60,35,5] // 39,55

var findErrorNums = function(nums) {
    nums.sort((a,b) => a - b)
    let cleanNums = [...new Set(nums)];
    let duplicateNum = 0
    let missingNum = 0
    let duplicateNumSet = false
    let missingNumSet = false

    for (let i = 0; i < cleanNums.length; i++) {
        // Tracking the duplicate number
        if (nums[i] === nums[i + 1] && duplicateNumSet === false) {
            duplicateNum = nums[i]
            duplicateNumSet = true
        } 
        // Finding the missing number
        if (cleanNums[i] !== i + 1 && missingNumSet === false) {
            missingNum = cleanNums[i] - 1
            missingNumSet = true
        }
        // Returning Result
        if (duplicateNumSet && missingNumSet) return [duplicateNum, missingNum]
    }
    return [duplicateNum, nums.length]
};

/*
Runtime 88 ms
Beats 30.37%
Memory 52.1 MB
Beats 7.48%
*/

// var findErrorNums = function(nums) {
//     nums.sort()
//     let min = nums[0]
//     let max = nums[nums.length - 1]
//     let firstNum = 0
//     let sum = 0
//     let targetSum = 0
//     for(let i = nums.length - 1; i >= 0; i--) {
//         sum += nums[i]
//         targetSum += i + 1
//         if (nums[i] - nums[i - 1] !== 1) {
//             firstNum = nums[i]   
//         }
//     }
//     console.log(sum)
//     console.log(targetSum)

//     return [firstNum, targetSum - sum]
// };




console.log(findErrorNums(nums01))
console.log(findErrorNums(nums02))
console.log(findErrorNums(nums03))
console.log(findErrorNums(nums04))
console.log(findErrorNums(nums05))
console.log(findErrorNums(nums06))
console.log(findErrorNums(nums07))
