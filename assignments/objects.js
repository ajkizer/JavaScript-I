// Let's get some practice writing a few objects for a new group of interns at a small business.

// ==== Challenge 1: Writing Objects ====
// HR needs some information on the new interns put into a database.  Given an id, email, first name, and gender. Create an object for each person in the company list:

// 1,mmelloy0@psu.edu,Mitzi,F
// 2,kdiben1@tinypic.com,Kennan,M
// 3,kmummery2@wikimedia.org,Keven,M
// 4,gmartinson3@illinois.edu,Gannie,M
// 5,adaine5@samsung.com,Antonietta,F

// Example format of an intern object: 1,examples@you.edu,Example,F
const example = {
  id: 0,
  name: "Example",
  email: "examples@you.edu",
  gender: "F"
};

// Write your intern objects here:
function Intern(id, name, email, gender) {
  (this.id = id),
    (this.name = name),
    (this.email = email),
    (this.gender = gender);
}
const mitzi = new Intern("1", "Mitzi", "mmelloy0@psu.edu", "F");
const kennan = new Intern("2", "Kennan", "kdiben1@tinypic.com", "M");
const kevan = new Intern("3", "Kevan", "kmummery2@wikimedia.org", "M");
const gannie = new Intern("4", "Ganni", "gmartinson3@illinois.edu", "M");
const antonietta = new Intern("5", "Antonietta", "adaine5@samsung.com", "F");

// ==== Challenge 2: Reading Object Data ====
// Once your objects are created, log out the following requests from HR into the console:

// Mitzi's name

// Kennan's ID

// Keven's email

// Gannie's name

// Antonietta's Gender
console.log(mitzi.name);
console.log(kennan.id);
console.log(kevan.email);
console.log(gannie.name);
console.log(antonietta.gender);

// ==== Challenge 3: Object Methods ====
// Give Kennan the ability to say "Hello, my name is Kennan!" Use the console.log provided as a hint.
// console.log(kennan.speak());

// Antonietta loves math, give her the ability to multiply two numbers together and return the product. Use the console.log provided as a hint.
//console.log(antonietta.multiplyNums(3,4));

kennan.speak = function() {
  return "Hello, my name is Kennan";
};

console.log(kennan.speak());

// === Great work! === Head over to the the arrays.js file or take a look at the stretch challenge

// ==== Stretch Challenge: Nested Objects and the this keyword ====

// 1. Create a parent object with properties for name and age.  Make the name Susan and the age 70.
// 2. Nest a child object in the parent object with name and age as well.  The name will be George and the age will be 50.
// 3. Nest a grandchild object in the child object with properties for name and age.  The name will be Sam and the age will be 30
// 4. Give each of the objects the ability to speak their names using the this keyword.

function Person(name, age) {
  (this.name = name), (this.age = age);
  this.speak = function() {
    console.log(`Hello, my name is ${this.name}`);
  };
}

const susan = new Person("Susan", 70);
susan.child = new Person("George", 50);
george = susan.child;
george.child = new Person("Sam", 30);
sam = george.child;

george.speak();
susan.speak();
sam.speak();

// Log the parent object's name

// Log the child's age

// Log the name and age of the grandchild

// Have the parent speak

// Have the child speak

// Have the grandchild speak
