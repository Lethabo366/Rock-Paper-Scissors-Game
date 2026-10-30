"use strict";
// The selection and round-comparison logic is retained from the supplied project.
const CHOICES = ["rock", "paper", "scissors"];
const WINNING_SCORE = 5;
const playerScoreElement = document.querySelector("#player-score");
const computerScoreElement = document.querySelector("#computer-score");
const statusElement = document.querySelector("#status");
const resultsElement = document.querySelector("#results");
const choiceButtons = document.querySelectorAll("[data-choice]");
let playerScore = 0;
let computerScore = 0;
let roundNumber = 0;
let gameOver = false;

function computerPlay() {
  const randomIndex = Math.floor(Math.random() * CHOICES.length);
  return CHOICES[randomIndex];
}
function playRound(playerSelection, computerSelection) {
  const player = playerSelection.toLowerCase();
  const computer = computerSelection.toLowerCase();
  if (player === computer) return "draw";
  const playerWins =
    (player === "rock" && computer === "scissors") ||
    (player === "paper" && computer === "rock") ||
    (player === "scissors" && computer === "paper");
  return playerWins ? "player" : "computer";
}
function capitalize(word) {
  return word.charAt(0).toUpperCase() + word.slice(1);
}
function game(playerSelection) {
  if (gameOver || !CHOICES.includes(playerSelection)) return;
  const computerSelection = computerPlay();
  const result = playRound(playerSelection, computerSelection);
  roundNumber++;
  if (result === "player") playerScore++;
  else if (result === "computer") computerScore++;
  playerScoreElement.textContent = playerScore;
  computerScoreElement.textContent = computerScore;

  const message = result === "draw" ? "It's a draw. No points awarded." :
    result === "player" ? "You win this round!" : "The computer wins this round!";
  // Use textContent: DOM output instead of prompt, alert, or console.log.
  resultsElement.replaceChildren();
  const selections = document.createElement("p");
  selections.textContent = `Round ${roundNumber}: You chose ${capitalize(playerSelection)}; computer chose ${capitalize(computerSelection)}.`;
  const outcome = document.createElement("p");
  outcome.textContent = message;
  resultsElement.append(selections, outcome);

  if (playerScore === WINNING_SCORE || computerScore === WINNING_SCORE) {
    gameOver = true;
    statusElement.textContent = playerScore === WINNING_SCORE ? "🏆 You defeated the evil AI!" : "🤖 The evil AI wins this match!";
    choiceButtons.forEach(button => { button.disabled = true; });
  } else {
    statusElement.textContent = `Round ${roundNumber} complete. Make your next choice.`;
  }
}
choiceButtons.forEach(button => {
  button.addEventListener("click", () => game(button.dataset.choice));
});
document.querySelector("#restart").addEventListener("click", () => {
  playerScore = 0; computerScore = 0; roundNumber = 0; gameOver = false;
  playerScoreElement.textContent = "0";
  computerScoreElement.textContent = "0";
  statusElement.textContent = "Choose your move to start.";
  resultsElement.textContent = "Your selections and results will appear here.";
  choiceButtons.forEach(button => { button.disabled = false; });
});
