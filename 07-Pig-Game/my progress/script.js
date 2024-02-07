'use strict';

const Dice = document.querySelector(".dice");
let current0 = Number(document.getElementById(`current--0`).textContent);
let current1 = Number(document.getElementById(`current--1`).textContent);
let score0 = Number(document.getElementById("score--0").textContent);
const Player0 = document.querySelector(".player--0");
const Player1 = document.querySelector(".player--1");
let temp, player;
let hold = 0;

function ChangePlayer(player) {
  if (player === 0) {
    console.log(`44444`);
    Player0.classList.remove(`player--active`);
    Player1.classList.add(`player--active`);
  } else if (player === 1) {
    console.log(`55555`);
    Player1.classList.remove(`player--active`);
    Player0.classList.add(`player--active`);
  }
}

function ChangeImage(roll) {
  if (roll === 0) {
    Dice.classList.add("hidden");
  } else if (roll === 1) {
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

function ClearCurrent(player) {
  if (player === 0) {
    current0 = 0;
    document.getElementById("current--0").textContent = "0";
  } else if (player === 1) {
    current1 = 0;
    document.getElementById("current--1").textContent = "0";
  } else {
    current0 = 0;
    current1 = 0;
    document.getElementById("current--0").textContent = "0";
    document.getElementById("current--1").textContent = "0";
    document.getElementById("score--0").textContent = `0`;
    document.getElementById("score--1").textContent = `0`;
  }
}

function Hold(player, current) {
  if (player === 0) {
    temp = current + Number(document.getElementById("score--0").textContent);
    document.getElementById("score--0").textContent = temp;
  } else {
    temp = current + Number(document.getElementById("score--1").textContent);
    document.getElementById("score--1").textContent = temp;
  }
  ClearCurrent(player);
  ChangePlayer(player);
}

function RollDice() {
  let roll = Math.floor(Math.random() * 6) + 1;
  console.log(roll);
  if (Dice.classList.contains("hidden")) {
    Dice.classList.remove("hidden");
  }
  if (score0 <= 10) {
    if (roll != 1) {
      if (Player0.classList.contains(`player--active`)) {
        temp = current0;
        current0 = temp + roll;
        player = 0;
        document.getElementById("current--0").textContent = current0;
        document
          .querySelector(`.btn--hold `)
          .addEventListener("click", function () {
            Hold(0, current0);
          });
      } else {
        temp = current1;
        current1 = temp + roll;
        player = 1;
        document.getElementById("current--1").textContent = current1;
        document
          .querySelector(`.btn--hold `)
          .addEventListener("click", function () {
            Hold(1, current1);
          });
      }
      ChangeImage(roll);
    } else {
      ClearCurrent(player);
      ChangePlayer(player);
      ChangeImage(roll);
    }
  }
}

document.querySelector(`.btn--new`).addEventListener(`click`, function () {
  console.log(`21313213123213213`);
  ChangeImage(0);
  ClearCurrent(2);
});

const Roll = document
  .querySelector(".btn--roll")
  .addEventListener(`click`, RollDice);
