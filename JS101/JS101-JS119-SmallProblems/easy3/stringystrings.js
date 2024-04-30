/*
Instructions: 
Write a function that takes one argument, a positive integer, and returns a string of alternating '1's and '0's, always starting with a '1'. 

The length of the string should match the given integer.
Examples: stringy(6);    // "101010"
stringy(9);    // "101010101"
stringy(4);    // "1010"
stringy(7);    // "1010101"

Input: integer

Output: string the length of integer with alternating 1 & 0.

Steps: -Convert to number maybe? 
       -loop trough and write 01010101 based on the length of 
       - Identify odd & even numbers and add alternating values
       -Måske while? while x do y 


*/

function stringy(num) {
let numInt = parseInt(num);
let resultN = "1"


  for (let index = 0; index < numInt - 1; index++) {
  
if (index % 2 === 1) {
  resultN += "1"
  
} else
resultN += "0"

  }



return resultN

}





//ls løsning
function stringy(size) {
  let result = "";
  for (let idx = 0; idx < size; idx++) {
    let number = ((idx % 2) === 0) ? 1 : 0;
    result += number;
  }
  return result;
};

console.log(stringy(7));    // "1010101"