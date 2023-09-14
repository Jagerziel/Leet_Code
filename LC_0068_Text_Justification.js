/*
68. Text Justification
Hard

Given an array of strings words and a width maxWidth, format the text such that each line has exactly maxWidth characters and is fully (left and right) justified.

You should pack your words in a greedy approach; that is, pack as many words as you can in each line. Pad extra spaces ' ' when necessary so that each line has exactly maxWidth characters.

Extra spaces between words should be distributed as evenly as possible. If the number of spaces on a line does not divide evenly between words, the empty slots on the left will be assigned more spaces than the slots on the right.

For the last line of text, it should be left-justified, and no extra space is inserted between words.

Note:
    A word is defined as a character sequence consisting of non-space characters only.
    Each word's length is guaranteed to be greater than 0 and not exceed maxWidth.
    The input array words contains at least one word.

Example 1:

Input: words = ["This", "is", "an", "example", "of", "text", "justification."], maxWidth = 16
Output:
[
   "This    is    an",
   "example  of text",
   "justification.  "
]

Example 2:

Input: words = ["What","must","be","acknowledgment","shall","be"], maxWidth = 16
Output:
[
  "What   must   be",
  "acknowledgment  ",
  "shall be        "
]
Explanation: Note that the last line is "shall be    " instead of "shall     be", because the last line must be left-justified instead of fully-justified.
Note that the second line is also left-justified because it contains only one word.

Example 3:

Input: words = ["Science","is","what","we","understand","well","enough","to","explain","to","a","computer.","Art","is","everything","else","we","do"], maxWidth = 20
Output:
[
  "Science  is  what we",
  "understand      well",
  "enough to explain to",
  "a  computer.  Art is",
  "everything  else  we",
  "do                  "
]

Constraints:
    1 <= words.length <= 300
    1 <= words[i].length <= 20
    words[i] consists of only English letters and symbols.
    1 <= maxWidth <= 100
    words[i].length <= maxWidth
*/

/**
 * @param {string[]} words
 * @param {number} maxWidth
 * @return {string[]}
*/

// [ 'This    is    an', 'example of  text' ]

let words01 = ["This", "is", "an", "example", "of", "text", "justification."], 
    maxWidth01 = 16

let words02 = ["What","must","be","acknowledgment","shall","be"], 
    maxWidth02 = 16

let words03 = ["Science","is","what","we","understand","well","enough","to","explain","to","a","computer.","Art","is","everything","else","we","do"], 
    maxWidth03 = 20

let words04 = ["a"], 
    maxWidth04 = 2

let words05 = ["Listen","to","many,","speak","to","a","few."],
    maxWidth05 = 6


// ATTEMPT 1: Combine words to each sentence, fill in additional spaces after

var fullJustify = function(words, maxWidth) {
    let ct = 0
    let wdCt = 0
    let result = []
    let tempSentence = ""
    let space = ' '
    let spaceIdx = []

    for (let i = 0; i < words.length; i++) {
        if (words[i].length + tempSentence.length < maxWidth) {
            tempSentence += ct === 0 ? "" : " " 
            if(ct !== 0) spaceIdx.push(tempSentence.length - 1)
            tempSentence += words[i]
            ct += words[i].length
            wdCt++
        } else {
            if (wdCt === 1) {
                tempSentence += space.repeat(maxWidth - tempSentence.length)
            }
            if (wdCt > 1) {
                let spaces = []
                let remainder = (maxWidth - tempSentence.length) % (wdCt - 1)
                let spaceCt = Math.trunc((maxWidth - tempSentence.length) / (wdCt - 1))
                for (let i = 0; i < wdCt - 1; i++) {
                    let additionalSpace = ""
                    if (remainder > 0) {
                        additionalSpace = ' '
                        remainder--
                    }
                    spaces.push(space.repeat(spaceCt) + additionalSpace)
                }
                for (let j = spaceIdx.length - 1; j >= 0; j--) {
                    tempSentence = tempSentence.slice(0, spaceIdx[j]) + spaces[j] + tempSentence.slice(spaceIdx[j])
                }
            }
            // console.log(tempSentence)
            result.push(tempSentence)
            tempSentence = words[i]
            ct += words[i].length
            wdCt = 1
            spaceIdx = []
        }    
    }
    if (tempSentence.length > 0) {
        tempSentence += space.repeat(maxWidth - tempSentence.length)
        result.push(tempSentence)
    }
    if (result[0].length === 0) result.shift()
    return result
};

/*
Runtime 49 ms
Beats 71.44%
Memory 41.8 MB
Beats 57.48%
*/

// console.log(fullJustify(words01, maxWidth01))
// console.log(fullJustify(words02, maxWidth02))
console.log(fullJustify(words03, maxWidth03))
// console.log(fullJustify(words04, maxWidth04))
console.log(fullJustify(words05, maxWidth05))
