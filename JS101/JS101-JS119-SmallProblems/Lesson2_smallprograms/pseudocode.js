/* Given a collection of numbers.

Iterate through the collection one by one.
  - save the first value as the starting value.
  - for each iteration, compare the saved value with the current value.
  - if the current number is greater
    - reassign the saved value as the current value
  - otherwise, if the current value smaller or equal
    - move to the next value in the collection

After iterating through the collection, return the saved value.



Therefore, there are two layers to solving any problem:

The logical problem domain layer.
The syntactical programming language layer.

Formal Pseudocode
Before we can take our pseudocode and translate it to program code, we must formalize the pseudocode a little more. We'll still use English, but we'll use some keywords to help us break down the program logic into concrete commands, which makes translating to code more natural.

We'll use the below keywords to assist us, along with their meaning.

Keyword	Meaning
START	start of the program
SET	set a variable that we can use for later
GET	retrieve input from user
PRINT	display output to user
READ	retrieve a value from a variable
IF/ELSE IF/ELSE	show conditional branches in logic
WHILE	show looping logic
END	end of the program



START

# Given a collection of integers called "numbers"

SET iterator = 1
SET savedNumber = value within numbers collection at space 1

WHILE iterator <= length of numbers
  SET currentNumber = value within numbers collection at space "iterator"
  IF currentNumber > savedNumber
    savedNumber = currentNumber
  ELSE
    do nothing

  iterator = iterator + 1

PRINT savedNumber

END

*/ 

function findGreatest(numbers) {
  let savedNumber = numbers[0];

  numbers.forEach(num => {
    if (num > savedNumber) {
      savedNumber = num;
    }
  });

  return savedNumber;
}


/*  a function that returns the sum of two numbers

START
  // Declare variables to hold the numbers and result
  SET number1
  SET number2
  SET result

  // Retrieve numbers from the user or another source
  GET number1
  GET number2

  // Calculate the sum of the two numbers
  SET result = number1 + number2

  // Output the result
  PRINT result
END



a function that takes an array of strings, and returns a string that is all those strings concatenated together

-Write a function that takes a argument with an array of strings.
-Inside that function we have to manipulate or convert the string from array to string and then concatenate them all together.
-Convert from array to string.
-Concatenate the returned strings all pieced together. 
-Then we have to return that converted array of strings. 

START

//Variable to hold the returned string
SET fullString

//Variable to hold the concatenated strings.
SET fullStringConcatenated

//Retrieve the array of strings
GET arrayWithStrings

//Convert to string

arrayWithStrings = fullString

//Concatenate the strings.

fullStringConcatenated = fullString(Concatenatemethodforstrings)

PRINT

END

Chat






a method that takes an array of integers, and returns a new array with every other element from the original array, starting with the first element. For instance:



everyOther([1,4,7,2,5]); // => [1,7,5]

-Start at 1, to skip first
-Create a loop that goes trough an array and only returns every other element or index. 
-Let's code that
-What will we need


*/

function everyOther(array) {
  let result = [];
  for (let i = 0; i < array.length; i +=2) {
    result.push(array[i]);
    
  }
  return result;
}

console.log(everyOther([1,4,7,2,5]));

/*
a function that determines the index of the 3rd occurrence of a given character in a string. 
For instance, if the given character is 'x' and the string is 'axbxcdxex', the function should return 6 (the index of the 3rd 'x').
 If the given character does not occur at least 3 times, return null.

-Inside the input there is always 3 characters that are similar.
-If the character does not occour 3 times, return null.
-Return the index of the 3rd occurence. 
-Search for X, return index of the 3rd positive match. 
-Maybe match regex or a for loop
-Count the amount of times, store them somewhere, any characters above 2?
-2 arguments, x & axbxcdxex
 -Konvertere dem til tal og sige if over 3?
 -

 -You need to identify the indexes of each character. 
 -Need to loop trough and find the 3rd occurence of a character specified in an argument next to the full string to search.
 -For loop, lede efter X 3 gange? og printe tredje occurence eller null 
 -Maybe begin with printing all the characters to console?
*/

function findThird(string,character) {
  let counter = 0;

  for (let index = 0; index < string.length; index++) {
   
    if (string[index] === character) {
      counter +=1;
      
      if (counter === 3) { 
        return index;
        
      }
    }
  }
  return null;
  }


console.log(findThird("axbxcdxex","x"))










/*
a function that takes two arrays of numbers and returns the result of merging the arrays. 
The elements of the first array should become the elements at the even indexes of the returned array, 
while the elements of the second array should become the elements at the odd indexes. For instance:
merge([1, 2, 3], [4, 5, 6]); // => [1, 4, 2, 5, 3, 6]
*/


function merge(arr1,arr2) {

  let mergedArray = [];

  for (let index = 0; index < arr1.length && index < arr2.length; index++) {
    const element = arr1[index]
    const element2 = arr2[index]
    console.log(element)
    console.log(element2)
    mergedArray.push(arr1[index]);  // Adds element from arr1
    mergedArray.push(arr2[index]);  // Adds element from arr2

   
  
}
 return mergedArray;
  }



console.log(merge([1, 2, 3], [4, 5, 6]));



  return arr1.concat(arr2);
