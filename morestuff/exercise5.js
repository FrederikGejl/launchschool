function doSomething(string) {
  return string.split(' ').reverse().map((value) => value.length);
}

Returner string, kører reverse, map, inde i den en anonym funktion der giver os længden på den her string 

Map laver en ny efter en funktion er kaldt


This code converts a string into an array of words, reverses that array, and then returns a new array that contains the lengths of the words. 
It assumes that a single space character delimits the words in the original string.