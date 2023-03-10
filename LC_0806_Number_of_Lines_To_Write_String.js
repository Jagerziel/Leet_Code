/*
806. Number of Lines To Write String

You are given a string s of lowercase English letters and an array widths denoting how many pixels wide each lowercase English letter is. Specifically, widths[0] is the width of 'a', widths[1] is the width of 'b', and so on.

You are trying to write s across several lines, where each line is no longer than 100 pixels. Starting at the beginning of s, write as many letters on the first line such that the total width does not exceed 100 pixels. Then, from where you stopped in s, continue writing as many letters as you can on the second line. Continue this process until you have written all of s.

Return an array result of length 2 where:
    result[0] is the total number of lines.
    result[1] is the width of the last line in pixels.

Example 1:
Input: widths = [10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10], s = "abcdefghijklmnopqrstuvwxyz"
Output: [3,60]
Explanation: You can write s as follows:
abcdefghij  // 100 pixels wide
klmnopqrst  // 100 pixels wide
uvwxyz      // 60 pixels wide
There are a total of 3 lines, and the last line is 60 pixels wide.

Example 2:
Input: widths = [4,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10], s = "bbbcccdddaaa"
Output: [2,4]
Explanation: You can write s as follows:
bbbcccdddaa  // 98 pixels wide
a            // 4 pixels wide
There are a total of 2 lines, and the last line is 4 pixels wide.

Constraints:

    widths.length == 26
    2 <= widths[i] <= 10
    1 <= s.length <= 1000
    s contains only lowercase English letters.
*/

/*
 * @param {number[]} widths
 * @param {string} s
 * @return {number[]}
 */

let widths1 = [10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10]
let s1 = "abcdefghijklmnopqrstuvwxyz"
let widths2 = [4,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10]
let s2 = "bbbcccdddaaa"

var numberOfLines = function(widths, s) {
    //Check for s length of 0
    if (s.length === 0) {
        return [0,0]
    }
    //Define object to direct where to pull value from in widths array
    let pixels = {
        a: 0, b: 1, c: 2, d: 3, e: 4, f: 5, g: 6, h: 7, i: 8, j: 9, k: 10, l: 11, m: 12, n: 13, o: 14, p: 15, q: 16, r: 17, s: 18, t: 19, u: 20, v: 21, w: 22, x: 23, y: 24, z: 25
    }
    //Count rows and remainder
    let rows = 1
    let remainder = 0
    //Iterate through letters in s resetting the remainder and adding a row 
    for (let i = 0; i < s.length; i++) {
        if (widths[pixels[s[i]]] + remainder <= 100) {
            remainder += widths[pixels[s[i]]]
        } else {
            rows += 1
            remainder = widths[pixels[s[i]]]
        }
    }
    //Return result
    return [rows,remainder]
};

console.log(numberOfLines(widths2, s2))

/*
Runtime 59 ms
Beats 89.47%
Memory 43.4 MB
Beats 7.89%
*/
