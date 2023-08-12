/*
1450. Number of Students Doing Homework at a Given Time
Easy

Given two integer arrays startTime and endTime and given an integer queryTime.

The ith student started doing their homework at the time startTime[i] and finished it at time endTime[i].

Return the number of students doing their homework at time queryTime. More formally, return the number of students where queryTime lays in the interval [startTime[i], endTime[i]] inclusive.

 

Example 1:
Input: startTime = [1,2,3], endTime = [3,2,7], queryTime = 4
Output: 1
Explanation: We have 3 students where:
The first student started doing homework at time 1 and finished at time 3 and wasn't doing anything at time 4.
The second student started doing homework at time 2 and finished at time 2 and also wasn't doing anything at time 4.
The third student started doing homework at time 3 and finished at time 7 and was the only student doing homework at time 4.

Example 2:
Input: startTime = [4], endTime = [4], queryTime = 4
Output: 1
Explanation: The only student was doing their homework at the queryTime.

Constraints:

    startTime.length == endTime.length
    1 <= startTime.length <= 100
    1 <= startTime[i] <= endTime[i] <= 1000
    1 <= queryTime <= 100
*/


/*
 * @param {number[]} startTime
 * @param {number[]} endTime
 * @param {number} queryTime
 * @return {number}
 */

let [startTime01 , endtime01, queryTime01] = [[1,2,3], [3,2,7], 4]


var busyStudent = function(startTime, endTime, queryTime) {
    // Track Student Count
    let busyStudentCt = 0
    // Loop through each student and check which students are busy during the query time by checking upper and lower bounds
    for (let i = 0; i < startTime.length; i++) {
        if (startTime[i] <= queryTime && endTime[i] >= queryTime) busyStudentCt++
    }
    // Return result
    return busyStudentCt
};

/*
Runtime 47 ms
Beats 84.57%
Memory 42 MB
Beats 40.43%
*/


console.log(busyStudent(startTime01, endtime01, queryTime01))