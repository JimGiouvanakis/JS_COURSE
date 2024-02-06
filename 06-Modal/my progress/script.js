'use strict';

const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const btnClose = document.querySelector(".close-modal");
const btnOpen = document.querySelectorAll(".show-modal");

const Close = function () {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
};

const Open = function () {
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
};

console.log(btnOpen);

for (let i = 0; i < btnOpen.length; i++)
  btnOpen[i].addEventListener("click", Open);

btnClose.addEventListener("click", Close);
overlay.addEventListener("click", Close);

document.addEventListener("keydown", function (e) {
  if (e.key === `Escape` && !modal.classList.contains("hidden")) {
    Close();
  }
});
