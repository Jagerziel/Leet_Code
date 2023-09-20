/*
135. Candy
Hard

There are n children standing in a line. Each child is assigned a rating value given in the integer array ratings.

You are giving candies to these children subjected to the following requirements:

    Each child must have at least one candy.
    Children with a higher rating get more candies than their neighbors.

Return the minimum number of candies you need to have to distribute the candies to the children.

Example 1:
Input: ratings = [1,0,2]
Output: 5
Explanation: You can allocate to the first, second and third child with 2, 1, 2 candies respectively.

Example 2:
Input: ratings = [1,2,2]
Output: 4
Explanation: You can allocate to the first, second and third child with 1, 2, 1 candies respectively.
The third child gets 1 candy because it satisfies the above two conditions.

Constraints:
    n == ratings.length
    1 <= n <= 2 * 104
    0 <= ratings[i] <= 2 * 104
*/

/**
 * @param {number[]} ratings
 * @return {number}
*/

let ratings01 = [1,0,2] // 5
let ratings02 = [1,2,2] // 4
let ratings03 = [6,7,1,5,4,3,3,3,2,1,2,3,5,4,4,1,2] //32
let ratings04 = [1,3,2,2,1] // 7
let ratings05 = [1,2,3,1,0] // 9
let ratings06 = [29,51,87,87,72,12] // 12
let ratings07 = [1,2,3] // 6
let ratings08 = [1,2,3,5,4,3,2,1,4,3,2,1,3,2,1,1,2,3,4] //47
let ratings09 = [3,2,1,1,4,3,3] // 11
let ratings10 = [1,2,4,4,3] // 9
let ratings11 = [370,28,37,15,379,458,342,346,328,257,81,400,426,461,349,362,315,410,427,458,264,322,326,350,369,383,184,343,402,274,184,124,154,73,491,33,31,333,379,212,91,313,112,369,274,461,83,441,223,362,399,339,185,77,189,406,312,373,249,66,147,433,191,153,358,182,187,242,368,418,454,311,231,418,180,358,379,115,151,454,478,403,293,163,480,482,69,145,207,318,63,207,103,254,360,313,289,399,55,9,318,361,320,401,279,352,111,10,319,263,464,297,18,109,460,350,91,381,495,151,51,59,358,6,165,218,320,306,118,375,315,288,89,487,41,368,191,5,379,11,120,195,308,138,305,121,488,248,2,336,399,406,395,257,412,412,328,232,71,446,460,238,86,49,226,127,417,269,132,148,280,104,344,441,242,1,414,231,101,416,419,1,174,314,110,87,78,438,319,149,236,279,388,322,328,466,302,98,235,286,246,368,391,442,161,133,295,75,216,397,343,135,250,18,301,360,105,232,299,424,381,35,56,121,210,384,439,12,482,175,298,81,395,41,23,408,175,171,483,243,68,178,231,318,48,32,178,153,116,329,430,498,217,338,471,279,222,411,291,57,438,441,490,185,483,365,93,10,36,428,105,104,106,336,274,155,221,305,160,337,134,442,335,203,280,159,482,355,70,125,412,360,67,254,45,402,119,138,412,156,66,17,112,24,206,387,179,427,192,192,264,178,134,452,382,415,111,216,270,33,342,34,393,261,288,290,163,407,428,427,63,346,444,176,370,2,415,402,429,107,94,194,285,80,146,19,495,109,236,117,494,78,151,387,191,439,29,354,199,457,281,114,155,77,290,25,80,57,279,361,164,225,55,302,306,53,321,153,14,57,271,8,487,422,247,178,214,276,384,413,233,17,27,240,95,170,118,27,227,397,388,244,475,296,46,281,201,367,434,216,277,57,224,264,332,472,295,398,248,179,311,334,197,190,74,144,212,192,23,292,442,263,388,417,411,434,50,113,153,336,329,430,394,53,47,226,377,194,124,126,225,287,312,274,329,238,418,394,283,293,186,225,409,426,494,320,360,44,433,365,380,262,148,126,316,47,204,45,241,180,23,466,467,335,241,149,426,11,43,209,157,81,286,66,7,280,386,219,176,320] //1050

// Attempt 1: Establish a mapping to determine where the peaks and lows are along with an associated value for count in-between.  Then loop through and total with the value equaling the associated value or 1 for min, or max (going out in both directions) plus 1.

