/*
Date Started: 2022.12.27
Language(s): JavaScript
*/

/*
2511. Maximum Enemy Forts That Can Be Captured
Easy

You are given a 0-indexed integer array forts of length n representing the positions of several forts. forts[i] can be -1, 0, or 1 where:

    -1 represents there is no fort at the ith position.
    0 indicates there is an enemy fort at the ith position.
    1 indicates the fort at the ith the position is under your command.

Now you have decided to move your army from one of your forts at position i to an empty position j such that:

    0 <= i, j <= n - 1
    The army travels over enemy forts only. Formally, for all k where min(i,j) < k < max(i,j), forts[k] == 0.

While moving the army, all the enemy forts that come in the way are captured.

Return the maximum number of enemy forts that can be captured. In case it is impossible to move your army, or you do not have any fort under your command, return 0.

Example 1:

Input: forts = [1,0,0,-1,0,0,0,0,1]
Output: 4
Explanation:
- Moving the army from position 0 to position 3 captures 2 enemy forts, at 1 and 2.
- Moving the army from position 8 to position 3 captures 4 enemy forts.
Since 4 is the maximum number of enemy forts that can be captured, we return 4.

Example 2:

Input: forts = [0,0,1,-1]
Output: 0
Explanation: Since no enemy fort can be captured, 0 is returned.

Constraints:

    1 <= forts.length <= 1000
    -1 <= forts[i] <= 1
*/

