"use strict";

// console.log(document.querySelector(".message").textContent);

// document.querySelector(`.message`).textContent = "Correct! :D";

// document.querySelector(".number").textContent = 13;
// document.querySelector(".score").textContent = 25;

// document.querySelector(`.guess`).value;

let secretnumber = Math.floor(Math.random() * 20) + 1; // setting the number range 1-20
let score = 20;
document.querySelector(".number").textContent = secretnumber;

document.querySelector(`.check`).addEventListener("click", function () {
  const guess = Number(document.querySelector(`.guess`).value);
  console.log(guess);

  if (!guess) {
    document.querySelector(".message").textContent = "Give a Number!";
  } else {
    if (secretnumber > guess) {
      if (score > 1) {
        document.querySelector(".message").textContent = "Too Low";
        score--;
        document.querySelector(".score").textContent = score;
      } else {
        document.querySelector(".message").textContent = "You Lose the Game";
        document.querySelector(".score").textContent = 0;
      }
    } else if (secretnumber < guess) {
      if (score > 1) {
        document.querySelector(".message").textContent = "Too High";
        score--;
        document.querySelector(".score").textContent = score;
      } else {
        document.querySelector(".message").textContent = "You Lose the Game";
        document.querySelector(".score").textContent = 0;
      }
    } else if (secretnumber === guess) {
      document.querySelector(".message").textContent = "Correct Number!";
      let highscore = document.querySelector(".highscore").textContent;
      console.log(document.querySelector(".highscore").textContent);

      if (highscore > score) {
        document.querySelector(".highscore ").textContent = score;
      }
    }
  }
});
