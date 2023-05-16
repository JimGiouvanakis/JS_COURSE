// let js = "amazing";
// // console.log(40 + 8 + 23 - 10);

// console.log("Jonas");
// console.log(23);

// let firstName = "Matilda";

// console.log(firstName);
// console.log(firstName);
// console.log(firstName);

// let javascriptIsFun = true;
// console.log(javascriptIsFun);

// // console.log(typeof true);
// console.log(typeof javascriptIsFun);
// // console.log(typeof 23);
// // console.log(typeof "jonas");

// javascriptIsFun = "yes";
// console.log(typeof javascriptIsFun);

// let year;
// console.log(year);
// console.log(typeof year);

// let age = 30;

// console.log(age);

// age = 31;

// console.log(age);

// var job = "programmer";

// console.log(job);

// job = "teacher";

// console.log(job);

// lastname = "name";

// // console.log(lastname);

// const now = 2037;
// const ageJonas = now - 1999;
// const ageSarah = now - 2018;

// console.log(ageJonas, ageSarah);

// console.log(ageJonas * 2, ageJonas / 10, 2 ** 3);
// //  2 ** 3 means 2 to the power of 3

// const FirstName = "Jim";
// const LastName = "Giouva";

// console.log(FirstName + " " + LastName);

// let x = 10 + 5;

// console.log(x);
// x += 10;

// console.log(x);

// x *= 4;

// console.log(x);

// x++;

// console.log(x);

// x--;

// console.log(x);

// console.log(ageJonas > ageSarah);

// console.log(ageSarah >= 18);

// const isFullAge = ageSarah >= 18;

// console.log(isFullAge, "Y");

// console.log(now - 1991 > now - 2018);

// const averageAge = (ageJonas + ageSarah) / 2;
// console.log(ageJonas, ageSarah, averageAge);

//////////////////////////////////////////////
/////////// Coding Challenge #1 //////////////

/*
Mark and John are trying to compare their BMI (Body Mass Index), whitch is calculated using the formula:
BMI = mass / height ** 2  = mass / ( height * height).
(mass in kg and height in meter).

1.Store Marks's and John's mass and height in variables.
2.Calculate both their BMIs using the formula (you can even implement both versions)
3.Create a boolean variable 'markHightBMI' containing infromation about whether Mark has a higher BMI than John.

TEST DATA 1: Marks weight 78 kg and is 1.69 m tall.
John weights 92 kg and is 1.95 tall.
TEST DATA 2 :Marks weight 95 kg and is 1.88 m tall .
John weights 85 kg and is 1.76 m tall .
*/

// let MarkBMI = 78 / 1.69 ** 2;
// let JohnBMI = 92 / 1.95 ** 2;
// let markHightBMI = MarkBMI > JohnBMI;

// console.log(MarkBMI, JohnBMI, markHightBMI);

// MarkBMI = 95 / (1.88 * 1.88);
// JohnBMI = 85 / (1.76 * 1.76);
// markHightBMI = MarkBMI > JohnBMI;

// console.log(MarkBMI, JohnBMI, markHightBMI);

// const firstName = "Jonas";
// const job = "teacher";
// const birthYear = 1991;
// const year = 2037;

// const jonas =
//   "I'm " + firstName + ", a " + (year - birthYear) + "years old " + job + "!";
// console.log(jonas);

// const jonasNew = `I'm ${firstName} a ${year - birthYear} years old ${job}!`;
// console.log(jonasNew);

// console.log(`Just another String`);
// console.log(`String with \n\
// multiple \n\
// lines`);

// const age = 19;

// const isOldEnough = age >= 18;

// if (isOldEnough) {
//   console.log("Sara can start driving license");
// } else {
//   const yearsLeft = 18 - age;
//   console.log(`Sara is too young, wait another ${yearsLeft} years`);
// }

// const birthYear = 1999;
// let century;
// IF(birthYear <= 2000) {
//   century = 20 ;

// } else {
//    century = 21;
// }
// console.log(century);

//////////////////////////////////////////////
/////////// Coding Challenge #2 //////////////

/*
Use the BMI example from Challenge #1, and the code you already wrote , and imporve it:
1.Print a nice output to the console , saying who has the higher BMI.The message can be either "Mark's BMI
is higher than John's!" or "John's BMI is higher than Mark's!"
2.Use a template string to include the BMI values is the outputs.Example :"Mark's BMI (28.3) is higher than John's (23.9)!"

Hint:Use an if/else statement

Good Luck
*/

// let MarkBMI = 78 / 1.69 ** 2;
// let JohnBMI = 92 / 1.95 ** 2;
// let HightBMI = MarkBMI > JohnBMI;

// if (MarkBMI > JohnBMI) {
//   console.log(`Mark's BMI is higher than John's!`);
// } else {
//   console.log(`John's BMI is higher than Mark's!`);
// }

// MarkBMI = 95 / (1.88 * 1.88);
// JohnBMI = 85 / (1.76 * 1.76);
// HightBMI = MarkBMI > JohnBMI;

