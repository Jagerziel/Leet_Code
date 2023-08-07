/*
139. Word Break
Medium

Given a string s and a dictionary of strings wordDict, return true if s can be segmented into a space-separated sequence of one or more dictionary words.

Note that the same word in the dictionary may be reused multiple times in the segmentation.

Example 1:

Input: s = "leetcode", wordDict = ["leet","code"]
Output: true
Explanation: Return true because "leetcode" can be segmented as "leet code".

Example 2:

Input: s = "applepenapple", wordDict = ["apple","pen"]
Output: true
Explanation: Return true because "applepenapple" can be segmented as "apple pen apple".
Note that you are allowed to reuse a dictionary word.

Example 3:

Input: s = "catsandog", wordDict = ["cats","dog","sand","and","cat"]
Output: false

 

Constraints:

    1 <= s.length <= 300
    1 <= wordDict.length <= 1000
    1 <= wordDict[i].length <= 20
    s and wordDict[i] consist of only lowercase English letters.
    All the strings of wordDict are unique.

*/


/*
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */


let s1 = "applepenapple" //TRUE
let wordDict1 = ["apple","pen"]

let s2 = "applepencilapplecouchpen" //TRUE
let wordDict2 = ["apple","pen","couch","pencil","pend","depend"]

let s3 = "applepenciliacapplecouchpen" //TRUE
let wordDict3 = ["apple","pen","couch","pencil","pend","depend", "ciliac"]

let s4 = "a" //FALSE
let wordDict4 = ["abc"]

let s5 = "applepenciliaxcapplecouchpen" //FALSE
let wordDict5 = ["apple","pen","couch","pencil","pend","depend", "ciliac"]

let s6 = "catsandogcat" //TRUE
let wordDict6 = ["cats","dog","sand","and","cat","an"]

let s7 = "paviraagi" //TRUE
let wordDict7 = ["pavira","pavi","raa","gi","ag","ii"]

let s8 = "catandogcat" //TRUE
let wordDict8 = ["cats","dog","sand","and","cat","an"]

let s9 = "catcatcatcatcatcatcatcatcatcatccc" //TRUE
let wordDict9 = ["cat","catcatcatccc"]

let s10 = "a"
let wordDict10 = ["a"]



// ATTEMPT 1: SUCCEEDS FOR 45/46 Test Cases - NEEDS TO BE REWRITTEN

// var wordBreak = function(s, wordDict) {
//     let remainingString = s // Set remaining string variable
//     let wordDictLen = wordDict.length // Calculate length of dictionary array once
//     let sortedWordDict = wordDict.sort().reverse() // Reverse order so longest words come first in alphabetical order
//     let mod = 0 // Breaks while loop when false
//     let offset = 0 // Tracks Iterations for word replacement
//     let breakLoop = "" // Tracks remaining string
//     let tempRemainingString = ""
//     let trackingArray = []
//     // console.log(sortedWordDict)

//     // Loop through each first letter in the string
//     MainLoop: while (true) {
//         // Loop through each item in word dictionary
//         SecondLoop: for (let j = 0; j < wordDictLen; j++) {
//             // Check if the first an item in the array is equal to the next "x" letters of the remaining string 
//             if (sortedWordDict[j] === remainingString.slice(0, sortedWordDict[j].length)) {
//                 // console.log(sortedWordDict[j])
//                 // Check length of remaining string against word in dict.  If the remaining length is longer, continue to check a secondary word.  If it exceeds, skip.  If it is equal to, deduct the word and break loop.
//                 if ( remainingString.length - sortedWordDict[j].length > 0) {
//                     if (trackingArray.length === offset && offset > 0) {
//                         // Try next item in tracking array if overall result returned false
//                         try {
//                             if (sortedWordDict[j + 1] === sortedWordDict[j].slice(0, sortedWordDict[j + 1].length)) {
//                                 remainingString = remainingString.slice(sortedWordDict[j + 1].length)
//                                 // console.log("jackpot")
//                                 trackingArray.splice(offset,1,sortedWordDict[j + 1])
//                                 tempRemainingString = remainingString.slice(sortedWordDict[j + 1].length)
//                             } 
//                         } catch (e) {
//                             // break SecondLoop
//                             console.log(`hit here: ${sortedWordDict[j + 1]}`)
//                             return false
//                         }
//                     } else {
//                         tempRemainingString = remainingString.slice(sortedWordDict[j].length)
//                         breakLoop = tempRemainingString
//                         // Check if next word is valid.  If so, keep current word and deduct it from the remainingString
//                         for (let k = 0; k < wordDictLen; k++) {
//                             // console.log(mod, offset)
//                             if (sortedWordDict[k] === tempRemainingString.slice(0, sortedWordDict[k].length)) {
//                                 remainingString = remainingString.slice(sortedWordDict[j].length)
//                                 // trackingArray.push(sortedWordDict[j]) 
//                                 trackingArray.splice(k,1,sortedWordDict[j])
//                                 // console.log(trackingArray.length)
//                                 break
//                             }
//                         }
//                     }
//                     // console.log(tempRemainingString, offset)
//                 } else if (remainingString.length - sortedWordDict[j].length < 0) {
//                     continue
//                 } else {
//                     // Handle deducting last WordDict item and break loop
//                     remainingString = remainingString.slice(sortedWordDict[j].length)
//                     break
//                 }
//             }
//         }
//         // Check if remainingString length is 0.  If so, break the loop.
//         if (remainingString.length === 0) return true
//         if (tempRemainingString === breakLoop) {
//             mod++
//             if (mod === wordDictLen) {
//                 offset++
//                 mod = 0
//                 // console.log(trackingArray)
//                 remainingString = s
//                 if (offset >= 3) {
//                     return false
//                 }
//             }
//         }
//     }
// };


