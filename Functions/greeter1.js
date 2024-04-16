let rlSync = require('readline-sync');
let name = rlSync.question("What's your first name?\n");
let lastname = rlSync.question("What's your last name?\n");
console.log(`Good Morning, ${name} ${lastname}!`);