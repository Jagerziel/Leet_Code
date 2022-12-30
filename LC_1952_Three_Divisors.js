/*
Date Started: 2022.12.30
Language(s): JavaScript
*/

/*
1952. Three Divisors
Easy

Given an integer n, return true if n has exactly three positive divisors. Otherwise, return false.

An integer m is a divisor of n if there exists an integer k such that n = k * m.

Example 1:
Input: n = 2
Output: false
Explantion: 2 has only two divisors: 1 and 2.

Example 2:
Input: n = 4
Output: true
Explantion: 4 has three divisors: 1, 2, and 4.

Constraints:
    1 <= n <= 104
*/

/*
 * @param {number} n
 * @return {boolean}
 */

test1 = 4
test2 = 10
test3 = 2

var isThree = function(n) {
    //Start counter at 2 (for n and 1)
    let counter = 2
    //Find sqrt of number so iteration doesn't occur for every number up to n
    let sqrt = Math.floor(Math.sqrt(n))
    //Iterate through numbers up to sqrt to divide into number
    for (let i = 2; i <= sqrt; i++) {
        if (n % i === 0) {
            //Iterate counter if number is divisible
            counter++ 
            //Return false if i is not the square root of n
            if (i ** 2 !== n) {
                return false
            }
        }
        //Return false if counter exceeds 3
        if (counter > 3) {
            return false
        }
    }
    //Return true if counter is equal to 3
    if (counter === 3) {
        return true
    }
    //Return false if counter is below 3
    return false
};

console.log(isThree(test3))

/*
Runtime 64 ms
Beats 88.52%
Memory 41.9 MB
Beats 69.67%
*/