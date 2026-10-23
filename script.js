let userWins = 0;
let computerWins = 0;

const game = () => {
    userWins = 0;
    computerWins = 0;

    while(userWins < 3 && computerWins < 3){
        let userResponse;

        while(true){
            const input = prompt("Please enter your choice: Rock, Paper, or Scissors.");

            if(input === null){
                return;
            }

            userResponse = input.trim().toLowerCase();

            if(userResponse === "rock" || userResponse === "paper" || userResponse === "scissors"){
                break;
            }

            alert("Invalid input. Please enter Rock, Paper, or Scissors.");
        }

        const computerResponse = computerPlay();
        const result = playRound(userResponse, computerResponse);
        console.log(result.message);

        if(result.winner === "player"){
            userWins++;
        } else if(result.winner === "computer"){
            computerWins++;
        }

        console.log(`Score - You: ${userWins}, Computer: ${computerWins}`);
    }

    console.log(userWins === 3 ? "You win the game!" : "The computer wins the game.");
};

const playRound = (userResponse,computerResponse) => {
    const capitalize = choice => choice[0].toUpperCase() + choice.slice(1);

    if(userResponse === computerResponse){
        return {
            winner: "draw",
            message: `It's a draw! You both chose ${capitalize(computerResponse)}.`
        };
    }

    if(userResponse === "rock" && computerResponse === "scissors" ||
       userResponse === "paper" && computerResponse === "rock" ||
       userResponse === "scissors" && computerResponse === "paper"){
        return {
            winner: "player",
            message: `Computer chose ${capitalize(computerResponse)}. ${capitalize(userResponse)} beats ${capitalize(computerResponse)}. You win this round!`
        };
    }

    return {
        winner: "computer",
        message: `Computer chose ${capitalize(computerResponse)}. ${capitalize(computerResponse)} beats ${capitalize(userResponse)}. You lose this round!`
    };
};


function computerPlay() {

    let randomNumber = Math.floor(Math.random()*3);

    if (randomNumber === 0) {
        return "rock";

    } else if (randomNumber === 1){

        return "paper";

    } else if (randomNumber === 2) {

        return "scissors";

    } else {
        console.log("Error");
    }

}

game();
