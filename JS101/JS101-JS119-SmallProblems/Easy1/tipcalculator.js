/**
Create a simple tip calculator. The program should prompt for a bill amount and a tip rate. 
The program must compute the tip, and then log both the tip and the total amount of the bill to the console. You can ignore input validation and assume that the user will enter numbers.

What is the bill? 200
What is the tip percentage? 15

The tip is $30.00
The total is $230.00
*/

const readlineSync = require('readline-sync');

function calculateBillPlusTip() {
  // Get the bill amount from the user
  let bill = parseFloat(readlineSync.question('What is the bill? '));

  // Get the tip percentage from the user
  let tipPercentage = parseFloat(readlineSync.question('What is the tip percentage? '));

  // Calculate the tip amount
  let tip = (bill * tipPercentage) / 100;

  // Calculate the total bill amount including the tip
  let total = bill + tip;

  // Log the tip amount and total bill amount to the console
  console.log(`The tip is $${tip.toFixed(2)}`);
  console.log(`The total is $${total.toFixed(2)}`);
}

calculateBillPlusTip();
