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

function playerSelection() {
    do {
        playerChoice = prompt("Rock, paper, or scissors?");
        playerChoice = playerChoice.toLowerCase();
    } while (playerChoice !== "rock" && playerChoice !== "paper" && playerChoice !== "scissors");

    console.log(playerChoice);
    return playerChoice;
} // queries the player for a adequate input
  // the input is sanitized by this function

function playRound(playerSelection, computerSelection) {

} // plays one round of an input by the player 
  // agaist a random choice by the computer

function test() {
    const playerSelection = "rock";
    const computerSelection = getComputerChoice();
    console.log(playRound(playerSelection, computerSelection));
} // tests a round of the game against 'rock' input

function game() {

} // plays a 5 round match

