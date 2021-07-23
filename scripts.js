function computerPlay() {
    const CHOICES = ["rock", "paper", "scissors"]
    return CHOICES[Math.floor(Math.random() * CHOICES.length)]
}

function playRound(playerSelection, computerSelection) {
    const result = getWinner(playerSelection, computerSelection);
    if (result === 'draw') {
        return [`It's a draw. You both had ${playerSelection}`, result];
    } else if (result === 'player') {
        return [`You Win! ${capitaliseFirst(playerSelection)} beats ${capitaliseFirst(computerSelection)}`, result];
    } else {
        return [`You Lost! ${capitaliseFirst(playerSelection)} lost to ${capitaliseFirst(computerSelection)}`, result];
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

function game() {
    let playerScore = 0;
    let computerScore = 0;
    
    for(let i = 0; i < 5; i++) {
        let playerSelection = prompt("Enter your selection.", "").toLowerCase();
        while (
            playerSelection !== 'rock' &&
            playerSelection !== 'paper' &&
            playerSelection !== 'scissors'
        ) {
            playerSelection = prompt("Invalid choice. Try again.", "");
        }
        let roundResult = playRound(playerSelection, computerPlay());
        alert(roundResult[0]);
        if (roundResult[1] === 'player') {
            playerScore++;
        } else if (roundResult[1] === 'computer') {
            computerScore++;
        }
    }

    if (playerScore === computerScore) {
        alert(`Tie! You both won ${playerScore} rounds.`);
    } else if (playerScore >= computerScore) {
        alert(`Congratulations! You won ${playerScore} to ${computerScore}`);
    } else {
        alert(`Unlucky. You lost ${playerScore} to ${computerScore}`);
    }
}