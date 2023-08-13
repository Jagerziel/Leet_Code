/*
You are playing the Bulls and Cows game with your friend.

You write down a secret number and ask your friend to guess what the number is. When your friend makes a guess, you provide a hint with the following info:

    The number of "bulls", which are digits in the guess that are in the correct position.
    The number of "cows", which are digits in the guess that are in your secret number but are located in the wrong position. Specifically, the non-bull digits in the guess that could be rearranged such that they become bulls.

Given the secret number secret and your friend's guess guess, return the hint for your friend's guess.

The hint should be formatted as "xAyB", where x is the number of bulls and y is the number of cows. Note that both secret and guess may contain duplicate digits.

 

Example 1:

Input: secret = "1807", guess = "7810"
Output: "1A3B"
Explanation: Bulls are connected with a '|' and cows are underlined:
"1807"
  |
"7810"

Example 2:

Input: secret = "1123", guess = "0111"
Output: "1A1B"
Explanation: Bulls are connected with a '|' and cows are underlined:
"1123"        "1123"
  |      or     |
"0111"        "0111"
Note that only one of the two unmatched 1s is counted as a cow since the non-bull digits can only be rearranged to allow one 1 to be a bull.

 

Constraints:

    1 <= secret.length, guess.length <= 1000
    secret.length == guess.length
    secret and guess consist of digits only.

*/

/*
 * @param {string} secret
 * @param {string} guess
 * @return {string}
 */

let secret01 = "1807", guess01 = "7810" // 1/3
let secret02 = "1123", guess02 = "0111" // 1/1
let secret03 = "1123919", guess03 = "0111492" // 1/4


var getHint = function(secret, guess) {
    let bulls = 0 // Track Bulls
    let secretLen = secret.length // Store length of secret
    let arrayLog = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0] // Array log for counting 0-9
    for (let i = 0; i < secretLen; i++) {
        // If secret at index i == the guess at index i, add 1 to bulls
        if (secret[i] === guess[i]) {
            bulls ++
        // Otherwise, store the numbers for secret and guess at the appropriate section of the array
        } else {
            arrayLog[parseInt(secret[i])]++
            arrayLog[parseInt(guess[i])]--
        }
    }
    let cowMiss = 0 // Total cow miss count (i.e. total of negative numbers)
    for (let i = 0; i < arrayLog.length; i++) {
        if (arrayLog[i] < 0) {
            cowMiss += arrayLog[i]
        }
    }
    // Return Result
    // Bulls = bull count; Cows = Length minus bulls, plus the cowMiss count (which is a negative number)
    return `${bulls}A${secretLen - bulls + cowMiss}B`
};

/*
Runtime 48 ms
Beats 99.17%
Memory 42.2 MB
Beats 100%
*/


// console.log(getHint(secret01, guess01))
// console.log(getHint(secret02, guess02))
console.log(getHint(secret03, guess03))