// ATTEMPT 2: SUCCEEDS BUT IS EXTREMELY SLOW

// const wordBreak = function(s, wordDict) {
//     let remainingString = s // Set remaining string variable
//     let wordDictLen = wordDict.length // Calculate length of dictionary array once
//     let sortedWordDict = wordDict.sort().reverse() // Reverse order so longest words come first in alphabetical order
//     let trackingArray = [] // Tracks words that have already been used and are valid
//     let minWordLen = 0 // Used to 
//     let finalResult = false // Used to return final result

//     for (let i = 0; i < wordDictLen; i++) {
//         if (i === 0) minWordLen = sortedWordDict[i].length
//         if (sortedWordDict[i].length < minWordLen) minWordLen = sortedWordDict[i].length
//     }

//     let maxLoops = Math.ceil(s.length / minWordLen)
    
//     function checkNextWord (n) {
//         // Break recursion conditions
//         if ( n === 0) return 

//         // Run main loop for n rounds
//         MainLoop: for (let rounds = 0; rounds < n; rounds++) {
//             // Loop through each word in the dictionary to check if equal to first x characters of that string's length
//             for (let i = 0; i < wordDictLen; i++) {
//                 // If the remaining string's length is equal to the word's length, finalResult is true
//                 if ( sortedWordDict[i] === remainingString.slice(0, sortedWordDict[i].length)) {
//                     if ( sortedWordDict[i].length === remainingString.length) {
//                         finalResult = true
//                         break MainLoop
//                     } else if ( sortedWordDict[i].length > remainingString.length && i === wordDictLen - 1) {
//                         checkNextWord(n - 1) // trigger recursive function
//                     } else if ( sortedWordDict[i].length > remainingString.length) {
//                         continue // skip word
//                     } else if ( trackingArray.length > 0 && trackingArray[rounds] === remainingString.slice(0, sortedWordDict[i].length)) {
//                         continue // skip word
//                     } else {
//                         // Check if next word is valid.  If so, keep current word and deduct it from the remainingString
//                         let tempRemainingString = remainingString.slice(sortedWordDict[i].length)
//                         for (let k = 0; k < wordDictLen; k++) {
//                             if (sortedWordDict[k] === tempRemainingString.slice(0, sortedWordDict[k].length)) {
//                                 remainingString = remainingString.slice(sortedWordDict[i].length)
//                                 // Add word to tracking array unless a word in that spot exists - then replace it
//                                 if (trackingArray.length <= maxLoops - n) {
//                                     trackingArray.push(sortedWordDict[i]) // add new word to trackingArray
//                                 } else {
//                                     trackingArray.splice(maxLoops - n,1,sortedWordDict[i]) // replace word in trackingArray
//                                 }
//                                 break
//                             }
//                         }
//                     }
//                 } 
//             }   

//             if (rounds === n - 1) {
//                 remainingString = s // Reset string value
//                 checkNextWord(n - 1) // Trigger recursive function 
//             }  
//         }
//     }

//     // Run function
//     checkNextWord(maxLoops)

//     // Return result
//     return finalResult
// }

/*
Runtime 82 ms
Beats 8.33%
Memory 48.1 MB
Beats 5.8%
*/


// ATTEMPT 3: ATTEMPT TO BREAK RECURSION AFTER SUCCESS - SLIGHT IMPROVEMENT

// const wordBreak = function(s, wordDict) {
//     let remainingString = s // Set remaining string variable
//     let wordDictLen = wordDict.length // Calculate length of dictionary array once
//     let sortedWordDict = wordDict.sort().reverse() // Reverse order so longest words come first in alphabetical order
//     let trackingArray = [] // Tracks words that have already been used and are valid
//     let minWordLen = 0 // Used to 
//     let finalResult = false // Used to return final result

