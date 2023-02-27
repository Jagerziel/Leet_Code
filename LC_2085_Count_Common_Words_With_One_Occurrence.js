/*
2085. Count Common Words With One Occurrence
Easy

Given two string arrays words1 and words2, return the number of strings that appear exactly once in each of the two arrays.

Example 1:

Input: words1 = ["leetcode","is","amazing","as","is"], words2 = ["amazing","leetcode","is"]
Output: 2
Explanation:
- "leetcode" appears exactly once in each of the two arrays. We count this string.
- "amazing" appears exactly once in each of the two arrays. We count this string.
- "is" appears in each of the two arrays, but there are 2 occurrences of it in words1. We do not count this string.
- "as" appears once in words1, but does not appear in words2. We do not count this string.
Thus, there are 2 strings that appear exactly once in each of the two arrays.

Example 2:

Input: words1 = ["b","bb","bbb"], words2 = ["a","aa","aaa"]
Output: 0
Explanation: There are no strings that appear in each of the two arrays.

Example 3:

Input: words1 = ["a","ab"], words2 = ["a","a","a","ab"]
Output: 1
Explanation: The only string that appears exactly once in each of the two arrays is "ab".

 

Constraints:

    1 <= words1.length, words2.length <= 1000
    1 <= words1[i].length, words2[j].length <= 30
    words1[i] and words2[j] consists only of lowercase English letters.

*/

let words1 = ["leetcode","is","amazing","as","is"]
let words2 = ["amazing","leetcode","is"]
let words3 = ["a","ab"]
let words4 = ["a","a","a","ab"]
let words5 = ["a", "a", "ab"]
let words6 = ["a", "ab", "c", "d", "e"]
let words7 = []
let words8 = []
/*
 * @param {string[]} words1
 * @param {string[]} words2
 * @return {number}
 */

//Attempt 1: RUNTIME ERROR
// var countWords = function(words1, words2) {
//     let duplicated = []
//     // Iterate through each word and if they are equal to each other then push word to duplicated array
//     for (let i = 0; i < words1.length; i++) {
//         for (j = 0; j < words2.length; j++) {
//             if (words1[i] === words2[j]) {
//                 duplicated.push(words1[i] + "-" + words2[j])
//             }
//         }
//     }
//     // Sort duplicated array
//     duplicated = duplicated.sort()
//     console.log(duplicated)
//     // Set counter for unique words
//     let uniqueCount = 0
//     // Ensure words are not erronously counted when compared
//     let backcheck = false
//     // Loop through duplicated array and only count unique items
//     for (let i = 0; i < duplicated.length; i++) {
//         if (i < duplicated.length) {
//             if (duplicated[i] !== duplicated[i + 1]) {
//                 if (backcheck === false) {
//                     uniqueCount++
//                 } else {
//                     if (duplicated[i] !== duplicated[i - 1]) {
//                         uniqueCount++
//                         backcheck = false
//                     }
//                 }
//             } else {
//                 backcheck = true
//             }
//         }
//     }
//     // Return result
//     return uniqueCount
// };

// console.log(countWords(words4, words5))



var countWords = function(words1, words2) {
    // Set object to identify duplicated values
    let duplicated = {}
    // Find unique values by adding from first array
    for (let i = 0; i < words1.length; i++) {
        if (duplicated[words1[i]] === undefined) {
            duplicated[words1[i]] = "Keep"
        } else {
            duplicated[words1[i]] = "Ignore"
        }
    }
    // Match unique items from first array with unique from second
    for (let j = 0; j < words2.length; j++) {
        if (duplicated[words2[j]] === "Keep") {
            duplicated[words2[j]] = "Found Two"
        } else {
            duplicated[words2[j]] = "Ignore"
        }
    }
    // Filter for "unique item results"
    result = Object.keys(duplicated).filter((val) => duplicated[val] === "Found Two").length
    // Return result
    return result
};

console.log(countWords(words4, words5))

/*
Runtime 77 ms
Beats 81.73%
Memory 45 MB
Beats 83.76%
*/