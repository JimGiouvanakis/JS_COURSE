"use strict";

// let hasDriversLicense = false;
// const passTest = true;

// if (passTest) hasDriversLicense = true;
// if (hasDriversLicense) console.log('I can drive :D');

// // const interface = 'Audio';
// // const private = 534;

// function logger() {
//   console.log('My name is Jonas');
// }

// logger();
// logger();
// logger();

// function fruitProcessor(apples, oranges) {
//   const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
//   return juice;
// }

// const appleJuice = fruitProcessor(5, 0);
// console.log(appleJuice);

// const appleOrangeJuice = fruitProcessor(2, 4);
// console.log(appleOrangeJuice);

// const num = Number('23');

// // Function Declaration
// function calcAge1(birthYear) {
//   return 2037 - birthYear;
// }

// const age1 = calcAge1(1991);
// console.log(age1);

// // Function Expression
// const calcAge2 = function (birthYear) {
//   return 2037 - birthYear;
// };

// const age2 = calcAge2(1991);

// console.log(age1, age2);

// // Arrow Function
// const calcAge3 = (birthYear) => 2037 - birthYear;
// const age3 = calcAge3(1991);
// console.log(age3);

// const yearUntilRetirement = (birthYear, firstname) => {
//   const age = 2037 - birthYear;
//   const retirement = 65 - age;
//   // return retirement;
//   return `${firstname} retires in ${retirement} years`;
// };

// console.log(yearUntilRetirement(1991, "Jonas"));
// console.log(yearUntilRetirement(1980, "Bob"));

// function cutFruitPieces(fruit) {
//   return fruit * 4;
// }

// function fruitProcessor(apples, oranges) {
//   const applesPieces = cutFruitPieces(apples);
//   const orangesPieces = cutFruitPieces(oranges);

//   const juice = `Juice with ${applesPieces} pieces of apple and ${orangesPieces} pieces of oranges.`;
//   return juice;
// }

// console.log(fruitProcessor(2, 3));

// const calcAge = function (birthYear) {
//   return 2037 - birthYear;
// };
// const yearUntilRetirement = function (birthYear, firstname) {
//   const age = calcAge(birthYear);
//   const retirement = 65 - age;

//   if (retirement > 0) {
//     console.log(`${firstname} retires in ${retirement} years`);
//     return retirement;
//   } else {
//     console.log(`${firstname} has already retired`);
//     return -1;
//   }

//   // return `${firstname} retires in ${retirement} years`;
// };

// console.log(yearUntilRetirement(1991, "Jonas"));
// console.log(yearUntilRetirement(1970, "Mike"));

///////////////////////////////////////
// Coding Challenge #1

/*
Back to the two gymnastics teams, the Dolphins and the Koalas! There is a new gymnastics discipline, which works differently.
Each team competes 3 times, and then the average of the 3 scores is calculated (so one average score per team).
A team ONLY wins if it has at least DOUBLE the average score of the other team. Otherwise, no team wins!

1. Create an arrow function 'calcAverage' to calculate the average of 3 scores
2. Use the function to calculate the average for both teams
3. Create a function 'checkWinner' that takes the average score of each team as parameters ('avgDolhins' and 'avgKoalas'), and then logs the winner to the console, together with the victory points, according to the rule above. Example: "Koalas win (30 vs. 13)".
4. Use the 'checkWinner' function to determine the winner for both DATA 1 and DATA 2.
5. Ignore draws this time.

TEST DATA 1: Dolphins score 44, 23 and 71. Koalas score 65, 54 and 49
TEST DATA 2: Dolphins score 85, 54 and 41. Koalas score 23, 34 and 27

HINT: To calculate average of 3 values, add them all together and divide by 3
HINT: To check if number A is at least double number B, check for A >= 2 * B. Apply this to the team's average scores 😉

GOOD LUCK 😀
*/

// const calcAverage = (score1, score2, score3) => (score1 + score2 + score3) / 3;

// function checkWinner(avgDolhins, avgKoalas) {
//   let winner;
//   if (avgDolhins >= 2 * avgKoalas) {
//     winner = `The winner is Dolhins with average score ${avgDolhins} over ${avgKoalas}`;
//   } else if (avgKoalas >= 2 * avgDolhins) {
//     winner = `The winner is Koalas with average score ${avgKoalas} over ${avgDolhins}`;
//   } else {
//     winner = `No team Wins!`;
//   }
//   return winner;
// }

