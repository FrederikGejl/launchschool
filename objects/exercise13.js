//As written, this code will raise an error on line 5. Without modifying foo, update this code to print the desired text.

function foo(bar) {
  console.log(bar());
}

foo(function() { return "Welcome" });

foo(function() { return 3.1415 });
foo(function() { return [1, 2, 3] });