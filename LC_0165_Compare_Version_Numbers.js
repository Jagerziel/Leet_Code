/*
165. Compare Version Numbers
Medium

Given two version numbers, version1 and version2, compare them.

Version numbers consist of one or more revisions joined by a dot '.'. Each revision consists of digits and may contain leading zeros. Every revision contains at least one character. Revisions are 0-indexed from left to right, with the leftmost revision being revision 0, the next revision being revision 1, and so on. For example 2.5.33 and 0.1 are valid version numbers.

To compare version numbers, compare their revisions in left-to-right order. Revisions are compared using their integer value ignoring any leading zeros. This means that revisions 1 and 001 are considered equal. If a version number does not specify a revision at an index, then treat the revision as 0. For example, version 1.0 is less than version 1.1 because their revision 0s are the same, but their revision 1s are 0 and 1 respectively, and 0 < 1.

Return the following:
    If version1 < version2, return -1.
    If version1 > version2, return 1.
    Otherwise, return 0.

Example 1:
Input: version1 = "1.01", version2 = "1.001"
Output: 0
Explanation: Ignoring leading zeroes, both "01" and "001" represent the same integer "1".

Example 2:
Input: version1 = "1.0", version2 = "1.0.0"
Output: 0
Explanation: version1 does not specify revision 2, which means it is treated as "0".

Example 3:
Input: version1 = "0.1", version2 = "1.1"
Output: -1
Explanation: version1's revision 0 is "0", while version2's revision 0 is "1". 0 < 1, so version1 < version2.

Constraints:

    1 <= version1.length, version2.length <= 500
    version1 and version2 only contain digits and '.'.
    version1 and version2 are valid version numbers.
    All the given revisions in version1 and version2 can be stored in a 32-bit integer.


*/

/*
 * @param {string} version1
 * @param {string} version2
 * @return {number}
 */

// let version1 = "1.01", version2 = "1.001" // 0
let version1 = "1.0", version2 = "1.0.0" // 0
// let version1 = "0.1", version2 = "1.1" // - 1
// let version1 = "1.01", version2 = "1.001.000.00.00.1" // 0



var compareVersion = function(version1, version2) {
    // Split String into array
    let v1 = version1.split('.')
    let v2 = version2.split('.')
    // Store Length
    let v1Len = v1.length
    let v2Len = v2.length
    // Store the version, min and max length, and the final result if one array is longer
    const versionComp = {
        maxVersion: v1Len <= v2Len ? "v2" : "v1",
        minLen: v1Len > v2Len ? v2Len : v1Len,
        maxLen: v1Len <= v2Len ? v2Len : v1Len,
        maxResult: v1Len <= v2Len ? -1 : 1
    }
    // Compare both arrays returning result at any point if not equal
    for (let i = 0; i < versionComp.minLen; i++) {
        if (parseInt(v1[i]) > parseInt(v2[i])) return 1
        if (parseInt(v1[i]) < parseInt(v2[i])) return -1
    }
    // Check if two arrays are equal
    if (v1Len === v2Len) return 0
    // Loop through remainder of longer array and return result
    for (let i = versionComp.minLen; i < versionComp.maxLen; i++) {
        if (parseInt(eval(`${versionComp.maxVersion}[${i}]`)) > 0) return versionComp.maxResult
    }
    // If prior loop completes, return 0
    return 0
};

console.log(compareVersion(version1, version2))

/*
Runtime 44 ms
Beats 93.30%
Memory 41.8 MB
Beats 52.58%
*/