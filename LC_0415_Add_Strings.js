/*
Date Started: 2022.12.26
Language(s): JavaScript
*/

/*
415. Add Strings
Easy

Given two non-negative integers, num1 and num2 represented as string, return the sum of num1 and num2 as a string.

You must solve the problem without using any built-in library for handling large integers (such as BigInteger). You must also not convert the inputs to integers directly.

Example 1:
Input: num1 = "11", num2 = "123"
Output: "134"

Example 2:
Input: num1 = "456", num2 = "77"
Output: "533"

Example 3:
Input: num1 = "0", num2 = "0"
Output: "0"

Constraints:

    1 <= num1.length, num2.length <= 104
    num1 and num2 consist of only digits.
    num1 and num2 don't have any leading zeros except for the zero itself.

Accepted
536.2K
Submissions
1M
Acceptance Rate
52.6%
*/

/*
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
num1 = "9" 
num2 = "1"


var addStrings = function(num1, num2) {
    //number and character objects
    let numObj = {
        "0": 0, "1": 1, "2": 2, "3": 3, "4": 4, "5": 5, "6": 6, "7": 7, "8": 8, "9": 9
    } 
    let charObj = {
        0: "0", 1: "1", 2: "2", 3: "3", 4: "4", 5: "5", 6: "6", 7: "7", 8: "8", 9: "9"
    } 
    //split number strings and reverse array
    num1 = num1.split("").reverse()
    num2 = num2.split("").reverse()
    //set variables
    let sumTot = ""
    let carry = 0
    //find largest max length for loop
    let maxLen = num1.length > num2.length ? num1.length : num2.length
    for (let i = 0; i < maxLen; i++) {
        //ensure no undefined occurs for unequal loop sizes
        let num1Set = num1[i] === undefined ? 0 : numObj[num1[i]]
        let num2Set = num2[i] === undefined ? 0 : numObj[num2[i]]
        //add numbers and include in string output
        if (num1Set + num2Set + carry >= 10) {
            sumTot = charObj[(num1Set + num2Set + carry) %10] + sumTot
            if (carry === 0) { carry++ }
        } else {
            sumTot = charObj[num1Set + num2Set + carry] + sumTot
            carry = 0         
        }
    }
    //account for additional "1" if a number was carried
    if (carry > 0) {
        sumTot = "1" + sumTot  
    }
    //return the string
    return sumTot
};

console.log(addStrings(num1, num2))

/*
Runtime72 ms
Beats
88.62%
Memory44.6 MB
Beats
45.80%
*/