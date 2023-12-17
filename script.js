let playerScore = 0;
let computerScore = 0;
let round = 1;

const computerChoice = () => {
  const computer = ['rock', 'paper', 'scissors'];
  return computer[Math.floor(Math.random() * 3)];
};

const playRound = (e) => {
  let playerSelection = e.target.classList.value;
  let computerSelection = computerChoice();

  if (round >= 6) return;

  document.querySelector(
    `.round .round${round}`
  ).textContent = `${round} - You: ${playerSelection.toUpperCase()} Computer: ${computerSelection.toUpperCase()}`;

  round++;
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
  if (round > 5) {
    if (playerScore > computerScore) winnerBoard.textContent = `YOU WON!`;
    else if (computerScore > playerScore) winnerBoard.textContent = `COMPUTER WON`;
    else winnerBoard.textContent = "It's a tie";
  }
  scores.textContent = `Player: ${playerScore} Computer: ${computerScore}`;
};

const buttons = document.querySelectorAll('button');
buttons.forEach((button) => {
  button.addEventListener('click', playRound);
});
