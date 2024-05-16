refactor to if statement
return foo() ? 'bar' : qux();




/// result
if (foo()) {
  return 'bar';
} else {
  return qux();
}



function isArrayEmpty(arr) {
  if (arr) {
    console.log('Not Empty');
  } else {
    console.log('Empty');
  }
}

isArrayEmpty([]); 