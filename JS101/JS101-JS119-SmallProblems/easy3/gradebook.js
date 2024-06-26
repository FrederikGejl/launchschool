/*
Instructions: 
Write a function that determines the mean (average) of the three scores passed to it, and returns the letter associated with that grade.

Numerical score letter grade list:

90 <= score <= 100: 'A'
80 <= score < 90: 'B'
70 <= score < 80: 'C'
60 <= score < 70: 'D'
0 <= score < 60: 'F'
Tested values are all between 0 and 100. There is no need to check for negative values or values greater than 100.
Examples: 
getGrade(95, 90, 93);    // "A"
getGrade(50, 50, 95);    // "D"
Input: 

Output: 

Steps: Convert to number
       Calculate median
      Based on median print grade


*/

function getGrade (score1,score2,score3) {

 parseInt(score1) 
 parseInt(score2) 
 parseInt(score3) 

let mean = (score1+score2+score3) / 3

    switch (true) {
        case mean >= 90:
            return 'A';
        case mean >= 80:
            return 'B';
        case mean >= 70:
            return 'C';
        case mean >= 60:
            return 'D';
        default:
            return 'F';
    }


}
console.log(getGrade(50, 50, 95)); 



//LS 
// 
function getGrade(grade1, grade2, grade3) {
  let average = (grade1 + grade2 + grade3) / 3;

  if (average >= 90 && average <= 100) {
    return 'A';
  } else if (average >= 80 && average < 90) {
    return 'B';
  } else if (average >= 70 && average < 80) {
    return 'C';
  } else if (average >= 60 && average < 70) {
    return 'D';
  } else {
    return 'F';
  }
}