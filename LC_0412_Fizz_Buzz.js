/*
Date Started: 2022.12.27
Language(s): JavaScript
*/

/*
412. Fizz Buzz
Easy
1.4K
203
Companies

Given an integer n, return a string array answer (1-indexed) where:
    answer[i] == "FizzBuzz" if i is divisible by 3 and 5.
    answer[i] == "Fizz" if i is divisible by 3.
    answer[i] == "Buzz" if i is divisible by 5.
    answer[i] == i (as a string) if none of the above conditions are true.

Example 1:
Input: n = 3
Output: ["1","2","Fizz"]

Example 2:
Input: n = 5
Output: ["1","2","Fizz","4","Buzz"]

Example 3:
Input: n = 15
Output: ["1","2","Fizz","4","Buzz","Fizz","7","8","Fizz","Buzz","11","Fizz","13","14","FizzBuzz"]

Constraints:
    1 <= n <= 104
*/

/*
 * @param {number} n
 * @return {string[]}
 */

let test1 = 15

var fizzBuzz = function(n) {
    //Empty Array to be filled
    let arr = []
    //Create array based on n
    for (let i = 1; i <= n; i++) {
        //Check if multiple of 15
        if (i % 15 === 0) {
            arr.push("FizzBuzz")
        //Check if multiple of 5
        } else if (i % 5 === 0) {
            arr.push("Buzz") 
        //Check if multiple of 3
        } else if (i % 3 === 0) {
            arr.push("Fizz")
        //Otherwise, push i
        } else {
            arr.push(i.toString())
        }
    }
    //Return array
    return arr
};

console.log(fizzBuzz(test1))

/*
Runtime75 ms
Beats
82.78%
Memory44.1 MB
Beats
82.54%
*/