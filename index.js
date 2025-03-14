const buttonEl = document.querySelector(".button");
let humanScore = 0;
let computerScore = 0;

// 1. Creating getComputerChoice function

function getComputerChoice() {
  // creating random number

  const randomValue = Math.floor(Math.random() * 3) + 1;

  if (randomValue === 1) {
    return "rock";
  } else if (randomValue === 2) {
    return "paper";
  } else {
    return "scissor";
  }
}

function getHumanChoice() {
  const value = prompt("enter your favorite").toLowerCase();
  return value;
}

function playRound() {
  const humanChoice = getHumanChoice();
  const computerChoice = getComputerChoice();

  if (humanChoice === "rock" && computerChoice === "scissor") {
    humanScore++;

    console.log(
      `You win. ${humanChoice} beats ${computerChoice}, ${humanScore}`
    );
  } else if (humanChoice === "scissor" && computerChoice === "paper") {
    humanScore++;
    console.log(
      `You win. ${humanChoice} beats ${computerChoice}, ${humanScore}`
    );
  } else if (humanChoice === "paper" && computerChoice === "rock") {
    humanScore++;

    console.log(
      `You win. ${humanChoice} beats ${computerChoice}, ${humanScore}`
    );
  } else {
    computerScore++;
    console.log(
      `You lose. ${computerChoice} beats ${humanChoice} Please try! ${computerScore}`
    );
  }
}

function playGame(round) {
  for (let i = 0; i < 5; i++) {
    round();
  }
}
playGame(playRound);
// buttonEl.addEventListener("click", function () {
//   playGame(playRound);
// });
