/*
Build a program that logs when the user will retire and how many more years the user has to work until retirement.

What is your age? 30
At what age would you like to retire? 70

It's 2017. You will retire in 2057.
You have only 40 years of work to go!

*/


function getCurrentYear() {
  const now = new Date(); // This creates a new Date object with the current date and time
  const year = now.getFullYear();
  return `${year}`;
}
const currentYear = getCurrentYear();
console.log(currentYear);






function retireWhen() {

  let readlineSync = require("readline-sync");

let age = readlineSync.question("What is your age? ");
let retireAge = readlineSync.question("At what age would you like to retire?");

let ageN = parseInt(age);  // Convert to integer
let retireAgen = parseInt(retireAge);  // Convert to integer
let timeLeftBeforeRetirement = retireAgen - ageN
let currentYear = getCurrentYear()
let currentYearN = parseInt(currentYear);
let retirementYearFuture = currentYearN + timeLeftBeforeRetirement;  
return `It's ${currentYearN}. You will retire in ${retirementYearFuture}.
You have only ${timeLeftBeforeRetirement} years of work to go! `; 

}

console.log(retireWhen())