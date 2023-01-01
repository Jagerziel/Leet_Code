/*
Date Started: 2022.01.01
Language(s): JavaScript
*/

/*
50. Pow(x, n)
Medium

Implement pow(x, n), which calculates x raised to the power n (i.e., xn).

Example 1:
Input: x = 2.00000, n = 10
Output: 1024.00000

Example 2:
Input: x = 2.10000, n = 3
Output: 9.26100

Example 3:
Input: x = 2.00000, n = -2
Output: 0.25000
Explanation: 2-2 = 1/22 = 1/4 = 0.25

Constraints:
    -100.0 < x < 100.0
    -231 <= n <= 231-1
    n is an integer.
    -104 <= xn <= 104
*/

/*
 * @param {number} x
 * @param {number} n
 * @return {number}
*/

x = 2.1631, n = 3

var myPow = function(x, n) {
    //raise x to n power and return fixed decimal result
    return (Math.round((x ** n) * 100000) / 100000).toFixed(5)
};

console.log(myPow(x, n))

/*
Runtime 66 ms
Beats 87.29%
Memory 41.5 MB
Beats 95.92%
*/