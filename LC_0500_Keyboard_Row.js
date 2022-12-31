/*
Date Started: 2022.12.31
Language(s): JavaScript
*/

/*
500. Keyboard Row
Easy

Given an array of strings words, return the words that can be typed using letters of the alphabet on only one row of American keyboard like the image below.

In the American keyboard:
    the first row consists of the characters "qwertyuiop",
    the second row consists of the characters "asdfghjkl", and
    the third row consists of the characters "zxcvbnm".

Example 1:
Input: words = ["Hello","Alaska","Dad","Peace"]
Output: ["Alaska","Dad"]

Example 2:
Input: words = ["omk"]
Output: []

Example 3:
Input: words = ["adsdf","sfd"]
Output: ["adsdf","sfd"]

Constraints:
    1 <= words.length <= 20
    1 <= words[i].length <= 100
    words[i] consists of English letters (both lowercase and uppercase). 
*/

/*
 * @param {string[]} words
 * @return {string[]}
 */

test1 = ["Hello","Alaska","Dad","Peace"]
test2 = ["omk"]
test3 = ["adsdf","sfd"]
test4 = ["heLLo","axe","XXX"]
test5 = ["abdfs","cccd","a","qwwewm"]
test6 = ["abdfs","cccd"]
console.log(test1[1].length)

var findWords = function(words) {
    //Row Arrays
    let row1 = ["q","w","e","r","t","y","u","i","o","p"]
    let row2 = ["a","s","d","f","g","h","j","k","l"]
    let row3 = ["z","x","c","v","b","n","m"]
    //Iterate through each word in words array
    for (let i = 0; i < words.length; i++) {
        //Define rowChk
        let rowChk = ""
        //Overwrite rowChk with row name of first letter
        for (let j = 1; j <=3; j++) {
            if(eval(`row${j}`).includes(words[i][0].toLowerCase())) {
                rowChk = `row${j}`   
                break
            }
        }
        //Check if subsequent letters in string are in row, if not remove word
        for (let k = 1; k < words[i].length; k++) {
            if (eval(rowChk).includes(words[i][k].toLowerCase()) === false) {
                words.splice(i, 1)
                i--
                break
            }
        }
    }
    //Return result
    return words
};

console.log(findWords(test4))

/*
Runtime 58 ms
Beats 94.97%
Memory 41.6 MB
Beats 92.45%
*/