// if (MarkBMI > JohnBMI) {
//   console.log(`Mark's BMI (${MarkBMI}) is higher than John's (${JohnBMI})!`);
// } else {
//   console.log(`John's's BMI (${JohnBMI}) is higher than Mark's (${MarkBMI})!`);
// }

// const inputYear = "1991";
// console.log(Number(inputYear), inputYear);
// console.log(Number(inputYear) + 18);

// console.log(Number("Jonas"));
// console.log(typeof NaN);

// console.log(String(23), 23);
// console.log("I am " + 23 + "yearsl old");
// console.log("23" - "10" - 3);

// let n = "1" + 1; // '11'
// n = n - 1;
// console.log(n); // '10'

// // 5 falsy values:0 , ' ',undefined ,null , NaN

// console.log(Boolean(0));
// console.log(Boolean(undefined));
// console.log(Boolean("Jonas"));
// console.log(Boolean({}));
// console.log(Boolean(""));

// const money = 0; // false because is falsy value the 0 if i put any number it will me true
// if (money) {
//   console.log("Dont spend it all ;");
// } else {
//   console.log("You should get a job");
// }

// let height; // is will appear falce bacause the undefined is a falsy value
// if (heigh) {
//   console.log("YAY! Height is defined");
// } else {
//   console.log("Height is undefined");
// }

// const age = 18;

// if (age === 18) console.log("You just became an adult :D (scrict)"); // it have to me exactly the same

// if (age == "18") console.log("You just became an adult :D (loose)"); // this is true because it  doeasnt matter the type

// const favourite = prompt("Whats your favourite number?");

// console.log(favourite);
// console.log(typeof favourite);

// if (favourite === 23) {
//   console.log("Cool! 23 is an amazing number!");
// } else if (favourite === 7) {
//   console.log("7 is also a cool number");
// } else {
//   console.log("number is not 23 or 7");
// }

// if (favourite !== 23) console.log("Why not 23?");

// const hasDriversLicense = true; //A
// const hasGoodVision = false; // B

// console.log(hasDriversLicense && hasGoodVision); // AND
// console.log(hasDriversLicense || hasGoodVision); // OR
// console.log(!hasDriversLicense); // the opposite

// const itTired = true;
// console.log(hasDriversLicense && hasGoodVision && itTired);

// if (hasDriversLicense && hasGoodVision && !itTired) {
//   console.log("Sarah can drive");
// } else {
//   console.log("Sarah is not able to drive");
// }

////////////////////////////////////
// Coding Challenge #3

/*
There are two gymnastics teams, Dolphins and Koalas. They compete against each other 3 times. 
The winner with the highest average score wins the a trophy!

1. Calculate the average score for each team, using the test data below
2. Compare the team's average scores to determine the winner of the competition, and print it to the console.
 Don't forget that there can be a draw, so test for that as well (draw means they have the same average score).

3. BONUS 1: Include a requirement for a minimum score of 100. With this rule, a team only wins if it has a higher 
score than the other team, and the same time a score of at least 100 points. HINT: Use a logical operator to
 test for minimum score, as well as multiple else-if blocks 😉
4. BONUS 2: Minimum score also applies to a draw! So a draw only happens when
 both teams have the same score and both have a score greater or equal 100 points. Otherwise, no team wins the trophy.

TEST DATA: Dolphins score 96, 108 and 89. Koalas score 88, 91 and 110
TEST DATA BONUS 1: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 123
TEST DATA BONUS 2: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 106

GOOD LUCK 😀
*/

// let Dolphins = (97 + 112 + 101) / 3;
// let Koalas = (88 + 91 + 110) / 3;
// let pointsD = 97 + 112 + 101;
// let pointsK = 88 + 91 + 110;
// let winner;
// if (Dolphins > Koalas) {
//   winner = "Dolphins";
// } else if (Dolphins < Koalas) {
//   winner = "Koalas";
// } else {
//   winner = "Is a draw!";
// }

// console.log(
//   `The Winner is ${winner}!! and points is ${pointsK} for the Koalas and ${pointsD} for the Dolphins`
// );

// Dolphins = (97 + 112 + 101) / 3;
// Koalas = (109 + 95 + 123) / 3;

// if (Dolphins > Koalas && Dolphins >= 100) {
//   winner = "Dolphins";
// } else if (Dolphins < Koalas && Koalas >= 100) {
//   winner = "Koalas";
// } else {
//   winner = "Is a draw!";
// }

// console.log(`The Winner is : ${winner}!!`);

// Dolphins = (97 + 112 + 101) / 3;
// Koalas = (109 + 95 + 106) / 3;

// if (Dolphins > Koalas && Dolphins >= 100) {
//   winner = "Dolphins";
// } else if (Dolphins < Koalas && Koalas >= 100) {
//   winner = "Koalas";
// } else if (Dolphins === Koalas && Koalas >= 100 && Dolphins >= 100) {
//   winner = "Is a draw!";
// } else {
//   winner = "Nobody Win , Score too low ";
// }

// console.log(`The Winner is : ${winner}!!`);

const day = "monday";

switch (day) {
  case "monday":
}
