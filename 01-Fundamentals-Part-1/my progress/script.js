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

const age = 19;

const isOldEnough = age >= 18;
