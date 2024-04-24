/*
Write a program that asks the user to enter an integer greater than 0, then asks whether the user wants to determine the sum or the product of all numbers between 1 and the entered integer, inclusive.
*/
//Declare readline sync
const readlineSync = require('readline-sync');


// Function to compute the sum of integers from 1 to n
function sumOfIntegers(n) {
  let sum = 0;
  for (let i = 1; i <= n; i++) {
    sum += i;
  }
  return sum;
}

// Function to compute the factorial of n
function factorial(n) {
  if (n === 0 || n === 1) return 1;
  let product = 1;
  for (let i = 1; i <= n; i++) {
    product *= i;
  }
  return product;
}


// Get the num // we don't need to actually manipulate this any more
  let num = parseInt(readlineSync.question('Enter a integer larger than 0'));

//determine sum or product // needs to be converted together with number.
let choice = readlineSync.question('Enter "s" to compute the sum, or "p" to compute the product.');




// Execute based on user choice
if (choice === 's') {
  console.log(`The sum of integers between 1 and ${num} is ${sumOfIntegers(num)}.`);
} else if (choice === 'p') {
  console.log(`The product of integers between 1 and ${num} is ${factorial(num)}.`);
} else {
  console.log('Invalid choice. Please enter "s" for sum or "p" for product.');
}




 