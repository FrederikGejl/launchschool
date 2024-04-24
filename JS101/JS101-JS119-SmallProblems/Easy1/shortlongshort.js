
/*
Write a function that takes two strings as arguments, determines the length of the two strings, and then returns the result of concatenating the shorter string, the longer string, and the shorter string once again. 
You may assume that the strings are of different lengths.
*/

//length of str1 + 2 // concatenate str1 + str2 + str1


function shortLongShort (str1,str2) {

let total = str1.length + str2.length;
console.log(total)


let together1 = str1.concat(str2,str1)

console.log(together1)

}

shortLongShort("hej","musse")



//Solution
/* function shortLongShort(string1, string2) {
  if (string1.length > string2.length) {
    return string2 + string1 + string2;
  } else {
    return string1 + string2 + string1;
  }
}
// 
// 