//     for (let i = 0; i < wordDictLen; i++) {
//         if (i === 0) minWordLen = sortedWordDict[i].length
//         if (sortedWordDict[i].length < minWordLen) minWordLen = sortedWordDict[i].length
//     }

//     let maxLoops = Math.ceil(s.length / minWordLen)
    
//     function checkNextWord (n) {
//         // Break recursion conditions
//         if ( n === 0) return 

//         // Run main loop for n rounds
//         MainLoop: for (let rounds = 0; rounds < n; rounds++) {
//             // Loop through each word in the dictionary to check if equal to first x characters of that string's length
//             for (let i = 0; i < wordDictLen; i++) {
//                 // If the remaining string's length is equal to the word's length, finalResult is true
//                 if ( sortedWordDict[i] === remainingString.slice(0, sortedWordDict[i].length)) {
//                     if ( sortedWordDict[i].length === remainingString.length) {
//                         finalResult = true
//                         n = 0
//                         return
//                     } else if ( sortedWordDict[i].length > remainingString.length && i === wordDictLen - 1) {
//                         checkNextWord(n - 1) // trigger recursive function
//                     } else if ( sortedWordDict[i].length > remainingString.length) {
//                         continue // skip word
//                     } else if ( trackingArray.length > 0 && trackingArray[rounds] === remainingString.slice(0, sortedWordDict[i].length)) {
//                         continue // skip word
//                     } else {
//                         // Check if next word is valid.  If so, keep current word and deduct it from the remainingString
//                         let tempRemainingString = remainingString.slice(sortedWordDict[i].length)
//                         for (let k = 0; k < wordDictLen; k++) {
//                             if (sortedWordDict[k] === tempRemainingString.slice(0, sortedWordDict[k].length)) {
//                                 remainingString = remainingString.slice(sortedWordDict[i].length)
//                                 // Add word to tracking array unless a word in that spot exists - then replace it
//                                 if (trackingArray.length <= maxLoops - n) {
//                                     trackingArray.push(sortedWordDict[i]) // add new word to trackingArray
//                                 } else {
//                                     trackingArray.splice(maxLoops - n,1,sortedWordDict[i]) // replace word in trackingArray
//                                 }
//                                 break
//                             }
//                         }
//                     }
//                 } 
//             }   

//             if (rounds === n - 1) {
//                 remainingString = s // Reset string value
//                 checkNextWord(n - 1) // Trigger recursive function 
//             }  
//         }
//     }

//     // Run function
//     checkNextWord(maxLoops)

//     // Return result
//     return finalResult
// }


/*
Runtime 63 ms
Beats 51.41%
Memory 48.5 MB
Beats 5.8%
*/



// ATTEMPT 4: ATTEMPT TO REMOVE UNNECESSARY CHECKS 

// const wordBreak = function(s, wordDict) {
//     let remainingString = s // Set remaining string variable
//     let wordDictLen = wordDict.length // Calculate length of dictionary array once
//     let sortedWordDict = wordDict.sort().reverse() // Reverse order so longest words come first in alphabetical order
//     let trackingArray = [] // Tracks words that have already been used and are valid
//     let minWordLen = 0 // Used to 
//     let finalResult = false // Used to return final result

//     for (let i = 0; i < wordDictLen; i++) {
//         if (i === 0) minWordLen = sortedWordDict[i].length
//         if (sortedWordDict[i].length < minWordLen) minWordLen = sortedWordDict[i].length
//     }

//     let maxLoops = Math.ceil(s.length / minWordLen)
    
//     function checkNextWord (n) {
//         // Break recursion conditions
//         if ( n === 0) return 
//         console.log(n)

//         // Run main loop for n rounds
//         MainLoop: for (let rounds = 0; rounds < n; rounds++) {
//             // Loop through each word in the dictionary to check if equal to first x characters of that string's length
//             for (let i = 0; i < wordDictLen; i++) {
//                 // If the remaining string's length is equal to the word's length, finalResult is true
//                 if ( sortedWordDict[i] === remainingString.slice(0, sortedWordDict[i].length)) {
//                     if ( sortedWordDict[i].length === remainingString.length) {
//                         finalResult = true
//                         n = 0
//                         return
//                     } else if ( trackingArray.length > 0 && trackingArray[rounds] === remainingString.slice(0, sortedWordDict[i].length)) {
//                         continue // skip word
//                     } else {
//                         // Check if next word is valid.  If so, keep current word and deduct it from the remainingString
//                         let tempRemainingString = remainingString.slice(sortedWordDict[i].length)
//                         for (let k = 0; k < wordDictLen; k++) {
//                             if (sortedWordDict[k] === tempRemainingString.slice(0, sortedWordDict[k].length)) {
//                                 remainingString = remainingString.slice(sortedWordDict[i].length)
//                                 // Add word to tracking array unless a word in that spot exists - then replace it
//                                 if (trackingArray.length <= maxLoops - n) {
//                                     trackingArray.push(sortedWordDict[i]) // add new word to trackingArray
//                                 } else {
//                                     trackingArray.splice(maxLoops - n,1,sortedWordDict[i]) // replace word in trackingArray
//                                 }
//                                 break
//                             }
//                         }
//                     }
//                 } 
//             }   

