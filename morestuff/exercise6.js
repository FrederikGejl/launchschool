
//1 

function allMatches(words, pattern) {
  let matches = [];
  for (let index = 0; index < words.length; index += 1) {
    if (pattern.test(words[index])) {
      matches.push(words[index]);
    }
  }

  return matches;
}

//2 
function allMatches(words, pattern) {
  return words.filter((word) => pattern.test(word));
}


const words = ['apple', 'banana', 'orange', 'grape', 'pear'];
const pattern = /orange/;
const result = allMatches(words, pattern);
console.log(result); // Output: ['apple', 'banana', 'grape']