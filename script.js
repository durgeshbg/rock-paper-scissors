function computePlay() {
    let num = Math.floor(Math.random() * 3);
    const computer = ['Rock', 'Paper', 'Scissors'];
    return computer[num];
}

function playRound() {
    let computerSelection = computePlay();
    let playerInput = prompt('Enter: ');
    let playerSelection =
        playerInput.charAt(0).toUpperCase() +
        playerInput.slice(1).toLowerCase();

    if (playerSelection === computerSelection) {
        return 2;
    } else if (playerSelection === 'Rock') {
        if (computerSelection === 'Scissors') {
            return 1;
        }
        return 0;
    } else if (playerSelection === 'Paper') {
        if (computerSelection === 'Rock') {
            return 1;
        }
        return 0;
    } else {
        if (computerSelection === 'Paper') {
            return 1;
        }
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
