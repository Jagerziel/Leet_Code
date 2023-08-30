/*
884. Uncommon Words from Two Sentences
Easy

A sentence is a string of single-space separated words where each word consists only of lowercase letters.

A word is uncommon if it appears exactly once in one of the sentences, and does not appear in the other sentence.

Given two sentences s1 and s2, return a list of all the uncommon words. You may return the answer in any order.

Example 1:
Input: s1 = "this apple is sweet", s2 = "this apple is sour"
Output: ["sweet","sour"]

Example 2:
Input: s1 = "apple apple", s2 = "banana"
Output: ["banana"]

Constraints:

    1 <= s1.length, s2.length <= 200
    s1 and s2 consist of lowercase English letters and spaces.
    s1 and s2 do not have leading or trailing spaces.
    All the words in s1 and s2 are separated by a single space.

*/


/*
 * @param {string} s1
 * @param {string} s2
 * @return {string[]}
 */

let s1 = "this apple is sweet",
    s2 = "this apple is sour"

// let s1 = "apple apple",
//     s2 = "banana"    

// ATTEMPT 1: LOOP THROUGH COMBINED ARRAY AND RETURN INSTANCES OF ONLY ONE

// var uncommonFromSentences = function(s1, s2) {
//     let fullArr = s1.split(" ").concat(s2.split(" "))

//     let trackingObj = {}

//     for (let i of fullArr) {
//         if(trackingObj[i] === undefined) {
//             trackingObj[i] = 1
//         } else {
//             trackingObj[i] += 1
//         }
//     }

//     let result = []
//     let keys = Object.keys(trackingObj)

//     for (let i of keys) {
//         if (trackingObj[i] === 1) result.push(i)
//     }

//     return result
// };


// ATTEMPT 2: LOOP THROUGH COMBINED ARRAY AND RETURN INSTANCES OF ONLY ONE

var uncommonFromSentences = function(s1, s2) {
    let fullArr = s1.split(" ").concat(s2.split(" "))

    let trackingObj = {}

    for (let i of fullArr) {
        if(trackingObj[i] === undefined) {
            trackingObj[i] = 1
        } else {
            trackingObj[i] += 1
        }
    }

    return Object.keys(trackingObj).filter((item) => {
        if (trackingObj[item] === 1) return item  
    })
};

/*
Runtime 52 ms
Beats 72.26%
Memory 41.9 MB
Beats 80.48%

*/

console.log(uncommonFromSentences(s1, s2))
