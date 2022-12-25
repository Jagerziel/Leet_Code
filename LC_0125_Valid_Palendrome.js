/*
Date Started: 2022.12.25
Language(s): JavaScript
*/

/*
125. Valid Palindrome
Easy

A phrase is a palindrome if, after converting all uppercase letters into lowercase letters and removing all non-alphanumeric characters, it reads the same forward and backward. Alphanumeric characters include letters and numbers.

Given a string s, return true if it is a palindrome, or false otherwise.

Example 1:

Input: s = "A man, a plan, a canal: Panama"
Output: true
Explanation: "amanaplanacanalpanama" is a palindrome.

Example 2:

Input: s = "race a car"
Output: false
Explanation: "raceacar" is not a palindrome.

Example 3:

Input: s = " "
Output: true
Explanation: s is an empty string "" after removing non-alphanumeric characters.
Since an empty string reads the same forward and backward, it is a palindrome.

Constraints:

    1 <= s.length <= 2 * 105
    s consists only of printable ASCII characters.

*/


/*
 * @param {string} s
 * @return {boolean}
 */

test1 = "A man, a plan, a canal: Panama"
test2 = "Racecar!!!racecar"
test3 = "app le eLP!! p      #A"
test4 = "00##10a0!1  00$"

// for (let i = 0; i < test1.length; i++) {
//     console.log(test1[i].search(/[^a-zA-Z]+/) !== -1)
// }
// console.log(test1.length)

var isPalindrome = function(s) {
    //Set string to lowercase
    s = s.toLowerCase()
    //Variables for starting and ending indexes
    let startChar = 0
    let endChar = s.length - 1
    //Iterate through string to check if the first and last are equal
    while (startChar <= endChar) {
        //Skip non-letter/number characters starting from the beginning
        while (s[startChar].search(/[^a-z0-9]+/) !== (-1) && startChar < s.length) {
            // console.log(`skip: ${s[startChar]}`)

            //Move to next letter 
            startChar++
            //Return true if the final letters are non-letter/number characters
            if (startChar >= endChar) {
                return true
            }
        }
        //Skip non-letter/number characters starting from the end
        while (s[endChar].search(/[^a-z0-9]+/) !== (-1) && endChar > startChar) {
            // console.log(`skip: ${s[endChar]}`)
            //Move to the next letter/number
            endChar--
            //Return true if the final letters are non-letter characters
            if (startChar >= endChar) {
                return true
            }
        }
        //Compare beginning and ending 'lowercase letters' and/or numbers
        if (s[startChar] === s[endChar]) {
            // console.log(s[startChar], s[endChar])

            //Move to the next letter/number
            startChar++
            endChar--
            //Check if middle of the string is reached
            if (startChar >= endChar) {
                return true
            }
        } else {
            //Return false if letters/numbers do not match
            return false
        }
    }
    //Return false if loop completed and no valid palendrome was confirmed
    return false
};

console.log(isPalindrome(test4))

/*

Runtime78 ms
Beats
89.94%
Memory47.2 MB
Beats
35.29%

*/