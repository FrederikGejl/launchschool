/*
Instructions:
Take everything that you've learned so far and build a mortgage calculator (or car payment calculator -- it's the same thing) that determines the monthly payment assuming that interest is compounded monthly.

You'll need three pieces of information:

the loan amount
the Annual Percentage Rate (APR)
the loan duration
From the above, you'll need to calculate the following two things:

monthly interest rate (APR / 12)
loan duration in months
You can use the following formula:
let m = p * (j / (1 - Math.pow((1 + j), (-n))));

m = monthly payment
p = loan amount
j = monthly interest rate
n = loan duration in months

When you write your program, don't use the single-letter variables m, p, j, and n; use explicit names. For instance, you may want to use loanAmount instead of p.

Try to print the payment amount as a dollar and cents amount, e.g., $123.45 or $371.00.

Finally, don't forget to run your code through ESLint. Also, consider asking for a code review after you've reviewed your code against the possible solution, and made any adjustments that you need to make.

Hints:

Decide what input formats your program expects. For example, should the user enter an interest rate of 5% as 5 or .05?
If you're working with an Annual Percentage Rate (APR), you need to convert it to a monthly interest rate for use in the formula.
Be careful about the loan duration -- are you working with months or years? Choose variable names carefully to assist in remembering.
Think about edge cases. There are plenty of edge cases to work with in this problem, and each presents interesting challenges. For instance, consider whether you want to support no-interest loans or loans that aren't for an integer number of years.
You can use this loan calculator to check your results.

Examples:

Input:

Output:

Steps:


*/

const readline = require("readline-sync");

function validator(number) {
  return !isNaN(number) && number >= 1;
}

let loanAmount;

do {
  loanAmount = parseFloat(readline.question('Please enter your loanAmount '));
  if (!validator(loanAmount)) {
    console.log('Invalid input. Please enter a number above 0.');
  }
} while (!validator(loanAmount));

console.log(`Your Loan Anount is: ${loanAmount}`);

let INTEREST_RATE_YEAR;

do {
  INTEREST_RATE_YEAR = parseFloat(readline.question('Please enter your annual percentage rate (APR): '));
  if (!validator(INTEREST_RATE_YEAR)) {
    console.log('Invalid input. Please enter a number above 0.');
  }
} while (!validator(INTEREST_RATE_YEAR));

console.log(`Your annual Interest Rate is: ${INTEREST_RATE_YEAR}`);

let loanDurationYears;

do {
  loanDurationYears = parseFloat(readline.question('Please enter your loan duration in years'));
  if (!validator(loanDurationYears)) {
    console.log('Invalid input. Please enter a number above 0.');
  }
} while (!validator(loanDurationYears));

console.log(`Your loan duration is: ${loanDurationYears}`);


let monthlyInterestRate = INTEREST_RATE_YEAR / 12 / 100; // Convert percentage to decimal
console.log(`Your monthly interest rate is: ${monthlyInterestRate * 100}%`);

let loanDurationMonths = loanDurationYears * 12;
console.log(`Your loan duration is: ${loanDurationMonths} months`);

let monthlyPayment = loanAmount * (monthlyInterestRate / (1 - Math.pow((1 + monthlyInterestRate), -loanDurationMonths)));

console.log(`Your monthly payment is: $${monthlyPayment.toFixed(2)}`);