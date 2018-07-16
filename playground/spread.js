// function add (a,b){
//   return a+b
// }
//
// console.log(add(3,1));
//
// var toAdd = [9, 5, 6]
// console.log(add(...toAdd));
//
// var groupA = ['Marco', 'Usyles']
// var groupB = ['Naoki']
// var final = [...groupB, 3, ...groupA]
//
// console.log(final);

function greeting(name, age){
  return "Hi "+name+" you are "+age
}

var person = ['Chase', 26]
var personTwo = ['Jen',29 ]

console.log(greeting(...person));
console.log(greeting(...personTwo))

function greet(array){
  array.forEach((v) => {
    console.log("hi "+v);
  })
}

var names = ['Mike','Andrew']
var final = [...names, 'Ben']

greet(final)
