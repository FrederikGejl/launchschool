/*
Instructions: 
Given a string that consists of some words and an assortment of non-alphabetic characters, write a function that returns that string with all of the 
non-alphabetic characters replaced by spaces.
 If one or more non-alphabetic characters occur in a row, you should only have one space in the result
  (i.e., the result string should never have consecutive spaces).
Examples: 
cleanUp("---what's my +*& line?");    // " what s my line "

Input:  

Output: 

Steps: 


*/

function cleanUp() {
 
  


}

cleanUp("---what's my +*& line?"); 


function useRegex(input) {
    let regex = /---[A-Za-z]+'s m[A-Za-z] \+\*&\s[A-Za-z]+\?/i;
    return input.match(regex);
}

console.log(useRegex("---what's my +*& line?"))

let inputString = "---what's my +*& line?"
const resultString = inputString.match(/[a-zA-Z]+|\s/g).join('').replace(/\s+/g, ' ').trim();
console.log(resultString)



function cleanUp(text) {
  return text.replace(/[^a-z]/gi, " ").replace(/\s+/gi, " ");
}


function cleanUp(text) {
  let cleanText = '';

  for (let idx = 0; idx < text.length; idx += 1) {
    if (isLowerCaseLetter(text[idx]) || isUpperCaseLetter(text[idx])) {
      cleanText += text[idx];
    } else if (idx === 0 || lastChar(cleanText) !== ' ') {
      cleanText += ' ';
    }
  }

  return cleanText;
}

function lastChar(text) {
  return text[text.length - 1];
}

function isLowerCaseLetter(char) {
  return char >= 'a' && char <= 'z';
}

function isUpperCaseLetter(char) {
  return char >= 'A' && char <= 'Z';
}


const str = "Real Madrid";
const regex = /Real\s+(Madrid)/i;
const match = str.match(regex);

if (match) {
    console.log(match[1]);  // Outputs: Madrid
}
