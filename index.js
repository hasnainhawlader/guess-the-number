const check = document.querySelector(".check");
const input = document.querySelector(".input-number");
const guessingText = document.querySelector(".guessing-text");
const correctAns = document.querySelector(".game-correct-ans");
const score = document.querySelector(".score");
const highScore = document.querySelector(".high-score");
const playAgain = document.querySelector(".play-again");
let RANDOM_NUMBER = Math.floor(Math.random() * 21);
let SCORE = 20;
let bestscore = 0;
check.addEventListener("click", function () {
  let inputnumber = Number(input.value);
  if (SCORE > 0) {
    if (inputnumber == 0) {
      SCORE--;
      dispaly("enter a number", SCORE);
    } else if (inputnumber > RANDOM_NUMBER) {
      SCORE--;
      dispaly("too high", SCORE);
    } else if (inputnumber < RANDOM_NUMBER) {
      SCORE--;
      dispaly("too low", SCORE);
    } else if (inputnumber == RANDOM_NUMBER) {
      dispaly("yes you did it", SCORE);
      correctAns.innerHTML = RANDOM_NUMBER;
      correctAns.style.backgroundColor = "#222";
      document.body.style.backgroundColor = "teal";
      if (bestscore < SCORE) highScore.innerHTML = SCORE;
    }
  }
});

playAgain.addEventListener("click", function () {
  SCORE = 20;
  let RANDOM_NUMBER = Math.floor(Math.random() * 21);

  dispaly("Start guessing...");
  document.body.style.backgroundColor = "#222";
  correctAns.style.backgroundColor = "teal";
  correctAns.textContent = "?";
  score.textContent = SCORE;
  input.value = "";
});
function dispaly(a, SCORE) {
  guessingText.innerHTML = a;
  score.textContent = SCORE;
}
