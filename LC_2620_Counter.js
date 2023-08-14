/*
2620. Counter
Easy

Given an integer n, return a counter function. This counter function initially returns n and then returns 1 more than the previous value every subsequent time it is called (n, n + 1, n + 2, etc).

Example 1:

Input: 
n = 10 
["call","call","call"]
Output: [10,11,12]
Explanation: 
counter() = 10 // The first time counter() is called, it returns n.
counter() = 11 // Returns 1 more than the previous time.
counter() = 12 // Returns 1 more than the previous time.

Example 2:

Input: 
n = -2
["call","call","call","call","call"]
Output: [-2,-1,0,1,2]
Explanation: counter() initially returns -2. Then increases after each sebsequent call.

 

Constraints:

    -1000 <= n <= 1000
    At most 1000 calls to counter() will be made

*/

/*
 * @param {number} n
 * @return {Function} counter
 */

// ATTEMPT 1: Minimal Code
var createCounter = function(n) {
    return function () {
        n++
        return n - 1
    };
};

/*
Runtime 59 ms
Beats 35.60%
Memory 41.9 MB
Beats 54.14%
*/

// ATTEMPT 2: Break Out Counter
var createCounter = function(n) {
    // Set Counter
    let counter = -1
    return function () {
        // Increment Counter
        counter++
        // Return Result
        return n + counter
    };
};

/*
Runtime 42 ms
Beats 97.39%
Memory 41.7 MB
Beats 76.74%
*/

// ATTEMPT 3: Shortened Variable Names
var createCounter = function(n) {
    // Set Counter
    let ct = -1
    return function () {
        // Increment Counter
        ct++
        // Return Result
        return n + ct
    };
};

/*
Runtime 39 ms
Beats 99.1%
Memory 42.2 MB
Beats 22.98%
*/



const counter = createCounter(10)
console.log(counter())
console.log(counter())
console.log(counter())

const counter2 = createCounter(10)
console.log(counter2())
console.log(counter2())
console.log(counter2())



/** 
 * const counter = createCounter(10)
 * counter() // 10
 * counter() // 11
 * counter() // 12
 */