// Generate a random number between 1 and 50
let randomNumber = parseInt(Math.random() * 50 + 1);
console.log(randomNumber)

// Select DOM elements for interaction
const submit = document.querySelector('#subt'); // Button to submit a guess
const userInput = document.querySelector('#guessField'); // Input field for user's guess
const startOver = document.querySelector('.resultParas'); // Element to append the "start new game" button
const guessSlot = document.querySelector('.guesses'); // Element to display previous guesses
const remaining = document.querySelector('.lastResult'); // Element to display remaining guesses
const lowOrHi = document.querySelector('.lowOrHi'); // Element to display feedback message

// Create a paragraph element to hold the "start new game" button
const p = document.createElement('p');

// Initialize variables for game logic
let prevGuess = []; // Array to store previous guesses
let numGuess = 1; // Counter for the number of guesses
let playGame = true; // Boolean to track if the game is active

// Add event listener to the submit button if the game is active
if (playGame) {
    submit.addEventListener('click', function (e) {
        e.preventDefault(); // Prevent form submission
        const guess = parseInt(userInput.value); // Get the user's guess from the input field
        validateGuess(guess); // Validate and process the guess
    });
}

// Function to validate the user's guess
function validateGuess(guess) {
    if (isNaN(guess)) { // Check if the guess is not a number
        alert(`Please enter a valid number. You entered: ${guess}`);
    } else if (guess < 1) { // Check if the guess is less than 1
        alert(`Please enter a number greater than 1. You entered: ${guess}`);
    } else if (guess > 50) { // Check if the guess is greater than 50
        alert(`Please enter a number less than or equal to 50. You entered: ${guess}`);
    } else {
        prevGuess.push(guess); // Add the guess to the list of previous guesses
        if (numGuess === 10) { // Check if it's the 10th guess
            displayGuess(guess); // Display the guess
            displayMessage(`Good Luck for Next Time ! Number was ${randomNumber}`); // Display game over message
            endGame(); // End the game
        } else {
            displayGuess(guess); // Display the guess
            checkGuess(guess); // Check if the guess is correct
        }
    }
}

// Function to check if the guess is correct
function checkGuess(guess) {
    if (guess === randomNumber) { // If the guess is correct
        displayMessage(`Congratulations! You guessed it right!`);
        endGame(); // End the game
    } else if (guess < randomNumber) { // If the guess is too low
        displayMessage(`Too low! Try again.`);
    } else if (guess > randomNumber) { // If the guess is too high
        displayMessage(`Too high! Try again.`);
    }
}

// Function to display the guess and update the UI
function displayGuess(guess) {
    userInput.value = ''; // Clear the input field
    guessSlot.innerHTML += ` ${guess},`; // Add the guess to the list of guesses
    numGuess++; // Increment the guess counter
    remaining.innerHTML = `${11 - numGuess}`; // Update the remaining guesses
}

// Function to display a message
function displayMessage(message) {
    lowOrHi.innerHTML = `<h2>${message}</h2>`; // Display the message
}

// Function to end the game
function endGame() {
    userInput.value = ''; // Clear the input field
    userInput.setAttribute('disabled', ''); // Disable the input field
    p.classList.add('button'); // Add a class to the paragraph element
    p.innerHTML = `<h4 id="newGame" style="color: white; background-color: #58046d; padding: 10px; border-radius: 5px; cursor: pointer; text-align: center;">START NEW GAME</h4>`; // Add the "start new game" button
    startOver.appendChild(p); // Append the button to the DOM
    playGame = false; // Set the game status to inactive
    newGame(); // Initialize the new game logic
}

// Function to initialize a new game
function newGame() {
    const newGameButton = document.querySelector('#newGame'); // Select the "start new game" button
    newGameButton.addEventListener('click', function (e) { // Add click event listener to the button
        randomNumber = parseInt(Math.random() * 50 + 1); // Generate a new random number
        prevGuess = []; // Reset the list of previous guesses
        numGuess = 1; // Reset the guess counter
        guessSlot.innerHTML = ''; // Clear the guesses display
        remaining.innerHTML = '10'; // Reset the remaining guesses display
        lowOrHi.innerHTML = ''; // Clear the feedback message
        p.remove(); // Remove the "start new game" button
        userInput.removeAttribute('disabled'); // Enable the input field
        playGame = true; // Set the game status to active
    });
}

