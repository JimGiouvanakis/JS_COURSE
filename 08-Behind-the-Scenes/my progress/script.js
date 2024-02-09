"use strict";

// function caclAge(birthYear) {
//   const age = 2024 - birthYear;

//   function printAge() {
//     const output = `You are ${age}, born in ${birthYear}`;
//     console.log(output);

//     if (birthYear >= 1981 && birthYear <= 1996) {
//       var millenial = true;
//       const str = `Oh you are a millenial ${firstName}`;
//       console.log(str);

//       function add(a, b) {
//         return a + b;
//       }
//     }
//   }
//   printAge();

//   return age;
// }

// const firstName = "Jim";
// caclAge(1991);

// printAge();

// var me = "Jim ";
// let job = `Developer`;
// const year = 1999;

// // Functions
// console.log(addDecl(2, 3));
// // console.log(addExpr(2, 3));
// console.log(addArrow);
// console.log(addArrow(2, 3));

// function addDecl(a, b) {
//   return a + b;
// }

// const AddExpr = function addDecl(a, b) {
//   return a + b;
// };

// const addArrow = (a, b) => a + b;

// // Example

// console.log(undefined);
// if (!numProducts) deleteShoppingCart();

// var numProducts = 10;

// function deleteShoppingCart() {
//   console.log(`All products deleted!`);
// }

// console.log(this);

// const calcAge = function (birthYear) {
//   console.log(2024 - birthYear);
//   console.log(this);
// };

// calcAgeArrow(1999);

// const jonas = {
//   year: 1999,
//   calcAge: function () {
//     console.log(this);
//     console.log(2024 - this.year);
//   },
// };

// jonas.calcAge();

// const matilda = {
//   year: 2017,
// };

// matilda.calcAge = jonas.calcAge;
// matilda.calcAge();

// var Name = `Jim`;

// const jim = {
//   firstname: `Jim`,
//   year: 1999,
//   calcAge: function () {
//     console.log(this);
//     console.log(2037 - this.year);
//   },

//   greet: () => {
//     console.log(this);
//     console.log(`Hey ${this.firstname}`);
//   },
// };
// jim.greet();

let lastName = `John`;
let oldLastNmae = lastName;

lastName = `Davis`;
// console.log(lastName, oldLastNmae);

const jessica = {
  firstname: `Jessica`,
  lastName: `Williams`,
  age: 27,
  family: [`Alice`, `Bob`],
};

const marriedJessica = jessica;
marriedJessica.family.push(`Konstas `, `Giannis`);
// console.log(jessica, marriedJessica);

const jessicaCopy = Object.assign({}, jessica);
console.log(jessicaCopy);
