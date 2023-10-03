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
// [1,2,4]
let nums02 = [1,1] // 1,2
let nums03 = [3,2,2] // 2,1
let nums04 = [3,3,2] // 3,1
let nums05 = [2,3,3] // 3,1
let nums06 = [1,1,2,3] // 1,4
let nums07 = [37,62,43,27,12,66,36,18,39,54,61,65,47,32,23,2,46,8,4,24,29,38,63,39,25,11,45,28,44,52,15,30,21,7,57,49,1,59,58,14,9,40,3,42,56,31,20,41,22,50,13,33,6,10,16,64,53,51,19,17,48,26,34,60,35,5] // 39,55
let nums08 = [1,3,4,1] // 1,2

// ATTEMPT 1: Create set of unique numbers and simultaneously look through each number for a duplicate and missing number
// var findErrorNums = function(nums) {
//     nums.sort((a,b) => a - b) // Sorted Array 'nums'
//     let cleanNums = [...new Set(nums)]; // Created separate array and removed duplicates
//     let duplicateNum = 0 // Store the duplicated number
//     let missingNum = 0 // Store the missing number
//     let duplicateNumSet = false // Used to determine if duplicate num has been found
//     let missingNumSet = false // Used to determine if missing num has been found

//     for (let i = 0; i < cleanNums.length; i++) {
//         // Tracking the duplicate number
//         if (nums[i] === nums[i + 1] && duplicateNumSet === false) {
//             duplicateNum = nums[i]
//             duplicateNumSet = true
//         } 
//         // Finding the missing number
//         if (cleanNums[i] !== i + 1 && missingNumSet === false) {
//             missingNum = cleanNums[i] - 1
//             missingNumSet = true
//         }
//         console.log(`${i}) ${[duplicateNum, missingNum]}`)
//         // Returning Result
//         if (duplicateNumSet && missingNumSet) return [duplicateNum, missingNum]
//     }
//     return [duplicateNum, nums.length]
// };

/*
Runtime 88 ms
Beats 30.37%
Memory 52.1 MB
Beats 7.48%
*/

// ATTEMPT 2: Refactor code to remove need for set and check for missing number simulatneously with duplicate

// var findErrorNums = function(nums) {
//     nums.sort((a,b) => a - b) 
//     let duplicateNum = 0
//     let missingNum = 0 

//     for (let i = 0; i < nums.length - 1; i++) {
//         if (nums[i] === nums[i + 1] && duplicateNum === 0) {
//             duplicateNum = nums[i]
//             nums.splice(i + 1, 1)
//             if (nums[i] !== i + 1 && missingNum === 0) return [nums[i], nums[i] - 1]
//             if (missingNum !== 0) return [duplicateNum, missingNum]
//         } 
//         if (nums[i] !== i + 1 && missingNum === 0) {
//             missingNum = nums[i] - 1
//             if (duplicateNum !== 0) return [duplicateNum, missingNum]
//         }
//     }
//     return [duplicateNum, nums.length === nums[nums.length - 1] ? nums.length + 1 : nums.length]
// };

/*
Runtime 76 ms
Beats 42.52%
Memory 45.6 MB
Beats 68.93%
*/

// Attempt 3: Two separate trees for follow-up while loops

// var findErrorNums = function(nums) {
//     nums.sort((a,b) => a - b) 
//     const numLen = nums.length
//     let duplicateNum = 0
//     let missingNum = 0 
//     let i = 0
//     if (nums[0] !== 1) missingNum = 1
//     if (nums[numLen - 1] !== numLen) missingNum = numLen 

//     while (i < numLen - 1) {
//         if (nums[i] === nums[i + 1]) {
//             duplicateNum = nums[i]
//             if (missingNum !== 0) return [duplicateNum, missingNum]
//             if (nums[i] !== i + 1) return [nums[i], nums[i] - 1]
//             i += 2
//             while (i < numLen) {
//                 if (nums[i] !== i) return [duplicateNum, nums[i] - 1]
//                 i++
//             }
//             if (numLen === nums[numLen - 1]) return [duplicateNum, numLen + 1]
//             else return [duplicateNum, numLen]
//         } 
//         if (nums[i] !== i + 1) {
//             missingNum = nums[i] - 1
//             if (duplicateNum !== 0) return [duplicateNum, missingNum]
//             while (i < numLen - 1) {
//                 i++
//                 if (nums[i] === nums[i + 1]) return [nums[i], missingNum]
//             }
//         }
//         i++
//     }
// };

/*
Runtime 75 ms
Beats 44.29%
Memory 46.2 MB
Beats 55.71%
*/

// Attempt 4: Mathematical

var findErrorNums = function(nums) {
    let numLen = nums.length // Store length
    let duplicate = 0 // Store duplicate result
    let accSum = 0 // Store accumulated sum
    const sum = (numLen / 2) * (1 + numLen) // Total sum of nums array
    let storeNums = {} // Object to check for duplicates

    // Check if numLen is odd - if so, add last number and remove it from nums
    if (numLen % 2 === 1) {
        storeNums[nums[numLen - 1]] = true
        accSum += nums[numLen - 1]
        numLen--
        nums.pop()
    }
    
    // Loop through remaining array 2 positions (front and back) at a time
    for (let i = 0; i < numLen / 2; i++) {
        // ***Counting forwards from index 0 ***
        // If the number exists in the storeNums object, store the duplicate otherwise create new object key/pair
        // Add nums[i] to accumulated sum
        if (storeNums[nums[i]] === true) {
            duplicate = nums[i]
            accSum += nums[i]
        } else {
            storeNums[nums[i]] = true
            accSum += nums[i]
        }
        // ***Counting backwards from last index***
        // If the number exists in the storeNums object, store the duplicate otherwise create new object key/pair
        // Add nums[i] to accumulated sum
        if (storeNums[nums[numLen - i - 1]] === true) {
            duplicate = nums[numLen - i - 1]
            accSum += nums[numLen - i - 1]
        } else {
            storeNums[nums[numLen - i - 1]] = true
            accSum += nums[numLen - i - 1]
        }
    }
    
    // Calculate missing number
    const missing = sum - accSum + duplicate 

    // Return result
    return [duplicate, missing]
};

/*
Runtime 53 ms
Beats 96.27%
Memory 46.5 MB
Beats 52.91%
*/




console.log(findErrorNums(nums01))
console.log(findErrorNums(nums02))
console.log(findErrorNums(nums03))
console.log(findErrorNums(nums04))
console.log(findErrorNums(nums05))
console.log(findErrorNums(nums06))
console.log(findErrorNums(nums07))
console.log(findErrorNums(nums08))
