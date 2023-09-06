/*
824. Goat Latin
Easy
840
1.2K
Companies

You are given a string sentence that consist of words separated by spaces. Each word consists of lowercase and uppercase letters only.

We would like to convert the sentence to "Goat Latin" (a made-up language similar to Pig Latin.) The rules of Goat Latin are as follows:

    If a word begins with a vowel ('a', 'e', 'i', 'o', or 'u'), append "ma" to the end of the word.
        For example, the word "apple" becomes "applema".
    If a word begins with a consonant (i.e., not a vowel), remove the first letter and append it to the end, then add "ma".
        For example, the word "goat" becomes "oatgma".
    Add one letter 'a' to the end of each word per its word index in the sentence, starting with 1.
        For example, the first word gets "a" added to the end, the second word gets "aa" added to the end, and so on.

Return the final sentence representing the conversion from sentence to Goat Latin.

Example 1:

Input: sentence = "I speak Goat Latin"
Output: "Imaa peaksmaaa oatGmaaaa atinLmaaaaa"

Example 2:

Input: sentence = "The quick brown fox jumped over the lazy dog"
Output: "heTmaa uickqmaaa rownbmaaaa oxfmaaaaa umpedjmaaaaaa overmaaaaaaa hetmaaaaaaaa azylmaaaaaaaaa ogdmaaaaaaaaaa"

Constraints:

    1 <= sentence.length <= 150
    sentence consists of English letters and spaces.
    sentence has no leading or trailing spaces.
    All the words in sentence are separated by a single space.
*/


/*
 * @param {string} sentence
 * @return {string}
 */

let sentence01 = "I speak Goat Latin"
let sentence02 = "The quick brown fox jumped over the lazy dog"

var toGoatLatin = function(sentence) {
    let words = sentence.split(" ") // Split sentence into array
    let result = "" // Track and store result
    let vowel = { a: true, e: true, i: true, o: true, u: true, A: true, E: true, I: true, O: true, U:true } // Dictionary of vowels
    let a = 'a' // Allows repeating of 'a' character

    // Loop through each word in the words array
    for (let i = 0; i < words.length; i++) {
        if (vowel[words[i][0]] === true) {
            result += ` ${words[i]}ma${a.repeat(i + 1)}` // Added if the first letter is a vowel
        } else {
            result += ` ${words[i].slice(1)}${words[i].slice(0,1)}ma${a.repeat(i + 1)}` // Added if the first letter is a consonant
        }
    }
    // Return Result
    return result.slice(1)
};

/*
Runtime 46 ms
Beats 88.89%
Memory 42.2 MB
Beats 54.4%
*/


// console.log(toGoatLatin(sentence01))
console.log(toGoatLatin(sentence02))
