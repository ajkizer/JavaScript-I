// Take the commented ES5 syntax and convert it to ES6 arrow Syntax

// let myFunction = function () {
// console.log("Function was invoked!");
// };
// myFunction();

const myFunction = () => console.log("1.) Function was invoked!");
myFunction();

// let anotherFunction = function (param) {
//   return param;
// };
// anotherFunction("Example");

const anotherFunction = param => console.log(param);
anotherFunction("2.) Example");

// let add = function (param1, param2) {
//   return param1 + param2;
// };
// add(1,2);

const add = (param1, param2) => console.log("3.) ", param1 + param2);

add(1, 2);
// let subtract = function (param1, param2) {
//   return param1 - param2;
// };
// subtract(1,2);

// Stretch

exampleArray = [1, 2, 3, 4];
// const triple = exampleArray.map(function (num) {
//   return num * 3;
// });

const triple = exampleArray.map(num => num * 3);
console.log("4.) ", triple);
