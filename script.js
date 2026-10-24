let userWins = 0;
let computerWins = 0;
const targetScore = 3;
const choices = ["rock", "paper", "scissors"];

/* game function manages the flow of the Rock, Paper, Scissors game. It keeps track of the scores and
 * continues to prompt the user for their choice until either the user or the computer reaches the target score.
 * It also handles user cancellation and displays the final result of the game.*/

const game = () => {
  let roundNumber = 0;
  while (userWins < targetScore && computerWins < targetScore) {
    roundNumber++;
    const userResponse = getPlayerChoice();

    if (userResponse === null) {
      console.log("Game cancelled.");
      return;
    }

    const computerResponse = computerPlay();
    const result = playRound(userResponse, computerResponse);

    console.log(result.message);

    if (result.winner === "player") {
      userWins++;
    } else if (result.winner === "computer") {
      computerWins++;
    }

    console.log(`Score - You: ${userWins}, Computer: ${computerWins}`);
    // Display the result and current score in an alert box
    alert(
      `Round ${roundNumber}` +
        `\n\n` +
        result.message +
        `\n\nScore - You: ${userWins}, Computer: ${computerWins}`,
    );
  }
  const finalScoreMessage = `Final Score - You: ${userWins}, Computer: ${computerWins}`;
  console.log(
    finalScoreMessage +
      `\n\n${userWins === targetScore ? "Congratulations! You won the game!" : "The computer won the game. Better luck next time!"}`,
  );
  // Display the final result in an alert box
  alert(
    `\n\nYou played ${roundNumber} rounds.\n\n` +
      finalScoreMessage +
      `\n\n${userWins === targetScore ? "Congratulations! You won the game!" : "The computer won the game. Better luck next time!"}`,
  );
};

/* playRound function determines the winner of a round based on the user's and computer's choices.
 * It returns an object containing the winner and a message describing the outcome.*/

const playRound = (userResponse, computerResponse) => {
  const capitalize = (choice) => choice[0].toUpperCase() + choice.slice(1);

  if (userResponse === computerResponse) {
    return {
      winner: "draw",
      message: `It's a draw! You both chose ${capitalize(computerResponse)}.`,
    };
  }

  if (
    (userResponse === "rock" && computerResponse === "scissors") ||
    (userResponse === "paper" && computerResponse === "rock") ||
    (userResponse === "scissors" && computerResponse === "paper")
  ) {
    return {
      winner: "player",
      message: `Computer chose ${capitalize(computerResponse)}. ${capitalize(userResponse)} beats ${capitalize(computerResponse)}. You win this round!`,
    };
  }

  return {
    winner: "computer",
    message: `Computer chose ${capitalize(computerResponse)}. ${capitalize(computerResponse)} beats ${capitalize(userResponse)}. You lose this round!`,
  };
};

// computerPlay function randomly selects a choice for the computer from the choices array.

function computerPlay() {
  const randomIndex = Math.floor(Math.random() * choices.length);
  return choices[randomIndex];
}

/* getPlayerChoice function prompts the user for their choice and validates the input.
 * It continues to prompt until a valid choice is made or the user cancels the prompt.*/

function getPlayerChoice() {
  while (true) {
    const input = prompt("Please enter your choice: Rock, Paper, or Scissors.");

    if (input === null) {
      return null;
    }

    const choice = input.trim().toLowerCase();

    if (choices.includes(choice)) {
      return choice;
    }

    alert("Invalid input. Please enter Rock, Paper, or Scissors.");
  }
}

// showInstructions function displays the game instructions in an alert box when the game starts.

function showInstructions() {
  alert(
    "WELCOME TO ROCK, PAPER, SCISSORS!\n\n" +
      "An evil AI has challenged you!\n" +
      "Can you defeat it before it wins?\n\n" +
      "GAME RULES:\n" +
      "- Rock beats Scissors.\n" +
      "- Paper beats Rock.\n" +
      "- Scissors beats Paper.\n" +
      "- First to 3 points wins.\n" +
      "- Draws do not award points.\n" +
      "- Invalid choices do not count.\n" +
      "- Press Cancel to quit safely.\n\n" +
      "HOW TO PLAY:\n" +
      "Enter Rock, Paper, or Scissors\n" +
      "when the prompt appears.\n\n" +
      "RESULTS:\n" +
      "Each round appears in an alert\n" +
      "and in your browser console.\n\n" +
      "HOW TO OPEN THE CONSOLE:\n" +
      "On Windows, press F12 or Ctrl+Shift+J.\n" +
      "Select the Console tab if needed.\n" +
      "On Mac, press Cmd+Option+J in Chrome.\n\n" +
      "Click OK to start!",
  );
}
showInstructions();
game();
