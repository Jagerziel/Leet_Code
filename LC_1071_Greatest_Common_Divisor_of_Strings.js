/*
1071. Greatest Common Divisor of Strings
Easy

For two strings s and t, we say "t divides s" if and only if s = t + ... + t (i.e., t is concatenated with itself one or more times).

Given two strings str1 and str2, return the largest string x such that x divides both str1 and str2.

Example 1:

Input: str1 = "ABCABC", str2 = "ABC"
Output: "ABC"

Example 2:
Input: str1 = "ABABAB", str2 = "ABAB"
Output: "AB"

Example 3:
Input: str1 = "LEET", str2 = "CODE"
Output: ""

Constraints:

    1 <= str1.length, str2.length <= 1000
    str1 and str2 consist of English uppercase letters.

*/

/*
 * @param {string} str1
 * @param {string} str2
 * @return {string}
 */

let test1 = "ABCABC", test2 = "ABC"
let test3 = "ABABAB", test4 = "ABAB"
let test5 = "LEET", test6 = "CODE"
let test7 = "ABABABAB", test8 = "ABAB"

// ATTEMPT 1: FIND ARRAY OF LONGEST MATCHING STRINGS FROM SHORTEST STRING AND COMPARE TO LONGEST

// var gcdOfStrings = function(str1, str2) {
//     // Track short and long string as well as their relative lengths
//     let shortString = ""
//     let longString = ""

//     if (str1.length >= str2.length) {
//         shortString = str2
//         longString = str1
//     } else {
//         shortString = str1
//         longString = str2
//     }
//     let shortLen = shortString.length
//     let longLen = longString.length
//     // Track results of pattern from short string from longest match to shortest
//     shortStringPossibilities = []
//     // Add patters to shortString possibilitites
//     for (let i = 0; i < shortLen; i++) {
//         if (shortLen % (i + 1) === 0) {
//             if (shortString.slice(0, i + 1).repeat(shortLen / (i + 1)) === shortString) {
//                 shortStringPossibilities.unshift(shortString.slice(0, i + 1))
//             }
//         }
//     }
//     // Check shorStringPossibilities to see if they match within the longer string.  If so, return first instance.
//     for (let i = 0; i < shortStringPossibilities.length; i++) {
//         if ( longLen % shortStringPossibilities[i].length === 0) {
//             if (longString === shortStringPossibilities[i].repeat(longLen / shortStringPossibilities[i].length)) return shortStringPossibilities[i]
//         }
//     }
//     // If no match, return ""
//     return ""
// };

/*
Runtime 57 ms
Beats 69.13%
Memory 44.4 MB
Beats 27.16%
*/

// ATTEMPT 2: REMOVE NEED FOR SHORT STRING TO GO THROUGH FULL LOOP

var gcdOfStrings = function(str1, str2) {
    // Track short and long string as well as their relative lengths
    let shortString = ""
    let longString = ""

    if (str1.length >= str2.length) {
        shortString = str2
        longString = str1
    } else {
        shortString = str1
        longString = str2
    }
    let shortLen = shortString.length
    let longLen = longString.length
    // Track results of pattern from short string from longest match to shortest
    shortStringPossibilities = []
    // Add patters to shortString possibilitites
    for (let i = 0; i < shortLen / 2; i++) {
        if (shortLen % (i + 1) === 0) {
            if (shortString.slice(0, i + 1).repeat(shortLen / (i + 1)) === shortString) {
                shortStringPossibilities.unshift(shortString.slice(0, i + 1))
            }
        }
    }
    shortStringPossibilities.unshift(shortString)
    // Check shorStringPossibilities to see if they match within the longer string.  If so, return first instance.
    for (let i = 0; i < shortStringPossibilities.length; i++) {
        if ( longLen % shortStringPossibilities[i].length === 0) {
            if (longString === shortStringPossibilities[i].repeat(longLen / shortStringPossibilities[i].length)) return shortStringPossibilities[i]
        }
    }
    // If no match, return ""
    return ""
};

/*
Runtime 56 ms
Beats 72.94%
Memory 44.5 MB
Beats 27.16%
*/

// ATTEMPT 3: PUT shortStringPossibilities[i] into a variable

var gcdOfStrings = function(str1, str2) {
    // Track short and long string as well as their relative lengths
    let shortString = ""
    let longString = ""

    if (str1.length >= str2.length) {
        shortString = str2
        longString = str1
    } else {
        shortString = str1
        longString = str2
    }
    let shortLen = shortString.length
    let longLen = longString.length
    // Track results of pattern from short string from longest match to shortest
    shortStringPossibilities = []
    // Add patters to shortString possibilitites
    for (let i = 0; i < shortLen / 2; i++) {
        if (shortLen % (i + 1) === 0) {
            if (shortString.slice(0, i + 1).repeat(shortLen / (i + 1)) === shortString) {
                shortStringPossibilities.unshift(shortString.slice(0, i + 1))
            }
        }
    }
    shortStringPossibilities.unshift(shortString)
    // Check shorStringPossibilities to see if they match within the longer string.  If so, return first instance.
    for (let i = 0; i < shortStringPossibilities.length; i++) {
        if ( longLen % shortStringPossibilities[i].length === 0) {
            let currStr = shortStringPossibilities[i]
            if (longString === currStr.repeat(longLen / currStr.length)) return currStr
        }
    }
    // If no match, return ""
    return ""
};

/*
Runtime 49 ms
Beats 91.70%
Memory 44.1 MB
Beats 32.85%
*/




console.log(gcdOfStrings(test1 , test2))
console.log(gcdOfStrings(test3 , test4))
console.log(gcdOfStrings(test5 , test6))
console.log(gcdOfStrings(test7 , test8))
