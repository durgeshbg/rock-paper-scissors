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
    ).innerHTML = `<h3>You: ${playerSelection.toUpperCase()} Computer: ${computerSelection.toUpperCase()}</h3>`;

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
    const scores = document.querySelector('.scores');
    if (playerScore >= 5) scores.innerHTML = `<h2>You won!!!</h2>`;
    else if (computerScore >= 5) scores.innerHTML = `<h2>Computer won</h2>`;
    else
        scores.innerHTML = `<h2>Player: ${playerScore} Computer: ${computerScore}</h2>`;
};

const buttons = document.querySelectorAll('button');
buttons.forEach((button) => {
    button.addEventListener('click', playRound);
});
