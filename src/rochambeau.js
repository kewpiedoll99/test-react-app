const getUserChoice = userInput => {
    userInput = userInput.toLowerCase();
    if (userInput === 'rock' ||
        userInput === 'paper' ||
        userInput === 'scissors' ||
        userInput === 'bomb') {
        return userInput;
    } else {
        console.log("Error!");
    }
};

const getComputerChoice = () => {
    const randNo = Math.floor(Math.random() * 3);
//  console.log(randNo);
    if (randNo === 0) {
        return 'rock';
    } else if (randNo === 1) {
        return 'paper';
    } else {
        return 'scissors';
    }
};

function determineWinner(userChoice, computerChoice) {
    if (userChoice === computerChoice) {
        return 'tie';
    } else if (userChoice === 'rock') {
        if (computerChoice === 'paper') {
            return 'computer wins';
        } else {
            return 'user wins';
        }
    } else if (userChoice === 'paper') {
        if (computerChoice === 'scissors') {
            return 'computer wins';
        } else {
            return 'user wins';
        }
    } else if (userChoice === 'bomb') {
        return 'user wins';
    } else {
        if (computerChoice === 'rock') {
            return 'computer wins';
        } else {
            return 'user wins';
        }
    }
}

function playGame() {
    const userChoice = getUserChoice('bomb');
    const computerChoice = getComputerChoice();
    console.log(`user: ${userChoice}, computer: ${computerChoice}`);
    console.log(determineWinner(userChoice, computerChoice));
}

playGame();
