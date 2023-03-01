/*
1160. Find Words That Can Be Formed by Characters
Easy

You are given an array of strings words and a string chars.

A string is good if it can be formed by characters from chars (each character can only be used once).

Return the sum of lengths of all good strings in words.

Example 1:
Input: words = ["cat","bt","hat","tree"], chars = "atach"
Output: 6
Explanation: The strings that can be formed are "cat" and "hat" so the answer is 3 + 3 = 6.

Example 2:
Input: words = ["hello","world","leetcode"], chars = "welldonehoneyr"
Output: 10
Explanation: The strings that can be formed are "hello" and "world" so the answer is 5 + 5 = 10.

 

Constraints:

    1 <= words.length <= 1000
    1 <= words[i].length, chars.length <= 100
    words[i] and chars consist of lowercase English letters.
*/

/*
 * @param {string[]} words
 * @param {string} chars
 * @return {number}
 */

words = ["hello","world","leetcode"]
chars = "welldonehoneyr"

words2 = ["cat","bt","hat","tree"]
chars2 = "atach"

words3 = ["dyiclysmffuhibgfvapygkorkqllqlvokosagyelotobicwcmebnpznjbirzrzsrtzjxhsfpiwyfhzyonmuabtlwin","ndqeyhhcquplmznwslewjzuyfgklssvkqxmqjpwhrshycmvrb","ulrrbpspyudncdlbkxkrqpivfftrggemkpyjl","boygirdlggnh","xmqohbyqwagkjzpyawsydmdaattthmuvjbzwpyopyafphx","nulvimegcsiwvhwuiyednoxpugfeimnnyeoczuzxgxbqjvegcxeqnjbwnbvowastqhojepisusvsidhqmszbrnynkyop","hiefuovybkpgzygprmndrkyspoiyapdwkxebgsmodhzpx","juldqdzeskpffaoqcyyxiqqowsalqumddcufhouhrskozhlmobiwzxnhdkidr","lnnvsdcrvzfmrvurucrzlfyigcycffpiuoo","oxgaskztzroxuntiwlfyufddl","tfspedteabxatkaypitjfkhkkigdwdkctqbczcugripkgcyfezpuklfqfcsccboarbfbjfrkxp","qnagrpfzlyrouolqquytwnwnsqnmuzphne","eeilfdaookieawrrbvtnqfzcricvhpiv","sisvsjzyrbdsjcwwygdnxcjhzhsxhpceqz","yhouqhjevqxtecomahbwoptzlkyvjexhzcbccusbjjdgcfzlkoqwiwue","hwxxighzvceaplsycajkhynkhzkwkouszwaiuzqcleyflqrxgjsvlegvupzqijbornbfwpefhxekgpuvgiyeudhncv","cpwcjwgbcquirnsazumgjjcltitmeyfaudbnbqhflvecjsupjmgwfbjo","teyygdmmyadppuopvqdodaczob","qaeowuwqsqffvibrtxnjnzvzuuonrkwpysyxvkijemmpdmtnqxwekbpfzs","qqxpxpmemkldghbmbyxpkwgkaykaerhmwwjonrhcsubchs"]
chars3 = "usdruypficfbpfbivlrhutcgvyjenlxzeovdyjtgvvfdjzcmikjraspdfp"


// ATTEMPT 1: INEFFECIENT SOLUTION

// var countCharacters = function(words, chars) {
//     // Set object with count of each letter
//     target = {}
//     for (let i = 0; i < chars.length; i++) {
//         if (target[chars[i]] === undefined) {
//             target[chars[i]] = 1
//         } else {
//             target[chars[i]] += 1
//         }
//     }
//     // Track result of char length for total valid words
//     result = 0
//     // Loop through words array
//     for (let i = 0; i < words.length; i++) {
//         // Make copy of target object
//         testWord = {...target}
//         // Loop through each letter 
//         for (let j = 0; j < words[i].length; j++) {
//             // See if letter is in testWord object - if not go to next word
//             if (testWord[words[i][j]] === undefined) {
//                 break
//             } else {
//                 // If letter is in, subtract 1 from letter count
//                 testWord[words[i][j]] -= 1
//                 // If letter count is below 0, skip word
//                 if (testWord[words[i][j]] < 0) {
//                     break
//                 }
//                 // If letter count is valid and word is complete, add to result
//                 if (j === words[i].length - 1) {
//                     result += words[i].length
//                 }
//             }
//         }
//     }
//     // Return result
//     return result
// };

// console.log(countCharacters(words2, chars2))

/*
Runtime 235 ms
Beats 44.40%
Memory 50.4 MB
Beats 58.80%
*/

// ATTEMPT 2: CONSOLIDATE .LENGTH CONVERSION

