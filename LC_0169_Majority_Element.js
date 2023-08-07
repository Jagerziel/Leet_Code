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

test1 = [3,2,3]
test2 = [2,2,1,1,1,2,2]
test3 = [1]

// BASIC SOLUTION: Object

var majorityElement = function(nums) {
    let target = nums.length / 2
    let storedResults = {}

    for (let i = 0; i < nums.length; i++) {
        if (storedResults.hasOwnProperty(nums[i])) {
            storedResults[nums[i]] += 1
        } else {
            storedResults[nums[i]] = 1
        }
        if (storedResults[nums[i]] >= target) return nums[i]
    }
};

/*
Runtime 67 ms
Beats 55.89%
Memory 43.8 MB
Beats 58.39%

*/

// console.log(majorityElement(test1))
// console.log(majorityElement(test2))
console.log(majorityElement(test3))
