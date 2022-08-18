const buttonPlayerChoice = document.querySelectorAll("button");
const playerScore = document.querySelector(".playerScore");
const computerScore = document.querySelector(".computerScore");
const resultMessage = document.querySelector(".message");


let score = [0,0];


buttonPlayerChoice.forEach((button) => {
    button.addEventListener("click", () => {
        console.log('player choice is ' + button.id);
        resultMessage.textContent = game(button.id);

        if (result.slice(0,8) === "You win!") {
            score[0]++;
        } else if (result.slice(0,8) === "You lose") {
            score[1]++;
        }
        playerScore.textContent = "Player: " + score[0];
        computerScore.textContent = "Computer: " + score[1];

        if (score[0] === 5) {
            resultMessage.textContent = "Congratulations! You won the Bo5 match!";
            score = [0,0]; 
        }
        
        if (score[1] === 5) {
            resultMessage.textContent = "What a shame... you lost the Bo5 match...";
            score = [0,0];
        }
    });
});




function getComputerChoice() {
    let  options = {
        0: "rock",
        1: "paper",
        2: "scissors"
    };
    let computerChoice = options[Math.floor((Math.random() * 10) % 3)]; 
    // selects random number between 0 and 2 inclusive
    // and uses it to select a value in options
    console.log("computer choice is " + computerChoice);
    return computerChoice;
} // randomly returns rock, paper, or scisors

function getPlayerChoice() {
    do {
        playerChoice = prompt("Rock, paper, or scissors?");
        playerChoice = playerChoice.toLowerCase();
    } while (playerChoice !== "rock" && playerChoice !== "paper" && playerChoice !== "scissors");
    console.log("player choice is " + playerChoice);
    return playerChoice;
} // queries the player for a adequate input
  // the input is sanitized by this function

function playRound(playerSelection, computerSelection) {
    let  options = {
        0: "rock",
        1: "paper",
        2: "scissors"
    };
    let match = [
        computerSelection,
        playerSelection
    ]

    if (match[0] === match[1]) {
        return "It's a tie!";
        console.log("It's a tie!");
    }
    switch (match[0]) {
        case "rock":
            switch (match[1]) {
                case "paper":
                    return "You win! Paper beats rock!!";
                case "scissors":
                    return "You lose... Rock beats scissors";
            };
        case "paper":
            switch (match[1]) {
                case "rock":
                    return "You lose... paper beats rock!";
                case "scissors":
                    return "You win! Scissors beats paper!";
            };
        case "scissors":
            switch (match[1]) {
                case "paper":   
                    return "You lose... scissors beats paper!";
                case "rock":
                    return "You win! Rock beats Scissors!"
            };
        };
} // plays one round of an input by the player 
  // agaist a random choice by the computer */

function game(playerSelection) {
    const computerSelection = getComputerChoice();
    result = playRound(playerSelection, computerSelection)
    console.log(result);
    return result;
} // tests a round of the game against player input

function match() {
    score = [0,0];

    for (let i = 0; i < 5; i++) {
        console.log("Rodada " + (i+1));
        result = game();
        
        if (result.slice(0,8) === "You win!") {
            score[0]++;
        } else if (result.slice(0,8) === "You lose") {
            score[1]++;
        } else {
            score[0]++;
            score[1]++; // a tie
        }
        console.log("O placar é: jogador: " + score[0] + "\nComputardor: " + score[1]);
    }
} // plays a 5 round match

