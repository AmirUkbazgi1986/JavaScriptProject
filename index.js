const buttonEl = document.querySelectorAll(".button");
const scoreHum = document.querySelector(".scoreHum");
const scoreCom = document.querySelector(".scoreCom");
const textRes = document.querySelector(".textResult");

let humanScore = 0;
let computerScore = 0;

// 1. Creating getComputerChoice function

function getComputerChoice() {
  // creating random number

  const randomValue = Math.floor(Math.random() * 3) + 1;

  if (randomValue === 1) {
    return "Rock";
  } else if (randomValue === 2) {
    return "Paper";
  } else {
    return "Scissor";
  }
}

function getHumanChoice(value) {
  // const value = prompt("enter your favorite").toLowerCase();
  return value;
}

function playRound(humanChoice, computerChoice) {
  console.log(humanChoice, computerChoice);
  if (humanChoice === "Rock" && computerChoice === "Scissor") {
    humanScore++;
    if (humanScore < 5) {
      textRes.textContent = `You win. ${humanChoice} beats ${computerChoice} `;
      scoreHum.textContent = `${humanScore}`;
    } else {
      textRes.textContent = `Congratulation! YOU WIN THE GAME! `;
      scoreCom.textContent = "0";
      scoreHum.textContent = "0";
      humanScore = 0;
      computerScore = 0;
    }
  } else if (humanChoice === "Scissor" && computerChoice === "Paper") {
    humanScore++;
    if (humanScore < 5) {
      textRes.textContent = `You win. ${humanChoice} beats ${computerChoice} `;
      scoreHum.textContent = `${humanScore}`;
    } else {
      textRes.textContent = `Congratulation! YOU WIN THE GAME! `;
      scoreCom.textContent = "0";
      scoreHum.textContent = "0";
      humanScore = 0;
      computerScore = 0;
    }
  } else if (humanChoice === "Paper" && computerChoice === "Rock") {
    humanScore++;
    if (humanScore < 5) {
      textRes.textContent = `You win. ${humanChoice} beats ${computerChoice} `;
      scoreHum.textContent = `${humanScore}`;
    } else {
      textRes.textContent = `Congratulation! YOU WIN THE GAME! `;
      scoreCom.textContent = "0";
      scoreHum.textContent = "0";
      humanScore = 0;
      computerScore = 0;
    }
  } else {
    computerScore++;
    if (computerScore < 5) {
      textRes.textContent = `You lose. ${computerChoice} beats ${humanChoice} Please try! `;
      scoreCom.textContent = `${computerScore}`;
    } else {
      textRes.textContent = `Bad luck. YOU LOST THE GAME!`;

      scoreCom.textContent = "0";
      scoreHum.textContent = "0";
      humanScore = 0;
      computerScore = 0;
    }
  }
}

// function playGame(round) {
//   for (let i = 0; i < 5; i++) {
//     round();
//   }
// }

for (let i = 0; i < buttonEl.length; i++) {
  // console.log(buttonEl[i]);
  buttonEl[i].addEventListener("click", function (e) {
    e.preventDefault();

    if (e.target.textContent === "Rock") {
      const humanChoice = getHumanChoice(buttonEl[i].textContent);
      const computerChoice = getComputerChoice();
      playRound(humanChoice, computerChoice);
    } else if (e.target.textContent === "Scissor") {
      const humanChoice = getHumanChoice(buttonEl[i].textContent);
      const computerChoice = getComputerChoice();
      playRound(humanChoice, computerChoice);
    } else if (e.target.textContent === "Paper") {
      const humanChoice = getHumanChoice(buttonEl[i].textContent);
      const computerChoice = getComputerChoice();
      playRound(humanChoice, computerChoice);
    }
  });
}

// playGame(playRound);
// buttonEl.addEventListener("click", function () {
//   playGame(playRound);
// });
