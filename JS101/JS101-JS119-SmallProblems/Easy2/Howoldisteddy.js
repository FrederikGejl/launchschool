function teddy(min,max) {
  return Math.random() * (max - min) + min;



}

console.log(teddy(20,120))


function randomBetween(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

let age = randomBetween(20, 120);
console.log(`Teddy is ${age} years old!`);