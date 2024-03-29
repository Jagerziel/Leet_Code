/*
1185. Day of the Week
Easy


Given a date, return the corresponding day of the week for that date.

The input is given as three integers representing the day, month and year respectively.

Return the answer as one of the following values {"Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"}.

 

Example 1:

Input: day = 31, month = 8, year = 2019
Output: "Saturday"

Example 2:

Input: day = 18, month = 7, year = 1999
Output: "Sunday"

Example 3:

Input: day = 15, month = 8, year = 1993
Output: "Sunday"

 

Constraints:

    The given dates are valid dates between the years 1971 and 2100.
*/



/*
* @param {number} day
* @param {number} month
* @param {number} year
* @return {string}
*/


let [day1, month1, year1]= [31, 8, 2019] // Saturday
let [day2, month2, year2]= [18, 7, 1999] // Sunday
let [day3, month3, year3]= [15, 8, 1993] // Sunday
let [day4, month4, year4]= [1, 1, 1971] // Friday
let [day5, month5, year5]= [8, 8, 2023] // Tuesday
let [day6, month6, year6]= [1, 1, 1972] // Saturday
let [day7, month7, year7]= [29, 2, 2016] // Monday


// ATTEMPT 1: USING DATE() FUNCTION IN JS

// var dayOfTheWeek = function(day, month, year) {
//     const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
//     const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]

//     const date = new Date(`${months[month - 1]} ${day}, ${year}`)

//     return days[date.getDay()]
// };

/*
Runtime 59 ms
Beats 47.2%
Memory 42.4 MB
Beats 54.30%
*/


// ATTEMPT 2: CODED MANUALLY
var dayOfTheWeek = function(day, month, year) {
    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
    const months = [31, 59, 90, 120, 151, 181, 212, 243, 273, 304, 334]
    let startingDay = 3
    let yearMod = year - (1969) 
    let leapYearMod = Math.floor((year - (1969)) / 4) 
    let monthMod = month > 1 ? months[month - 2] : 0
    let dayMod = day - 1
    let leapYearAdjReq = year % 4 === 0 ? leapYearAdj(year, month) : 0
    let totalMod = 
        startingDay + 
        yearMod + 
        leapYearMod +
        leapYearAdjReq +
        monthMod + 
        dayMod

    function leapYearAdj (year , month) {
        if (year === 2100) return 0
        if (month > 2) return 1
        return 0
    }

    return days[totalMod % 7]
};

/*
Runtime 46 ms
Beats 93.38%
Memory 42 MB
Beats 90.7%
*/

// ATTEMPT 3: CODED MANUALLY - CONSOLIDATED
// var dayOfTheWeek = function(day, month, year) {
//     const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
//     const months = [31, 59, 90, 120, 151, 181, 212, 243, 273, 304, 334]

//     let totalMod = 
//         2 + // starting day 
//         (year - 1969) + // year modifier
//         Math.floor((year - (1969)) / 4) + // leap year modifier
//         (year % 4 === 0 ? leapYearAdj(year, month) : 0) + // leap year adjustment
//         (month > 1 ? months[month - 2] : 0) + // month modifier
//         (day) // day modifier

//     function leapYearAdj (year , month) {
//         if (year === 2100) return 0
//         if (month > 2) return 1
//         return 0
//     }

//     return days[totalMod % 7]
// };

/*
Runtime 55 ms
Beats 70.20%
Memory 41.3 MB
Beats 98.1%
*/


console.log(dayOfTheWeek(day1, month1, year1))
console.log(dayOfTheWeek(day2, month2, year2))
console.log(dayOfTheWeek(day3, month3, year3))
console.log(dayOfTheWeek(day4, month4, year4))
console.log(dayOfTheWeek(day5, month5, year5))
console.log(dayOfTheWeek(day6, month6, year6))
console.log(dayOfTheWeek(day7, month7, year7))