// // console.log(calcAverage(65, 54, 49));
// let Dolhins = calcAverage(65, 54, 49);
// // console.log(calcAverage(44, 23, 71));
// let Koalas = calcAverage(44, 23, 71);
// // console.log(Dolhins, Koalas);
// console.log(checkWinner(Dolhins, Koalas));

// // console.log(calcAverage(85, 23, 71));
// Dolhins = calcAverage(85, 23, 71);
// // console.log(calcAverage(85, 54, 41));
// Koalas = calcAverage(23, 34, 27);
// // console.log(Dolhins, Koalas);
// console.log(checkWinner(Dolhins, Koalas));

// const friend1 = "Michael";
// const friend2 = "Maria";
// const friend3 = "Jim";

// const friends = ["Michael", "Steven", "Peter"];
// console.log(friends);

// const years = new Array(1991, 1984, 2008, 2020);

// console.log(friends[0]);
// console.log(friends[2]);
// console.log(friends[1]);

// console.log(friends.length);
// console.log(friends[friends.length - 1]);

// friends[2] = "Jay";
// console.log(friends);

// const firstname = "Jim";
// const jim = [firstname, "Giouvanakis", 2037 - 1999, "developer", friends];
// console.log(jim);
// console.log(jim.length);

// //  Exercise
// const calcAge = function (birthYear) {
//   return 2037 - birthYear;
// };
// const years2 = [1990, 1980, 1970, 1976];

// const age1 = calcAge(years[0]);
// const age2 = calcAge(years[1]);
// const age3 = calcAge(years[years.length - 1]);

// console.log(calcAge(age1, age2, age3));

// const ages = [
//   calcAge(years[0]),
//   calcAge(years[1]),
//   calcAge(years[years.length - 1]),
// ];

// console.log(ages);

// const friends = ["Michael", "Steven", "Peter"];

// // Add elements
// const NewLenght = friends.push("Jay");
// console.log(friends);
// console.log(NewLenght);

// friends.unshift("John");
// console.log(friends);

// // Remove elements
// friends.pop(); //Last
// const popped = friends.pop();
// console.log(friends);
// console.log(popped);

// const shifted = friends.shift(); //first
// console.log(friends);
// console.log(shifted);

// console.log(friends.indexOf("Steven"));
// console.log(friends.indexOf("Bob"));

// friends.push(23);
// console.log(friends.includes("Steven")); // true or false situation
// console.log(friends.includes("Bob"));
// console.log(friends.includes(23));

// if (friends.includes("Steven")) {
//   console.log("You have a friend called Peter");
// }

// Excerise

// const calcTip = function (bills) {
//   if (bills > 50 && bills < 300) {
//     return bills * 0.15;
//   } else {
//     return bills * 0.2;
//   }
// };

// const calcTip = function (bill) {
//   return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
// };

// // const calcTip = (bill) =>
// //   bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;

// const bills = [125, 555, 44];

// const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];

// const total = [tips[0] + bills[0], tips[1] + bills[1], tips[2] + bills[2]];

// console.log(bills, tips, total);

// const jimArray = [
//   "Jim",
//   "Giouvanakis",
//   "Developer",
//   ["Michael", "Peter", "Steven"],
// ];

// const jim = {
//   firstname: "Jim",
//   lastname: "Giouvanakis",
//   age: 2037 - 1999,
//   job: "Developer",
//   friends: ["Michael", "Peter", "Steven"],
// };

// console.log(jim);

// console.log(jim.lastname);

// console.log(jim["lastname"]);

// const namekey = "name";
// console.log(jim["first" + namekey]);
// console.log(jim["last" + namekey]);

// const quesition = prompt("A questions ?");

// if (jim[quesition]) {
//   console.log(jim[quesition]);
// } else {
//   console.log("wrong");
// }

// jim.location = "Portugal";
// jim["twitter"] = "@giouvanakis";
// console.log(jim);

// // Challenge
// // "Jim has 3 friends and his best friend is called Michael"

// const chall =
//   jim.firstname +
//   " has" +
//   " " +
//   jim.friends.length +
//   " friend and his best friend is " +
//   jim.friends[0];
// console.log(chall);

