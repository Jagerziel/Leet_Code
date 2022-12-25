/*
Date Started: 2022.12.25
Language(s): JavaScript
*/

/*
202. Happy Number
Easy
7.6K
952
Companies

Write an algorithm to determine if a number n is happy.

A happy number is a number defined by the following process:

    Starting with any positive integer, replace the number by the sum of the squares of its digits.
    Repeat the process until the number equals 1 (where it will stay), or it loops endlessly in a cycle which does not include 1.
    Those numbers for which this process ends in 1 are happy.

Return true if n is a happy number, and false if not.

Example 1:

Input: n = 19
Output: true
Explanation:
1^2 + 9^2 = 82
8^2 + 2^2 = 68
6^2 + 8^2 = 100
1^2 + 0^2 + 0^2 = 1

Example 2:
Input: n = 2
Output: false

Constraints:

    1 <= n <= 231 - 1

*/

/*
 * @param {number} n
 * @return {boolean}
 */

let test1 = 19
let test2 = 2

var isHappy = function(n) {
    //Convert n to array
    n = n.toString().split("")
    //Set max loop (otherwise false will never occur)
    let maxLoop = 100
    //Record sum of the squares
    let nSum = 0
    //Loop while operation does not exceed max limit set in maxLoop
    while (n !== 1 && maxLoop > 0) {
        //Add each int squared to nSum
        for (let i = 0; i < n.length; i++) {
            nSum += parseInt(n[i])**2
            console.log(nSum)
        }
        //Exit loop if nSum is 1
        if (nSum === 1) {
            return true
        } else {
            //Set n to nSum, split number, and reset nSum to 0
            n = nSum
            n = n.toString().split("")
            nSum = 0
        }
        //Deduct 1 from maxLoop so this doesn't loop indefinitely
        maxLoop--
    }
    //return false if maxLoop is hit
    return false
};

console.log(isHappy(test2))

/*
Runtime299 ms
Beats
5.1%
Memory49.8 MB
Beats
5.9%

NOTE: NOT THE GREATEST RESULTS HERE - I COULD HAVE CHECKED IF THE DIGITS WERE 1 OR 0 AND SKIPPED AS OPPOSED TO DOING IT THIS WAY - THE MAIN ISSUE IS THE ITERATION NUMBER FOR MAXLOOP

MY RESULTS AT MAXLOOP = 20:
Runtime162 ms
Beats
9.29%
Memory48.8 MB
Beats
5.57%

MY RESULTS AT MAXLOOP = 10:
Runtime132 ms
Beats
14.58%
Memory48 MB
Beats
6.94%



*/
