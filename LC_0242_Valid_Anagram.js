/*
Date Started: 2022.12.29
Language(s): JavaScript
*/

/*
242. Valid Anagram
Easy

Given two strings s and t, return true if t is an anagram of s, and false otherwise.

An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.

Example 1:
Input: s = "anagram", t = "nagaram"
Output: true

Example 2:
Input: s = "rat", t = "car"
Output: false

Constraints:
    1 <= s.length, t.length <= 5 * 104
    s and t consist of lowercase English letters.
*/

/*
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
// //TEST 1
// s = "anagram", t = "nagaram"

// //TEST2
// s = "rat", t = "car"

// var isAnagram = function(s, t) {
//     //basic check
//     if (s.length !== t.length) {
//         return false
//     }
//     //convert t into array
//     t = t.split("")
//     //loop through each letter of s
//     for (let i = 0; i < s.length; i++) {
//         //check if letter in s is present in t
//         if (s[i] = t[t.indexOf(s[i])]) {
//             //remove letter from t if present
//             t.splice(t.indexOf(s[i]),1)
//         } else {
//             //return false if letter not present
//             return false
//         }
//     }
//     return true
// };

// console.log(isAnagram(s, t))

/*
Runtime 4041 ms
Beats 5.1%
Memory 51.2 MB
Beats 5.4%
*/

/*
SECOND SOLUTION - SLIGHTLY MORE EFFICIENT
*/

// var isAnagram = function(s, t) {
//     //basic check
//     if (s.length !== t.length) {
//         return false
//     }
//     //convert t into array
//     t = t.split("")
//     //Loop through s
//     for (let i = 0; i < s.length; i++) {
//         //Loop through t to find match to s
//         for (let j = 0; j < t.length; j++) {
//             //If match found, remove item from j and break loop
//             if (s[i] === t[j]) {
//                 t.splice(j, 1)
//                 break
//             //If no matches found by end of loop, return false
//             } else if (j === t.length - 1) {
//                 return false
//             }
//         }
//     }
//     //If all loops complete successfully, return result
//     return true
// }

// console.log(isAnagram(s, t))

/*
Runtime 2573 ms
Beats 5.1%
Memory 46.5 MB
Beats 35.86%
*/

/*
THIRD SOLUTION - MUCH FASTER (but still not the best - may come back to this)
*/

// s = s.split("")
// console.log(s.filter((char) => char !== 'a'))

// //TEST 1
// s = "anagram", t = "nagaram"

// // //TEST2
// // s = "rat", t = "car"

// var isAnagram = function(s, t) {
//     //basic check
//     if (s.length !== t.length) {
//         return false
//     }
//     //split strings into arrays
//     s = s.split("")
//     t = t.split("")
//     //conduct loop to filter out each letter
//     while (s.length > 0) {
//         //filter out current letter in s string
//         t = t.filter((char) => char !== s[0])
//         s = s.filter((char) => char !== s[0])
//         //if the lengths of each array differ, return false
//         if (s.length !== t.length) {
//             return false
//         }
//     }
//     //if both strings filter to 0, return true
//     return true
// };
// console.log(isAnagram(s, t))

/*
Runtime 115 ms
Beats 62.59%
Memory 57.5 MB
Beats 5.4%
*/

/*
FOURTH SOLUTION - USING MY OWN FUNCTIONS
*/

// //TEST 1
s = "anagram", t = "nagaram"

// //TEST2
// s = "rat", t = "car"



var isAnagram = function(s, t) {
    //basic check
    if (s.length !== t.length) {
        return false
    }
    //new arrays
    let sNew = []
    let tNew = []
    for (let i = 0; i < s.length; i++) {
        sNew.push(s[i])
        tNew.push(t[i])
    }
    //Function to filter array
    const filterArr = (arr, letter) => {
        //for each item in array, remove letter specified
        for (let i = arr.length - 1; i >= 0; i--) {
            if (arr[i] === letter) {
                arr.splice(i, 1)
            }
        }
        return arr
    }
    //conduct loop to filter out each letter
    while (sNew.length > 0) {
        //filter out current letter in sNew string
        tNew = filterArr(tNew, sNew[0])
        sNew = filterArr(sNew, sNew[0])
        //if the lengths of each array differ, return false
        if (sNew.length !== tNew.length) {
            return false
        }
    }
    //if both strings filter to 0, return true
    return true
};
console.log(isAnagram(s, t))

/*
Runtime 1672 ms
Beats 5.1%
Memory 49 MB
Beats 15.10%
*/