// const jim = {
//   firstname: "Jim",
//   lastname: "Giouvanakis",
//   age: 1999,
//   job: "Developer",
//   friends: ["Michael", "Peter", "Steven"],
//   driverlicense: false,

//   calcAge: function () {
//     // console.log(this);
//     this.age = 2024 - this.age;
//     return this.age;
//   },

//   viewdata: function () {
//     let license;
//     if (this.driverlicense) {
//       license = "a";
//     } else {
//       license = "no";
//     }
//     const chall = `${this.firstname} is a ${this.calcAge()} ${
//       this.job
//     } and he has ${license} drivers license`;

//     return chall;
//   },
// };

// console.log(jim.calcAge());

// console.log(jim.age);
// console.log(jim.age);
// console.log(jim.age);

// console.log(jim["calcAge"](jim.age));

// Challenge
//Jim is a 25 years old and he has a driver's license

// console.log(jim.viewdata());

// const Mark = {
//   fullname: "Mark Miller",
//   mass: 78,
//   height: 1.69,
// };

// const john = {
//   fullname: "John Smith",
//   mass: 92,
//   height: 1.92,
// };

// function CalcMass(mass, height) {
//   var calc = mass / (height * height);
//   return calc;
// }

// const CalcMark = CalcMass(Mark.mass, Mark.height);

// const CalcJohn = CalcMass(john.mass, john.height);

// const chall = `${Mark.fullname}'s BMI (${CalcMass(
//   Mark.mass,
//   Mark.height
// )}) is higher than ${Mark.fullname}'s (${CalcMass(john.mass, john.height)}) `;
// let chall;

// if (CalcMark > CalcJohn) {
//   chall = `${Mark.fullname}'s BMI (${CalcMass(
//     Mark.mass,
//     Mark.height
//   )}) is higher than ${john.fullname}'s (${CalcMass(john.mass, john.height)}) `;
// } else {
//   chall = `${john.fullname}'s BMI (${CalcMass(
//     john.mass,
//     john.height
//   )}) is higher than ${Mark.fullname}'s (${CalcMass(Mark.mass, Mark.height)}) `;
// }

// console.log(chall);

// console.log("Lifting weights repetition 1");

// for (let i = 1; i <= 10; i++) {
//   console.log(`Lifting weights repetition ${i}`);
// }

// const jimArray = [
//   "Jim",
//   "Giouvanakis",
//   2024 - 1999,
//   "Developer",
//   ["Michael", "Peter", "Steven"],
// ];

// const types = [];

// // console.log(jimArray[1]);

// for (let i = 0; i < 5; i++) {
//   console.log(jimArray[i]);

//   types[i] = typeof jimArray[i];

//   // console.log(types[i]);
// }

// console.log(types);

// const years = [1991, 2007, 1969, 2020];
// const ages = [];

// for (let i = 0; i < 5; i++) {
//   ages.push(2037 - years[i]);
// }

// console.log(ages);

// for (let i = 0; i < jimArray.length; i++) {
//   if (typeof jimArray[i] !== "string") continue;

//   console.log(jimArray[i]);
// }

// for (let i = jimArray.length - 1; i >= 0; i--) {
//   console.log(i, jimArray[i]);
// }

// for (let excerise = 1; excerise < 4; excerise++) {
//   console.log(`----Starting excerise ${excerise}`);

//   for (let rep = 1; rep < 6; rep++) {
//     console.log(`Lifting weights repetition ${rep}`);
//   }
// }

// let rep = 1;
// while (rep <= 10) {
//   console.log(`Lifting weights repetition ${rep}`);
//   rep++;
// }
// let dice = Math.trunc(Math.random() * 6) + 1;
// while (dice !== 6) {
//   console.log(`You rolled a ${dice}`);
//   dice = Math.trunc(Math.random() * 6) + 1;
//   if (dice == 6) console.log("Loop is about to end ... ");
// }

// CHALLENGE #4

// const calcTip = function (bill) {
//   return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
// }

const calcTip = function (bills) {
  if (bills > 50 && bills < 300) {
    return bills * 0.15;
  } else {
    return bills * 0.2;
  }
};

const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];

const tips = [];
const totals = [];

for (let i = 0; i < 10; i++) {
  totals[i] = calcTip(bills[i]) + bills[i];
  tips[i] = calcTip(bills[i]);
}

console.log(totals);
console.log(tips);
