
Create a new object named myObj that uses myProtoObj as its prototype.


let myProtoObj = {
  foo: 1,
  bar: 2,
};

let newObj = Object.create(myProtoObj);

console.log(newObj.foo)



exercise 7  /// Add a qux property with value 3 to the myObj object we created in the previous exercise. Now, examine the following code snippets:

let myProtoObj = {
  foo: 1,
  bar: 2,
  qux: 3,
};

let newObj = Object.create(myProtoObj);

console.log(newObj.foo)


let objKeys = Object.keys(myObj);
objKeys.forEach(function(key) {
  console.log(key);
});


for (let key in myObj) {
  console.log(key);
}