function computePlay() {
    let num = Math.floor(Math.random() * 3);
    const computer = ['Rock', 'Paper', 'Scissors'];
    return computer[num];
}
let computerSelection = computePlay();
let playerInput = prompt('Enter: ');
console.log(playerSelection)
function playRound(computer, player) {
    if (player === computer) {
        return 2;
    } else if (player === 'Rock') {
        if (computer === 'Scissors') {
            return 1;
        }
        return 0;
    } else if (player === 'Paper') {
        if (computer === 'Rock') {
            return 1;
        }
        return 0;
    } else {
        if (computer === 'Paper') {
            return 1;
        }
        return 0;
    }
}

function game() {}