//             if (rounds === n - 1) {
//                 remainingString = s // Reset string value
//                 checkNextWord(n - 1) // Trigger recursive function 
//             }  
//         }
//     }

//     // Run function
//     checkNextWord(maxLoops)

//     // Return result
//     return finalResult
// }

/*
Runtime 66 ms
Beats 39.53%
Memory 48.6 MB
Beats 5.8%
*/



// ATTEMPT 5: ATTEMPT TO REMOVE REDUNDENT CALCULATIONS AND REORDER CODE

const wordBreak = function(s, wordDict) {
    let remainingString = s // Set remaining string variable
    let wordDictLen = wordDict.length // Calculate length of dictionary array once
    let sortedWordDict = wordDict.sort().reverse() // Reverse order so longest words come first in alphabetical order
    let trackingArray = [] // Tracks words that have already been used and are valid
    let minWordLen = 0 // Used to 
    let finalResult = false // Used to return final result

    for (let i = 0; i < wordDictLen; i++) {
        if (i === 0) minWordLen = sortedWordDict[i].length
        if (sortedWordDict[i].length < minWordLen) minWordLen = sortedWordDict[i].length
    }

    let maxLoops = Math.ceil(s.length / minWordLen)
    
    function checkNextWord (n) {
        // Break recursion conditions
        if ( n === 0) return 

        // Run main loop for n rounds
        MainLoop: for (let rounds = 0; rounds < n; rounds++) {
            // Loop through each word in the dictionary to check if equal to first x characters of that string's length
            for (let i = 0; i < wordDictLen; i++) {
                let currentWord = sortedWordDict[i] 
                let currentWordLength = currentWord.length
                // If the remaining string's length is equal to the word's length, finalResult is true
                if ( currentWord === remainingString.slice(0, currentWordLength)) {
                    if (trackingArray.length > 0 && trackingArray[rounds] === remainingString.slice(0, currentWordLength)) {
                        continue // skip word
                    } else if ( currentWordLength === remainingString.length) {
                        finalResult = true
                        n = 0
                        return
                    } else {
                        // Check if next word is valid.  If so, keep current word and deduct it from the remainingString
                        let tempRemainingString = remainingString.slice(currentWordLength)
                        for (let k = 0; k < wordDictLen; k++) {
                            if (sortedWordDict[k] === tempRemainingString.slice(0, sortedWordDict[k].length)) {
                                remainingString = remainingString.slice(currentWordLength)
                                // Add word to tracking array unless a word in that spot exists - then replace it
                                if (trackingArray.length <= maxLoops - n) {
                                    trackingArray.push(currentWord) // add new word to trackingArray
                                } else {
                                    trackingArray.splice(maxLoops - n,1,currentWord) // replace word in trackingArray
                                }
                                break
                            }
                        }
                    }
                } 
            }   

            if (rounds === n - 1) {
                remainingString = s // Reset string value
                checkNextWord(n - 1) // Trigger recursive function 
            }  
        }
    }

    // Run function
    checkNextWord(maxLoops)

    // Return result
    return finalResult
}

/*
Runtime 59 ms
Beats 67.1%
Memory 48.3 MB
Beats 5.8%
*/


console.log('test1: ' + wordBreak( s1 , wordDict1 )) //TRUE
console.log('test2: ' + wordBreak( s2 , wordDict2 )) //TRUE
console.log('test3: ' + wordBreak( s3 , wordDict3 )) //TRUE
console.log('test4: ' + wordBreak( s4 , wordDict4 )) //FALSE
console.log('test5: ' + wordBreak( s5 , wordDict5 )) //FALSE
console.log('test6: ' + wordBreak( s6 , wordDict6 )) //TRUE
console.log('test7: ' + wordBreak( s7 , wordDict7 )) //TRUE
console.log('test8: ' + wordBreak( s8 , wordDict8 )) //TRUE
console.log('test9: ' + wordBreak( s9 , wordDict9 )) //TRUE
console.log('test10: ' + wordBreak( s10 , wordDict10 )) //TRUE