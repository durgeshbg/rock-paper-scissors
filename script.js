function computePlay() {
    let num = Math.floor(Math.random() * 3);
    const computer = ['rock', 'paper', 'scissors'];
    return computer[num];
}

function playRound() {
    let computerSelection = computePlay();
    let playerInput = prompt('Enter: ');
    let playerSelection = playerInput.toLowerCase();

    if (playerSelection === computerSelection) {
        console.log("Tied");
        return 2;
    } else if (playerSelection === 'rock') {
        if (computerSelection === 'scissors') {
            console.log("You win! Rock beats Scissors")
            return 1;
        }
        console.log("You lose! Paper beat Rock")
        return 0;
    } else if (playerSelection === 'paper') {
        if (computerSelection === 'rock') {
            console.log("You win! Paper beats Rock")
            return 1;
        }
        console.log("You lose! Scissors beat Paper")
        return 0;
    } else {
        if (computerSelection === 'paper') {
            console.log("You win! Scissors beat Paper")
            return 1;
        }
        console.log("You lose! Rock beats Scissors")
        return 0;
    }
}

function game() {
    let roundResult;
    let playerResult = 0;
    let computerResult = 0;
    for (let i = 0; i < 5; i++) {
        roundResult = playRound();
        if (roundResult === 0) {
            computerResult++;
        } else if (roundResult === 1) {
            playerResult++;
        }
    }
    if (playerResult > computerResult) {
        return 1;
    } else {
        return 0;
    }
}

