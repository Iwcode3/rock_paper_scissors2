// acces buttons
const container = document.getElementById('container');
const paper = document.getElementById('paperBtn')
const rock = document.getElementById('rockBtn');
const scissors = document.getElementById('scissorsBtn');

// acces textarea
const userPoints = document.getElementById('user-score')
const computerPoints = document.getElementById('computer-score')
const tieResult = document.getElementById('result-tie')

// global variable to track scores
let userScore = parseInt(0);
let computerScore = parseInt(0);
let drawScore = parseInt(0);

// generate random computer selection
function computerPlay() {
    let random = ["rock", "paper", "scissors"]
    return random[Math.floor(Math.random() * 3)];
}

// function that adds  score and update textarea 
function userRd() {
    userScore++;
    userPoints.innerHTML = "User score: " + userScore;
}

function computerRd() {
    computerScore++;
    computerPoints.innerHTML = "Computer score: " + computerScore;
}

function drawRd() {
    drawScore++;
    tieResult.innerHTML = "Tie: " + drawScore;
}

// game logic and determine winner
function playRound(playerSelection,computerSelection) {
    if (computerSelection === "paper") {
        if (playerSelection === "rock") {
            computerRd();
        } else if (playerSelection === "scissors") {
            userRd();
        } else if (playerSelection = "paper") {
            drawRd();
        }
    }

    if (computerSelection === "rock") {
        if (playerSelection === "paper") {
            userRd();
        } else if (playerSelection === "scissors") {
            computerRd();
        } else if (playerSelection = "rock") {
            drawRd();
        }
    }
    
    if (computerSelection === "scissors") {
        if (playerSelection === "rock") {
            userRd();
        } else if (playerSelection === "paper") {
            computerRd();
        } else if (playerSelection = "scissors") {
            drawRd();
        }
    }

    if(userScore === 5) {
        alert("You won! congratulation :)")
        reset();
    } else if(computerScore === 5) {
        alert("You lost! Better luck next time :(");
        reset();
    }
}

function main() {
    // assigne button event listener
    paper.addEventListener('click', function(e) {
        let playerSelection = "paper";
        let computerSelection = computerPlay();
        playRound(playerSelection,computerSelection);
        console.log(e.target)
    })

    rock.addEventListener('click', function(e) {
        let playerSelection = "rock";
        let computerSelection = computerPlay();
        playRound(playerSelection,computerSelection)
        console.log(e.target)
    })

    scissors.addEventListener('click', function(e) {
        let playerSelection= "scissors";
        let computerSelection = computerPlay();
        playRound(playerSelection,computerSelection);
        console.log(e.target)
    })
}

// reset function
function reset() {
    userPoints.innerHTML = "User score: 0";
    computerPoints.innerHTML = "Computer score: 0";
    tieResult.innerHTML = "Tie: 0";
}

main ();