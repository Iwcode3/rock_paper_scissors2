function computerPlay() {
    let random = ["rock", "paper", "scissors"]
    return random[Math.floor(Math.random() * 3)];
}

function playRound(playerSelection,computerSelection) {
    if (computerSelection === "paper") {
        if (playerSelection === "rock") {
            computerScore++;
            return "You Lose! Paper beats Rock"
        } else if (playerSelection === "scissors") {
            userScore++;
            return "you win! Scissors beats paper"
        } else if (playerSelection = "paper") {
            return "draw";
        }
    }

    if (computerSelection === "rock") {
        if (playerSelection === "paper") {
            userScore++;
            return "You win! Paper beats Rock";
        } else if (playerSelection === "scissors") {
            computerScore++;
            return "you lose! rock beats scissors";
        } else if (playerSelection = "rock") {
            return "draw";
        }
    }
    
    if (computerSelection === "scissors") {
        if (playerSelection === "rock") {
            userScore++;
            return "You win! rock beats scissors";
        } else if (playerSelection === "paper") {
            computerScore++;
            return "you lose! Scissors beats paper";
        } else if (playerSelection = "scissors") {
            return "draw";
        }
    }
}

function game() {
    for (var i = 0; i < 5; i++ ) {
        let playerSelection = prompt("pick a move");
        const computerSelection = computerPlay();
        console.log(playRound(playerSelection, computerSelection));
        console.log("computer score: " + computerScore);
        console.log("user score " + userScore);
    }               
}

function scoreboard() {
    if(userScore > computerScore) {
        return "user wins game!";
    } else if (computerScore > userScore) {
        return "computer wins game!";
    } else if (userScore === computerScore) {
        return "game ends in tie";
    }
}

let userScore = parseInt(0);
let computerScore = parseInt(0);

console.log(game());
console.log(scoreboard());

// const playerSelection = playerInput;
// const computerSelection = computerPlay();

