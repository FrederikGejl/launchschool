/*
Instructions: Write a function that takes a number as an argument. 
If the argument is a positive number, return the negative of that number. If the argument is a negative number, return it as-is.

Examples: 

negative(5);     // -5
negative(-3);    // -3
negative(0);     // -0

Input: string (number)

Output: positive numbers converted to negative // if negative, return as is.

Steps: 

--Convert to number
--Check if negative or positive with math.sign static method.
--Multiply by minus 1 to convert positive to negative. 
--Just return as is, if it's already a negative argument. 


LS Solution: 
function negative(number) {
  return Math.abs(number) * -1;
}
*/



function negative(number) {
  let numI = parseInt(number);
  let numN = Math.sign(numI);

 

if (numN === 1 || numN ===0 )  {

let positive = numI * -1;
return positive;


}
 else { 
  return numI
  
}


}

console.log(negative(-99))
console.log(negative(99))


