const h2Elements = document.getElementsByTagName("h2");

//player 1
const player1 = document.getElementById("player-1");
const displayScore = document.getElementById("display-score");
const currentScore = document.getElementById("current-score");
player1.style.background = "rgba(255, 255, 255, 0.4)";
h2Elements[0].style.fontWeight = "bold";

//payer 2
const player2 = document.getElementById("player-2");
const displayScore1 = document.getElementById("display-score1");
const currentScore1 = document.getElementById("current-score1");

//Buttons
const newGame = document.getElementById("new-game");
const rollDice = document.getElementById("roll-dice");
const hold = document.getElementById("hold");
const dice = document.getElementById("dice");

//Used Veriabels
let sum = 0;
let addedScore = Number(displayScore.innerHTML);
let addedScore1 = Number(displayScore1.innerHTML);
let initialBackground = true;

//Event On NewGame Button
newGame.addEventListener("click", function () {
  currentScore.innerHTML = "0";
  currentScore1.innerHTML = "0";
  dice.style.display = "none";
  displayScore.innerHTML = "0";
  displayScore1.innerHTML = "0";
  addedScore = 0;
  addedScore1 = 0;
  player1.style.background = "rgba(255, 255, 255, 0.4)";
  player2.style.background = "none";
});

//Event On RollDice Button
rollDice.addEventListener("click", function () {
  Generates();
});

//Event On Hold Button
hold.addEventListener("click", function () {
  if (initialBackground) {
    player2.style.background = "rgba(255, 255, 255, 0.4)";
    player1.style.background = "none";
    h2Elements[0].style.fontWeight = "500";
    h2Elements[1].style.fontWeight = "bold";
    addedScore += sum;
    displayScore.innerHTML = addedScore;
    currentScore.innerHTML = "0";
    dice.innerHTML = "0";
    sum = 0;
    initialBackground = false;
  } else if (!initialBackground) {
    player2.style.background = "none";
    player1.style.background = "rgba(255, 255, 255, 0.4)";
    h2Elements[1].style.fontWeight = "500";
    h2Elements[0].style.fontWeight = "bold";
    addedScore1 += sum;
    displayScore1.innerHTML = addedScore1;
    currentScore1.innerHTML = "0";
    dice.innerHTML = "0";
    sum = 0;
    initialBackground = true;
  }
});

//Functions
function Generates() {
  const randomNum = Math.floor(Math.random() * 6) + 1;
  sum += randomNum;
  dice.innerHTML = randomNum;
  dice.style.display = "flex";
  if (initialBackground) {
    currentScore.innerHTML = sum;
  } else {
    currentScore1.innerHTML = sum;
  }
}
