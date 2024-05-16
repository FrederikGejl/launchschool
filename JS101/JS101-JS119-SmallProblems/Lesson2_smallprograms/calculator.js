/*
Instructions:

Examples:

Input:

Output:

Steps:

// Ask the user for the first number.
// Ask the user for the second number.
// Ask the user for an operation to perform.
// Perform the operation on the two numbers.
// Print the result to the terminal.

*/
const MESSAGES = require('./calculator_messages.json')


const readline = require("readline-sync");
let answer = ''; // Define answer outside the loop
function prompt(message) {
  console.log(`=> ${message}`);

}

do {

prompt(MESSAGES['welcome']);


prompt("What's the first number?");
let number1 = readline.question();

while (invalidNumber(number1)) {
  prompt("Hmm it's not valid dude");
  number1 = readline.question();
}

function invalidNumber(number) {
  return number.trimStart() === '' || Number.isNaN(Number(number));
}

prompt("What's the second number?");
let number2 = readline.question();

while (invalidNumber(number2)) {
  prompt("Hmm... that doesn't look like a valid number.");
  number2 = readline.question();
}

prompt("What operation would you like to perform?\n1) Add 2) Subtract 3) Multiply 4) Divide");
let operation = readline.question();
while (!['1', '2', '3', '4'].includes(operation)) {
  prompt('Must choose 1, 2, 3 or 4');
  operation = readline.question();
}

let output;
switch (operation) {
  case '1':
    output = Number(number1) + Number(number2);
    break;
  case '2':
    output = Number(number1) - Number(number2);
    break;
  case '3':
    output = Number(number1) * Number(number2);
    break;
  case '4':
    output = Number(number1) / Number(number2);
    break;
}


prompt(`The result is: ${output}`);

 // Ask the user if they want to perform another calculation
  prompt("Do you want to perform another calculation? (yes/no)");
  answer = readline.question()

} while (answer === 'yes' || answer === 'y');