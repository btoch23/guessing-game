const GUESSES = [];
const RESET = document.getElementById('reset');

function enable() {
    RESET.disabled = false;
}

function runGame() {
    let target;
    let guess;
    let correct = false;
    let numTries = 0;
    let difficulty = prompt('Please select a difficulty level: easy, medium, or hard!').toLowerCase();
    if (difficulty === 'easy' || difficulty === 'e') {
        target = Math.floor(Math.random() * 10 + 1);
        do {
            guess = parseInt(prompt('Please enter a number bewteen 1 and 10'));
            if (guess === null) {
                return;
            }
            numTries += 1;
            correct = checkGuess(guess, target);
            if ((numTries === 5) && (target % 2 === 0)){
                alert('Hint: The target number is even!');
            } else if ((numTries === 5) && (target % 2 !== 0)){
                alert('Hint: The target number is odd!');
            }
        } while (!correct)
    } else if (difficulty === 'medium' || difficulty === 'm') {
        target = Math.floor(Math.random() * 50 + 1);
        do {
            guess = parseInt(prompt('Please enter a number bewteen 1 and 50'));
            if (guess === null) {
                return;
            }
            numTries += 1;
            correct = checkGuess(guess, target);
            if ((numTries === 5) && (target % 2 === 0)){
                alert('Hint: The target number is even!');
            } else if ((numTries === 5) && (target % 2 !== 0)){
                alert('Hint: The target number is odd!');
            }
        } while (!correct)
    } else if (difficulty === 'hard' || difficulty === 'h') {
        target = Math.floor(Math.random() * 100 + 1);
        do {
            guess = parseInt(prompt('Please enter a number bewteen 1 and 100'));
            if (guess === null) {
                return;
            }
            numTries += 1;
            correct = checkGuess(guess, target);
            if ((numTries === 5) && (target % 2 === 0)){
                alert('Hint: The target number is even!');
            } else if ((numTries === 5) && (target % 2 !== 0)){
                alert('Hint: The target number is odd!');
            }
        } while (!correct)
    }
    alert(`You have guessed correctly after ${numTries} attempts!`);
}

function checkGuess(guess, target){
    let correct = false;
    if (isNaN(guess)){
        alert('Please enter a number!');
    } else if (guess > 100 || guess < 1) {
        alert('Please enter a number between 1 and 100!');
    } else if (guess > target) {
        GUESSES.push(guess);
        alert(`Your number is too high! Try again! So far you've guessed these numbers: ${GUESSES.join(', ')}.`);
    } else if (guess < target) {
        GUESSES.push(guess);
        alert(`Your number is too low! Try again! So far you've guessed these numbers: ${GUESSES.join(', ')}.`);
    } else {
        correct = true;
    }
    return correct;
}


function resets() {
    GUESSES.length = 0;
    alert('Game has been reset! Click start to play again!');
}