// var countCharacters = function(words, chars) {
//     // Set object with count of each letter
//     target = {}
//     for (let i = 0; i < chars.length; i++) {
//         if (target[chars[i]] === undefined) {
//             target[chars[i]] = 1
//         } else {
//             target[chars[i]] += 1
//         }
//     }
//     // Track result of char length for total valid words
//     result = ""
//     // Loop through words array
//     for (let i = 0; i < words.length; i++) {
//         // Make copy of target object
//         testWord = {...target}
//         // Loop through each letter 
//         for (let j = 0; j < words[i].length; j++) {
//             // See if letter is in testWord object - if not go to next word
//             if (testWord[words[i][j]] === undefined) {
//                 break
//             } else {
//                 // If letter count is below 0, skip word
//                 if (testWord[words[i][j]] - 1 < 0) {
//                     break
//                 }
//                 // If letter is in, subtract 1 from letter count
//                 testWord[words[i][j]] -= 1
//                 // If letter count is valid and word is complete, add to result
//                 if (j === words[i].length - 1) {
//                     result += words[i]
//                 }
//             }
//         }
//     }
//     // Return result
//     return result.length
// };

// console.log(countCharacters(words2, chars2))

/*
Runtime 224 ms
Beats 49.20%
Memory 49.8 MB
Beats 79.60%
*/

// ATTEMPT 3: CONSOLIDATE VARIABLES

// var countCharacters = function(words, chars) {
//     // Set object with count of each letter
//     target = {}
//     for (let i = 0; i < chars.length; i++) {
//         if (target[chars[i]] === undefined) {
//             target[chars[i]] = 1
//         } else {
//             target[chars[i]] += 1
//         }
//     }
//     // Track result of char length for total valid words
//     result = ""
//     // Loop through words array
//     for (let i = 0; i < words.length; i++) {
//         // Make copy of target object
//         let testWord = {...target}
//         // Set variable for words length
//         let wordsLength = words[i].length
//         // Loop through each letter 
//         for (let j = 0; j < wordsLength; j++) {
//             // See if letter is in testWord object - if not go to next word
//             if (testWord[words[i][j]] === undefined) {
//                 break
//             } else {
//                 // If letter count is below 0, skip word
//                 if (testWord[words[i][j]] - 1 < 0) {
//                     break
//                 }
//                 // If letter is in, subtract 1 from letter count
//                 testWord[words[i][j]] -= 1
//                 // If letter count is valid and word is complete, add to result
//                 if (j === wordsLength - 1) {
//                     result += words[i]
//                 }
//             }
//         }
//     }
//     // Return result
//     return result.length
// };

// console.log(countCharacters(words2, chars2))

/*
Runtime 216 ms
Beats 52.40%
Memory 50.7 MB
Beats 48.80%
*/



// ATTEMPT 4: REFACTOR TO REMOVE DICTIONARY ITEMS FOR LESS ITERATIONS

var countCharacters = function(words, chars) {
    // Set object with count of each letter
    target = {}
    for (let i = 0; i < chars.length; i++) {
        if (target[chars[i]] === undefined) {
            target[chars[i]] = 1
        } else {
            target[chars[i]] += 1
        }
    }
    // Track result of char length for total valid words
    result = ""
    // Loop through words array
    for (let i = 0; i < words.length; i++) {
        // Make copy of target object
        let testWord = {...target}
        // Set variable for words length
        let wordsLength = words[i].length
        // Loop through each letter 
        for (let j = 0; j < wordsLength; j++) {
            // See if letter is in testWord object - if not go to next word
            if (testWord[words[i][j]] === undefined) {
                break
            } else {
                // If letter count is below 0, skip word
                if (testWord[words[i][j]] - 1 < 0) {
                    delete testWord[words[i][j]]
                    break
                }
                // If letter is in, subtract 1 from letter count
                testWord[words[i][j]] -= 1
                // If letter count is valid and word is complete, add to result
                if (j === wordsLength - 1) {
                    result += words[i]
                }
            }
        }
    }
    // Return result
    return result.length
};

console.log(countCharacters(words2, chars2))

/* DID NOT WORK - CHANGING AN OBJECT TAKES TOO MUCH TIME */
/*
Runtime 230 ms
Beats 45.20%
Memory 50.5 MB
Beats 55.20%
*/


// OPTIMAL SOLUTION - ***NOT MINE***, RESEARCHED MORE EFFICIENT WAYS AND THE ELEMENT MISSING WAS THE REDUCTION OF THE WORD FOR ITERATION.  IN MY ATTEMPTS ABOVE, THE DICTIONARY ALWAYS STAYED THE SAME SIZE WHICH 

var countCharacters = function(words, chars) {
    // Count letters for valid words
    let charCount = 0;
    // Iterate through each word in array
    for(let i = 0; i < words.length; i++) {
        // Set variable for chars to not edit chars directly
        let editableChars = chars;
        
        for(let j = 0; j < words[i].length; j++) {
            // Find letter from word
            let char = words[i][j];
            // Find index of letter in chars
            let idx = editableChars.indexOf(char);
            // Break loop if index not found
            if(idx === -1) {
                break;
            }
            // Remove from array so less chars to iterate over
            if(idx > -1) {
                editableChars = editableChars.replace(char, '');
            }
            // If word is complete, add to character length
            if(j+1 === words[i].length) {
                charCount += j+1;
            }
        }
    }
    // Return result
    return charCount;
};

console.log(countCharacters(words2, chars2))

/*
Runtime 95 ms
Beats 90.80%
Memory 49.8 MB
Beats 76.40%
*/
