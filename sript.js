"use strict";
let results = document.getElementById("result");
let [user_scores, computer_scores, draw_scores] = [0, 0, 0];
let gamerule = {
  Rock: {
    Rock: "draw",
    Paper: "loose",
    Scissors: "win",
    Lizard: "win",
    Spocks: "loose",
  },
  Paper: {
    Paper: "draw",
    Rock: "win",
    Scissors: "loose",
    Lizard: "loose",
    Spocks: "win",
  },
  Scissors: {
    Scissors: "draw",
    Rock: "loose",
    Paper: "win",
    Lizard: "win",
    Spocks: "loose",
  },
  Lizard: {
    Lizard: "draw",
    Rock: "loose",
    Paper: "win",
    Scissors: "loose",
    Spocks: "win",
  },
  Spocks: {
    Spocks: "draw",
    Rock: "win",
    Paper: "loose",
    Scissors: "win",
    Lizard: "loose",
  },
};
function clicked(input) {
  let choices = ["Rock", "Paper", "Scissors", "Lizard", "Spocks"];
  let random = Math.trunc(Math.random() * 5);
  console.log(choices[random]);
  document.getElementById(
    "user_choice"
  ).innerHTML = `you choose <span>${input.toUpperCase()}</span>`;
  document.getElementById(
    "computer_choice"
  ).innerHTML = `Computer choose <span>${choices[random].toUpperCase()}</span>`;

  switch (gamerule[input][choices[random]]) {
    case "win":
      results.innerText = "you win";
      results.style = "background-color:green";
      user_scores++;
      break;

    case "loose":
      results.innerText = "you lose";
      results.style = "background-color:red";
      computer_scores++;
      break;
    case "draw":
      results.innerText = "you draw";
      results.style = "background-color:yellow";
      draw_scores++;
  }
  document.getElementById("user_score").innerHTML = user_scores;
  document.getElementById("computer_score").innerHTML = computer_scores;
  document.getElementById("draw_score").innerHTML = draw_scores;
}
