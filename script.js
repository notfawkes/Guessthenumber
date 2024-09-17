let randomNumber = Math.floor(Math.random() * 100) + 1;
function checkGuess() {
    const guess = document.getElementById('guess').value;
    if (guess == randomNumber) {
        document.getElementById('result').textContent = 'Congratulations! You guessed it right!';
    } else if (guess > randomNumber) {
        document.getElementById('result').textContent = 'Too high! Try again.';
    } else if (guess < randomNumber) {
        document.getElementById('result').textContent = 'Too low! Try again.';
    } else {
        document.getElementById('result').textContent = 'Please enter a valid number.';
    }
}
