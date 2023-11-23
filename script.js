let playerScore = 0;
let computerScore = 0;

const computerChoice = () => {
    const computer = ['rock', 'paper', 'scissors'];
    return computer[Math.floor(Math.random() * 3)];
};

const playRound = (e) => {
    let playerSelection = e.target.classList.value;
    let computerSelection = computerChoice();

    document.querySelector(
        '.round'
    ).innerHTML += `<p>You: ${playerSelection.toUpperCase()} Computer: ${computerSelection.toUpperCase()}</p>`;

    if (playerSelection === 'rock') {
        if (computerSelection === 'scissors') playerScore++;
        else computerScore++;
    } else if (playerSelection === 'paper') {
        if (computerSelection === 'rock') playerScore++;
        else computerScore++;
    } else if (playerSelection === 'scissors') {
        if (computerSelection === 'paper') playerScore++;
        else computerScore++;
    }

    updateScores(playerScore, computerScore);
};

const updateScores = (playerScore, computerScore) => {
    const scores = document.querySelector('.score');
    const winnerBoard = document.querySelector('.winner-board');
    let disable = false;
    if (playerScore >= 5) {
        winnerBoard.textContent = `YOU WON!`;
        disable = true;
    } else if (computerScore >= 5) {
        winnerBoard.textContent = `COMPUTER WON`;
        disable = true;
    } else
        scores.textContent = `Player: ${playerScore} Computer: ${computerScore}`;
    if (disable) {
        document
            .querySelectorAll('.controls button')
            .forEach((button) => button.disabled = true);
    }
};

const buttons = document.querySelectorAll('button');
buttons.forEach((button) => {
    button.addEventListener('click', playRound);
});
