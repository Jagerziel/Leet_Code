/*
42. Trapping Rain Water
Hard

Given n non-negative integers representing an elevation map where the width of each bar is 1, compute how much water it can trap after raining.

Example 1:
Input: height = [0,1,0,2,1,0,1,3,2,1,2,1]
Output: 6
Explanation: The above elevation map (black section) is represented by array [0,1,0,2,1,0,1,3,2,1,2,1]. In this case, 6 units of rain water (blue section) are being trapped.

Example 2:
Input: height = [4,2,0,3,2,5]
Output: 9

Constraints:
    n == height.length
    1 <= n <= 2 * 104
    0 <= height[i] <= 105
*/

/**
 * @param {number[]} height
 * @return {number}
 */

let height01 = [0,1,0,2,1,0,1,3,2,1,2,1] // 6
let height02 = [4,2,0,3,2,5] // 9
let height03 = [1,3,2,1] // 0
let height04 = [1,4,5,3,1,0,1,2,5,3,1] // 18
let height05 = [1,4,5,3,1,0,1,2,5,3,1,4,0] // 22
let height06 = [4,2,3] // 1
let height07 = [5,4,1,2] // 1
let height08 = [6,4,2,0,3,2,0,3,1,4,5,3,2,7,5,3,0,1,2,1,3,4,6,8,1,3] // 83
let height09 = [0,7,1,4,6] // 7
let height10 = [9,6,8,8,5,6,3] // 3
let height11 = [2,6,3,8,2,7,2,5,0] // 11
let height12 = [2,8,5,5,6,1,7,4,5] // 12
let height13 = [3,9,8,1,1,4,1,5,1,4,1,1,2] // 18

// ATTEMPT 1: Loop from front to determine buckets filled, then go from back to get any buckets less than the max height of the wall

// var trap = function(height) {
//     let leftWall = 0
//     let tempHold = 0
//     let tempMax = 0
//     let capturedWater = 0
//     let currIdx = 0
//     let maxIdx = 0
//     let distance = 0

//     while (currIdx < height.length) {
//         if (height[currIdx] > leftWall) {
//             leftWall = height[currIdx]
//             currIdx++
//         } else if (height[currIdx] === leftWall) {
//             currIdx++
//         } else {
//             currIdx--
//             break
//         }
//     }

//     for (let i = currIdx + 1; i < height.length; i++) {
//         if (height[i] < leftWall) {
//             tempHold += height[i]
//             distance++
//             if (height[i] >= tempMax) {
//                 tempMax = height[i]
//                 maxIdx = i
//             }
//         } else {
//             capturedWater += distance * leftWall - tempHold
//             tempHold = 0
//             distance = 0
//             leftWall = height[i]
//             currIdx = i
//         }
//     }
//     let addToBucket = 0
//     let finalBucket = capturedWater
//     if (distance > 0) {
//         maxIdx= height.length - 1
//         let tempMax = height[maxIdx]
//         for (let i = maxIdx - 1; i > currIdx; i--) {
//             if (height[i] >= tempMax) {
//                 maxIdx = i
//                 tempMax = height[i]
//                 tempHold -= height[i + 1]
//             } else {
//                 break
//             }
//         }
//         let newTempMax = tempMax
//         for (let i = maxIdx - 1; i > currIdx; i--) {
//             let ct = 0
//             if (height[i] > newTempMax) {
//                 newTempMax = height[i + ct]
//             } 
//             addToBucket += newTempMax - height[i]
//         }
//     }

//     return finalBucket + addToBucket
// };

/*
Runtime 59 ms
Beats 64.14%
Memory 43.4 MB
Beats 47.86%
*/


// ATTEMPT 2: Cleaning code and removing variables

var trap = function(height) {
    let leftWall = 0 // track left wall
    let tempHold = 0 // temporarily hold height until a higher amount is found
    let tempMax = 0 // temporarily store max height
    let capturedWater = 0 // track result
    let currIdx = 0 // track starting index
    let maxIdx = 0 // track ending index
    let distance = 0 // track distance for iniital buckets

    // Determine starting point
    while (currIdx < height.length) {
        if (height[currIdx] > leftWall) {
            leftWall = height[currIdx]
            currIdx++
        } else if (height[currIdx] === leftWall) {
            currIdx++
        } else {
            currIdx--
            break
        }
    }
    
    // Determine water while height is increasing from starting index
    for (let i = currIdx + 1; i < height.length; i++) {
        if (height[i] < leftWall) {
            tempHold += height[i]
            distance++
            if (height[i] >= tempMax) {
                tempMax = height[i]
                maxIdx = i
            }
        } else {
            capturedWater += distance * leftWall - tempHold
            tempHold = 0
            distance = 0
            leftWall = height[i]
            currIdx = i
        }
    }

    // Determine water content working from end of array.  
    if (distance > 0) {
        maxIdx= height.length - 1 // Starting index
        let tempMax = height[maxIdx] // Starting height
        for (let i = maxIdx - 1; i > currIdx; i--) {
            if (height[i] >= tempMax) { // set tempMax if new height is higher
                maxIdx = i
                tempMax = height[i]
                tempHold -= height[i + 1]
            } else {
                break
            }
        }
        let newTempMax = tempMax // store temporary max to overwrite max
        for (let i = maxIdx - 1; i > currIdx; i--) {
            let ct = 0 // track skipped items
            if (height[i] > newTempMax) { // Skip like items of tempMax
                newTempMax = height[i + ct]
            } 
            capturedWater += newTempMax - height[i] // Update captured water value
        }
    }
    // Return result
    return capturedWater
};

/*
Runtime 51 ms
Beats 91.35%
Memory 43.4 MB
Beats 45.66%
*/

console.log(trap(height01) === 6 ? true : trap(height01))
console.log(trap(height02) === 9 ? true : trap(height02))
console.log(trap(height03) === 0 ? true : trap(height03))
console.log(trap(height04) === 18 ? true : trap(height04))
console.log(trap(height05) === 22 ? true : trap(height05))
console.log(trap(height06) === 1 ? true : trap(height06))
console.log(trap(height07) === 1 ? true : trap(height07))
console.log(trap(height08) === 83 ? true : trap(height08))
console.log(trap(height09) === 7 ? true : trap(height09))
console.log(trap(height10) === 3 ? true : trap(height10))
console.log(trap(height11) === 11 ? true : trap(height11))
console.log(trap(height12) === 12 ? true : trap(height12))
console.log(trap(height13))

