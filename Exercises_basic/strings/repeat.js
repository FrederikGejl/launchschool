

function repeat (a,b) {

  a * b;
return;
}

console.log(repeat(3, 'ha')); // 'hahaha'


function repeat(n, string) {
  let repetitions = '';

  while (n > 0) {
    repetitions += string;
    n -= 1;
  }

  return repetitions;
}


console.log(repeat(3, 'ha')); // 'hahaha'
