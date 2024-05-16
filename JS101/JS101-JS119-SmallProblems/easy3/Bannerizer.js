/*
Instructions:  Write a function that will take a short line of text, and write it to the console log within a box.



Examples: logInBox('To boldly go where no one has gone before.');

Input: 

Output: 

Steps: 


*/


function logInBox(string) {
 console.log(string);
}

logInBox("dav")

function logInBox(message) {
  let horizontalRule = `+${"-".repeat(message.length + 2)}+`;
  let emptyLine = `|${" ".repeat(message.length + 2)}|`;

  console.log(horizontalRule);
  console.log(emptyLine);
  console.log(`| ${message} |`);
  console.log(emptyLine);
  console.log(horizontalRule);
}
logInBox("dav")