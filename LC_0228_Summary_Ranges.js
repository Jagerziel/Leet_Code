/*
Date Started: 2022.12.27
Language(s): JavaScript
*/

/*
228. Summary Ranges
Easy

You are given a sorted unique integer array nums.

A range [a,b] is the set of all integers from a to b (inclusive).

Return the smallest sorted list of ranges that cover all the numbers in the array exactly. That is, each element of nums is covered by exactly one of the ranges, and there is no integer x such that x is in one of the ranges but not in nums.

Each range [a,b] in the list should be output as:
    "a->b" if a != b
    "a" if a == b

Example 1:
Input: nums = [0,1,2,4,5,7]
Output: ["0->2","4->5","7"]
Explanation: The ranges are:
[0,2] --> "0->2"
[4,5] --> "4->5"
[7,7] --> "7"

Example 2:
Input: nums = [0,2,3,4,6,8,9]
Output: ["0","2->4","6","8->9"]
Explanation: The ranges are:
[0,0] --> "0"
[2,4] --> "2->4"
[6,6] --> "6"
[8,9] --> "8->9"

Constraints:
    0 <= nums.length <= 20
    -231 <= nums[i] <= 231 - 1
    All the values of nums are unique.
    nums is sorted in ascending order.
*/

/*
 * @param {number[]} nums
 * @return {string[]}
 */

let test1 = [0,1,2,4,5,7]
let test2 = [0,2,3,4,6,8,9]

var summaryRanges = function(nums) {
    //Set Output, T/F for if we should continue through the numbers, and tempstring to hold value
    let outputArr = []
    let stringHold = false
    let tempString = ""
    //Loop through each item in the array
    for (let i = 0; i < nums.length; i++) {
        if (stringHold === false) {
            if (nums[i] + 1 === nums[i + 1]) {
                //Setup beginning of item ('#->')
                stringHold = true
                tempString = nums[i].toString() + "->"
            } else {
                //Push individual number into array
                tempString = nums[i].toString()
                outputArr.push(tempString)
                tempString = ""
            }
        } else {
            if (nums[i] + 1 !== nums[i + 1]) {
                //concatenate number to setup ('#->'#) and reset tempString
                stringHold = false
                tempString = tempString + nums[i].toString()
                outputArr.push(tempString)
                tempString = ""
            }
        }
    }
    //Return result
    return outputArr
};

console.log(summaryRanges(test2))

/*
Runtime68 ms
Beats
77.57%
Memory41.7 MB
Beats
88.15%
*/

