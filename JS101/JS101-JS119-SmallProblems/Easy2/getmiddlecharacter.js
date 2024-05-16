/*
Instructions: Write a function that takes a non-empty string argument and returns the middle character(s) of the string. 
If the string has an odd length, you should return exactly one character. 
If the string has an even length, you should return exactly two characters.

Examples: centerOf('I Love JavaScript'); // "a"
centerOf('Launch School');     // " "
centerOf('Launch');            // "un"
centerOf('Launchschool');      // "hs"
centerOf('x');                 // "x"

Input: string argument

Output: middle characters of the string, odd = one characters, even = two characters

Steps: 
-Identify the number of characters in the string. 
-check if the number is odd or even
-Return the middle characters, based on if it's odd or even. 
-How do you return the middle? Maybe by using some kind of index, splice or similar? 
-What if you base the index on some kind of variable that takes string.length and create an approriate index based on that? What could that look like..

*/

function getMidOfCharacters(string) {
  for (let index = 0; index < string.length; index++) {
    const element = string.length;

    if (element % 2 !==0) {
    return console.log("odd")
  } else {

    return console.log("even")
  }

  
}
}

console.log(getMidOfCharacters("freder"))



function centerOf(string) {
  if (string.length % 2 === 1) {
    let centerIndex = (string.length - 1) / 2;
    return string[centerIndex];
  } else {
    let leftIndex = string.length / 2 - 1;
    return string.substring(leftIndex, leftIndex + 2);
  }
}

console.log(centerOf('frede'));      // "hs"