// var candy = function(ratings) {
//     if (ratings.length === 2) {
//         if (ratings[0] === ratings[1]) return 2
//         return 3
//     }
//     let minMax = []
//     if (ratings[0] > ratings[1]) {
//         minMax.push("max")
//     } else {
//         minMax.push("min")
//     }
//     let candies = 0
//     let ct = 1
//     for (let i = 1; i < ratings.length ; i++) {
//         if (minMax[i - 1] === "min") {
//             if (ratings[i] > ratings[i + 1]) {
//                 ct = 1
//                 minMax.push("max")
//             } else if (ratings[i] === ratings[i + 1]){
//                 if (ratings[i] > ratings[i - 1]) {
//                     ct = 1
//                     minMax.push('max')
//                 } else {
//                     ct = 1
//                     minMax.push('min')
//                 }
//             } else {
//                 if (ratings[i] === ratings[i - 1]) {
//                     ct = 1
//                     minMax.push('min')
//                 } else {
//                     ct++
//                     minMax.push(ct)
//                 }
//             }
//         } else if (minMax[i - 1] === "max") {
//             if (ratings[i] < ratings[i + 1]) {
//                 ct = 1
//                 minMax.push("min")
//             } else if (ratings[i] === ratings[i + 1]){
//                 ct = 1
//                 minMax.push('min')
//             } else {
//                 if (ratings[i] === ratings[i - 1]) {
//                     ct = 1
//                     minMax.push('max')
//                 } else {
//                     ct++
//                     minMax.push(ct)
//                 }
//             }
//         } else {
//             if (ratings[i] > ratings[i - 1]) {
//                 if (ratings[i] < ratings[i + 1]) {
//                     ct++
//                     minMax.push(ct)
//                 } else if (ratings[i] > ratings[i + 1]) {
//                     ct = 1
//                     minMax.push('max')
//                 } else {
//                     ct = 1
//                     minMax.push('max')
//                 }
//             } else if (ratings[i] < ratings[i - 1]) {
//                 if (ratings[i] > ratings[i + 1]) {
//                     ct++
//                     minMax.push(ct)
//                 } else if (ratings[i] < ratings[i + 1]) {
//                     ct = 1
//                     minMax.push('min')
//                 } else {
//                     ct = 1
//                     minMax.push('min')
//                 }
//             } else if (ratings[i] === ratings[i - 1]) {
//                 if (ratings[i] > ratings[i + 1]) {
//                     ct = 1
//                     minMax.push('max')
//                 } else if (ratings[i] < ratings[i + 1]) {
//                     ct = 1
//                     minMax.push('min')
//                 } else {
//                     ct = 1
//                     minMax.push('min')
//                 }
//             }
//         }
//     }
//     if (ratings[ratings.length - 1] === ratings.length - 2) {
//         minMax[minMax.length - 1] = "min"
//     } else if (minMax[minMax.length - 2] === "max") {
//         minMax[minMax.length - 1] = 'min'
//     } 
//     for (let i = 0; i < minMax.length; i++) {
//         if (minMax[i] === 'max') {
//             if (minMax[i - 1] === 'min' && minMax[i + 1] === 'min') {
//                 candies += 2
//             } else if (minMax[i - 1] === 'max') {
//                 if (minMax[i + 1] === 'min') {
//                     candies += 2
//                 } else {
//                     for (let j = i + 1; j < minMax.length; j++) {
//                         if (isNaN(minMax[j])) {
//                             candies += minMax[j - 1] + 1
//                             break
//                         }
//                     }
//                 } 
//             } else if (minMax[i + 1] === 'min') {
//                 if (i === 0) candies += 2
//                 else {
//                     candies += minMax[i - 1] + 1
//                 }
//             } else if (minMax[i - 1] === 'min') {
//                 if (minMax[i + 1] === 'max') {
//                     candies += 2
//                 } else {
//                     for (let j = i + 1; j < minMax.length; j++) {
//                         if (isNaN(minMax[j])) {
//                             candies += minMax[j - 1] + 1
//                             break
//                         }
//                     }
//                 }
//             } else {
//                 let currMax = isNaN(minMax[i - 1]) ? 0 : minMax[i - 1]
//                 for (let j = i + 1; j < minMax.length; j++) {
//                     if (isNaN(minMax[j])) {
//                         if (minMax[j - 1] > currMax) {
//                             currMax = minMax[j - 1]
//                         }
//                         candies += currMax + 1
//                         break
//                     }
//                 }
//             }
//         } else if (minMax[i] === 'min') {
//             candies += 1
//         } else {
//             candies += minMax[i]
//         }
//     }
//     if (minMax[minMax.length - 1] === 'max') candies += minMax[minMax.length - 2] + 1
//     return candies
// };

/*
Runtime 82 ms
Beats 17.86%
Memory 48.1 MB
Beats 9.33%
*/

// Attempt 2: Clean up length value calculations

