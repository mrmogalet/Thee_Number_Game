let randomNumber = Math.floor(Math.random() * 100) + 1;
let attempts = 0;

const guessInput = document.getElementById("guessInput");
const submitBtn = document.getElementById("submitBtn");
const message = document.getElementById("message");
const attemptsDisplay = document.getElementById("attempts");
const restartBtn = document.getElementById("restartBtn");

submitBtn.addEventListener("click", () => {
  const userGuess = Number(guessInput.value);
  attempts++;

  if (userGuess < 1 || userGuess > 100 || isNaN(userGuess)) {
    message.textContent = "Please enter a number between 1 and 100.";
    return;
  }

  if (userGuess === randomNumber) {
    message.textContent = `🎉 Correct! The number was ${randomNumber}.`;
    message.style.color = "green";
    submitBtn.disabled = true;
    restartBtn.style.display = "inline-block";
  } else if (userGuess < randomNumber) {
    message.textContent = "Too low! Try again.";
    message.style.color = "red";
  } else {
    message.textContent = "Too high! Try again.";
    message.style.color = "red";
  }

  attemptsDisplay.textContent = `Attempts: ${attempts}`;
  guessInput.value = "";
  guessInput.focus();
});

restartBtn.addEventListener("click", () => {
  randomNumber = Math.floor(Math.random() * 100) + 1;
  attempts = 0;
  attemptsDisplay.textContent = "Attempts: 0";
  message.textContent = "";
  submitBtn.disabled = false;
  guessInput.value = "";
  guessInput.focus();
  restartBtn.style.display = "none";
});
