/*
Date Started: 2022.01.01
Language(s): JavaScript
*/

/*
12. Integer to Roman
Medium

Roman numerals are represented by seven different symbols: I, V, X, L, C, D and M.

Symbol       Value
I             1
V             5
X             10
L             50
C             100
D             500
M             1000

For example, 2 is written as II in Roman numeral, just two one's added together. 12 is written as XII, which is simply X + II. The number 27 is written as XXVII, which is XX + V + II.

Roman numerals are usually written largest to smallest from left to right. However, the numeral for four is not IIII. Instead, the number four is written as IV. Because the one is before the five we subtract it making four. The same principle applies to the number nine, which is written as IX. There are six instances where subtraction is used:

    I can be placed before V (5) and X (10) to make 4 and 9. 
    X can be placed before L (50) and C (100) to make 40 and 90. 
    C can be placed before D (500) and M (1000) to make 400 and 900.

Given an integer, convert it to a roman numeral.

Example 1:
Input: num = 3
Output: "III"
Explanation: 3 is represented as 3 ones.

Example 2:
Input: num = 58
Output: "LVIII"
Explanation: L = 50, V = 5, III = 3.

Example 3:
Input: num = 1994
Output: "MCMXCIV"
Explanation: M = 1000, CM = 900, XC = 90 and IV = 4.

Constraints:
    1 <= num <= 3999
*/

/*
 * @param {number} num
 * @return {string}
 */

let test1 = 3
let test2 = 58
let test3 = 1994
let test4 = 9
let test5 = 1


var intToRoman = function(num) {
    //Define array of objects for each number
    let numerals = [
        {num: 1000, let: "M", subt: "C", threshold: 4000}, 
        {num: 500, let: "D", subt: "C", threshold: 900}, 
        {num: 100, let: "C", subt: "X", threshold: 400}, 
        {num: 50, let: "L", subt: "X", threshold: 90}, 
        {num: 10, let: "X", subt: "I", threshold: 40}, 
        {num: 5, let: "V", subt: "I", threshold: 9}, 
        {num: 1, let: "I", subt: null, threshold: 4}
    ]
    //Set string variable for output
    let romanNumeral = ""
    //Loop through each of the numerals
    for (let i = 0; i < numerals.length; i++) {
        //Check if num is above the object num (skip if not)
        if (num >= numerals[i].num) {
            //Get number of repetitions needed
            tempNum = Math.floor(num / numerals[i].num)
            // Handle 'fours' and 'nines'
            if(tempNum === 4 || num >= numerals[i].threshold) {
                romanNumeral += numerals[i - 1].subt + numerals[i - 1].let
                num -= numerals[i].threshold
            //Otherwise add the letter and repeat amount of times in tempNum (i.e. 3 would repeat 'I' 3 times)
            } else {
                romanNumeral += numerals[i].let.repeat(tempNum)
                num -= numerals[i].num * tempNum
            }
        }
    }
    //Return result
    return romanNumeral
};

console.log(intToRoman(test5))

/*
Runtime 118 ms
Beats 94.42%
Memory 48.5 MB
Beats 39.92%
*/