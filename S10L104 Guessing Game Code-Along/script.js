//Create secret number
var secretNumber = 4;

//Ask user for their guess
var guess = Number(prompt("Guess a number between 1 and 10"));

//Check if guess is correct

if(guess === secretNumber) {
  alert("Correct!");
}

//Check if higher
else if(guess > secretNumber) {
  alert("Too high! Guess again");
}

//Otherwise, check if lower
else alert("Too low! Guess again");
