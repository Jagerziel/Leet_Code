/*
Date Started: 2022.12.31
Language(s): JavaScript
*/

/*
5. Longest Palindromic Substring
Medium

Given a string s, return the longest
palindromic
substring
in s.

Example 1:
Input: s = "babad"
Output: "bab"
Explanation: "aba" is also a valid answer.

Example 2:
Input: s = "cbbd"
Output: "bb"

Constraints:
    1 <= s.length <= 1000
    s consist of only digits and English letters.
*/

/*
 * @param {string} s
 * @return {string}
 */

const test1 = "abbbabbaccadefedaca" //answer should be "cadefedac"
const test2 = "babad" //answer should be "bab"
const test3 = "cbbd" //answer should be "bb"
const test4 = "bbbbbbbbbbbb" //answer should be "bbbbbbbbbbbb"
const test5 = "aaabba"
const test6 = "cbbbd"
const test7 = "bbbbbabbbbbb" 
const test8 = "bbbbbbbabbbb" 
const test9 = "a"
const test10 = "aaaabbbbbbbbbbccccccccccddddddddddeeeeeeeeeeffffffffffgggggggggghhhhhhhhhhiiiiiiiiiijjjjjjjjjjkkkkkkkkkkllllllllllmmmmmmmmmmnnnnnnnnnnooooooooooppppppppppqqqqqqqqqqrrrrrrrrrrssssssssssttttttttttuuuuuuuuuuvvvvvvvvvvwwwwwwwwwwxxxxxxxxxxyyyyyyyyyyzzzzzzzzzzyyyyyyyyyyxxxxxxxxxxwwwwwwwwwwvvvvvvvvvvuuuuuuuuuuttttttttttssssssssssrrrrrrrrrrqqqqqqqqqqppppppppppoooooooooonnnnnnnnnnmmmmmmmmmmllllllllllkkkkkkkkkkjjjjjjjjjjiiiiiiiiiihhhhhhhhhhggggggggggffffffffffeeeeeeeeeeddddddddddccccccccccbbbbbbbbbbaaaaaaaabbbbbbbbbbccccccccccddddddddddeeeeeeeeeeffffffffffgggggggggghhhhhhhhhhiiiiiiiiiijjjjjjjjjjkkkkkkkkkkllllllllllmmmmmmmmmmnnnnnnnnnnooooooooooppppppppppqqqqqqqqqqrrrrrrrrrrssssssssssttttttttttuuuuuuuuuuvvvvvvvvvvwwwwwwwwwwxxxxxxxxxxyyyyyyyyyyzzzzzzzzzzyyyyyyyyyyxxxxxxxxxxwwwwwwwwwwvvvvvvvvvvuuuuuuuuuuttttttttttssssssssssrrrrrrrrrrqqqqqqqqqqppppppppppoooooooooonnnnnnnnnnmmmmmmmmmmllllllllllkkkkkkkkkkjjjjjjjjjjiiiiiiiiiihhhhhhhhhhggggggggggffffffffffeeeeeeeeeeddddddddddccccccccccbbbbbbbbbbaaaa"

const test11 = "aaaabbbbbbbbbbccccccccccddddddddddeeeeeeeeeeffffffffffgggggggggghhhhhhhhhhiiiiiiiiiijjjjjjjjjjkkkkkkkkkkllllllllllmmmmmmmmmmnnnnnnnnnnooooooooooppppppppppqqqqqqqqqqrrrrrrrrrrssssssssssttttttttttuuuuuuuuuuvvvvvvvvvvwwwwwwwwwwxxxxxxxxxxyyyyyyyyyyzzzzzzzzzzyyyyyyyyyyxxxxxxxxxxwwwwwwwwwwvvvvvvvvvvuuuuuuuuuuttttttttttssssssssssrrrrrrrrrrqqqqqqqqqqppppppppppoooooooooonnnnnnnnnnmmmmmmmmmmllllllllllkkkkkkkkkkjjjjjjjjjjiiiiiiiiiihhhhhhhhhhggggggggggffffffffffeeeeeeeeeeddddddddddccccccccccbbbbbbbbbbaaaaaaaabbbbbbbbbbccccccccccddddddddddeeeeeeeeeeffffffffffgggggggggghhhhhhhhhhiiiiiiiiiijjjjjjjjjjkkkkkkkkkkllllllllllmmmmmmmmmmnnnnnnnnnnooooooooooppppppppppqqqqqqqqqqrrrrrrrrrrssssssssssttttttttttuuuuuuuuuuvvvvvvvvvvwwwwwwwwwwxxxxxxxxxxyyyyyyyyyyzzzzzzzzzzyyyyyyyyyyxxxxxxxxxxwwwwwwwwwwvvvvvvvvvvuuuuuuuuuuttttttttttssssssssssrrrrrrrrrrqqqqqqqqqqppppppppppoooooooooonnnnnnnnnnmmmmmmmmmmllllllllllkkkkkkkkkkjjjjjjjjjjiiiiiiiiiihhhhhhhhhhggggggggggffffffffffeeeeeeeeeeddddddddddccccccccccbbbbbbbbbbaaaa"

console.log(test10 === test11)


var longestPalindrome = function(s) {
    //Set longest palendrome variable
    let longestPal = ""
    //Loop through each time
    for (let i = 0; i < s.length; i++) {
        //Track current palendrome
        let counter = []
        //Move out one iteration to the left and right on each pass
        let left = 1
        let right = 1
        //Start with center 
        counter.push(s[i])
        //Determine Center
        while (s[i] === s[i - left] || s[i] === s[i + right]) {
            if (s[i] === s[i - left]) {
                counter.push(s[i])
                left++
            } else if (s[i] === s[i + right]) {
                counter.push(s[i])
                right++
            } else {
                break
            }
        }
        //Continue check once first 1 or 2 chars are added
        while (true) {
            //Move one iteration to left/right and compare
            //If they are the same...
            if (s[i - left] === s[i + right] && s[i - left] !== undefined && s[i + right] !== undefined) {
                //Add items to array
                counter.unshift(s[i - left])
                counter.push(s[i + right])
                //move iteration one more space on either side
                left++
                right++
                //check if one additional iteration will hit undefined, if so check if this is the longest palendrome and note accordingly
                if ((s[i - left] === undefined || s[i + right] === undefined) && counter.length > longestPal.length) {
                    longestPal = counter.join('')
                    break
                }
            //Otherwise, check if new palendrome length is new longest length and break while loop
            } else {
                if (counter.length > longestPal.length) {
                    longestPal = counter.join('')
                }
                break
            }
        }
    }
    //Return result
    return longestPal
};

console.log(`FINAL OUTPUT: ${longestPalindrome(test4)}`)
console.log(test10.length)

//FIRST RESULT 
/*
Runtime 473 ms
Beats 33.43%
Memory 50.1 MB
Beats 17.98%
*/
//REFACTORED RESULT REMOVING DUPLICATE CODE

/*
Runtime 472 ms
Beats 33.43%
Memory 49.4 MB
Beats 21.82%
*/

//FIXED BUG AND SOMEHOW MADE THIS RUN MUCH WORSE
/*
Runtime 648 ms
Beats 27.95%
Memory 49.3 MB
Beats 22.67%
*/