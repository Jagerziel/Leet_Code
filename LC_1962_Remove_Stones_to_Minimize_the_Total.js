/*
Date Started: 2022.12.27
Language(s): JavaScript
*/

/*
1962. Remove Stones to Minimize the Total
Medium

You are given a 0-indexed integer array piles, where piles[i] represents the number of stones in the ith pile, and an integer k. You should apply the following operation exactly k times:
    Choose any piles[i] and remove floor(piles[i] / 2) stones from it.
Notice that you can apply the operation on the same pile more than once.
Return the minimum possible total number of stones remaining after applying the k operations.
floor(x) is the greatest integer that is smaller than or equal to x (i.e., rounds x down).

Example 1:
Input: piles = [5,4,9], k = 2
Output: 12
Explanation: Steps of a possible scenario are:
- Apply the operation on pile 2. The resulting piles are [5,4,5].
- Apply the operation on pile 0. The resulting piles are [3,4,5].
The total number of stones in [3,4,5] is 12.

Example 2:
Input: piles = [4,3,6,7], k = 3
Output: 12
Explanation: Steps of a possible scenario are:
- Apply the operation on pile 2. The resulting piles are [4,3,3,7].
- Apply the operation on pile 3. The resulting piles are [4,3,3,4].
- Apply the operation on pile 0. The resulting piles are [2,3,3,4].
The total number of stones in [2,3,3,4] is 12.

Constraints:
    1 <= piles.length <= 105
    1 <= piles[i] <= 104
    1 <= k <= 105
*/

/*
 * @param {number[]} piles
 * @param {number} k
 * @return {number}
 */

//TEST 1
// piles = [4,3,6,7]
// k = 3

piles = [8916,7289,8226,4395,589,450,5965,7617,5218,6227]
k = 7

/*
APPROACH 1
TIME LIMIT EXCEEDED: 45 / 59 testcases passed
*/

// var minStoneSum = function(piles, k) {
//     //Loop k times to divide largest pile in half (rounding up)
//     for (let i = 0; i < k; i++) {
//         let newValue = Math.ceil(Math.max(...piles) / 2)
//         // let maxInx = piles.indexOf(Math.max(...piles))
//         piles[piles.indexOf(Math.max(...piles))] = newValue
//     }
//     //Loop through amended array (piles) and add to rockSum
//     let rockSum = 0
//     for (let j = 0; j < piles.length; j++) {
//         rockSum += piles[j]
//     }
//     //Return result
//     return rockSum
// };

// console.log(minStoneSum(piles, k))

/*
APPROACH 2
TIME LIMIT EXCEEDED: 45 / 59 testcases passed
*/

// var minStoneSum = function(piles, k) {
//     //Loop through amended array (piles) and add to rockSum
//     let rockSum = 0
//     for (let j = 0; j < piles.length; j++) {
//         rockSum += piles[j]
//     }
//     //Loop k times to subtract half of the largest pile from rockSum
//     for (let i = 0; i < k; i++) {
//         console.log(rockSum)
//         rockSum -= Math.floor(Math.max(...piles) / 2)
//         piles[piles.indexOf(Math.max(...piles))] = Math.ceil(Math.max(...piles) / 2)
//     }
//     //Return result
//     return rockSum
// };

// console.log(minStoneSum(piles, k))

/*
APPROACH 3
TIME LIMIT EXCEEDED: 13 / 59 testcases passed
*/
// const start = performance.now();

// piles = [8916,7289,8226,4395,589,450,5965,7617,5218,6227]
// k = 2

// let apple = [8, 4, 6, 9, 1, 7, 19]
// console.log([...apple].sort().reverse())


// var minStoneSum = function(piles, k) {
//     //Sort array and change value at index 0
//     for (let i = 0; i < k; i++) {
//         piles = piles.sort().reverse()
//         piles[0] = Math.ceil(piles[0] / 2)
//         console.log(piles)
//     }
//     //Loop through amended array (piles) and add to rockSum
//     let rockSum = 0
//     for (let j = 0; j < piles.length; j++) {
//         rockSum += piles[j]
//     }
//     //Return result
//     return rockSum
// };

// console.log(minStoneSum(piles, k))

// const end = performance.now();
// console.log(`Execution time: ${end - start} ms`);


/*
APPROACH 4
TIME LIMIT EXCEEDED: 45 / 59 testcases passed
*/
const start = performance.now();

var minStoneSum = function(piles, k) {
    //Loop k times to divide largest pile in half (rounding up)
    for (let i = 0; i < k; i++) {
        let newValue = Math.ceil(Math.max(...piles) / 2)
        // let maxInx = piles.indexOf(Math.max(...piles))
        piles[piles.indexOf(Math.max(...piles))] = newValue
    }
    //Use eval and join to sum rockSum
    let rockSum = eval(piles.join(`+`))
    //Return result
    return rockSum
};

console.log(minStoneSum(piles, k))


const end = performance.now();
console.log(`Execution time: ${end - start} ms`);