// alert("Welcome to Rock, Paper, Scissors! You will be playing a computer player to win 2 of 3 rounds. wins will be displayed in the console. Good luck!");


let userResponse;

let userWins = 0;
let computerWins = 0;
rounds = 0;

while(userResponse !== "rock" && userResponse !== "paper" && userResponse !== "scissors"){
  userResponse = (prompt("Please enter your choice: Rock, Paper, or Scissors.")).toLowerCase();

  if(userResponse !== "rock" && userResponse !== "paper" && userResponse !== "scissors"){
    alert("Invalid input. Please enter Rock, Paper, or Scissors.");
  }
}

 let computerResponse = computerPlayer();


const playRound = (userResponse,computerResponse) => {
   
    if(userResponse === computerResponse){

    } else if(userResponse === "rock" && computerResponse === "scissors" || 
                userResponse === "paper" && computerResponse === "rock" ||
                userResponse === "scissors" && computerResponse === "paper"){

                return`computer chose ${computerResponse.toCapitalize()}. 
                ${userResponse.toCapitalize()} beats ${computerResponse.toCapitalize()}. You win this Round!`;

    } else if (userResponse === "rock" && computerResponse === "paper" ||
                userResponse === "paper" && computerResponse === "scissors" ||
                userResponse === "scissors" && computerResponse === "rock"){

                return`computer chose ${computerResponse.toCapitalize()}.
                 ${computerResponse.toCapitalize()} beats ${userResponse.toCapitalize()}. You lose this Round! `;
    } else {
        console.log("Error");
    }
}


const computerPlayer = () => {

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
