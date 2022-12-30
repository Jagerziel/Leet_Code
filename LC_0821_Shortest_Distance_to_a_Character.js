/*
Date Started: 2022.12.29
Language(s): JavaScript
*/

/*
821. Shortest Distance to a Character
Easy

Given a string s and a character c that occurs in s, return an array of integers answer where answer.length == s.length and answer[i] is the distance from index i to the closest occurrence of character c in s.

The distance between two indices i and j is abs(i - j), where abs is the absolute value function.

Example 1:
Input: s = "loveleetcode", c = "e"
Output: [3,2,1,0,1,0,0,1,2,2,1,0]
Explanation: The character 'e' appears at indices 3, 5, 6, and 11 (0-indexed).
The closest occurrence of 'e' for index 0 is at index 3, so the distance is abs(0 - 3) = 3.
The closest occurrence of 'e' for index 1 is at index 3, so the distance is abs(1 - 3) = 2.
For index 4, there is a tie between the 'e' at index 3 and the 'e' at index 5, but the distance is still the same: abs(4 - 3) == abs(4 - 5) = 1.
The closest occurrence of 'e' for index 8 is at index 6, so the distance is abs(8 - 6) = 2.

Example 2:
Input: s = "aaab", c = "b"
Output: [3,2,1,0]

 

Constraints:
    1 <= s.length <= 104
    s[i] and c are lowercase English letters.
    It is guaranteed that c occurs at least once in s.
*/

/*
 * @param {string} s
 * @param {character} c
 * @return {number[]}
 */

//TEST 1
s = "loveleetcodesssse", c = "e"

//TEST 2
// s = "aaab", c = "b"

var shortestToChar = function(s, c) {
    //find indexes of target
    let indexes = []
    for(let i = 0; i < s.length; i++) {
        if (s[i] === c) {
            indexes.push(i)
        }
    }
    //Set variable for output
    let output = []
    //set variable for index offset
    let indexPos = 0
    //Loop through word (s)
    for (let i = 0; i < s.length; i++) {
        //Push result for values in the middle (first since it will likely have the most occurrences)
        if (i > indexes[indexPos - 1] && i < indexes[indexPos]) {
            let left = i - indexes[indexPos - 1]
            let right = indexes[indexPos] - i
            if (left > right) {
                output.push(right)
            } else {
                output.push(left)
            }
        //Push result if index equal to index in list, shift index position
        } else if (i === indexes[0 + indexPos]){
            output.push(0)
            indexPos++
        //Push result for chars before target 
        } else if (i < indexes[0]) {
            output.push(indexes[0] - i)
        //Push result for chars after last index target
        } else {
            output.push(i - indexes[indexPos - 1])
        }
    }
    //Return result
    return output
};

console.log(shortestToChar(s, c))

/*
Runtime 69 ms
Beats 95.50%
Memory 44.5 MB
Beats 56.31%
*/
