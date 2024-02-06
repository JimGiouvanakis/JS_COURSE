'use strict';

const Dice = document.querySelector(".dice");
let current0 = Number(document.getElementById(`current--0`).textContent);
let current1 = Number(document.getElementById(`current--1`).textContent);
// let score0 = Number(document.getElementById("score--0").textContent);
const Player0 = document.querySelector(".player--0");
const Player1 = document.querySelector(".player--1");
let temp;
// function Sum(current, roll) {
//   current = current + roll;
//   console.log(current, roll);
//   return current;
// }

function ChangeImage(roll) {
  if (roll === 1) {
    Dice.setAttribute(`src`, `dice-1.png`);
  } else if (roll === 2) {
    Dice.setAttribute(`src`, `dice-2.png`);
  } else if (roll === 3) {
    Dice.setAttribute(`src`, `dice-3.png`);
  } else if (roll === 4) {
    Dice.setAttribute(`src`, `dice-4.png`);
  } else if (roll === 5) {
    Dice.setAttribute(`src`, `dice-5.png`);
  } else if (roll === 6) {
    Dice.setAttribute(`src`, `dice-6.png`);
  }
}

function Hold(player, current) {
  if (player === `0`) {
    console.log(`111`);
    temp = current + Number(document.getElementById("score--0").textContent);
    document.getElementById("score--0").textContent = temp;
    current0 = 0;
    document.getElementById("current--0").textContent = "0";
  } else {
    temp = current + Number(document.getElementById("score--1").textContent);
    document.getElementById("score--1").textContent = temp;
    current1 = 0;
    document.getElementById("current--1").textContent = "0";
  }
}

function RollDice() {
  let roll = Math.floor(Math.random() * 6) + 1;
  console.log(roll);
  if (Dice.classList.contains("hidden")) {
    Dice.classList.remove("hidden");
  }

  if (roll != 1) {
    if (Player0.classList.contains(`player--active`)) {
      temp = current0;
      current0 = temp + roll;
      document.getElementById("current--0").textContent = current0;
      document
        .querySelector(`.btn--hold `)
        .addEventListener("click", function () {
          Hold(`0`, current0);
        });
    } else {
      temp = current1;
      current1 = temp + roll;
      document.getElementById("current--1").textContent = current1;
      document
        .querySelector(`.btn--hold `)
        .addEventListener("click", function () {
          Hold(`1`, current0);
        });
    }
    ChangeImage(roll);
  } else {
    if (Player0.classList.contains(`player--active`)) {
      Player0.classList.remove(`player--active`);
      Player1.classList.add(`player--active`);
    } else {
      Player1.classList.remove(`player--active`);
      Player0.classList.add(`player--active`);
    }
    ChangeImage(roll);
  }
}

const Roll = document
  .querySelector(".btn--roll")
  .addEventListener(`click`, RollDice);

