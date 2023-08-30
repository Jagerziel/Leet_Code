/*
1189. Maximum Number of Balloons
Easy

Given a string text, you want to use the characters of text to form as many instances of the word "balloon" as possible.

You can use each character in text at most once. Return the maximum number of instances that can be formed.

 

Example 1:
Input: text = "nlaebolko"
Output: 1

Example 2:
Input: text = "loonbalxballpoon"
Output: 2

Example 3:
Input: text = "leetcode"
Output: 0

Constraints:
    1 <= text.length <= 104
    text consists of lower case English letters only.
*/

let test1 = "nlaebolko"
let test2 = "loonbalxballpoon"
let test3 = "leetcode"
let test4 = "mbetypbpefxvviadqaodrbjeoacfomepmzymiudltgnvnpbowwmjgpzzhtiismearuwocsgbiimiqqzaozgeizikrlxmupfzjzmlfttqqbpfblqfkecsdfbsceqjhubfxksivrfwvukapxmuciybfhzlmpeamdxziptxregymqtmgcsujmugissgnlbhxbcxxeoumcqyulvahuianbaaxgzrtmshjguqdaxvxndzoqvwmcjfhpevavnrciqbymnlylbrfkkiceienoarfrzzxtuaqapaeqeqolozadmtgjyhfqzpuaskjuawxqkdqyjqcmbxtvshzrquvegcuyuckznspmrxvqdassidcmrajedsnuuumfwqzvasljlyvfefktiqgvzvdzojtjegsyhbepdkuwvgrfscezvswywmdavpxlekbrlkfnbyvlobazmvgulxrfdranuhomkrlpbfeagfxxxuhjuqhbkhznixquxrxngwimdxdhqbdaouitsvcdmbwxbbaomkgxsqwnexbjjyhtxvkjfqkrrxjghvzqsattubphryqxxdyjkihfnzvjhohnhdlfwoqiwtmwzfgcyhyqtcketvgnbchcxvnhcsoosirfqgdgcsitegzlxdfijzmxnvhrulmgvoqfpzesootscnxenokmmozmoxpaverydbsnimwacjqhrtxkqtvghjyushoctxphxzztukgmnoeycqaeukymvwxcsyvvctflqjhtcvjtxncuvhkptkjnzaetwbzkwnseovewuhpkaxiphdicgacszzdturzgjkzwgkmzzavykancvvzaafgzjhcyicorrblmhsnnkhfkujttbkuuedhwguuaapojmnjdfytdhrepjwcddzsoeutlbbljlikghxefgbqenwamanikmynjcupqpdjnhldaixwygcvsgdkzszmsptqqnroflgozblygtiyaxudwmooiviqcosjfksnevultrf"
let test5 = "loonbalxballpoonballoo"
/*
 * @param {string} text
 * @return {number}
 */

// ATTEMPT 1: TRACK COUNTS AND DIVIDE BY NUM OF LETTERS IN BALLOON
var maxNumberOfBalloons = function(text) {
    let letters = {
        a: 0, b: 0, c: 0, d: 0, e: 0, f: 0, g: 0, h: 0, i: 0, j: 0, k: 0, l: 0, m: 0, n: 0, o: 0, p: 0, q: 0, r: 0, s: 0, t: 0, u: 0, v: 0, w: 0, x: 0, y: 0, z: 0
    }

    for (let i of text) {
        letters[i] += 1
    }

    let chk = ["b", "a", "o", "n"]
    let chk2 = ["l", "o"]
    let result = text.length
    for (let i of chk) {
        if (letters[i] < result) result = letters[i]
    }

    for (let i of chk2) {
        if (Math.trunc(letters[i] / 2) < result) result = Math.trunc(letters[i] / 2)
    }
    return result
};

/*
Runtime 63 ms
Beats 56.79%
Memory 45.1 MB
Beats 8.28%
*/

// ATTEMPT 2: REMOVE ERROR WITH DOUBLE TRACKING 'O', remove FOR Loop

var maxNumberOfBalloons = function(text) {
    // Define Letters to Track
    let letters = {
        a: 0, b: 0, c: 0, d: 0, e: 0, f: 0, g: 0, h: 0, i: 0, j: 0, k: 0, l: 0, m: 0, n: 0, o: 0, p: 0, q: 0, r: 0, s: 0, t: 0, u: 0, v: 0, w: 0, x: 0, y: 0, z: 0
    }

    // Count instances of each letter
    for (let i of text) {
        letters[i] += 1
    }
    
    // Set starting point for result
    let result = text.length

    // Replace result if the letter count is lower (div by 2 for "l" and "o")
    if (letters["b"] < result) result = letters["b"]
    if (letters["a"] < result) result = letters["a"]
    if (letters["n"] < result) result = letters["n"]
    if (Math.trunc(letters["l"] / 2) < result) result = Math.trunc(letters["l"] / 2)
    if (Math.trunc(letters["o"] / 2) < result) result = Math.trunc(letters["o"] / 2)

    // Return Result
    return result
};

/*
Runtime 55 ms
Beats 85.93%
Memory 43.2 MB
Beats 73.34%
*/

console.log(maxNumberOfBalloons(test5))