/*
Date Started: 2022.12.30
Language(s): JavaScript
*/

/*
804. Unique Morse Code Words
Easy

International Morse Code defines a standard encoding where each letter is mapped to a series of dots and dashes, as follows:

    'a' maps to ".-",
    'b' maps to "-...",
    'c' maps to "-.-.", and so on.

For convenience, the full table for the 26 letters of the English alphabet is given below:

[".-","-...","-.-.","-..",".","..-.","--.","....","..",".---","-.-",".-..","--","-.","---",".--.","--.-",".-.","...","-","..-","...-",".--","-..-","-.--","--.."]

Given an array of strings words where each word can be written as a concatenation of the Morse code of each letter.

    For example, "cab" can be written as "-.-..--...", which is the concatenation of "-.-.", ".-", and "-...". We will call such a concatenation the transformation of a word.

Return the number of different transformations among all words we have.

Example 1:
Input: words = ["gin","zen","gig","msg"]
Output: 2
Explanation: The transformation of each word is:
"gin" -> "--...-."
"zen" -> "--...-."
"gig" -> "--...--."
"msg" -> "--...--."
There are 2 different transformations: "--...-." and "--...--.".

Example 2:
Input: words = ["a"]
Output: 1

Constraints:
    1 <= words.length <= 100
    1 <= words[i].length <= 12
    words[i] consists of lowercase English letters.
*/

/*
 * @param {string[]} words
 * @return {number}
 */

test1 = ["gin","zen","gig","msg"]
test2 = ["hello", "gingin", "zenzen", "hi"]

var uniqueMorseRepresentations = function(words) {
    //Morse Code Array
    let morseCode = [".-","-...","-.-.","-..",".","..-.","--.","....","..",".---","-.-",".-..","--","-.","---",".--.","--.-",".-.","...","-","..-","...-",".--","-..-","-.--","--.."]
    //Map Letters to index numbers
    let letters = { a: 0, b: 1, c: 2, d: 3, e: 4, f: 5, g: 6, h: 7, i: 8, j: 9, k: 10, l: 11, m: 12, n: 13, o: 14, p: 15, q: 16, r: 17, s: 18, t: 19, u: 20, v: 21, w: 22, x: 23, y: 24, z: 25 }
    //Iterate through each item in words
    for (let i = 0; i < words.length; i++) {
        let replaceWord = ""
        //Replace each letter in that word to its Morse Code equalavent
        for (let j = 0; j < words[i].length; j++) {
            replaceWord += morseCode[letters[words[i][j]]]
        }
        //Replace original word with Morse Code equavalent 
        words.splice(i, 1, replaceWord)
    }
    //Set unique counter
    let uniqueCt = 0
    //Sort array (so all like items are next to each other)
    words = words.sort()
    //Check if the item is the same as the next item in the array - if not, add 1 to unique counter
    for (let i = 0; i < words.length; i++) {
        if (words[i] !== words[i + 1]) {
            uniqueCt++
        }
    }
    //Return result
    return uniqueCt
};

console.log(uniqueMorseRepresentations(test2))

/*
Runtime 81 ms
Beats 67.73%
Memory 42.6 MB
Beats 93.11%
*/
