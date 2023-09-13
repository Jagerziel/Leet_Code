/*
347. Top K Frequent Elements
Medium

Given an integer array nums and an integer k, return the k most frequent elements. You may return the answer in any order.

Example 1:
Input: nums = [1,1,1,2,2,3], k = 2
Output: [1,2]

Example 2:
Input: nums = [1], k = 1
Output: [1]

Constraints:
    1 <= nums.length <= 105
    -104 <= nums[i] <= 104
    k is in the range [1, the number of unique elements in the array].
    It is guaranteed that the answer is unique.
Follow up: Your algorithm's time complexity must be better than O(n log n), where n is the array's size.
*/

/*
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */

let nums01 = [1,1,1,2,2,3], k01 = 2
let nums02 = [1], k02 = 1
let nums03 = [1,1,1,2,2,3,4,4,4,4], k03 = 2

// ATTEMPT 1: Store all frequencies in an object, then sort the object by frequency count.  Return top k results.

var topKFrequent = function(nums, k) {
    let numTrack = {}

    for (let i = 0; i < nums.length; i++) {
        if (numTrack[nums[i]] === undefined) {
            numTrack[nums[i]] = 1
        } else {
            numTrack[nums[i]] += 1
        }
    }
    const numTrackArr = Object.entries(numTrack).sort((item01, item02) => item02[1] - item01[1])

    let result = []
    for (let i = 0; i < k; i++) {
        result.push(parseInt(numTrackArr[i][0]))
    }

    return result
};

// console.log(topKFrequent(nums01, k01))
console.log(topKFrequent(nums02, k02))
// console.log(topKFrequent(nums03, k03))