var candy = function(ratings) {
    const len = ratings.length
    if (len === 2) {
        if (ratings[0] === ratings[1]) return 2
        return 3
    }
    let minMax = []
    let candies = 0
    if (ratings[0] > ratings[1]) {
        minMax.push("max")
    } else {
        minMax.push("min")
    }
    let ct = 1
    for (let i = 1; i < len ; i++) {
        if (minMax[i - 1] === "min") {
            if (ratings[i] > ratings[i + 1]) {
                ct = 1
                minMax.push("max")
            } else if (ratings[i] === ratings[i + 1]){
                if (ratings[i] > ratings[i - 1]) {
                    ct = 1
                    minMax.push('max')
                } else {
                    ct = 1

                    minMax.push('min')
                }
            } else {
                if (ratings[i] === ratings[i - 1]) {
                    ct = 1

                    minMax.push('min')
                } else {
                    ct++
                    minMax.push(ct)
                }
            }
        } else if (minMax[i - 1] === "max") {
            if (ratings[i] < ratings[i + 1]) {
                ct = 1
                minMax.push("min")
            } else if (ratings[i] === ratings[i + 1]){
                ct = 1
                minMax.push('min')
            } else {
                if (ratings[i] === ratings[i - 1]) {
                    ct = 1
                    minMax.push('max')
                } else {
                    ct++
                    minMax.push(ct)
                }
            }
        } else {
            if (ratings[i] > ratings[i - 1]) {
                if (ratings[i] < ratings[i + 1]) {
                    ct++
                    minMax.push(ct)
                } else if (ratings[i] > ratings[i + 1]) {
                    ct = 1
                    minMax.push('max')
                } else {
                    ct = 1
                    minMax.push('max')
                }
            } else if (ratings[i] < ratings[i - 1]) {
                if (ratings[i] > ratings[i + 1]) {
                    ct++
                    minMax.push(ct)
                } else if (ratings[i] < ratings[i + 1]) {
                    ct = 1
                    minMax.push('min')
                } else {
                    ct = 1
                    minMax.push('min')
                }
            } else if (ratings[i] === ratings[i - 1]) {
                if (ratings[i] > ratings[i + 1]) {
                    ct = 1
                    minMax.push('max')
                } else if (ratings[i] < ratings[i + 1]) {
                    ct = 1
                    minMax.push('min')
                } else {
                    ct = 1
                    minMax.push('min')
                }
            }
        }
    }
    if (ratings[len - 1] === len - 2) {
        minMax[len - 1] = "min"
    } else if (minMax[len - 2] === "max") {
        minMax[len - 1] = 'min'
    } 
    for (let i = 0; i < len; i++) {
        if (minMax[i] === 'max') {
            if (minMax[i - 1] === 'min' && minMax[i + 1] === 'min') {
                candies += 2
            } else if (minMax[i - 1] === 'max') {
                if (minMax[i + 1] === 'min') {
                    candies += 2
                } else {
                    for (let j = i + 1; j < len; j++) {
                        if (isNaN(minMax[j])) {
                            candies += minMax[j - 1] + 1
                            break
                        }
                    }
                } 
            } else if (minMax[i + 1] === 'min') {
                if (i === 0) candies += 2
                else {
                    candies += minMax[i - 1] + 1
                }
            } else if (minMax[i - 1] === 'min') {
                if (minMax[i + 1] === 'max') {
                    candies += 2
                } else {
                    for (let j = i + 1; j < len; j++) {
                        if (isNaN(minMax[j])) {
                            candies += minMax[j - 1] + 1
                            break
                        }
                    }
                }
            } else {
                let currMax = isNaN(minMax[i - 1]) ? 0 : minMax[i - 1]
                for (let j = i + 1; j < len; j++) {
                    if (isNaN(minMax[j])) {
                        if (minMax[j - 1] > currMax) {
                            currMax = minMax[j - 1]
                        }
                        candies += currMax + 1
                        break
                    }
                }
            }
        } else if (minMax[i] === 'min') {
            candies += 1
        } else {
            candies += minMax[i]
        }
    }
    if (minMax[len - 1] === 'max') candies += minMax[len - 2] + 1
    return candies
};

/*
Runtime 63 ms
Beats 61.23%
Memory 47.6 MB
Beats 10.48%
*/


console.log('test01: ' + candy(ratings01))
console.log('test02: ' + candy(ratings02))
console.log('test03: ' + candy(ratings03))
console.log('test04: ' + candy(ratings04))
console.log('test05: ' + candy(ratings05))
console.log('test06: ' + candy(ratings06))
console.log('test07: ' + candy(ratings07))
console.log('test08: ' + candy(ratings08))
console.log('test09: ' + candy(ratings09))
console.log('test10: ' + candy(ratings10))
console.log('test11: ' + candy(ratings11))