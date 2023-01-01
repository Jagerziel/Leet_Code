/*
Date Started: 2022.12.31
Language(s): JavaScript
*/

/*
691. Stickers to Spell Word
Hard

We are given n different types of stickers. Each sticker has a lowercase English word on it.

You would like to spell out the given string target by cutting individual letters from your collection of stickers and rearranging them. You can use each sticker more than once if you want, and you have infinite quantities of each sticker.

Return the minimum number of stickers that you need to spell out target. If the task is impossible, return -1.

Note: In all test cases, all words were chosen randomly from the 1000 most common US English words, and target was chosen as a concatenation of two random words.

Example 1:
Input: stickers = ["with","example","science"], target = "thehat"
Output: 3
Explanation:
We can use 2 "with" stickers, and 1 "example" sticker.
After cutting and rearrange the letters of those stickers, we can form the target "thehat".
Also, this is the minimum number of stickers necessary to form the target string.

Example 2:
Input: stickers = ["notice","possible"], target = "basicbasic"
Output: -1
Explanation:
We cannot form the target "basicbasic" from cutting letters from the given stickers.

Constraints:
    n == stickers.length
    1 <= n <= 50
    1 <= stickers[i].length <= 10
    1 <= target.length <= 15
    stickers[i] and target consist of lowercase English letters.
*/

/*
 * @param {string[]} stickers
 * @param {string} target
 * @return {number}
*/

stickers = ["with","example","science"], target = "thehat"

var minStickers = function(stickers, target) {
    let criticalStickers = []
    let letters = {
        a: [], b: [], c: [], d: [], e: [], f: [], g: [], h: [], i: [], j: [], k: [], l: [], m: [], n: [], o: [], p: [], q: [], r: [], s: [], t: [], u: [], v: [], w: [], x: [], y: [], z: []
    }
    for (let i = 0; i < target.length; i++) {
        for (let j = 0; j < stickers.length; j++) {
            for (let k = 0; k < stickers[j].length; k++) {
                if (target[i] === stickers[j][k]) {
                    if (letters[`${target[i]}`].includes(stickers[j]) === false) {
                        letters[`${target[i]}`].push(stickers[j])
                    }

                }
            }
        }
        if (letters[`${target[i]}`].length === 0) return -1
    }
    for (let i = 0; i < target.length; i++) {
        if (letters[`${target[i]}`].length === 1) {
            if (criticalStickers.includes(letters[`${target[i]}`][0]) === false) {
                criticalStickers.push(letters[`${target[i]}`][0])
            }
        }
    }
    let deductor = [...criticalStickers]
    

    console.log(deductor)


};

console.log(minStickers(stickers, target))
