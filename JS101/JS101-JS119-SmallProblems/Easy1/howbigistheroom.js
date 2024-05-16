/*
Enter the length of the room in meters:
10
Enter the width of the room in meters:
7
The area of the room is 70.00 square meters (753.47 square feet).

Build a program that asks the user to enter the length and width of a room in meters, and then logs the area of the room to the console in both square meters and square feet.

Note: 1 square meter == 10.7639 square feet

Do not worry about validating the input at this time. Use the readlineSync.prompt method to collect user input.

*/

const readlineSync = require('readline-sync');

function findAreaOfRoom() {
  
 let length = readlineSync.question('Length of room?');
let width = readlineSync.question('Width of room?');
 let result = length * width;

let squarefeet = result * 10.76;
let message = `The area of the room is ${result} & in squarefeet ${squarefeet}`;
 console.log(message)

}

findAreaOfRoom(10,7)
