"use strict";
let current = [0];
let score = 0;
let curscr = document.querySelectorAll(".current-score");
const scr = document.querySelectorAll(".score");
const diceroll = document.querySelector(".btn--roll");
const img = document.querySelector(".dice");
const cursrcplayer1 = document.querySelector("#current--0");

diceroll.addEventListener("click", function (evt) {
  //generate random no
  const random = Math.trunc(Math.random() * 6) + 1;
  console.log(random);
  //disp random no
  img.setAttribute("src", `dice-${random}.png`);
  // adding random scr
  score += random;
  curscr[0].innerHTML = score;
  //disp added random no
  current[0] = score;
  scr[0].innerHTML = score;
});
