/*
Date Started: 2022.12.30
Language(s): JavaScript
*/

/*
409. Longest Palindrome
Easy

Given a string s which consists of lowercase or uppercase letters, return the length of the longest palindrome that can be built with those letters.

Letters are case sensitive, for example, "Aa" is not considered a palindrome here.

Example 1:
Input: s = "abccccdd"
Output: 7
Explanation: One longest palindrome that can be built is "dccaccd", whose length is 7.

Example 2:
Input: s = "a"
Output: 1
Explanation: The longest palindrome that can be built is "a", whose length is 1.

Constraints:
    1 <= s.length <= 2000
    s consists of lowercase and/or uppercase English letters only.
*/

/*
 * @param {string} s
 * @return {number}
 */

test1 = "abccccdd" //answer should be 7
test2 = "dcbabcdeee" //answer should be 9 
test3 = "a" //answer should be 1
test4 = "Apple" //answer should be 3
test5 = "aabb" //answer should be 4
test6 = "abbcc" //answer should be 5
test7 = "ccd" //answer should be 3
test8 = "dcc" //answer should be 3
test9 = "dcd" //answer should be 3
test10 = "ab" //answer should be 1

var longestPalindrome = function(s) {
    //Return 1 if length is 1
    if (s.length === 1) {
        return 1
    }
    //Set Variables
    let oddNum = false //Add 1 if there is an odd number
    let palLength = 0 //Track total palendrome length
    let counter = 1 //Iterate for duplicate letters
    s = s.split('').sort() //Split string into array to sort
    //Iterate through string
    for (let i = 1; i < s.length; i++) {
        //Add 1 to counter if the current letter is equal to previous letter
        if (s[i] === s[i - 1]) {
            counter++
        //Add counter to palLength when letters differ, reset counter
        } else {
            if (counter % 2 !== 0) {
                palLength += counter - 1
                counter = 1
                oddNum = true
            } else {
                palLength += counter
                counter = 1
            }
        }
    }
    //Handle last letter(s)
    if (counter > 1) {
        if (counter % 2 === 0) {
            palLength += counter
        } else {
            palLength += counter - 1
            oddNum = true
        }
    }
    //Handle one letter outlier if starting is unique
    if (palLength !== s.length && oddNum === false) {
        oddNum = true
    }
    //Add 1 to total if oddNum is true
    if (oddNum === true) {
        palLength += 1
    }
    console.log(oddNum)
    //Return result
    return palLength
};

console.log(longestPalindrome(test9))

/*
Runtime 73 ms
Beats 83.89%
Memory 44.1 MB
Beats 47.16%
*/