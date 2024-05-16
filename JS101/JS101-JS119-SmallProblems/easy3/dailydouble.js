/*
Instructions: 
Write a function that takes a string argument and returns a new string that 
contains the value of the original string with all consecutive duplicate characters collapsed into a single character.

Examples: crunch('ddaaiillyy ddoouubbllee');    // "daily double"
crunch('4444abcabccba');              // "4abcabcba"
crunch('ggggggggggggggg');            // "g"
crunch('a');                          // "a"
crunch('');                           // ""

Input: string

Output: string without any duplicate characters. 

Steps: -Identify characters?
        -Maybe you can use a for loop to identify all the different characters that has the same UTF 16 Code and 
        then remove them from their index somehow?
        -So we now have multiple UTF 1F 1
        -Removing duplicates, if any values are equal to eachother? remove them? loop trough them all and remove them? or? if 

*/

function crunch(string) {
  
  for (let index = 0; index < string.length; index++) {
    const element = string.charCodeAt(index);
    const element2 = String.fromCharCode(element)
    console.log(element)
    console.log(element2)
    
  }
  
  
}


crunch("fredde");


//et for loop der tjekker efter om dens seneste karakter er f.eks. d? 

function crunch(string) {
    let result = "";

    for (let index = 0; index < string.length - 1; index++) {
        // Access the current character and the next character
        let currentChar = string.charAt(index);
        let nextChar = string.charAt(index + 1);
        
        // Check if they are the same
        if (currentChar === nextChar) {
            // Do nothing if they are the same
        } else {
            result += currentChar; // Add the character to result if it's not a duplicate
        }
    }
    
    // Add the last character of the string to the result
    // This is needed since the loop checks only up to the second-last character
    result += string.charAt(string.length - 1);
    
    return result;
}

// Should output "frede"



//ls løsning

function crunch(text) {
  let index = 0;
  let crunchText = '';

  while (index <= text.length - 1) {
    if (text[index] !== text[index + 1]) {
      crunchText += text[index];
    }

    index += 1;
  }

  return crunchText;
}


console.log(crunch("fredde")); 



//Playing around

function crunch(text) {
  let index = 0;
  let crunchText = '';
  console.log(text[index]);

  while (index <= text.length - 1) {
    if (text[index] !== text[index + 1]) {
      crunchText += text[index];
    }

    index += 1;
  }

  return crunchText;
}


console.log(crunch("fredde")); 