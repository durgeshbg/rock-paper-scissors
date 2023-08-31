const computerChoice = () => {
    const computer = ['rock', 'paper', 'scissors'];
    return computer[Math.floor(Math.random() * 3)];
};

const playRound = () => {
    let playerSelection = prompt('Enter: ').toLowerCase();
    let computerSelection = computerChoice();

    if (playerSelection === computerSelection) return 0; // tie
    else if (playerSelection === 'rock') {
        if (computerSelection === 'scissors') return 1; // rock vs scissors
        return 0; // rock vs paper
    } else if (playerSelection === 'paper') {
        if (computerSelection === 'rock') return 1; // paper vs rock
        return 0; // paper vs scissors
    } else if (playerSelection === 'scissors') {
        if (computerSelection === 'paper') return 1; // scissors vs paper
        return 0; // scissors vs rock
    }
};

const game = () => {
    let score = 0;
    for (let i = 0; i < 5; i++) score += playRound();
    return score;
};

console.log(game());
