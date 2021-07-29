function computerPlay() {
    const CHOICES = ["rock", "paper", "scissors"]
    return CHOICES[Math.floor(Math.random() * CHOICES.length)]
}

function playRound(playerSelection, computerSelection) {
    const result = getWinner(playerSelection, computerSelection);
    if (result === 'draw') {
        changeScore([`It's a draw. You both had ${playerSelection}`, result]);
    } else if (result === 'player') {
        changeScore([`You Win! ${capitaliseFirst(playerSelection)} beats ${capitaliseFirst(computerSelection)}`, result]);
    } else {
        changeScore([`You Lost! ${capitaliseFirst(playerSelection)} lost to ${capitaliseFirst(computerSelection)}`, result]);
    }
}

function getWinner(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        return 'draw';
    } else if (
        playerSelection === 'rock' && computerSelection === 'scissors' ||
        playerSelection === 'paper' && computerSelection === 'rock' ||
        playerSelection === 'scissors' && computerSelection === 'paper'
    ) {
        return 'player';
    } else {
        return 'computer';
    }
}

function capitaliseFirst(str) {
    return str[0].toUpperCase() + str.slice(1);
}

function changeScore(roundResult) {
    const resultParagraph = document.querySelector('.result-description');
    resultParagraph.textContent = roundResult[0];

    if (roundResult[1] === "draw") {
        
    } else if (roundResult[1] === 'player') {
        const playerScore = document.querySelector('.player-score');
        let newScore = Number(playerScore.textContent) + 1;
        playerScore.textContent = newScore.toString();
        checkWin();
    } else {
        const computerScore = document.querySelector('.computer-score');
        let newScore = Number(computerScore.textContent) + 1;
        computerScore.textContent = newScore.toString();
        checkWin();
    }
}

function checkWin() {
    const playerScore = document.querySelector('.player-score');
    const computerScore = document.querySelector('.computer-score');
    if (playerScore.textContent !== '5' && computerScore.textContent !== '5') {
        return;
    }
    
    const gameOver = document.createElement('p');
    const results = document.querySelector('.results');
    
    if (playerScore.textContent === '5') {    
        gameOver.textContent = `Congratulations! You won ${playerScore.textContent} to ${computerScore.textContent}`
    } else if (computerScore.textContent === '5') {
        gameOver.textContent = `Unlucky! You lost ${playerScore.textContent} to ${computerScore.textContent}`
    }

    results.appendChild(gameOver);
}

let computerScore = 0;
let playerScore = 0;

const buttons = document.querySelectorAll('button');
buttons.forEach(button => {
    button.addEventListener('click', (e) => {
        let playerChoice = e.target.id;
        playRound(playerChoice, computerPlay());
    })
});