function getComputerChoice() {
    return "Rock", "Paper", "Scissors";
}

function playRound(playerSelection, computerSelection) {
    return "You Lose! Paper beats Rock"
}

const playerSelection = "rock";
const computerSelection = getComputerChoice();
console.log(playRound(playerSelection, computerSelection));
