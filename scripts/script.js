let humanChoice;
let resultMessage;
let choices = ["rock", "paper", "scissors"];
let computerChoice = choices[Math.floor(Math.random() * choices.length)];
const rock = document.querySelector("#rockBtn");
rock.addEventListener("click", () => {
  humanChoice = "rock";
  computerChoice = choices[Math.floor(Math.random() * choices.length)];
  playGame(humanChoice, computerChoice);
});
const paper = document.querySelector("#paperBtn");
paper.addEventListener("click", () => {
  humanChoice = "paper";
  computerChoice = choices[Math.floor(Math.random() * choices.length)];
  playGame(humanChoice, computerChoice);
});
const scissors = document.querySelector("#scissorsBtn");
scissors.addEventListener("click", () => {
  humanChoice = "scissors";
  computerChoice = choices[Math.floor(Math.random() * choices.length)];
  playGame(humanChoice, computerChoice);
});

function playGame(a, b) {
  if (a === b) {
    resultMessage = "It's a draw!!";
  } else if (a === "rock" && b === "scissors") {
    resultMessage = "It's a Win!! Rock beats Scissors";
  } else if (a === "rock" && b === "paper") {
    resultMessage = "It's a Loss!! Paper beats Rock";
  } else if (a === "paper" && b === "scissors") {
    resultMessage = "It's a Loss!! Scissors beats Paper";
  } else if (a === "paper" && b === "rock") {
    resultMessage = "It's a Win!! Paper beats Rock";
  } else if (a === "scissors" && b === "paper") {
    resultMessage = "It's a Win!! Scissors beats Paper";
  } else if (a === "scissors" && b === "rock") {
    resultMessage = "It's a Loss!! Rock beats Scissors";
  } else {
    resultMessage = "Invalid Input!!";
  }
  const human = document.querySelector("#human");
  human.textContent = humanChoice;
  const computer = document.querySelector("#computer");
  computer.textContent = computerChoice;
  const result = document.querySelector("#result");
  result.textContent = resultMessage;
}
