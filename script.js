function computePlay() {
    let num = Math.floor(Math.random() * 3);
    const computer = ['rock', 'paper', 'scissors'];
    return computer[num];
}
let computerSelection = computePlay();
let playerInput = prompt('Enter: ');
let playerSelection = playerInput.toLowerCase();

function playRound(computer, player) {
    if (player === computer) {
        return 2;
    } else if (player === 'rock') {
        if (computer === 'scissors') {
            return 1;
        }
        return 0;
    } else if (player === 'paper') {
        if (computer === 'rock') {
            return 1;
        }
        return 0;
    } 
}

function game() {}