test1 = [1,0,0,-1,0,0,0,0,1]
test2 = [0,0,1,-1]
test3 = [0,0,-1,0,0,0,0,0,0,-1,0,0,1,0,0,0,1,0,0,1,0,0,0,0,0,-1,0,0]
test4 = [-1,1,1,-1,-1,0,-1,1,0,-1,1,-1,1,0,0,1,1,-1,-1,-1,0,-1,0,1,0,0,-1,-1,0,0,1,1,0,0,1,-1,1,-1,1,-1,-1,-1,0,-1,0,1,0,-1,1,0,-1,1,-1,1,0,0,1,0,0,1,0,0,1,0,-1,0,0,0,-1,-1,0,-1,1,-1,1,-1,0,1,-1,0,-1,1,0,-1,-1,1,0,0,1,1,0,0,0,1,-1,1,-1,1,0,1,-1,0,1,-1,1,0,0,0,-1,0,1,1,0,0,0,0,-1,1,1,1,0,1,1,-1,1,-1,-1,0,-1,0,0,1,0,0,0,0,1,0,0,-1,-1,0,1,1,-1,1,-1,1,1,-1,0,1,1,1,-1,-1,-1,-1,0,-1,-1,1,1,0,1,-1,-1,-1,1,0,0,-1,0,0,-1,1,-1,-1,1,1,0,-1,1,0,0,0,-1,-1,1,0,1,1,1,-1,0,1,0,0,1,-1,0,1,0,0,0,-1,1,1,1,1,-1,1,-1,1,1,0,0,0,-1,1,-1,1,0,1,1,-1,0,-1,0,0,1,1,0,-1,-1,-1,0,0,-1,1,-1,1,1,1,-1,1,1,-1,1,1,1,0,-1,1,-1,0,-1,1,-1,1,0,-1,1,-1,1,1,-1,1,-1,1,0,-1,1,-1,-1,-1,-1,-1,0,0,-1,0,1,-1,1,-1,0,0,1,0,1,1,0,0,1,1,-1,0,0,1,0,0,0,-1,-1,-1,1,1,-1,-1,-1,1,0,-1,0,1,1,0,1,-1,0,-1,1,0,1,1,-1,0,0,-1,0,-1,1,1,-1,-1,1,-1,0,1,1,1,1,0,1,1,1,0,0,-1,0,1,0,0,1,1,-1,1,-1,1,1,0,1,0,1,1,1,1,-1,-1,1,-1,-1,-1,0,0,1,0,1,0,1,0,1,-1,0,1,-1,-1,0,1,1,0,0,1,1,1,-1,-1,1,1,0,0,1,-1,-1,0,0,-1,-1,-1,1,0,0,1,0,-1,1,-1,0,1,0,0,0,-1,1,0,0,-1,0,-1,1,1,1,0,1,1,1,0,1,1,1,1,-1,0,1,-1,-1,0,-1,-1,0,-1,0,0,0,-1,0,-1,0,1,1,1,-1,-1,-1,-1,-1,0,-1,1,1,1,0,-1,1,0,-1,-1,0,1,0,1,-1,0,1,1,1,-1,1,0,-1,-1,-1,0,0,-1,0,-1,-1,0,-1,0,0,-1,0,0,0,1,-1,0,0,0,0,-1,-1,1,0,1,1,0,0,1,1,-1,1,-1,1,0,1,0,0,0,-1,1,1,-1,1,0,1,-1,0,0,0,-1,0,-1,0,0,0,0,0,0,0,0,-1,-1,1,1,-1,1,1,0,-1,-1,0,-1,1,-1,-1,-1,1,-1,1,0,1,1,-1,1,0,0,-1,0,-1,-1,-1,1,0,-1,-1,0,-1,-1,-1,1,-1,1,0,-1,-1,0,1,0,1,-1,-1,-1,0,-1,-1,-1,-1,0,-1,0,1,-1,0,1,1,-1,1,1,1,1,1,0,0,-1,0,0,0,1,-1,0,1,0,1,1,-1,-1,0,1,1,-1,-1,1,0,0,-1,-1,-1,0,1,1,1,0,0,1,-1,1,1,0,0,0,1,-1,-1,1,0,1,0,1,1,1,-1,0,0,-1,-1,-1,-1,-1,0,1,1,0,0,0,-1,1,0,-1,1,1,1,-1,1,1,1,1,1,1,-1,-1,-1,0,1,0,-1,1,-1,0,-1,-1,0,-1,-1,0,-1,-1,1,1,1,0,-1,-1,1,1,0,-1,0,0,1,-1,0,1,-1,0,0,-1,-1,-1,1,-1,1,-1,-1,1,1,-1,-1,-1,1,0,-1,0,-1,-1,-1,-1,0,0,0,-1,-1,0,0,-1,-1,0,-1,0,1,0,-1,-1,0,0,-1,1,1,0,-1,1,0,1,0,0,-1,0,-1,0,-1,-1,0,0,0,1,-1,1,0,1,1,0,1,0,1,-1,1,0,-1,-1,1,-1,0,1,-1,1,0,1,-1,-1,0,1,1,-1,-1,-1,1,0,-1,1,-1,1,0,-1,-1,0,1,0,-1,-1,0,-1,1,-1,1,1,0,-1,-1,1,-1,-1,0,0,-1,-1,1,1,0,0,1,-1,1,0,0,0,0,1,-1,1,1,0,1,-1,-1,1,1,-1,-1,0,1,-1,0,0,1,0,-1,-1,-1,1,-1,0,1,-1,-1,-1,0,-1,-1,1,1,1,1,1,-1,1,1,-1,-1,0,-1,1,0,-1,1,0,0,1,1,1,-1,-1,1,1,1,1,0,-1,-1,0,-1,-1,-1,1,1,0,-1,0,-1,1,-1,0,-1,0,-1,-1,1,-1,-1,-1,-1,-1,0,-1,1,0,1,1,0,-1,1,0,-1,0,0,1,1,1,1,-1,1,1,1,-1,-1,0,0,-1,0,-1,-1,0,0,-1,0,1,0,0,0,1,0,0,0,0,1,-1,1,-1]

/*
 * @param {number[]} forts
 * @return {number}
 */
var captureForts = function(forts) {
    //Record Max Captured Forts
    let maxCaptured = 0
    //Use Temporary Capture Variable to Compare Against Max
    let captured = 0
    //Use Temp Sum to Navigate over Enemy Forts
    let tempSum = 0
    //Loop Through Array
    for (let i = 0; i < forts.length; i++) {
        //Add current index value to tempSum
        tempSum += forts[i]
        //If tempSum is -1 or 1 and we are on an enemy fort, count fort
        if ((tempSum === -1 && forts[i] === 0) || (tempSum === 1 && forts[i] === 0)) {
            captured++
            //If tempSum exceeds 1 or is less than -1, reset captured count and tempSum
        } if (tempSum > 1 || tempSum < -1) {
            captured = 0
            tempSum = forts[i]
            //If tempSum is 0, record captured forts and compare against max.  Replace max if new max is determined.
        } else if (tempSum === 0) {
            if (captured > maxCaptured) {
                maxCaptured = captured
                captured = 0
            }
            tempSum = forts[i]
            captured = 0
        }
    }
    //Return result
    return maxCaptured
};

console.log(captureForts(test4))

/*
Runtime57 ms
Beats
92.70%
Memory42.3 MB
Beats
27.74%
*/
