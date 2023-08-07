/*
169. Majority Element
Easy

Given an array nums of size n, return the majority element.

The majority element is the element that appears more than ⌊n / 2⌋ times. You may assume that the majority element always exists in the array.

Example 1:
Input: nums = [3,2,3]
Output: 3

Example 2:
Input: nums = [2,2,1,1,1,2,2]
Output: 2
 
Constraints:

    n == nums.length
    1 <= n <= 5 * 104
    -109 <= nums[i] <= 109
*/

/*
* @param {number[]} nums
* @return {number}
*/

let test1 = [3,2,3] //3
let test2 = [2,2,1,1,1,2,2] //3
let test3 = [1] //1
let test4 = [3,3,4] //3
let test5 = [2,2] //2

// ATTEMPT 1: BASIC SOLUTION with Object

// var majorityElement = function(nums) {
//     let target = nums.length / 2
//     let storedResults = {}

//     for (let i = 0; i < nums.length; i++) {
//         if (storedResults.hasOwnProperty(nums[i])) {
//             storedResults[nums[i]] += 1
//         } else {
//             storedResults[nums[i]] = 1
//         }
//         if (storedResults[nums[i]] >= target) return nums[i]
//     }
// };

/*
Runtime 67 ms
Beats 55.89%
Memory 43.8 MB
Beats 58.39%

*/

// ATTEMPT2: ORDER AND ADD

// var majorityElement = function(nums) {
//     nums = nums.sort()
//     let target = nums.length / 2
//     let result = undefined
//     let masterCount = 0

//     for (let i = 0; i < nums.length; i++) {
//         if (result === nums[i]) {
//             masterCount++
//         } else {
//             result = nums[i]
//             masterCount = 1
//         }
//         if (masterCount >= target) return result
//     }
// };


/*
Runtime 62 ms
Beats 74.60%
Memory 45.7 MB
Beats 20.92%
*/

// ATTEMPT3: REFACTOR WITH WHILE LOOP CONDITION

var majorityElement = function(nums) {
    nums = nums.sort() //Sort Numbers
    let target = nums.length / 2 //Define Target
    let result = undefined // Track Result
    let masterCount = 0 //Track count for comparison against target
    let i = 0 //Track while loop iterations

    // Loop through array and add one to master count.  Reset count if item changes.
    while (masterCount < target) {
        if (result === nums[i]) masterCount++
        else {
            result = nums[i]
            masterCount = 1
        }
        i++
    }
    return result
};

/*
Runtime 58 ms
Beats 86.38%
Memory 45.6 MB
Beats 24.5%
*/

console.log(majorityElement(test1))
console.log(majorityElement(test2))
console.log(majorityElement(test3))
console.log(majorityElement(test4))
console.log(majorityElement(test5))

