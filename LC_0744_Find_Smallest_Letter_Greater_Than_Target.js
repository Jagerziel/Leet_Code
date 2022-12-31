/*
Date Started: 2022.12.31
Language(s): JavaScript
*/

/*
744. Find Smallest Letter Greater Than Target
Easy

You are given an array of characters letters that is sorted in non-decreasing order, and a character target. There are at least two different characters in letters.

Return the smallest character in letters that is lexicographically greater than target. If such a character does not exist, return the first character in letters.

Example 1:
Input: letters = ["c","f","j"], target = "a"
Output: "c"
Explanation: The smallest character that is lexicographically greater than 'a' in letters is 'c'.

Example 2:
Input: letters = ["c","f","j"], target = "c"
Output: "f"
Explanation: The smallest character that is lexicographically greater than 'c' in letters is 'f'.

Example 3:
Input: letters = ["x","x","y","y"], target = "z"
Output: "x"
Explanation: There are no characters in letters that is lexicographically greater than 'z' so we return letters[0].

Constraints:
    2 <= letters.length <= 104
    letters[i] is a lowercase English letter.
    letters is sorted in non-decreasing order.
    letters contains at least two different characters.
    target is a lowercase English letter.
*/

/*
 * @param {character[]} letters
 * @param {character} target
 * @return {character}
 */

// letters = ["c","f","f","f","f","j"], target = "d"

letters = ["a","a","a","c","c","c","c","d","e","f","i","j","l","p","s","x","y"], target = "b"

// var nextGreatestLetter = function(letters, target) {
//     //Define letter values
//     let letterValue = {
//             a: 1, b: 2, c: 3, d: 4, e: 5, f: 6, g: 7, h: 8, i: 9, j: 10, k: 11, l: 12, m: 13, n: 14, o: 15, p: 16, q: 17, r: 18, s: 19, t: 20, u: 21, v: 22, w: 23, x: 24, y: 25, z: 26
//     }
//     //Check for letters above or below target and return letters[0]
//     if (letterValue[target] > letterValue[letters[letters.length - 1]] || letterValue[target] < letterValue[letters[0]] || letters[letters.length - 1] === target) return letters[0]
//     //If target is in letters array, return the letter at the 1 + the last index of the target
//     if (letters.includes(target)) {
//         return letters[letters.lastIndexOf(target) + 1]
//     }
//     //Set upper and lower bounds
//     let lowerBound = 0
//     let upperBound = letters.length - 1
//     //Start the search
//     while (true) {
//         //Set midpoint
//         let midpoint = Math.floor((lowerBound + upperBound) / 2)
//         //If the target's value is above the midpoint...
//         if(letterValue[target] > letterValue[letters[midpoint]]) {
//             //Set new lowerBound
//             lowerBound = midpoint
//             //If the letter value at the index one above the midpoint is greater, return result (midpoint + 1)
//             if (letterValue[target] < letterValue[letters[midpoint + 1]]) {
//                 return letters[midpoint + 1]
//             }
//         //If the target's value is below the midpoint...
//         } else {
//             //Set new upperBound
//             upperBound = midpoint
//             //If the letter value at the index one below the midpoint is lower, return result (midpoint)
//             if (letterValue[target] > letterValue[letters[midpoint - 1]]) {
//                 return letters[midpoint]
//             }
//         }
//     }
// };

// console.log(nextGreatestLetter(letters, target))

/*
Runtime 72 ms
Beats 79.13%
Memory 42.3 MB
Beats 98.91%
*/

/*
ATTEMPT 2 TO INCREASE RUNTIME EFFICIENCY
*/

// letters = ["a","a","a","c","c","c","c","d","e","f","i","j","l","p","s","x","y"], target = "c"
letters = ["c","c","c","c","c","f","j"], target = "c"

var nextGreatestLetter = function(letters, target) {
    //Define letter values
    let letterValue = {
            a: 1, b: 2, c: 3, d: 4, e: 5, f: 6, g: 7, h: 8, i: 9, j: 10, k: 11, l: 12, m: 13, n: 14, o: 15, p: 16, q: 17, r: 18, s: 19, t: 20, u: 21, v: 22, w: 23, x: 24, y: 25, z: 26
    }
    //Check for letters above or below target and return letters[0]
    if (letterValue[target] > letterValue[letters[letters.length - 1]] || letterValue[target] < letterValue[letters[0]] || letters[letters.length - 1] === target) return letters[0]
    //Set upper and lower bounds
    let lowerBound = 0
    let upperBound = letters.length - 1
    //Start the search
    while (true) {
        //Set midpoint
        let midpoint = Math.ceil((lowerBound + upperBound) / 2)
        //If the target's value is above the midpoint...
        if(letterValue[target] > letterValue[letters[midpoint]]) {
            //Set new lowerBound
            lowerBound = midpoint
            //If the letter value at the index one above the midpoint is greater, return result (midpoint + 1)
            if (letterValue[target] < letterValue[letters[midpoint + 1]]) {
                return letters[midpoint + 1]
            }
        //If the target's value is below the midpoint...
        } else {
            //Set new upperBound
            upperBound = midpoint
            //If the letter value at the index one below the midpoint is lower, return result (midpoint)
            if (letterValue[target] >= letterValue[letters[midpoint - 1]]) {
                //Avoid returning same letter
                let modifier = 0
                while (letterValue[target] === letterValue[letters[midpoint + modifier]]) {
                modifier++
                }                    
                //Return result
                return letters[midpoint + modifier]
            }
        }
    }
};

console.log(nextGreatestLetter(letters, target))
/*
Runtime 68 ms
Beats 85.5%
Memory 42.2 MB
Beats 98.91%
*/